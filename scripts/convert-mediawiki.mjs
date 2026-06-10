/**
 * Convert exported legacy MediaWiki articles to Starlight markdown under
 * src/content/docs/archive/<category>/<page>.md.
 *
 * - Pages are grouped by their first category (year-specific meeting
 *   categories are consolidated into "Meetings").
 * - Individual pages are hidden from the sidebar; generated category index
 *   pages plus a top-level archive index provide browsing. Pagefind search
 *   covers everything.
 * - Internal /wiki/ links are resolved through the redirect map; images are
 *   recorded in an asset manifest shared with download-assets.mjs.
 */
import { mkdir, writeFile, readdir, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';
import {
  SITE_BASE,
  slugify,
  uniqueSlug,
  pandoc,
  pool,
  tidyMarkdown,
  frontmatter,
  deriveDescription,
  mwImageLocalPath,
} from './lib/common.mjs';

const WIKI = 'https://dallasmakerspace.org';
const ROOT = path.resolve(import.meta.dirname, '..');
const RAW = path.join(ROOT, 'migration', 'mediawiki', 'raw');
const OUT = path.join(ROOT, 'migration', 'mediawiki');
const ARCHIVE = path.join(ROOT, 'src', 'content', 'docs', 'archive');

const NAMESPACE_RE = /^(File|Image|Category|Special|Talk|User|User_talk|Help|Template|Template_talk|MediaWiki|Dallas_Makerspace|Dallas_Makerspace_talk|Category_talk|File_talk|Talk_talk):/i;

// ---------- load ----------
const redirects = JSON.parse(await readFile(path.join(OUT, 'redirects.json'), 'utf8'));
const pages = [];
for (const file of await readdir(RAW)) {
  pages.push(JSON.parse(await readFile(path.join(RAW, file), 'utf8')));
}
console.log(`${pages.length} articles loaded`);

// ---------- categorize & route ----------
function categoryOf(page) {
  let cat = (page.categories ?? [])[0] ?? 'Uncategorized';
  if (/^\d{4}_Meetings$/.test(cat) || cat === 'Meeting_Notes') cat = 'Meetings';
  return cat;
}

const byCategory = new Map();
for (const p of pages) {
  const cat = categoryOf(p);
  if (!byCategory.has(cat)) byCategory.set(cat, []);
  byCategory.get(cat).push(p);
}

const catDir = new Map(); // category -> dir slug
{
  const taken = new Set(['index']);
  for (const cat of [...byCategory.keys()].sort()) catDir.set(cat, uniqueSlug(slugify(cat), taken));
}

const routeByTitle = new Map(); // normalized title -> route
const fileByPageId = new Map(); // pageid -> output file
const normTitle = (t) => {
  const s = t.replace(/_/g, ' ').trim();
  return (s.charAt(0).toUpperCase() + s.slice(1)).toLowerCase();
};

for (const [cat, list] of byCategory) {
  const dir = catDir.get(cat);
  const taken = new Set(['index']);
  for (const p of [...list].sort((a, b) => a.title.localeCompare(b.title))) {
    const slug = uniqueSlug(slugify(p.title), taken);
    routeByTitle.set(normTitle(p.title), `/archive/${dir}/${slug}/`);
    fileByPageId.set(p.pageid, path.join(dir, `${slug}.md`));
  }
}

// ---------- conversion ----------
const assets = new Map();
const unresolved = [];

function localImage(src) {
  let url;
  try {
    url = new URL(src, WIKI);
  } catch {
    return null;
  }
  if (url.origin !== WIKI) return null;
  const local = mwImageLocalPath(url);
  if (!local) return null;
  if (!assets.has(url.href)) assets.set(url.href, local);
  return `${SITE_BASE}/${local}`;
}

function categoryRoute(name) {
  let cat = name.trim().replace(/ /g, '_');
  if (/^\d{4}_Meetings$/.test(cat) || cat === 'Meeting_Notes') cat = 'Meetings';
  const hit = [...catDir.keys()].find((k) => k.toLowerCase() === cat.toLowerCase());
  return hit ? `/archive/${catDir.get(hit)}/` : undefined;
}

function resolveWikiTitle(rawTitle) {
  let title;
  try {
    title = decodeURIComponent(rawTitle);
  } catch {
    title = rawTitle;
  }
  title = title.replace(/_/g, ' ');
  const target = redirects[title] ?? redirects[title.replace(/ /g, '_')] ?? title;
  const catMatch = target.match(/^Category:(.+)$/i);
  if (catMatch) return categoryRoute(catMatch[1]);
  return routeByTitle.get(normTitle(target));
}

function preprocess(page) {
  const $ = cheerio.load(page.html, null, false);

  $('style, script, .mw-editsection, #toc, .toc, .printfooter, .magnify, .mw-empty-elt').remove();

  // images
  $('img').each((_, el) => {
    const local = localImage($(el).attr('src') ?? '');
    if (local) $(el).attr('src', local);
    $(el).removeAttr('srcset');
  });

  // links
  $('a').each((_, el) => {
    const href = $(el).attr('href') ?? '';
    let url;
    try {
      url = new URL(href, WIKI);
    } catch {
      return;
    }
    if (url.origin !== WIKI) return;

    // red links / edit links
    if (url.pathname === '/w/index.php') {
      if (url.searchParams.get('redlink') === '1' || url.searchParams.get('action')) {
        $(el).replaceWith($(el).text());
      }
      return;
    }
    const m = url.pathname.match(/^\/wiki\/(.+)$/);
    if (!m) return;
    const rawTitle = m[1];
    if (NAMESPACE_RE.test(rawTitle)) {
      // Category links -> archive category index when we have one
      const catMatch = decodeURIComponent(rawTitle).match(/^Category:(.+)$/i);
      if (catMatch) {
        const route = categoryRoute(catMatch[1].replace(/_/g, ' '));
        if (route) {
          $(el).attr('href', `${SITE_BASE}${route}`);
          return;
        }
      }
      // File: links around images -> keep the image, drop the link
      const img = $(el).find('img');
      if (img.length) $(el).replaceWith(img);
      else $(el).replaceWith($(el).text());
      return;
    }
    const route = resolveWikiTitle(rawTitle);
    if (route) $(el).attr('href', `${SITE_BASE}${route}${url.hash ?? ''}`);
    else {
      unresolved.push({ page: page.title, href });
      // leave pointing at the legacy wiki
      $(el).attr('href', url.href);
    }
  });

  // unwrap layout divs/spans
  for (let i = 0; i < 20; i++) {
    const wrappers = $('div, span');
    if (!wrappers.length) break;
    wrappers.each((_, el) => $(el).replaceWith($(el).contents()));
  }

  // strip presentation attrs so pandoc emits markdown links/images, not raw HTML
  for (const attr of ['class', 'rel', 'target', 'title', 'style', 'loading', 'decoding']) {
    $(`[${attr}]`).removeAttr(attr);
  }

  $('h1').each((_, el) => {
    el.tagName = 'h2';
  });

  return $;
}

const BANNER =
  'Archived from the <a href="%SRC%">legacy DMS wiki</a> — content may be outdated.';

async function convertPage(page) {
  const file = fileByPageId.get(page.pageid);
  const $ = preprocess(page);
  const description = deriveDescription($, $.root());
  const md = tidyMarkdown(await pandoc($.html()));
  const sourceUrl = `${WIKI}/wiki/${encodeURIComponent(page.title.replace(/ /g, '_'))}`;
  const fm = frontmatter({
    title: cheerio.load(page.displaytitle ?? page.title).text() || page.title,
    description,
    sourceUrl,
    sidebar: { hidden: true },
    banner: { content: BANNER.replace('%SRC%', sourceUrl) },
  });
  const dest = path.join(ARCHIVE, file);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, fm + md);
}

await rm(ARCHIVE, { recursive: true, force: true });
await mkdir(ARCHIVE, { recursive: true });

let done = 0;
const failures = [];
await pool(pages, 8, async (page) => {
  try {
    await convertPage(page);
  } catch (err) {
    failures.push({ id: page.pageid, title: page.title, error: err.message });
  }
  if (++done % 300 === 0) console.log(`${done}/${pages.length}`);
});

// ---------- index pages ----------
const humanize = (cat) => cat.replace(/_/g, ' ');
const catsSorted = [...byCategory.keys()].sort((a, b) => humanize(a).localeCompare(humanize(b)));

let indexMd = frontmatter({
  title: 'Legacy Wiki Archive',
  description: 'Pages preserved from the original Dallas Makerspace MediaWiki, organized by category.',
  tableOfContents: false,
});
indexMd +=
  'Everything below was migrated from the [legacy Dallas Makerspace wiki](https://dallasmakerspace.org/wiki/Main_Page) ' +
  'and is preserved for reference. Some content is historical and may be outdated.\n\n';
for (const cat of catsSorted) {
  const list = byCategory.get(cat);
  indexMd += `- [${humanize(cat)}](${SITE_BASE}/archive/${catDir.get(cat)}/) — ${list.length} page${list.length === 1 ? '' : 's'}\n`;
}
await writeFile(path.join(ARCHIVE, 'index.md'), indexMd);

for (const cat of catsSorted) {
  const dir = catDir.get(cat);
  let md = frontmatter({
    title: `${humanize(cat)} (archive)`,
    description: `Legacy wiki pages in the ${humanize(cat)} category.`,
    sidebar: { hidden: true },
    tableOfContents: false,
  });
  md += `[← All archive categories](${SITE_BASE}/archive/)\n\n`;
  const list = [...byCategory.get(cat)].sort((a, b) => a.title.localeCompare(b.title));
  for (const p of list) {
    const route = routeByTitle.get(normTitle(p.title));
    md += `- [${p.title}](${SITE_BASE}${route})\n`;
  }
  await writeFile(path.join(ARCHIVE, dir, 'index.md'), md);
}

await writeFile(path.join(OUT, 'assets.json'), JSON.stringify(Object.fromEntries(assets), null, 1));
// title -> route map so the Confluence converter can rewrite legacy wiki links
await writeFile(path.join(OUT, 'routes.json'), JSON.stringify(Object.fromEntries(routeByTitle), null, 1));
await writeFile(path.join(OUT, 'unresolved.json'), JSON.stringify(unresolved, null, 1));
console.log(
  `DONE: ${done - failures.length} converted, ${failures.length} failed, ${assets.size} images, ${unresolved.length} unresolved links, ${byCategory.size} categories`
);
if (failures.length) console.log(JSON.stringify(failures.slice(0, 5), null, 1));

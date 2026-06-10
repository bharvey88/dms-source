/**
 * Convert exported Confluence pages to Starlight markdown.
 *
 * - Mirrors each space's page tree as nested directories under
 *   src/content/docs/<space-slug>/ (space homepage -> index.md).
 * - Rewrites internal links (viewpage.action?pageId, /display/KEY/Title)
 *   to local routes; records attachments/images in an asset manifest that
 *   download-assets.mjs fetches into public/.
 * - Confluence panels become Starlight asides; emoticons become unicode.
 *
 * Outputs:
 *   src/content/docs/<space>/...           converted markdown
 *   migration/confluence/assets.json       url -> local public path manifest
 *   migration/confluence/routes.json       pageId -> route (used by MW converter for cross-links)
 *   migration/confluence/unresolved.json   links we could not map
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
  applyAsideMarkers,
  tidyMarkdown,
  frontmatter,
  deriveDescription,
  safeFilename,
  mwImageLocalPath,
  EMOTICONS,
} from './lib/common.mjs';

const BASE = 'https://source.dallasmakerspace.org';
const ROOT = path.resolve(import.meta.dirname, '..');
const RAW = path.join(ROOT, 'migration', 'confluence', 'raw');
const DOCS = path.join(ROOT, 'src', 'content', 'docs');
const SKIP_SPACES = new Set(['rwlayoutkey']);

const PANEL_KINDS = [
  ['confluence-information-macro-information', 'note'],
  ['confluence-information-macro-tip', 'tip'],
  ['confluence-information-macro-note', 'caution'],
  ['confluence-information-macro-warning', 'danger'],
];

// ---------- load everything ----------
const spacesMeta = JSON.parse(await readFile(path.join(ROOT, 'migration', 'confluence', 'spaces.json'), 'utf8'));
const spaces = spacesMeta.results
  .filter((s) => !SKIP_SPACES.has(s.key))
  .map((s) => ({ key: s.key, name: s.name, homepageId: s.homepage?.id ? String(s.homepage.id) : null }));

const pages = [];
for (const space of spaces) {
  const dir = path.join(RAW, space.key);
  for (const file of await readdir(dir)) {
    const p = JSON.parse(await readFile(path.join(dir, file), 'utf8'));
    pages.push(p);
  }
}
console.log(`${pages.length} pages loaded from ${spaces.length} spaces`);

// ---------- build routes ----------
const byId = new Map(pages.map((p) => [String(p.id), p]));
const spaceDirByKey = new Map();
{
  const taken = new Set(['archive', 'index', 'about']); // reserved top-level dirs
  for (const s of spaces) spaceDirByKey.set(s.key, uniqueSlug(slugify(s.name), taken));
}

/** parent id for a page = nearest ancestor that actually exists in the export */
function parentOf(page) {
  for (let i = page.ancestors.length - 1; i >= 0; i--) {
    const id = String(page.ancestors[i].id);
    if (byId.has(id)) return id;
  }
  return null;
}

const childrenOf = new Map(); // parentId|`root:${spaceKey}` -> [page]
for (const p of pages) {
  const space = spaces.find((s) => s.key === p.spaceKey);
  const parent = parentOf(p);
  const key = parent && parent !== String(p.id) ? parent : `root:${p.spaceKey}`;
  // The space homepage sits at the space root regardless of ancestry.
  const slot = space.homepageId === String(p.id) ? `home:${p.spaceKey}` : key;
  if (!childrenOf.has(slot)) childrenOf.set(slot, []);
  childrenOf.get(slot).push(p);
}

const routeById = new Map(); // id -> { route, file }
const routeByTitle = new Map(); // `${spaceKey}|${lower title}` -> route

function assignRoutes(pageList, parentSegments, spaceKey, taken) {
  const sorted = [...pageList].sort((a, b) => a.title.localeCompare(b.title));
  for (const p of sorted) {
    let base = slugify(p.title);
    if (parentSegments.length === 1 && base === 'index') base = 'home';
    const slug = uniqueSlug(base, taken);
    const segments = [...parentSegments, slug];
    const kids = childrenOf.get(String(p.id)) ?? [];
    const route = `/${segments.join('/')}/`;
    const file = kids.length
      ? path.join(...segments, 'index.md')
      : `${path.join(...segments)}.md`;
    routeById.set(String(p.id), { route, file });
    const tkey = `${spaceKey}|${p.title.toLowerCase()}`;
    if (!routeByTitle.has(tkey)) routeByTitle.set(tkey, route);
    if (kids.length) assignRoutes(kids, segments, spaceKey, new Set(['index']));
  }
}

for (const space of spaces) {
  const dir = spaceDirByKey.get(space.key);
  const home = (childrenOf.get(`home:${space.key}`) ?? [])[0];
  const roots = childrenOf.get(`root:${space.key}`) ?? [];
  const taken = new Set(['index']);
  if (home) {
    routeById.set(String(home.id), { route: `/${dir}/`, file: path.join(dir, 'index.md') });
    routeByTitle.set(`${space.key}|${home.title.toLowerCase()}`, `/${dir}/`);
    // homepage children live at the space root level
    assignRoutes(childrenOf.get(String(home.id)) ?? [], [dir], space.key, taken);
  }
  assignRoutes(roots, [dir], space.key, taken);
}

// ---------- conversion ----------
const assets = new Map(); // absolute url (no query) -> public-relative path
const unresolved = [];

function registerAsset(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl, BASE);
  } catch {
    return null;
  }
  // legacy wiki images hotlinked from Confluence pages
  if (url.origin === 'https://dallasmakerspace.org') {
    const local = mwImageLocalPath(url);
    if (!local) return null;
    if (!assets.has(url.href)) assets.set(url.href, local);
    return `${SITE_BASE}/${local}`;
  }
  if (url.origin !== BASE && !url.href.startsWith('/')) return null;

  let m = url.pathname.match(/^\/download\/(?:attachments|thumbnails)\/(\d+)\/([^/]+)$/);
  if (m) {
    const clean = `${BASE}${url.pathname}`;
    const local = `files/${m[1]}/${safeFilename(m[2])}`;
    if (!assets.has(clean)) assets.set(clean, local);
    return `${SITE_BASE}/${local}`;
  }
  // attachments referenced from another page by space + title
  m = url.pathname.match(/^\/download\/attachments\/embedded-page\/([^/]+)\/([^/]+)\/([^/]+)$/);
  if (m) {
    const clean = `${BASE}${url.pathname}`;
    let title;
    try {
      title = decodeURIComponent(m[2]);
    } catch {
      title = m[2];
    }
    const local = `files/embedded/${m[1]}/${slugify(title)}/${safeFilename(m[3])}`;
    if (!assets.has(clean)) assets.set(clean, local);
    return `${SITE_BASE}/${local}`;
  }
  return null;
}

const UNLINK = Symbol('unlink');
/** Link targets that have no meaning in a static site -> keep text only. */
const DYNAMIC_PATHS = [
  /^\/pages\/diffpagesbyversion\.action/,
  /^\/pages\/downloadallattachments\.action/,
  /^\/plugins\//,
  /^\/display\/~/,
  /^\/category\//,
  /^\/dosearchsite\.action/,
  /^\/login\.action/,
];

function rewriteLink(href, page) {
  if (href === '#' || href.trim() === '') return UNLINK;
  let url;
  try {
    url = new URL(href, BASE);
  } catch {
    return href;
  }
  if (url.origin === BASE && DYNAMIC_PATHS.some((re) => re.test(url.pathname))) return UNLINK;
  if (url.origin !== BASE && url.origin !== 'https://dallasmakerspace.org') {
    if (url.origin.endsWith('source.dallasmakerspace.org')) {
      /* fall through to internal handling */
    } else return href;
  }
  if (url.origin === 'https://dallasmakerspace.org') return href; // legacy wiki links handled in MW pass
  const hash = url.hash ?? '';

  if (url.pathname === '/pages/viewpage.action') {
    const id = url.searchParams.get('pageId');
    const hit = id && routeById.get(id);
    if (hit) return `${SITE_BASE}${hit.route}${hash}`;
  }
  const display = url.pathname.match(/^\/display\/([^/]+)(?:\/(.+))?$/);
  if (display) {
    const [, key, titleRaw] = display;
    if (!titleRaw) {
      const dir = spaceDirByKey.get(key);
      if (dir) return `${SITE_BASE}/${dir}/${hash}`;
    } else {
      let title;
      try {
        title = decodeURIComponent(titleRaw.replace(/\+/g, ' ')).toLowerCase();
      } catch {
        title = titleRaw.replace(/\+/g, ' ').toLowerCase();
      }
      const route = routeByTitle.get(`${key}|${title}`);
      if (route) return `${SITE_BASE}${route}${hash}`;
    }
  }
  if (url.pathname.startsWith('/download/')) {
    const local = registerAsset(url.href);
    if (local) return local;
  }
  unresolved.push({ page: page.id, title: page.title, href });
  return href;
}

function preprocess(page) {
  const $ = cheerio.load(page.html, null, false);

  // unwrap layout scaffolding
  for (const sel of ['.contentLayout2', '.columnLayout', '.cell', '.innerCell', '.table-wrap']) {
    $(sel).each((_, el) => $(el).replaceWith($(el).contents()));
  }
  $('style, script, .hidden, .aui-icon, .expand-control-icon').remove();

  // dynamic macros that have no meaning in a static export
  $('.recently-updated, .update-item, .aui-avatar, .livesearch-macro, .calendar-container').remove();
  $('h1,h2,h3,h4,h5,h6').each((_, el) => {
    if (/^recent (space )?activity$/i.test($(el).text().trim())) $(el).remove();
  });

  // decorative/static images (theme icons, avatars, bullets)
  $('img').each((_, el) => {
    const src = $(el).attr('src') ?? '';
    if (/^\/(s|images\/icons)\//.test(src) || src.includes('/profilepics/')) $(el).remove();
  });

  // expand macro -> plain section with bold title
  $('.expand-container').each((_, el) => {
    const title = $(el).find('.expand-control-text').first().text().trim();
    const content = $(el).find('.expand-content').first().contents();
    $(el).replaceWith(
      $('<div></div>')
        .append(title ? $('<p></p>').append($('<strong></strong>').text(title)) : '')
        .append(content)
    );
  });

  // info/tip/note/warning panels -> aside markers
  $('.confluence-information-macro').each((_, el) => {
    const cls = $(el).attr('class') ?? '';
    const kind = PANEL_KINDS.find(([c]) => cls.includes(c))?.[1] ?? 'note';
    const title = $(el).find('.title').first().text().trim();
    const body = $(el).find('.confluence-information-macro-body').first();
    const wrapper = $('<div></div>');
    wrapper.append($('<p></p>').text(`%%ASIDE-START:${kind}:${title}%%`));
    wrapper.append(body.length ? body.contents() : $(el).contents().not('.title'));
    wrapper.append($('<p></p>').text('%%ASIDE-END%%'));
    $(el).replaceWith(wrapper);
  });

  // emoticons -> unicode
  $('img.emoticon').each((_, el) => {
    const src = $(el).attr('src') ?? '';
    const name = src.match(/emoticons\/([a-z_-]+)\./)?.[1] ?? '';
    $(el).replaceWith(EMOTICONS[name] ?? '');
  });

  // user mention links -> plain text
  $('a.confluence-userlink, a[href^="/display/~"], a[href*="/people/"]').each((_, el) => {
    $(el).replaceWith($(el).text());
  });

  // images
  $('img').each((_, el) => {
    const src = $(el).attr('src') ?? '';
    const local = registerAsset(src);
    if (local) $(el).attr('src', local);
    else if (src.startsWith('/')) $(el).attr('src', `${BASE}${src}`);
    $(el).removeAttr('srcset data-image-src data-base-url');
  });

  // links
  $('a').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const result = rewriteLink(href, page);
    if (result === UNLINK) $(el).replaceWith($(el).text());
    else $(el).attr('href', result);
  });

  // unwrap remaining layout divs/spans so pandoc emits clean markdown
  // (loop because they nest)
  for (let i = 0; i < 20; i++) {
    const wrappers = $('div, span');
    if (!wrappers.length) break;
    wrappers.each((_, el) => $(el).replaceWith($(el).contents()));
  }

  // strip presentation attrs so pandoc emits markdown links/images, not raw HTML
  for (const attr of ['class', 'rel', 'target', 'title', 'style', 'loading', 'decoding']) {
    $(`[${attr}]`).removeAttr(attr);
  }

  // demote h1s so the frontmatter title stays the only h1
  $('h1').each((_, el) => {
    el.tagName = 'h2';
  });

  return $;
}

async function convertPage(page) {
  const { file } = routeById.get(String(page.id));
  const $ = preprocess(page);
  const description = deriveDescription($, $.root());
  const md = applyAsideMarkers(tidyMarkdown(await pandoc($.html())));
  const fm = frontmatter({
    title: page.title,
    description,
    sourceUrl: `${BASE}${page.webui}`,
    lastUpdated: page.version.when.slice(0, 10),
  });
  const dest = path.join(DOCS, file);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, fm + md);
}

// clean output dirs for migrated spaces, then convert
for (const dir of spaceDirByKey.values()) {
  await rm(path.join(DOCS, dir), { recursive: true, force: true });
}

let done = 0;
const failures = [];
await pool(pages, 8, async (page) => {
  try {
    await convertPage(page);
  } catch (err) {
    failures.push({ id: page.id, title: page.title, error: err.message });
  }
  if (++done % 200 === 0) console.log(`${done}/${pages.length}`);
});

const OUT = path.join(ROOT, 'migration', 'confluence');
await writeFile(path.join(OUT, 'assets.json'), JSON.stringify(Object.fromEntries(assets), null, 1));
await writeFile(
  path.join(OUT, 'routes.json'),
  JSON.stringify(Object.fromEntries([...routeById].map(([id, v]) => [id, v.route])), null, 1)
);
await writeFile(path.join(OUT, 'unresolved.json'), JSON.stringify(unresolved, null, 1));
await writeFile(
  path.join(OUT, 'sidebar.json'),
  JSON.stringify(spaces.map((s) => ({ label: s.name, dir: spaceDirByKey.get(s.key) })), null, 1)
);

console.log(`DONE: ${done - failures.length} converted, ${failures.length} failed, ${assets.size} assets, ${unresolved.length} unresolved links`);
if (failures.length) console.log(JSON.stringify(failures.slice(0, 10), null, 1));

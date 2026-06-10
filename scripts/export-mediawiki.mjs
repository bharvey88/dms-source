/**
 * Export every main-namespace article from the legacy Dallas Makerspace
 * MediaWiki to local JSON.
 *
 * - Lists all non-redirect ns=0 pages, then fetches each page's
 *   server-rendered HTML + categories via action=parse.
 * - Also builds a redirect map (redirect title -> target title) so internal
 *   links through redirects can be resolved during conversion.
 *
 * Output:
 *   migration/mediawiki/raw/<pageid>.json
 *   migration/mediawiki/redirects.json
 *
 * Resumable: pages already on disk are skipped unless --force is passed.
 */
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const API = 'https://dallasmakerspace.org/w/api.php';
const OUT = path.resolve(import.meta.dirname, '..', 'migration', 'mediawiki');
const RAW = path.join(OUT, 'raw');
const FORCE = process.argv.includes('--force');
const CONCURRENCY = 4;

async function fetchJson(params, attempt = 1) {
  const url = `${API}?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'dms-source-migration/1.0 (wiki migration)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(`API error: ${data.error.code}`);
    return data;
  } catch (err) {
    if (attempt >= 5) throw err;
    await new Promise((r) => setTimeout(r, 1500 * 2 ** attempt));
    return fetchJson(params, attempt + 1);
  }
}

async function listPages(filterredir) {
  const pages = [];
  let cont = {};
  for (;;) {
    const d = await fetchJson({
      action: 'query',
      list: 'allpages',
      apnamespace: '0',
      apfilterredir: filterredir,
      aplimit: '500',
      ...cont,
    });
    pages.push(...d.query.allpages);
    if (!d.continue) break;
    cont = d.continue;
  }
  return pages;
}

async function buildRedirectMap(redirectPages) {
  const map = {};
  for (let i = 0; i < redirectPages.length; i += 50) {
    const batch = redirectPages.slice(i, i + 50);
    const d = await fetchJson({
      action: 'query',
      titles: batch.map((p) => p.title).join('|'),
      redirects: '1',
    });
    for (const r of d.query.redirects ?? []) map[r.from] = r.to;
  }
  return map;
}

async function exportPage(page) {
  const file = path.join(RAW, `${page.pageid}.json`);
  const d = await fetchJson({
    action: 'parse',
    pageid: String(page.pageid),
    prop: 'text|categories|displaytitle|revid',
    disableeditsection: '1',
    disablelimitreport: '1',
    disabletoc: '1',
  });
  const p = d.parse;
  await writeFile(
    file,
    JSON.stringify({
      pageid: p.pageid,
      title: p.title,
      displaytitle: p.displaytitle,
      categories: (p.categories ?? []).filter((c) => !c.hidden).map((c) => c.category),
      revid: p.revid,
      html: p.text,
    }, null, 1)
  );
}

await mkdir(RAW, { recursive: true });

const articles = await listPages('nonredirects');
console.log(`${articles.length} articles`);
const redirects = await listPages('redirects');
console.log(`${redirects.length} redirects`);

const redirectMap = await buildRedirectMap(redirects);
await writeFile(path.join(OUT, 'redirects.json'), JSON.stringify(redirectMap, null, 1));
console.log(`redirect map written (${Object.keys(redirectMap).length} entries)`);

const existing = new Set(FORCE ? [] : await readdir(RAW));
const queue = articles.filter((p) => !existing.has(`${p.pageid}.json`));
let done = 0;
let failed = 0;

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    for (;;) {
      const page = queue.shift();
      if (!page) return;
      try {
        await exportPage(page);
      } catch (err) {
        failed++;
        console.error(`FAILED ${page.title}: ${err.message}`);
      }
      if (++done % 100 === 0) console.log(`${done}/${queue.length + done} pages`);
    }
  })
);
console.log(`DONE: ${done} exported, ${failed} failed`);

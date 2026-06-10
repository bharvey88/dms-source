/**
 * Export every page from the DMS Confluence instance to local JSON.
 *
 * For each space, paginates /rest/api/content and stores one JSON file per
 * page under migration/confluence/raw/<spaceKey>/<pageId>.json containing
 * title, ancestors, version, labels, and the rendered export_view HTML.
 *
 * Resumable: pages already on disk are skipped unless --force is passed.
 */
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://source.dallasmakerspace.org';
const OUT = path.resolve(import.meta.dirname, '..', 'migration', 'confluence', 'raw');
const PAGE_SIZE = 25;
const FORCE = process.argv.includes('--force');

async function fetchJson(url, attempt = 1) {
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.json();
  } catch (err) {
    if (attempt >= 5) throw err;
    const delay = 1000 * 2 ** attempt;
    console.warn(`  retry ${attempt} after error: ${err.message}`);
    await new Promise((r) => setTimeout(r, delay));
    return fetchJson(url, attempt + 1);
  }
}

async function listSpaces() {
  const spaces = [];
  let start = 0;
  for (;;) {
    const d = await fetchJson(`${BASE}/rest/api/space?limit=100&start=${start}`);
    spaces.push(...d.results.map((s) => ({ key: s.key, name: s.name })));
    if (d.size < d.limit) break;
    start += d.size;
  }
  return spaces;
}

async function exportSpace(space) {
  const dir = path.join(OUT, space.key);
  await mkdir(dir, { recursive: true });
  const existing = new Set(FORCE ? [] : await readdir(dir));

  let start = 0;
  let count = 0;
  for (;;) {
    const expand = 'ancestors,version,metadata.labels,body.export_view';
    const d = await fetchJson(
      `${BASE}/rest/api/content?spaceKey=${encodeURIComponent(space.key)}&type=page&limit=${PAGE_SIZE}&start=${start}&expand=${expand}`
    );
    for (const page of d.results) {
      const file = `${page.id}.json`;
      count++;
      if (existing.has(file)) continue;
      const record = {
        id: page.id,
        title: page.title,
        spaceKey: space.key,
        spaceName: space.name,
        ancestors: page.ancestors.map((a) => ({ id: a.id, title: a.title })),
        version: { when: page.version.when, number: page.version.number },
        labels: (page.metadata?.labels?.results ?? []).map((l) => l.name),
        webui: page._links?.webui ?? '',
        html: page.body.export_view.value,
      };
      await writeFile(path.join(dir, file), JSON.stringify(record, null, 1));
    }
    if (d.size < PAGE_SIZE) break;
    start += d.size;
  }
  console.log(`${space.key}: ${count} pages`);
  return count;
}

const spaces = await listSpaces();
console.log(`${spaces.length} spaces found`);
let total = 0;
for (const space of spaces) total += await exportSpace(space);
console.log(`DONE: ${total} pages exported`);

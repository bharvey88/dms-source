/**
 * Download every image/attachment recorded by the converters into public/.
 * Reads migration/confluence/assets.json and migration/mediawiki/assets.json
 * (url -> public-relative path). Resumable: existing files are skipped.
 */
import { mkdir, writeFile, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { pool } from './lib/common.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const manifests = ['confluence', 'mediawiki'];
const entries = new Map();
for (const m of manifests) {
  try {
    const data = JSON.parse(await readFile(path.join(ROOT, 'migration', m, 'assets.json'), 'utf8'));
    for (const [url, local] of Object.entries(data)) entries.set(url, local);
  } catch {
    console.warn(`no manifest for ${m}`);
  }
}
console.log(`${entries.size} assets to fetch`);

let done = 0;
let skipped = 0;
const failures = [];

await pool([...entries.entries()], 6, async ([url, local]) => {
  const dest = path.join(PUBLIC, local);
  try {
    await access(dest);
    skipped++;
    return;
  } catch {
    /* not downloaded yet */
  }
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'dms-source-migration/1.0' },
        redirect: 'follow',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await mkdir(path.dirname(dest), { recursive: true });
      await writeFile(dest, buf);
      if (++done % 200 === 0) console.log(`${done} downloaded`);
      return;
    } catch (err) {
      if (attempt === 4) failures.push({ url, error: err.message });
      else await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
});

await writeFile(path.join(ROOT, 'migration', 'asset-failures.json'), JSON.stringify(failures, null, 1));
console.log(`DONE: ${done} downloaded, ${skipped} already present, ${failures.length} failed`);

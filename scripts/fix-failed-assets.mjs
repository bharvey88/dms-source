/**
 * For assets that could not be downloaded (see migration/asset-failures.json),
 * rewrite their local references in the converted markdown back to the
 * original absolute URLs so nothing renders as a broken image/link.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { SITE_BASE } from './lib/common.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DOCS = path.join(ROOT, 'src', 'content', 'docs');

const failures = JSON.parse(await readFile(path.join(ROOT, 'migration', 'asset-failures.json'), 'utf8'));
const manifests = {};
for (const m of ['confluence', 'mediawiki']) {
  Object.assign(manifests, JSON.parse(await readFile(path.join(ROOT, 'migration', m, 'assets.json'), 'utf8')));
}

const replacements = new Map(); // local site path -> original url
for (const { url } of failures) {
  const local = manifests[url];
  if (local) replacements.set(`${SITE_BASE}/${local}`, url);
}
console.log(`${replacements.size} asset paths to revert`);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (p.endsWith('.md') || p.endsWith('.mdx')) yield p;
  }
}

let touched = 0;
for await (const file of walk(DOCS)) {
  let text = await readFile(file, 'utf8');
  let changed = false;
  for (const [localPath, url] of replacements) {
    if (text.includes(localPath)) {
      text = text.replaceAll(localPath, url);
      changed = true;
    }
  }
  if (changed) {
    await writeFile(file, text);
    touched++;
  }
}
console.log(`DONE: ${touched} files updated`);

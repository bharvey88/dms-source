/**
 * Recompress migrated raster images in public/files for the web.
 * - Resizes anything wider than 1600px.
 * - JPEGs -> mozjpeg q78; PNGs -> 8-bit palette.
 * - Keeps filenames/extensions identical (markdown references stay valid);
 *   only overwrites when the result is smaller.
 */
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { pool } from './lib/common.mjs';

const ROOT = path.resolve(import.meta.dirname, '..', 'public', 'files');
const MAX_WIDTH = 1600;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const images = [];
for await (const f of walk(ROOT)) {
  if (/\.(jpe?g|png)$/i.test(f)) images.push(f);
}
console.log(`${images.length} images`);

let saved = 0;
let processed = 0;
let failed = 0;

await pool(images, 8, async (file) => {
  try {
    const before = (await stat(file)).size;
    if (before < 60_000) return; // already small
    const isPng = /\.png$/i.test(file);
    // buffer input: avoids flaky direct-file opens in libvips on Windows
    const input = await readFile(file);
    let img = sharp(input, { failOn: 'none', limitInputPixels: 1e9 });
    const meta = await img.metadata();
    if ((meta.width ?? 0) > MAX_WIDTH) img = img.resize({ width: MAX_WIDTH });
    const buf = isPng
      ? await img.png({ palette: true, compressionLevel: 9 }).toBuffer()
      : await img.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
    if (buf.length < before) {
      await writeFile(file, buf);
      saved += before - buf.length;
    }
    if (++processed % 200 === 0) console.log(`${processed} processed, ${(saved / 1e6).toFixed(0)} MB saved`);
  } catch (err) {
    failed++;
    console.error(`skip ${path.basename(file)}: ${err.message}`);
  }
});
console.log(`DONE: ${processed} recompressed, ${failed} skipped, ${(saved / 1e6).toFixed(0)} MB saved`);

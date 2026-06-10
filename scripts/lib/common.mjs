/** Shared helpers for the Confluence/MediaWiki -> Starlight conversion. */
import { spawn } from 'node:child_process';

/** Site base path (GitHub Pages project site). Keep in sync with astro.config.mjs. */
export const SITE_BASE = '/dms-source';

export function slugify(text) {
  const slug = text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return slug || 'page';
}

/** Assign collision-free slugs to a list of titles (stable: sorted by key first). */
export function uniqueSlug(base, taken) {
  let slug = base;
  let n = 2;
  while (taken.has(slug)) slug = `${base}-${n++}`;
  taken.add(slug);
  return slug;
}

/** Run pandoc html -> gfm. */
import { existsSync } from 'node:fs';
const PANDOC =
  process.env.PANDOC_PATH ??
  ['pandoc', `${process.env.LOCALAPPDATA}\\Pandoc\\pandoc.exe`, 'C:\\Program Files\\Pandoc\\pandoc.exe'].find(
    (p) => p === 'pandoc' ? false : existsSync(p)
  ) ??
  'pandoc';

export function pandoc(html) {
  return new Promise((resolve, reject) => {
    const p = spawn(PANDOC, ['-f', 'html', '-t', 'gfm', '--wrap=none'], {
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    let out = '';
    let err = '';
    p.stdout.on('data', (d) => (out += d));
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) => (code === 0 ? resolve(out) : reject(new Error(`pandoc exit ${code}: ${err}`))));
    p.stdin.end(html, 'utf8');
  });
}

/** Simple concurrency pool. */
export async function pool(items, limit, fn) {
  const queue = [...items.entries()];
  const results = new Array(items.length);
  await Promise.all(
    Array.from({ length: Math.min(limit, queue.length) }, async () => {
      for (;;) {
        const next = queue.shift();
        if (!next) return;
        const [i, item] = next;
        results[i] = await fn(item, i);
      }
    })
  );
  return results;
}

/**
 * Replace aside marker paragraphs (inserted during HTML preprocessing) with
 * Starlight ::: aside fences in the converted markdown.
 */
export function applyAsideMarkers(md) {
  return md
    .replace(/^\\?%%ASIDE-START:(\w+):?(.*?)%%$/gm, (_, kind, title) =>
      title ? `:::${kind}[${title.replace(/[[\]]/g, '')}]` : `:::${kind}`
    )
    .replace(/^\\?%%ASIDE-END%%$/gm, ':::');
}

/** Tidy converted markdown: collapse blank runs, trim trailing spaces. */
export function tidyMarkdown(md) {
  return (
    md
      .replace(/ /g, ' ')
      .replace(/^\\$/gm, '')
      .replace(/[ \t]+$/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim() + '\n'
  );
}

export function frontmatter(fields) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined || v === null || v === '') continue;
    if (typeof v === 'object' && !Array.isArray(v)) {
      lines.push(`${k}:`);
      for (const [k2, v2] of Object.entries(v)) lines.push(`  ${k2}: ${JSON.stringify(v2)}`);
    } else if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)) {
      lines.push(`${k}: ${v}`); // YAML date — must be unquoted to parse as a date
    } else {
      lines.push(`${k}: ${JSON.stringify(v)}`);
    }
  }
  lines.push('---', '');
  return lines.join('\n');
}

/** Derive a plain-text description from the first real paragraph. */
export function deriveDescription($, root) {
  for (const el of $(root).find('p').toArray()) {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (text.length > 40 && !text.startsWith('%%ASIDE')) {
      return text.length > 158 ? `${text.slice(0, 155)}...` : text;
    }
  }
  return undefined;
}

/** Sanitize an attachment/image filename for local storage. */
export function safeFilename(name) {
  let decoded = name;
  try {
    decoded = decodeURIComponent(name);
  } catch {
    /* keep raw */
  }
  const clean = decoded.replace(/[^a-zA-Z0-9._-]+/g, '_').replace(/^_+|_+$/g, '');
  return clean.slice(-120) || 'file';
}

/**
 * Local public path for a legacy-wiki image URL
 * (https://dallasmakerspace.org/w/images/...). Shared by both converters so
 * they agree on the layout.
 */
export function mwImageLocalPath(url) {
  const m = url.pathname.match(/^\/w\/images\/(.+)$/);
  if (!m) return null;
  return `files/mw/${safeFilename(m[1].replace(/\//g, '_'))}`;
}

export const EMOTICONS = {
  smile: '🙂',
  sad: '🙁',
  cheeky: '😛',
  laugh: '😄',
  wink: '😉',
  'thumbs-up': '👍',
  'thumbs-down': '👎',
  information: 'ℹ️',
  tick: '✅',
  cross: '❌',
  warning: '⚠️',
  question: '❓',
  plus: '➕',
  minus: '➖',
  heart: '❤️',
  'broken-heart': '💔',
  star: '⭐',
  'light-on': '💡',
  'light-off': '💡',
};

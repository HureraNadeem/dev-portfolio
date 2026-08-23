/**
 * Writes an unprefixed fallback for every exported English page, so that a
 * request for `/experience` lands on `/en/experience` instead of a 404.
 *
 * Those unprefixed URLs are the ones the site lived at before it became
 * multilingual, so they are what existing inbound links and anything already
 * indexed still point at.
 *
 * The route list is read from the build output rather than declared here, so
 * adding a page cannot leave a stale list behind.
 *
 * Netlify redirects these paths at the edge before a file is ever reached (see
 * netlify.toml). These pages exist for any other static host, and are noindex
 * so a crawler cannot read `/experience` as a thin duplicate of
 * `/en/experience`.
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = 'out';
const DEFAULT_LOCALE = 'en';

function page(target) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <link rel="canonical" href="${target}" />
    <title>Hurera Nadeem</title>
    <script>
      window.location.replace('${target}');
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="${target}">${target}</a>.</p>
  </body>
</html>
`;
}

const localeDir = join(OUT, DEFAULT_LOCALE);
const entries = await readdir(localeDir).catch(() => {
  throw new Error(`${localeDir} not found — run this after \`next build\`.`);
});

const written = [];

// `/` -> `/en`
await writeFile(join(OUT, 'index.html'), page(`/${DEFAULT_LOCALE}`));
written.push('/');

for (const entry of entries) {
  if (!entry.endsWith('.html')) continue;

  const slug = entry.replace(/\.html$/, '');
  const destination = `/${DEFAULT_LOCALE}/${slug}`;
  const fallback = join(OUT, entry);

  // Never shadow a real page: a locale code could collide with a slug.
  const exists = await stat(fallback).then(
    () => true,
    () => false,
  );
  if (exists) continue;

  await writeFile(fallback, page(destination));
  written.push(`/${slug}`);
}

console.log(`  locale fallbacks: ${written.join(', ')}`);

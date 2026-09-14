import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { URL } from 'node:url';

const configPath = resolve('site.config.json');
const siteConfig = JSON.parse(await readFile(configPath, 'utf8'));

const canonicalUrl = new URL(siteConfig.basePath, siteConfig.siteUrl).toString();
const sitemapUrl = new URL('sitemap.xml', canonicalUrl).toString();

const files = new Map([
  [resolve('public/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`],
  [
    resolve('public/sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${canonicalUrl}</loc>\n    <lastmod>${siteConfig.lastModified}</lastmod>\n  </url>\n</urlset>\n`,
  ],
  [
    resolve('public/site.webmanifest'),
    `${JSON.stringify(
      {
        name: siteConfig.legalName,
        short_name: siteConfig.siteName,
        start_url: siteConfig.basePath,
        scope: siteConfig.basePath,
        display: 'browser',
        background_color: siteConfig.themeColor,
        theme_color: siteConfig.themeColor,
        lang: siteConfig.language,
      },
      null,
      2,
    )}\n`,
  ],
]);

for (const [path, content] of files) {
  let current = null;

  try {
    current = await readFile(path, 'utf8');
  } catch {
    await mkdir(dirname(path), { recursive: true });
  }

  if (current !== content) {
    await writeFile(path, content);
  }
}

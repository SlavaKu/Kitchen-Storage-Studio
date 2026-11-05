import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDir = resolve('dist');
const notFoundPath = resolve(distDir, '404.html');

await copyFile(resolve(distDir, 'index.html'), notFoundPath);

const notFoundHtml = await readFile(notFoundPath, 'utf8');
const noIndexHtml = notFoundHtml.replace(
  /<meta name="robots" content="[^"]*">/,
  '<meta name="robots" content="noindex, follow">',
);

await writeFile(notFoundPath, noIndexHtml);

// A real directory entry lets GitHub Pages serve this route directly with HTTP 200.
const privacyDir = resolve(distDir, 'privacy-policy');
await mkdir(privacyDir, { recursive: true });
const siteConfig = JSON.parse(await readFile(resolve('site.config.json'), 'utf8'));
const homeUrl = new URL(siteConfig.basePath, siteConfig.siteUrl).toString();
const privacyUrl = new URL('privacy-policy/', homeUrl).toString();
const privacyHtml = (await readFile(resolve(distDir, 'index.html'), 'utf8'))
  .replaceAll(siteConfig.title, 'Privacy Policy | Kitchen Up')
  .replaceAll(homeUrl, privacyUrl)
  .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');
await writeFile(resolve(privacyDir, 'index.html'), privacyHtml);

import { copyFile, readFile, writeFile } from 'node:fs/promises';
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

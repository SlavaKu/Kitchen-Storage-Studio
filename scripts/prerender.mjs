import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const dist = resolve('dist');
const temporaryDir = resolve('node_modules/.tmp/kitchen-up-prerender');
const template = await readFile(resolve(dist, 'index.html'), 'utf8');
const config = JSON.parse(await readFile(resolve('site.config.json'), 'utf8'));

// Compile the same route tree with Vite so asset URLs match the client build.
// This temporary Node bundle stays outside the published dist directory.
await build({
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: temporaryDir,
    emptyOutDir: true,
    copyPublicDir: false,
    minify: false,
    rolldownOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
});
const { render, renderSeoHead } = await import(
  pathToFileURL(resolve(temporaryDir, 'entry-server.mjs')).href
);

if (
  !template.includes('<div id="root"></div>') ||
  !template.includes('<!--seo:start-->')
) {
  throw new Error('Prerender template markers are missing.');
}

for (const [pathname, filename] of [
  [config.basePath, 'index.html'],
  [`${config.basePath}privacy-policy/`, 'privacy-policy/index.html'],
  [`${config.basePath}404.html`, '404.html'],
]) {
  const markup = render(pathname);
  if (!markup.includes('<h1'))
    throw new Error(`Prerender produced no page content: ${pathname}`);
  const html = template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => renderSeoHead(pathname))
    .replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
  const destination = resolve(dist, filename);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
  console.log(`Prerendered ${pathname} -> ${filename}`);
}

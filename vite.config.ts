import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import siteConfig from './site.config.json' with { type: 'json' };
import { renderSeoHead } from './src/data/seo.js';

export default defineConfig({
  base: siteConfig.basePath,
  plugins: [
    react(),
    {
      name: 'kitchen-up-seo-head',
      transformIndexHtml(html, context) {
        return html.replace('<!--seo-head-->', renderSeoHead(context.path));
      },
    },
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});

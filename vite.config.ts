import { defineConfig, type HtmlTagDescriptor } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import siteConfig from './site.config.json' with { type: 'json' };

const canonicalUrl = new URL(siteConfig.basePath, siteConfig.siteUrl).toString();
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${canonicalUrl}#organization`,
      name: siteConfig.siteName,
      legalName: siteConfig.legalName,
      url: canonicalUrl,
      telephone: siteConfig.telephone,
    },
    {
      '@type': 'WebSite',
      '@id': `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: siteConfig.siteName,
      publisher: {
        '@id': `${canonicalUrl}#organization`,
      },
      inLanguage: siteConfig.language,
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: {
        '@id': `${canonicalUrl}#website`,
      },
      about: {
        '@id': `${canonicalUrl}#organization`,
      },
      inLanguage: siteConfig.language,
      dateModified: siteConfig.lastModified,
    },
    {
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: siteConfig.serviceName,
      areaServed: siteConfig.areaServed,
      provider: {
        '@id': `${canonicalUrl}#organization`,
      },
      url: canonicalUrl,
    },
  ],
};

const metaTags: HtmlTagDescriptor[] = [
  { tag: 'meta', injectTo: 'head', attrs: { name: 'robots', content: 'index, follow' } },
  {
    tag: 'meta',
    injectTo: 'head',
    attrs: { name: 'theme-color', content: siteConfig.themeColor },
  },
  { tag: 'link', injectTo: 'head', attrs: { rel: 'canonical', href: canonicalUrl } },
  {
    tag: 'link',
    injectTo: 'head',
    attrs: {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${siteConfig.basePath}favicon.svg`,
    },
  },
  {
    tag: 'link',
    injectTo: 'head',
    attrs: { rel: 'manifest', href: `${siteConfig.basePath}site.webmanifest` },
  },
  { tag: 'meta', injectTo: 'head', attrs: { property: 'og:type', content: 'website' } },
  {
    tag: 'meta',
    injectTo: 'head',
    attrs: { property: 'og:site_name', content: siteConfig.siteName },
  },
  {
    tag: 'meta',
    injectTo: 'head',
    attrs: { property: 'og:locale', content: siteConfig.locale },
  },
  {
    tag: 'meta',
    injectTo: 'head',
    attrs: { property: 'og:title', content: siteConfig.title },
  },
  {
    tag: 'meta',
    injectTo: 'head',
    attrs: { property: 'og:description', content: siteConfig.description },
  },
  { tag: 'meta', injectTo: 'head', attrs: { property: 'og:url', content: canonicalUrl } },
  {
    tag: 'meta',
    injectTo: 'head',
    attrs: { name: 'twitter:card', content: 'summary' },
  },
  {
    tag: 'meta',
    injectTo: 'head',
    attrs: { name: 'twitter:title', content: siteConfig.title },
  },
  {
    tag: 'meta',
    injectTo: 'head',
    attrs: { name: 'twitter:description', content: siteConfig.description },
  },
  {
    tag: 'script',
    injectTo: 'head',
    attrs: { type: 'application/ld+json' },
    children: JSON.stringify(structuredData),
  },
];

export default defineConfig({
  base: siteConfig.basePath,
  plugins: [
    react(),
    {
      name: 'kitchen-up-seo-head',
      transformIndexHtml() {
        return metaTags;
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

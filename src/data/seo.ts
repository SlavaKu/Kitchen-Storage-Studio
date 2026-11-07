import siteConfig from '../../site.config.json' with { type: 'json' };

const homeUrl = new URL(siteConfig.basePath, siteConfig.siteUrl).toString();
const privacyUrl = new URL('privacy-policy/', homeUrl).toString();
const imageUrl = new URL(siteConfig.socialImage, homeUrl).toString();

export function getPageSeo(pathname: string) {
  const normalized = pathname.replace(/\/?(?:index\.html)?$/, '/') || '/';
  const isHome = normalized === new URL(homeUrl).pathname;
  const isPrivacy = normalized === new URL(privacyUrl).pathname;
  const indexable = isHome || isPrivacy;
  return {
    indexable,
    canonical: isHome ? homeUrl : isPrivacy ? privacyUrl : null,
    title: isHome
      ? siteConfig.title
      : isPrivacy
        ? siteConfig.privacyPolicy.title
        : 'Page Not Found | Kitchen Up',
    description: isHome
      ? siteConfig.description
      : isPrivacy
        ? siteConfig.privacyPolicy.description
        : 'The requested page could not be found. Return to Kitchen Up to plan your kitchen.',
    lastModified: isHome
      ? siteConfig.lastModified
      : siteConfig.privacyPolicy.lastModified,
    isHome,
  };
}

export function getStructuredData(pathname: string) {
  const page = getPageSeo(pathname);
  if (!page.indexable) return null;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${homeUrl}#organization`,
        name: siteConfig.siteName,
        url: homeUrl,
        telephone: siteConfig.telephone,
        logo: new URL('social/kitchen-up-logo.webp', homeUrl).toString(),
      },
      {
        '@type': 'WebSite',
        '@id': `${homeUrl}#website`,
        url: homeUrl,
        name: siteConfig.siteName,
        publisher: { '@id': `${homeUrl}#organization` },
        inLanguage: siteConfig.language,
      },
      {
        '@type': 'WebPage',
        '@id': `${page.canonical}#webpage`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${homeUrl}#website` },
        about: { '@id': `${homeUrl}#organization` },
        inLanguage: siteConfig.language,
        dateModified: page.lastModified,
      },
      ...(page.isHome
        ? [
            {
              '@type': 'Service',
              '@id': `${homeUrl}#service`,
              name: siteConfig.serviceName,
              areaServed: siteConfig.areaServed,
              provider: { '@id': `${homeUrl}#organization` },
              url: homeUrl,
            },
          ]
        : []),
    ],
  };
}

export function getMetaTags(pathname: string) {
  const page = getPageSeo(pathname);
  return [
    { name: 'description', content: page.description },
    { name: 'robots', content: page.indexable ? 'index, follow' : 'noindex, follow' },
    { name: 'theme-color', content: siteConfig.themeColor },
    ...(page.indexable
      ? [
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: siteConfig.siteName },
          { property: 'og:locale', content: siteConfig.locale },
          { property: 'og:title', content: page.title },
          { property: 'og:description', content: page.description },
          { property: 'og:url', content: page.canonical! },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:alt', content: siteConfig.socialImageAlt },
          { property: 'og:image:width', content: String(siteConfig.socialImageWidth) },
          { property: 'og:image:height', content: String(siteConfig.socialImageHeight) },
          { property: 'og:image:type', content: 'image/webp' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: page.title },
          { name: 'twitter:description', content: page.description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: siteConfig.socialImageAlt },
        ]
      : []),
  ];
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

export function renderSeoHead(pathname: string) {
  const page = getPageSeo(pathname);
  const schema = getStructuredData(pathname);
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    ...getMetaTags(pathname).map((meta) => {
      const attributes = Object.entries(meta)
        .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
        .join(' ');
      return `<meta ${attributes}>`;
    }),
    ...(page.canonical
      ? [`<link rel="canonical" href="${escapeHtml(page.canonical)}">`]
      : []),
    `<link rel="icon" type="image/svg+xml" href="${siteConfig.basePath}favicon.svg">`,
    `<link rel="manifest" href="${siteConfig.basePath}site.webmanifest">`,
    ...(schema
      ? [
          `<script id="site-structured-data" type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`,
        ]
      : []),
  ];
  return `<!--seo:start-->\n${tags.join('\n')}\n<!--seo:end-->`;
}

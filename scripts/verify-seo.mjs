import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const config = JSON.parse(readFileSync('site.config.json', 'utf8'));
const homeUrl = new URL(config.basePath, config.siteUrl).toString();
const privacyUrl = new URL('privacy-policy/', homeUrl).toString();
const read = (filename) => readFileSync(resolve('dist', filename), 'utf8');
const decode = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
const attributes = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
      match[1],
      decode(match[2]),
    ]),
  );
const tags = (html, tag) =>
  [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map((match) =>
    attributes(match[0]),
  );
const routes = [
  {
    file: 'index.html',
    url: homeUrl,
    title: config.title,
    description: config.description,
  },
  { file: 'privacy-policy/index.html', url: privacyUrl, ...config.privacyPolicy },
];

for (const route of routes) {
  const html = read(route.file);
  assert(!html.includes('<div id="root"></div>'), `${route.file}: empty React root`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route.file}: primary heading`);
  assert.equal(decode(html.match(/<title>(.*?)<\/title>/)[1]), route.title);
  const meta = tags(html, 'meta');
  const getMeta = (key) => meta.filter((tag) => tag.name === key || tag.property === key);
  for (const [key, value] of Object.entries({
    description: route.description,
    robots: 'index, follow',
    'og:title': route.title,
    'og:description': route.description,
    'og:url': route.url,
    'og:image': new URL(config.socialImage, homeUrl).toString(),
    'twitter:card': 'summary_large_image',
    'twitter:title': route.title,
    'twitter:description': route.description,
    'twitter:image': new URL(config.socialImage, homeUrl).toString(),
  })) {
    assert.equal(getMeta(key).length, 1, `${route.file}: unique ${key}`);
    assert.equal(getMeta(key)[0].content, value, `${route.file}: ${key}`);
  }
  const canonicals = tags(html, 'link').filter((tag) => tag.rel === 'canonical');
  assert.equal(canonicals.length, 1);
  assert.equal(canonicals[0].href, route.url);
  const graph = JSON.parse(
    html.match(
      /<script id="site-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/,
    )[1],
  );
  assert.equal(graph['@context'], 'https://schema.org');
  assert.equal(
    graph['@graph'].find((node) => node['@type'] === 'Organization').name,
    'Kitchen Up',
  );
  assert.equal(
    graph['@graph'].find((node) => node['@type'] === 'Organization').telephone,
    '+16504845564',
  );
  assert.equal(
    graph['@graph'].find((node) => node['@type'] === 'WebPage').url,
    route.url,
  );
  assert(
    !/AggregateRating|"Review"|legalName|streetAddress|openingHours|priceRange|sameAs/.test(
      JSON.stringify(graph),
    ),
    'Unsupported business claims',
  );
  const ids = [...html.matchAll(/\bid="([^"]*)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${route.file}: duplicate IDs`);
  for (const image of tags(html, 'img')) {
    assert('alt' in image, `${route.file}: missing image alternative`);
    assert(
      Number(image.width) > 0 && Number(image.height) > 0,
      `${route.file}: missing image dimensions`,
    );
  }
  for (const tag of [
    ...tags(html, 'a'),
    ...tags(html, 'link'),
    ...tags(html, 'img'),
    ...tags(html, 'script'),
  ]) {
    const href = tag.href || tag.src;
    if (!href || /^(tel:|mailto:|data:)/.test(href) || href === '#') continue;
    const url = new URL(href, route.url);
    if (url.origin !== new URL(homeUrl).origin) continue;
    const path = decodeURIComponent(url.pathname).slice(config.basePath.length);
    const target = path.endsWith('/') || !path ? `${path}index.html` : path;
    assert(existsSync(resolve('dist', target)), `${route.file}: missing ${href}`);
    if (url.hash)
      assert(
        read(target).includes(`id="${url.hash.slice(1)}"`),
        `Missing anchor ${href}`,
      );
  }
  assert(
    !/hello@example\.com|you@example\.com|Kitchen\s*(?:&|&amp;|and)\s*Storage Studio|\/Kitchen-Storage-Studio\/|\/src\/main\.tsx/.test(
      html,
    ),
  );
}

const home = read('index.html');
for (const field of ['name', 'phone', 'email', 'city', 'message', '_gotcha']) {
  assert(
    [...tags(home, 'input'), ...tags(home, 'textarea')].some((tag) => tag.name === field),
    `Missing form field ${field}`,
  );
}
assert(
  tags(home, 'img').some(
    (tag) =>
      tag.class?.includes('hero-image ') &&
      tag.loading === 'eager' &&
      tag.fetchPriority === 'high',
  ),
  'LCP hero must remain eager/high priority',
);
const notFound = read('404.html');
assert(
  tags(notFound, 'meta').some(
    (tag) => tag.name === 'robots' && tag.content === 'noindex, follow',
  ),
);
assert(!tags(notFound, 'link').some((tag) => tag.rel === 'canonical'));
assert(
  notFound.includes('Sorry, we couldn&#x27;t find this page.') ||
    notFound.includes("Sorry, we couldn't find this page."),
);
const sitemap = read('sitemap.xml');
assert.deepEqual(
  [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]),
  [homeUrl, privacyUrl],
);
assert.equal(
  read('robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', homeUrl)}\n`,
);
assert.equal(read('CNAME').trim(), config.customDomain);
assert(
  !existsSync(resolve('dist', 'entry-server.mjs')),
  'Do not publish the Node renderer',
);
console.log(
  'SEO output verified: prerendered routes, metadata, schema, images, internal links, form fields, sitemap, robots, 404 and CNAME.',
);

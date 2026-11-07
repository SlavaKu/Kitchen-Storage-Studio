import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getMetaTags, getPageSeo, getStructuredData } from '@/data/seo';

export function PageSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = getPageSeo(pathname);
    document.title = page.title;
    // Replace the previous route's metadata, including a 404's noindex.
    document
      .querySelectorAll(
        'meta[name="description"], meta[name="robots"], meta[name="theme-color"], meta[property^="og:"], meta[name^="twitter:"]',
      )
      .forEach((tag) => tag.remove());
    for (const attributes of getMetaTags(pathname)) {
      const meta = document.createElement('meta');
      for (const [key, value] of Object.entries(attributes))
        meta.setAttribute(key, value);
      document.head.append(meta);
    }
    document.querySelectorAll('link[rel="canonical"]').forEach((tag) => tag.remove());
    if (page.canonical) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = page.canonical;
      document.head.append(canonical);
    }
    document.getElementById('site-structured-data')?.remove();
    const data = getStructuredData(pathname);
    if (data) {
      const script = document.createElement('script');
      script.id = 'site-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.append(script);
    }
  }, [pathname]);
  return null;
}

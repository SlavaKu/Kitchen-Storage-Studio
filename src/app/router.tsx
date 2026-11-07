import { createBrowserRouter } from 'react-router-dom';

import { routes } from '@/app/routes';

// Physical index files are aliases of the directory URLs rendered at build time.
const basePath = import.meta.env.BASE_URL;
if (
  [`${basePath}index.html`, `${basePath}privacy-policy/index.html`].includes(
    window.location.pathname,
  )
) {
  window.history.replaceState(
    window.history.state,
    '',
    window.location.pathname.replace(/index\.html$/, '') +
      window.location.search +
      window.location.hash,
  );
}

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
});

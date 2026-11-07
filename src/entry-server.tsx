import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes } from '@/app/routes';
import { renderSeoHead } from '@/data/seo';

export { renderSeoHead };

export function render(pathname: string) {
  const router = createMemoryRouter(routes, {
    basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
    initialEntries: [pathname],
  });
  try {
    return renderToString(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    );
  } finally {
    router.dispose();
  }
}

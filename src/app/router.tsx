import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/layouts/AppLayout';
import { FuturePage } from '@/pages/FuturePage';
import { HomePage } from '@/pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'kitchens',
        element: <FuturePage eyebrow="Kitchens" title="Kitchen pages are prepared." />,
      },
      {
        path: 'closets',
        element: <FuturePage eyebrow="Closets" title="Closet pages are prepared." />,
      },
      {
        path: 'garage-storage',
        element: (
          <FuturePage
            eyebrow="Garage Storage"
            title="Garage storage pages are prepared."
          />
        ),
      },
      {
        path: 'projects',
        element: <FuturePage eyebrow="Projects" title="Project pages are prepared." />,
      },
      {
        path: 'about',
        element: <FuturePage eyebrow="About" title="About pages are prepared." />,
      },
      {
        path: 'contact',
        element: <FuturePage eyebrow="Contact" title="Contact pages are prepared." />,
      },
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/layouts/AppLayout';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'privacy-policy',
          element: <PrivacyPolicyPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
  },
);

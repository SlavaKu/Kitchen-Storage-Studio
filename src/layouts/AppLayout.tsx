import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { SiteHeader } from '@/components/SiteHeader';

export function AppLayout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(hash);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

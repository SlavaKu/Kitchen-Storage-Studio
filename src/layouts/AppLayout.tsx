import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { FloatingContactButtons } from '@/components/FloatingContactButtons';
import { SiteHeader } from '@/components/SiteHeader';
import { PageSeo } from '@/components/PageSeo';

export function AppLayout() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(hash);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSeo />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <FloatingContactButtons />
    </div>
  );
}

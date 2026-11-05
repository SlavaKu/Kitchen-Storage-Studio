import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { FloatingContactButtons } from '@/components/FloatingContactButtons';
import { SiteHeader } from '@/components/SiteHeader';

export function AppLayout() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/' || /^\/privacy-policy\/?$/.test(pathname)) {
      document.title =
        pathname === '/'
          ? 'Kitchen Up | Kitchen Cabinet Design'
          : 'Privacy Policy | Kitchen Up';
    }
  }, [pathname]);

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
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <FloatingContactButtons />
    </div>
  );
}

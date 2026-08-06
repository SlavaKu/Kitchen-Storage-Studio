import { Outlet } from 'react-router-dom';

import { SiteHeader } from '@/components/SiteHeader';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

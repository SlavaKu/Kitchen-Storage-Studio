import { Link } from 'react-router-dom';

import { primaryNavigation } from '@/data/navigation';

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold text-foreground" to="/">
          Kitchen Storage Studio
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-foreground" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

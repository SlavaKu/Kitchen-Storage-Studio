import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { LineIcon } from '@/components/icons/LineIcon';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { contactDetails } from '@/data/homepage';
import { primaryNavigation } from '@/data/navigation';
import { cn } from '@/utils/cn';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);

    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
          'sticky top-0 z-40 border-b border-border/75 bg-background/92 backdrop-blur-xl transition-all duration-medium',
        isCompact ? 'shadow-soft' : 'shadow-none',
      )}
    >
      <Container
        className={cn(
          'flex items-center justify-between gap-5 transition-all duration-medium lg:gap-8',
          isCompact ? 'py-2 lg:py-3' : 'py-2.5 lg:py-5',
        )}
      >
        <NavLink
          aria-label="Kitchen and Storage Studio home"
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="grid size-10 place-items-center rounded-full border border-walnut/20 bg-surface text-sm font-semibold text-walnut shadow-soft transition group-hover:-translate-y-0.5">
            KS
          </span>
          <span className="leading-none">
            <span className="block truncate font-serif text-lg font-semibold text-foreground sm:text-xl">
              Kitchen & Storage
            </span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted sm:text-xs sm:tracking-[0.18em]">
              Studio
            </span>
          </span>
        </NavLink>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center gap-6 text-sm font-semibold text-muted">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    cn('nav-link', isActive && 'text-foreground after:scale-x-100')
                  }
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            className="text-sm font-semibold text-foreground"
            href={contactDetails.phoneHref}
          >
            {contactDetails.phoneLabel}
          </a>
          <Button href="/#contact" size="sm">
            Get Free Estimate
          </Button>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2.5 lg:hidden">
          <a
            aria-label="Call Kitchen and Storage Studio"
            className="grid size-10 place-items-center rounded-full border border-border bg-surface text-foreground shadow-soft transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href={contactDetails.phoneHref}
          >
            <LineIcon className="size-5" name="phone" />
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="relative z-50 grid size-10 place-items-center rounded-full border border-border bg-surface text-foreground shadow-soft transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="grid w-5 gap-1.5">
              <span
                className={cn(
                  'h-px w-5 bg-current transition duration-medium',
                  isMenuOpen && 'translate-y-[7px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-px w-5 bg-current transition duration-medium',
                  isMenuOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'h-px w-5 bg-current transition duration-medium',
                  isMenuOpen && '-translate-y-[7px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          'fixed inset-0 top-0 z-30 bg-foreground/20 backdrop-blur-sm transition-opacity duration-medium lg:hidden',
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        aria-hidden={!isMenuOpen}
        className={cn(
          'fixed right-0 top-0 z-40 flex h-dvh w-full max-w-sm flex-col border-l border-border bg-background px-6 pb-8 pt-24 shadow-lift transition-transform duration-slow ease-refined lg:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        id="mobile-navigation"
        inert={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="grid gap-1">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      'block rounded-soft px-4 py-4 font-serif text-2xl font-semibold text-foreground transition hover:bg-surfaceWarm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                      isActive && 'bg-surfaceWarm',
                    )
                  }
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto grid gap-4 border-t border-border pt-6">
          <a className="font-semibold text-foreground" href={contactDetails.phoneHref}>
            {contactDetails.phoneLabel}
          </a>
          <Button href="/#contact" onClick={() => setIsMenuOpen(false)}>
            Get Free Estimate
          </Button>
        </div>
      </aside>
    </header>
  );
}

import { useEffect } from 'react';

import notFoundKitchen from '@/assets/404/kitchen-up-404.webp';
import kitchenUpLogo from '@/assets/kitchen-up-logo.png';
import { Button } from '@/components/ui/Button';

export function NotFoundPage() {
  const homeHref = new URL(import.meta.env.BASE_URL, window.location.origin).toString();

  useEffect(() => {
    const robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');

    if (robotsMeta) {
      robotsMeta.content = 'noindex, follow';
    }

    document.title = 'Page Not Found | Kitchen Up';
  }, []);

  return (
    <section className="min-h-[calc(100svh-82px)] bg-surfaceWarm px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto grid w-full max-w-container gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <img
            alt="Kitchen Up Cabinet Design and Installation"
            className="h-auto w-48 object-contain sm:w-56"
            src={kitchenUpLogo}
          />

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            404
          </p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-none text-foreground sm:text-6xl lg:text-7xl">
            Something went wrong.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-8 text-muted sm:text-xl">
            Sorry, we couldn't find this page.
          </p>

          <Button className="mt-8" href={homeHref} size="lg">
            Back to Home
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-panel border border-white/60 bg-surface shadow-lift">
          <img
            alt="Kitchen Up cabinets standing strong after a damaged kitchen scene"
            className="h-auto w-full object-contain"
            decoding="async"
            fetchPriority="high"
            src={notFoundKitchen}
          />
        </div>
      </div>
    </section>
  );
}

import { useMemo, useRef, useState } from 'react';

import { LineIcon } from '@/components/icons/LineIcon';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import type { GalleryGroup } from '@/data/homepage';
import { cn } from '@/utils/cn';

type EditorialGalleryProps = {
  ctaHref?: string;
  ctaLabel?: string;
  eyebrow: string;
  groups: GalleryGroup[];
  title: string;
};

export function EditorialGallery({
  ctaHref,
  ctaLabel,
  eyebrow,
  groups,
  title,
}: EditorialGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeGroup = groups[activeIndex];

  const galleryId = useMemo(
    () => `${eyebrow.toLowerCase().replace(/\s+/g, '-')}-gallery`,
    [eyebrow],
  );

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + groups.length) % groups.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % groups.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 44) {
      return;
    }

    if (deltaX > 0) {
      showPrevious();
      return;
    }

    showNext();
  };

  return (
    <section
      className="bg-background py-20 sm:py-28"
      id={galleryId}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onTouchEnd={handleTouchEnd}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
    >
      <div className="mx-auto w-full max-w-container px-5 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted">
              {activeGroup.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label={`Previous ${eyebrow} gallery group`}
              className="grid size-12 place-items-center rounded-full border border-border bg-surface text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-walnut/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              type="button"
              onClick={showPrevious}
            >
              <LineIcon name="arrowLeft" />
            </button>
            <button
              aria-label={`Next ${eyebrow} gallery group`}
              className="grid size-12 place-items-center rounded-full border border-border bg-surface text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-walnut/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              type="button"
              onClick={showNext}
            >
              <LineIcon name="arrowRight" />
            </button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
          {activeGroup.images.map((image, index) => (
            <Reveal
              className={cn(
                'gallery-tile group overflow-hidden rounded-panel border border-white/70 bg-surface shadow-soft',
                index === 0 && 'min-h-[420px] lg:row-span-2 lg:min-h-[650px]',
                index !== 0 && 'min-h-[230px]',
              )}
              delay={
                index === 0 ? 'none' : index === 1 ? 'sm' : index === 2 ? 'md' : 'lg'
              }
              key={`${activeGroup.label}-${image.imageUrl}`}
            >
              <img
                alt={image.alt}
                className="h-full min-h-[inherit] w-full object-cover transition duration-slow ease-refined group-hover:scale-[1.025]"
                decoding="async"
                loading="lazy"
                src={image.imageUrl}
                style={{ objectPosition: image.position ?? 'center' }}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex gap-2"
            role="tablist"
            aria-label={`${eyebrow} gallery groups`}
          >
            {groups.map((group, index) => (
              <button
                aria-label={`Show ${group.label}`}
                aria-selected={activeIndex === index}
                className={cn(
                  'h-1.5 w-12 rounded-full transition duration-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
                  activeIndex === index ? 'bg-walnut' : 'bg-border hover:bg-primary/45',
                )}
                key={group.label}
                role="tab"
                type="button"
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          {ctaHref && ctaLabel ? (
            <Button href={ctaHref} variant="secondary">
              {ctaLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

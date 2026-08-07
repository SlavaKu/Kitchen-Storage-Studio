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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const activeGroup = groups[activeIndex];
  const activeImages = activeGroup.images;

  const galleryId = useMemo(
    () => `${eyebrow.toLowerCase().replace(/\s+/g, '-')}-gallery`,
    [eyebrow],
  );

  const showPrevious = () => {
    setActiveImageIndex(
      (current) => (current - 1 + activeImages.length) % activeImages.length,
    );
  };

  const showNext = () => {
    setActiveImageIndex((current) => (current + 1) % activeImages.length);
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

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    pointerStartX.current = event.clientX;
    pointerStartY.current = event.clientY;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null || pointerStartY.current === null) {
      return;
    }

    const deltaX = event.clientX - pointerStartX.current;
    const deltaY = event.clientY - pointerStartY.current;
    pointerStartX.current = null;
    pointerStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPrevious();
      return;
    }

    showNext();
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
    pointerStartY.current = null;
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
              aria-label={`Previous ${eyebrow} gallery image`}
              className="grid size-12 place-items-center rounded-full border border-border bg-surface text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-walnut/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              type="button"
              onClick={showPrevious}
            >
              <LineIcon name="arrowLeft" />
            </button>
            <button
              aria-label={`Next ${eyebrow} gallery image`}
              className="grid size-12 place-items-center rounded-full border border-border bg-surface text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-walnut/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              type="button"
              onClick={showNext}
            >
              <LineIcon name="arrowRight" />
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div
            className="coverflow"
            aria-live="polite"
            onPointerCancel={handlePointerCancel}
            onPointerDown={handlePointerDown}
            onPointerLeave={handlePointerCancel}
            onPointerUp={handlePointerUp}
          >
            {activeImages.map((image, index) => {
              const offset =
                (index - activeImageIndex + activeImages.length) % activeImages.length;
              const signedOffset =
                offset > activeImages.length / 2 ? offset - activeImages.length : offset;
              const isActive = signedOffset === 0;
              const isVisible = Math.abs(signedOffset) <= 2;

              return (
                <button
                  aria-label={`Show ${image.alt}`}
                  className={cn(
                    'coverflow-item group',
                    isActive && 'is-active',
                    !isVisible && 'is-hidden',
                  )}
                  key={`${activeGroup.label}-${image.imageUrl}`}
                  style={
                    {
                      '--coverflow-offset': signedOffset,
                      '--coverflow-depth': Math.abs(signedOffset),
                      zIndex: isActive ? 4 : 3 - Math.abs(signedOffset),
                    } as React.CSSProperties
                  }
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    decoding="async"
                    loading={isActive ? 'eager' : 'lazy'}
                    src={image.imageUrl}
                    style={{ objectPosition: image.position ?? 'center' }}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-4">
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
                  onClick={() => {
                    setActiveIndex(index);
                    setActiveImageIndex(0);
                  }}
                />
              ))}
            </div>
            <div
              className="flex gap-2"
              aria-label={`${eyebrow} image progress`}
              role="group"
            >
              {activeImages.map((image, index) => (
                <button
                  aria-label={`Show gallery image ${index + 1}`}
                  className={cn(
                    'size-2 rounded-full transition duration-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
                    activeImageIndex === index
                      ? 'bg-walnut'
                      : 'bg-border hover:bg-primary/45',
                  )}
                  key={image.imageUrl}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
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

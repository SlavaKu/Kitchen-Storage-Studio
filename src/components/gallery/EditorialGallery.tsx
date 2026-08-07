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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);

  const slides = useMemo(
    () =>
      groups.flatMap((group) =>
        group.images.map((image) => ({
          ...image,
          groupLabel: group.label,
          groupTitle: group.title,
        })),
      ),
    [groups],
  );

  const activeSlide = slides[activeImageIndex];

  const galleryId = useMemo(
    () => `${eyebrow.toLowerCase().replace(/\s+/g, '-')}-gallery`,
    [eyebrow],
  );

  const showPrevious = () => {
    setActiveImageIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveImageIndex((current) => (current + 1) % slides.length);
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
              {activeSlide.groupTitle}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div
            className="coverflow"
            aria-live="polite"
            aria-roledescription="carousel"
            onPointerCancel={handlePointerCancel}
            onPointerDown={handlePointerDown}
            onPointerLeave={handlePointerCancel}
            onPointerUp={handlePointerUp}
          >
            <button
              aria-label="Previous image"
              className="coverflow-arrow coverflow-arrow-left"
              type="button"
              onClick={showPrevious}
            >
              <LineIcon name="arrowLeft" />
            </button>

            {slides.map((image, index) => {
              const offset = (index - activeImageIndex + slides.length) % slides.length;
              const signedOffset =
                offset > slides.length / 2 ? offset - slides.length : offset;
              const isActive = signedOffset === 0;
              const isVisible = Math.abs(signedOffset) <= 1;

              return (
                <button
                  aria-label={`Show ${image.alt}`}
                  className={cn(
                    'coverflow-item group',
                    isActive && 'is-active',
                    !isVisible && 'is-hidden',
                  )}
                  key={`${image.groupLabel}-${image.imageUrl}`}
                  style={
                    {
                      '--coverflow-offset': signedOffset,
                      '--coverflow-depth': Math.abs(signedOffset),
                      zIndex: isActive ? 3 : 2,
                    } as React.CSSProperties
                  }
                  type="button"
                  onClick={() => {
                    if (!isActive && isVisible) {
                      setActiveImageIndex(index);
                    }
                  }}
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

            <button
              aria-label="Next image"
              className="coverflow-arrow coverflow-arrow-right"
              type="button"
              onClick={showNext}
            >
              <LineIcon name="arrowRight" />
            </button>
          </div>
        </Reveal>

        <div className="mt-6 flex flex-col gap-5 text-center sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {activeSlide.groupLabel}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">{activeSlide.alt}</p>
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

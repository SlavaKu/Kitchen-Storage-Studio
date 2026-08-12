import { useRef, useState } from 'react';

import { LineIcon } from '@/components/icons/LineIcon';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { kitchenStyles } from '@/data/homepage';
import { cn } from '@/utils/cn';

export function KitchenStylesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + kitchenStyles.length) % kitchenStyles.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % kitchenStyles.length);
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
    <section className="bg-surfaceWarm py-20 sm:py-24" id="kitchen-styles">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Kitchen Options"
            subtitle="Browse realistic cabinet directions for apartments, rentals, and practical Bay Area homes."
            title="Example kitchens you can choose from."
          />
        </Reveal>

        <Reveal className="mt-9">
          <div
            aria-live="polite"
            aria-roledescription="carousel"
            className="style-carousel"
            onPointerCancel={handlePointerCancel}
            onPointerDown={handlePointerDown}
            onPointerLeave={handlePointerCancel}
            onPointerUp={handlePointerUp}
          >
            <button
              aria-label="Previous kitchen option"
              className="style-carousel-arrow style-carousel-arrow-left"
              type="button"
              onClick={showPrevious}
            >
              <LineIcon name="arrowLeft" />
            </button>

            {kitchenStyles.map((style, index) => {
              const offset =
                (index - activeIndex + kitchenStyles.length) % kitchenStyles.length;
              const signedOffset =
                offset > kitchenStyles.length / 2
                  ? offset - kitchenStyles.length
                  : offset;
              const isActive = signedOffset === 0;
              const isVisible = Math.abs(signedOffset) <= 1;

              return (
                <article
                  aria-hidden={!isVisible}
                  className={cn(
                    'style-carousel-card',
                    isActive && 'is-active',
                    !isVisible && 'is-hidden',
                  )}
                  key={style.title}
                  style={
                    {
                      '--style-offset': signedOffset,
                      '--style-depth': Math.abs(signedOffset),
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt={style.alt}
                    className="h-full w-full object-cover"
                    decoding="async"
                    loading={isVisible ? 'eager' : 'lazy'}
                    src={style.imageUrl}
                    style={{ objectPosition: style.position ?? 'center' }}
                  />
                  <div className="style-carousel-content">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Kitchen Option
                    </p>
                    <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-foreground">
                      {style.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{style.summary}</p>
                  </div>
                </article>
              );
            })}

            <button
              aria-label="Next kitchen option"
              className="style-carousel-arrow style-carousel-arrow-right"
              type="button"
              onClick={showNext}
            >
              <LineIcon name="arrowRight" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

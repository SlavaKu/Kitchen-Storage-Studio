import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { heroSlides } from '@/data/heroSlides';
import { cn } from '@/utils/cn';

const slideDuration = 10000;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, slideDuration);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="overflow-hidden bg-background">
      <Container className="grid min-h-[calc(100svh-82px)] items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase leading-7 tracking-[0.22em] text-primary">
            BEAUTIFUL.
            <br />
            FUNCTIONAL.
            <br />
            AFFORDABLE.
          </p>
          <h1 className="mt-7 font-serif text-5xl font-semibold leading-[0.96] text-foreground sm:text-6xl lg:text-7xl">
            Smart Spaces.
            <br />
            Better Living.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-muted">
            Premium cabinetry and storage planning for kitchens, closets, garages, and
            refined everyday spaces.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Get Free Design
            </Button>
            <Button href="/projects" size="lg" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>

        <div className="hero-media relative min-h-[430px] overflow-hidden rounded-panel border border-white/70 bg-surface shadow-lift sm:min-h-[540px] lg:min-h-[690px]">
          {heroSlides.map((slide, index) => (
            <figure
              aria-hidden={activeSlide !== index}
              className={cn(
                'absolute inset-0 transition-opacity duration-hero ease-refined',
                activeSlide === index ? 'opacity-100' : 'opacity-0',
              )}
              key={slide.imageUrl}
            >
              <img
                alt={slide.eyebrow}
                className={cn(
                  'hero-image h-full w-full object-cover',
                  activeSlide === index && 'is-active',
                )}
                decoding={index === 0 ? 'sync' : 'async'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index === 0 ? 'eager' : 'lazy'}
                src={slide.imageUrl}
                style={{ objectPosition: slide.position }}
              />
              <div className="absolute inset-0" style={{ background: slide.overlay }} />
            </figure>
          ))}

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <div className="max-w-md rounded-soft border border-white/30 bg-foreground/20 p-5 text-white shadow-soft backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
                {heroSlides[activeSlide].eyebrow}
              </p>
              <p className="mt-2 font-serif text-2xl font-semibold leading-tight">
                {heroSlides[activeSlide].title}
              </p>
            </div>

            <div
              aria-label="Hero image progress"
              className="mt-5 grid grid-cols-4 gap-3"
              role="group"
            >
              {heroSlides.map((slide, index) => (
                <button
                  aria-label={`Show ${slide.eyebrow}`}
                  className="group h-7 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                >
                  <span className="block h-px overflow-hidden rounded-full bg-white/35">
                    <span
                      className={cn(
                        'block h-full origin-left bg-white',
                        activeSlide === index && 'hero-progress',
                        activeSlide > index && 'scale-x-100',
                      )}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

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
    <section className="hero-full relative isolate min-h-[min(700px,calc(100svh-118px))] overflow-hidden bg-foreground text-white">
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
        </figure>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(29_19_14/0.76)_0%,rgb(45_31_24/0.58)_34%,rgb(45_31_24/0.18)_63%,rgb(45_31_24/0.06)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(29_19_14/0.18)_0%,transparent_35%,rgb(29_19_14/0.30)_100%)]" />

      <Container className="relative z-10 flex min-h-[min(700px,calc(100svh-118px))] items-center py-10 sm:py-12">
        <div className="max-w-3xl py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/78">
            Kitchen Cabinets
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[0.94] text-white sm:text-6xl lg:text-7xl">
            Designed.
            <br />
            Delivered. Installed.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/78 sm:text-xl">
            Affordable kitchen solutions for Bay Area homes, rentals, and apartments.
          </p>
          <p className="mt-5 max-w-2xl text-sm font-semibold uppercase tracking-[0.14em] text-white/82 sm:text-base">
            FREE ESTIMATE • SAME-DAY MEASUREMENT AVAILABLE
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/#contact" size="lg">
              Get Free Estimate
            </Button>
            <Button href="/#kitchen-gallery" size="lg">
              See Kitchen Options
            </Button>
          </div>
        </div>
      </Container>

      <div
        aria-label="Hero image progress"
        className="absolute inset-x-0 bottom-7 z-10 mx-auto grid w-[min(560px,calc(100%-40px))] grid-cols-4 gap-3"
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
    </section>
  );
}

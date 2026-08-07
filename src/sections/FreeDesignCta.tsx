import { LineIcon } from '@/components/icons/LineIcon';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function FreeDesignCta() {
  return (
    <section className="bg-background py-20 sm:py-28" id="free-design">
      <Container>
        <Reveal className="overflow-hidden rounded-panel border border-border bg-walnut text-white shadow-lift">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.72fr] lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
                Free Design
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
                Get Your Free Design
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                Upload photos of your space and receive a design and estimate.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  className="bg-white text-walnut hover:bg-surfaceWarm"
                  href="/contact"
                >
                  Upload Photos
                </Button>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                  No obligation. No credit card required.
                </p>
              </div>
            </div>
            <div className="grid place-items-center rounded-panel border border-white/18 bg-white/8 p-8">
              <div className="grid size-28 place-items-center rounded-full border border-white/24 text-white">
                <LineIcon className="size-12" name="camera" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

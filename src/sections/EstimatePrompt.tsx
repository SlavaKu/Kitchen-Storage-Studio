import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { contactDetails } from '@/data/homepage';

export function EstimatePrompt() {
  return (
    <section className="bg-surfaceWarm py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-6 border-y border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Free Estimate
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Ready to plan your kitchen?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              Get a free estimate and schedule your measurement.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/#contact">Get Free Estimate</Button>
            <Button href={contactDetails.phoneHref}>Call Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

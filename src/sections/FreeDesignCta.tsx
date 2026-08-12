import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Input, Textarea } from '@/components/ui/FormControls';

export function FreeDesignCta() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="bg-background py-20 sm:py-28" id="contact">
      <Container>
        <Reveal className="overflow-hidden rounded-panel border border-border bg-walnut shadow-lift">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.86fr_1.14fr] lg:p-14">
            <div className="text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
                Free Kitchen Design
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
                Start with a simple kitchen plan.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                Send a few details about your kitchen and the first design conversation
                can start with the room you actually have.
              </p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                Free design consultation. No obligation.
              </p>
            </div>
            <form
              className="grid gap-4 rounded-panel border border-white/18 bg-surface p-5 shadow-soft sm:p-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  autoComplete="name"
                  id="lead-name"
                  label="Name *"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <Input
                  autoComplete="tel"
                  id="lead-phone"
                  label="Phone *"
                  name="phone"
                  placeholder="Your phone"
                  required
                  type="tel"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  autoComplete="email"
                  id="lead-email"
                  label="Email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
                <Input
                  autoComplete="address-level2"
                  id="lead-city"
                  label="City *"
                  name="city"
                  placeholder="Bay Area"
                  required
                />
              </div>
              <Textarea
                id="lead-message"
                label="Project Notes"
                name="message"
                placeholder="Tell us a little about the kitchen you need."
              />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-muted">
                  Photos and uploads can be connected in a later phase.
                </p>
                <Button type="submit">Get My Free Kitchen Design</Button>
              </div>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { useState } from 'react';

import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Input, Textarea } from '@/components/ui/FormControls';

const basinEndpoint = 'https://usebasin.com/f/369f7e771fa5';

export function FreeDesignCta() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>(
    'idle',
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const response = await fetch(basinEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Basin submission failed.');
      }

      form.reset();
      setSubmissionStatus('success');
    } catch {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background py-20 sm:py-28" id="contact">
      <Container>
        <Reveal className="overflow-hidden rounded-panel border border-border bg-walnut shadow-lift">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.86fr_1.14fr] lg:p-14">
            <div className="text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
                Free Kitchen Estimate
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
                Get Your Free Kitchen Estimate
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                Send a few details about your kitchen and schedule your measurement.
              </p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                Free estimate. Same-day measurement available. No obligation.
              </p>
            </div>
            <form
              className="grid gap-4 rounded-panel border border-white/18 bg-surface p-5 shadow-soft sm:p-6"
              onSubmit={handleSubmit}
            >
              <input
                aria-hidden="true"
                autoComplete="off"
                className="hidden"
                name="_gotcha"
                tabIndex={-1}
                type="text"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  autoComplete="name"
                  id="lead-name"
                  label="Name (required)"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <Input
                  autoComplete="tel"
                  id="lead-phone"
                  label="Phone (required)"
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
                  label="Email (optional)"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
                <Input
                  autoComplete="address-level2"
                  id="lead-city"
                  label="City (required)"
                  name="city"
                  placeholder="Bay Area"
                  required
                />
              </div>
              <Textarea
                id="lead-message"
                label="Project Notes (optional)"
                name="message"
                placeholder="Tell us a little about the kitchen you need."
              />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-muted">
                  Photos and uploads can be connected in a later phase.
                </p>
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? 'Sending...' : 'Get My Free Estimate'}
                </Button>
              </div>
              <div aria-live="polite" className="min-h-6" role="status">
                {submissionStatus === 'success' ? (
                  <p className="text-sm font-semibold leading-6 text-primary">
                    Thank you! We received your request and will contact you shortly.
                  </p>
                ) : null}
                {submissionStatus === 'error' ? (
                  <p className="text-sm font-semibold leading-6 text-primary">
                    Sorry, something went wrong. Please try again or call us directly.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

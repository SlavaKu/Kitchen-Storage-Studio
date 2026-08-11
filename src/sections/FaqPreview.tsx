import { useState } from 'react';

import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { faqs } from '@/data/homepage';
import { cn } from '@/utils/cn';

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surfaceWarm py-20 sm:py-28" id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionTitle
              eyebrow="Kitchen FAQ"
              subtitle="Practical answers for homeowners starting a kitchen cabinet project."
              title="Clear answers before the first kitchen design."
            />
          </Reveal>

          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <Reveal delay={index < 2 ? 'sm' : 'md'} key={faq.question}>
                  <article className="rounded-panel border border-border bg-surface shadow-soft">
                    <h3>
                      <button
                        aria-controls={panelId}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-serif text-xl font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        id={buttonId}
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      >
                        <span>{faq.question}</span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            'grid size-8 shrink-0 place-items-center rounded-full border border-border text-sm transition duration-medium',
                            isOpen && 'rotate-45 bg-surfaceWarm',
                          )}
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    <div
                      aria-labelledby={buttonId}
                      className={cn(
                        'grid transition-[grid-template-rows] duration-medium ease-refined',
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                      id={panelId}
                      role="region"
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-7 text-muted">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { LineIcon } from '@/components/icons/LineIcon';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { processSteps } from '@/data/homepage';

export function ProcessSection() {
  return (
    <section className="bg-surfaceWarm py-20 sm:py-28" id="process">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Simple Process"
            subtitle="A clear path from first photos to a finished installation."
            title="From idea to installed storage."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              className="relative"
              delay={
                index === 0 ? 'none' : index === 1 ? 'sm' : index === 2 ? 'md' : 'lg'
              }
              key={step.title}
            >
              <article className="relative h-full rounded-panel border border-border bg-surface p-6 shadow-soft">
                {index < processSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-16 top-10 hidden h-px w-[calc(100%+1.25rem)] bg-border lg:block"
                  />
                ) : null}
                <span className="relative z-10 grid size-14 place-items-center rounded-full bg-walnut text-white shadow-soft">
                  <LineIcon name={step.icon} />
                </span>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

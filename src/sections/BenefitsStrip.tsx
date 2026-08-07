import { LineIcon } from '@/components/icons/LineIcon';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { benefits } from '@/data/homepage';

export function BenefitsStrip() {
  return (
    <section className="border-y border-border bg-surfaceWarm/72 py-8" id="benefits">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal
              className="flex items-start gap-4 rounded-soft border border-border/70 bg-surface/60 p-5"
              delay={
                index === 0 ? 'none' : index === 1 ? 'sm' : index === 2 ? 'md' : 'lg'
              }
              key={benefit.title}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-background text-walnut">
                <LineIcon name={benefit.icon} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  {benefit.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted">
                  {benefit.summary}
                </span>
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

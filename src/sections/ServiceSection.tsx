import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import type { ServiceSection as ServiceSectionType } from '@/data/homepage';
import { cn } from '@/utils/cn';

type ServiceSectionProps = {
  section: ServiceSectionType;
};

export function ServiceSection({ section }: ServiceSectionProps) {
  const isOffset = section.variant === 'offset';
  const isBand = section.variant === 'band';

  return (
    <section
      className={cn(
        'relative py-20 sm:py-28',
        isBand ? 'bg-surfaceWarm' : 'bg-background',
      )}
      id={section.id}
    >
      <Container>
        <Reveal
          className={cn(
            'grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end',
            isOffset && 'lg:grid-cols-[1.1fr_0.9fr]',
          )}
        >
          <div className={cn(isOffset && 'lg:order-2')}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {section.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {section.title}
            </h2>
          </div>
          <div className={cn('max-w-xl', isOffset && 'lg:order-1')}>
            <p className="text-base leading-8 text-muted">{section.summary}</p>
            <Button className="mt-7" href={section.href}>
              {section.cta}
            </Button>
          </div>
        </Reveal>

        <div
          className={cn(
            'mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4',
            isOffset && 'xl:grid-cols-[1.05fr_0.95fr_1.05fr_0.95fr]',
          )}
        >
          {section.categories.map((category, index) => (
            <Reveal
              className={cn(index % 2 === 1 && isOffset && 'xl:mt-10')}
              delay={
                index === 0 ? 'none' : index === 1 ? 'sm' : index === 2 ? 'md' : 'lg'
              }
              key={category.title}
            >
              <article className="group h-full overflow-hidden rounded-panel border border-border bg-surface shadow-soft transition duration-medium hover:-translate-y-1 hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden bg-surfaceWarm">
                  <img
                    alt={category.alt}
                    className="h-full w-full object-cover transition duration-slow ease-refined group-hover:scale-[1.035]"
                    decoding="async"
                    loading="lazy"
                    src={category.imageUrl}
                    style={{ objectPosition: category.position ?? 'center' }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {section.eyebrow}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{category.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

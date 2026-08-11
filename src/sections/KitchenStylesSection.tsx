import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { kitchenStyles } from '@/data/homepage';

export function KitchenStylesSection() {
  return (
    <section className="bg-surfaceWarm py-20 sm:py-28" id="kitchen-styles">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Kitchen Styles"
            subtitle="Seven kitchen directions prepared for future detail pages and customer examples."
            title="Example kitchens with a polished but practical range."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {kitchenStyles.map((style, index) => (
            <Reveal
              className={index === 0 ? 'xl:col-span-2 xl:row-span-2' : undefined}
              delay={
                index === 0 ? 'none' : index === 1 ? 'sm' : index === 2 ? 'md' : 'lg'
              }
              key={style.title}
            >
              <article className="group h-full overflow-hidden rounded-panel border border-border bg-surface shadow-soft transition duration-medium hover:-translate-y-1 hover:shadow-lift">
                <div
                  className={
                    index === 0
                      ? 'aspect-[4/3] overflow-hidden bg-background xl:h-full xl:min-h-[420px]'
                      : 'aspect-[4/3] overflow-hidden bg-background'
                  }
                >
                  <img
                    alt={style.alt}
                    className="h-full w-full object-cover transition duration-slow ease-refined group-hover:scale-[1.035]"
                    decoding="async"
                    loading="lazy"
                    src={style.imageUrl}
                    style={{ objectPosition: style.position ?? 'center' }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Kitchen Concept
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-foreground">
                    {style.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{style.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

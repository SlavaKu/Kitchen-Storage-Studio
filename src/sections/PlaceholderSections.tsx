import { FeatureCard } from '@/components/cards/FeatureCard';
import { Container } from '@/components/ui/Container';
import { Divider } from '@/components/ui/Divider';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { placeholderSections } from '@/data/placeholders';

export function PlaceholderSections() {
  return (
    <>
      <section className="bg-surfaceWarm py-20 sm:py-24" id="benefits">
        <Container>
          <SectionTitle
            eyebrow="Foundation"
            subtitle="These simple sections establish spacing, hierarchy, and scrolling behavior for future content."
            title="Built for the full Kitchen & Storage Studio experience."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {placeholderSections.map((section) => (
              <FeatureCard
                eyebrow={section.eyebrow}
                key={section.id}
                summary={section.summary}
                title={section.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-24" id="footer">
        <Container>
          <Divider />
          <footer className="flex flex-col gap-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-2xl font-semibold text-foreground">
              Kitchen & Storage Studio
            </p>
            <p>Premium cabinetry foundation ready for future phases.</p>
          </footer>
        </Container>
      </section>
    </>
  );
}

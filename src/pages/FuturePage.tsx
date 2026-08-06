import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

type FuturePageProps = {
  eyebrow: string;
  title: string;
};

export function FuturePage({ eyebrow, title }: FuturePageProps) {
  return (
    <section className="min-h-[calc(100svh-82px)] bg-background py-20">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          subtitle="This page route is prepared for future development. The full page experience will be designed in a later phase."
          title={title}
        />
      </Container>
    </section>
  );
}

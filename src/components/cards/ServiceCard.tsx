import { FeatureCard } from '@/components/cards/FeatureCard';

type ServiceCardProps = {
  title: string;
  summary: string;
};

export function ServiceCard({ summary, title }: ServiceCardProps) {
  return <FeatureCard eyebrow="Service" summary={summary} title={title} />;
}

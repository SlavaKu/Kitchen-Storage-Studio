import { cn } from '@/utils/cn';

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  summary: string;
  className?: string;
};

export function FeatureCard({ className, eyebrow, summary, title }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'rounded-panel border border-border bg-surface p-6 shadow-soft transition duration-medium hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted">{summary}</p>
    </article>
  );
}

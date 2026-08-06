import { cn } from '@/utils/cn';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionTitle({ className, eyebrow, subtitle, title }: SectionTitleProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}

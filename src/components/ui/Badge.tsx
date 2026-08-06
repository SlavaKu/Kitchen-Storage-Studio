import { cn } from '@/utils/cn';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-border bg-surfaceWarm px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}

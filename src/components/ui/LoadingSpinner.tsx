import { cn } from '@/utils/cn';

type LoadingSpinnerProps = {
  className?: string;
  label?: string;
};

export function LoadingSpinner({ className, label = 'Loading' }: LoadingSpinnerProps) {
  return (
    <span
      aria-label={label}
      className={cn(
        'inline-block size-6 animate-spin rounded-full border-2 border-border border-t-primary',
        className,
      )}
      role="status"
    />
  );
}

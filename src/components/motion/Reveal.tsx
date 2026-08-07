import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 'none' | 'sm' | 'md' | 'lg';
};

const delays: Record<NonNullable<RevealProps['delay']>, string> = {
  none: '',
  sm: 'delay-100',
  md: 'delay-200',
  lg: 'delay-300',
};

export function Reveal({ children, className, delay = 'none' }: RevealProps) {
  const { isInView, ref } = useInView<HTMLDivElement>();

  return (
    <div
      className={cn(
        'reveal transition duration-slow ease-refined',
        delays[delay],
        isInView && 'is-visible',
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
}

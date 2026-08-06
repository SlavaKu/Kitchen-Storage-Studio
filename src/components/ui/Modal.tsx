import { cn } from '@/utils/cn';

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  labelledBy?: string;
};

export function Modal({ children, className, isOpen, labelledBy }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-labelledby={labelledBy}
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-foreground/30 p-5 backdrop-blur-sm"
      role="dialog"
    >
      <div
        className={cn(
          'w-full max-w-lg rounded-panel bg-surface p-6 shadow-lift',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

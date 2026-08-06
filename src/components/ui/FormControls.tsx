import { cn } from '@/utils/cn';

type FieldProps = {
  className?: string;
  label?: string;
};

type InputProps = FieldProps & React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type SelectProps = FieldProps & React.SelectHTMLAttributes<HTMLSelectElement>;

const fieldClassName =
  'w-full rounded-soft border border-border bg-surface px-4 py-3 text-sm text-foreground shadow-none transition duration-medium placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10';

export function Input({ className, label, id, ...props }: InputProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor={id}>
      {label ? <span>{label}</span> : null}
      <input className={cn(fieldClassName, className)} id={id} {...props} />
    </label>
  );
}

export function Textarea({ className, label, id, ...props }: TextareaProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor={id}>
      {label ? <span>{label}</span> : null}
      <textarea
        className={cn(fieldClassName, 'min-h-32 resize-y', className)}
        id={id}
        {...props}
      />
    </label>
  );
}

export function Select({ children, className, label, id, ...props }: SelectProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor={id}>
      {label ? <span>{label}</span> : null}
      <select className={cn(fieldClassName, className)} id={id} {...props}>
        {children}
      </select>
    </label>
  );
}

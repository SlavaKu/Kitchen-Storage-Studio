import { Link } from 'react-router-dom';

import type { ComponentSize, ComponentVariant } from '@/types/styles';
import { cn } from '@/utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ComponentVariant;
  size?: ComponentSize;
  onClick?: () => void;
};

const variants: Record<ComponentVariant, string> = {
  primary: 'wood-button text-white shadow-soft hover:-translate-y-px hover:shadow-lift',
  secondary:
    'wood-button text-white shadow-soft hover:-translate-y-px hover:shadow-lift',
  ghost: 'wood-button text-white shadow-soft hover:-translate-y-px hover:shadow-lift',
};

const sizes: Record<ComponentSize, string> = {
  sm: 'min-h-10 px-4 text-xs',
  md: 'min-h-12 px-6 text-sm',
  lg: 'min-h-14 px-8 text-sm',
};

export function Button({
  children,
  className,
  href,
  onClick,
  size = 'md',
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const isExternalHref = href
    ? /^(https?:|tel:|mailto:)/.test(href)
    : false;
  const buttonClassName = cn(
    'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.14em] transition duration-medium ease-refined focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (isExternalHref) {
      return (
        <a className={buttonClassName} href={href} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link className={buttonClassName} to={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

import { cn } from '@/utils/cn';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

export function Image({ alt, className, wrapperClassName, ...props }: ImageProps) {
  return (
    <span className={cn('block overflow-hidden bg-surfaceWarm', wrapperClassName)}>
      <img
        alt={alt}
        className={cn('h-full w-full object-cover', className)}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </span>
  );
}

import { cn } from '@/utils/cn';

export type SocialIconName = 'facebook' | 'instagram' | 'tiktok' | 'yelp';

type SocialIconProps = {
  className?: string;
  name: SocialIconName;
};

const paths: Record<SocialIconName, React.ReactNode> = {
  facebook: (
    <path d="M14.2 8.1V6.6c0-.7.5-.9.9-.9h2.2V2.1L14.2 2c-3.4 0-5 2-5 5v1.1H6v4h3.2V22h4.1v-9.9h3.2l.5-4z" />
  ),
  instagram: (
    <>
      <path d="M7.4 2h9.2A5.4 5.4 0 0 1 22 7.4v9.2a5.4 5.4 0 0 1-5.4 5.4H7.4A5.4 5.4 0 0 1 2 16.6V7.4A5.4 5.4 0 0 1 7.4 2Zm0 2A3.4 3.4 0 0 0 4 7.4v9.2A3.4 3.4 0 0 0 7.4 20h9.2a3.4 3.4 0 0 0 3.4-3.4V7.4A3.4 3.4 0 0 0 16.6 4z" />
      <path d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
      <circle cx="17.1" cy="6.9" r="1.2" />
    </>
  ),
  tiktok: (
    <path d="M15.8 2c.3 2.5 1.7 4 4.2 4.2v4a8.2 8.2 0 0 1-4.1-1.3v6.3c0 4-2.6 6.8-6.5 6.8C6 22 4 19.8 4 16.9c0-3.4 2.8-5.9 6.4-5.5v4a2 2 0 0 0-2.4 1.8c0 1 .8 1.6 1.8 1.6 1.3 0 2-.8 2-2.5V2z" />
  ),
  yelp: (
    <path d="M11.5 2.1c1.4-.4 2.7.6 2.7 2.1v5.5c0 .7-.8 1-1.3.6L9.2 6.2a1.9 1.9 0 0 1 .8-3.1zm5.9 7.2 3.1 1.8c1.3.8 1.3 2.6 0 3.3l-4.8 2.7c-.6.3-1.3-.2-1.1-.9l1-5.2c.1-.7 1.1-1.1 1.8-.7zM13.1 18l2.4 2.7c1 1.1.3 2.9-1.2 3.1l-3.5.4a1.9 1.9 0 0 1-1.8-2.8l2.6-4.6c.4-.6 1.3-.5 1.5.2zm-5.6-2.7-5.1.9a1.9 1.9 0 0 1-2.1-2.5l1.3-3.3c.5-1.4 2.3-1.8 3.3-.7l3.5 3.9c.5.6-.1 1.6-.9 1.7zm1.3-4.5-5.1-2.2A1.9 1.9 0 0 1 3 5.5l2.7-2.3a1.9 1.9 0 0 1 3 .9l1.6 5c.2.8-.8 1.4-1.5 1.1z" />
  ),
};

export function SocialIcon({ className, name }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn('size-5', className)}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

import { cn } from '@/utils/cn';

export type LineIconName =
  | 'arrowLeft'
  | 'arrowRight'
  | 'cabinet'
  | 'camera'
  | 'check'
  | 'cube'
  | 'home'
  | 'map'
  | 'measure'
  | 'phone'
  | 'spark'
  | 'tools'
  | 'wallet'
  | 'whatsapp';

type LineIconProps = {
  className?: string;
  name: LineIconName;
};

const paths: Record<LineIconName, React.ReactNode> = {
  arrowLeft: <path d="M15 6l-6 6 6 6M9 12h12" />,
  arrowRight: <path d="M9 6l6 6-6 6M3 12h12" />,
  cabinet: (
    <>
      <path d="M5 4h14v16H5z" />
      <path d="M12 4v16M8 11h1M15 11h1" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
      <circle cx="12" cy="13.5" r="3" />
    </>
  ),
  check: <path d="M5 12.5l4 4L19 7" />,
  cube: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  map: (
    <>
      <path d="M9 18l-5 2V6l5-2 6 2 5-2v14l-5 2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  measure: (
    <>
      <path d="M4 17L17 4l3 3L7 20z" />
      <path d="M14 7l3 3M11 10l2 2M8 13l3 3" />
    </>
  ),
  phone: (
    <path d="M8 5l2.2 4.8-1.4 1.1a11 11 0 0 0 4.3 4.3l1.1-1.4L19 16v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 7.2 2 2 0 0 1 5 5z" />
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z" />
    </>
  ),
  tools: (
    <>
      <path d="M14 6l4 4M16 4l4 4-9 9H7v-4z" />
      <path d="M6 18l-2 2M5 5l5 5" />
    </>
  ),
  wallet: (
    <>
      <path d="M4 7h15v12H4z" />
      <path d="M4 9h15M16 14h3" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M5.5 19.2l.9-3.1A7.5 7.5 0 1 1 9 18.5z" />
      <path d="M9.4 8.8c.2-.5.4-.5.7-.5h.4c.2 0 .4.1.5.4l.7 1.6c.1.3.1.4-.1.6l-.4.5c.6 1.1 1.4 1.9 2.5 2.5l.5-.4c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.4c0 .3 0 .5-.5.7-.5.3-1.1.4-1.8.2-2.9-.8-5.2-3.1-6-6-.2-.7-.1-1.3.2-1.8z" />
    </>
  ),
};

export function LineIcon({ className, name }: LineIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn('size-6', className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

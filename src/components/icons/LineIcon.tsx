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
  | 'spark'
  | 'tools'
  | 'wallet';

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

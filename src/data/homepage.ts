import type { LineIconName } from '@/components/icons/LineIcon';

export type Benefit = {
  icon: LineIconName;
  title: string;
  summary: string;
};

export type Story = {
  id: string;
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
  imageUrl: string;
  alt: string;
  position: string;
};

export type ServiceCategory = {
  title: string;
  summary: string;
  imageUrl: string;
  alt: string;
  position?: string;
};

export type ServiceSection = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  cta: string;
  href: string;
  categories: ServiceCategory[];
  variant: 'grid' | 'offset' | 'band';
};

export type GalleryImage = {
  alt: string;
  imageUrl: string;
  position?: string;
};

export type GalleryGroup = {
  label: string;
  title: string;
  images: GalleryImage[];
};

export type ProcessStep = {
  icon: LineIconName;
  title: string;
  summary: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const contactDetails = {
  phoneLabel: '(000) 000-0000',
  phoneHref: 'tel:+10000000000',
  emailLabel: 'hello@example.com',
  emailHref: 'mailto:hello@example.com',
};

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Yelp', href: '#' },
];

export const benefits: Benefit[] = [
  {
    icon: 'cube',
    title: 'Free Kitchen Design',
    summary: 'A simple visual plan before you decide.',
  },
  {
    icon: 'wallet',
    title: 'Affordable Choices',
    summary: 'Clean cabinet options without inflated showroom pricing.',
  },
  {
    icon: 'measure',
    title: 'Measured Planning',
    summary: 'Layouts shaped around your kitchen dimensions.',
  },
  {
    icon: 'tools',
    title: 'Professional Install',
    summary: 'Cabinets delivered and installed with a clean process.',
  },
];

export const stories: Story[] = [
  {
    id: 'kitchen-design-story',
    eyebrow: 'Kitchen Design',
    title: 'A kitchen planned around your layout, budget, and daily routine.',
    cta: 'Start Free Design',
    href: '/#contact',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1800&q=82',
    alt: 'Bright white kitchen with simple cabinets and natural light',
    position: 'center',
  },
  {
    id: 'kitchen-process-story',
    eyebrow: 'Kitchen Process',
    title: 'Clear steps from first photos to finished kitchen cabinets.',
    cta: 'See How It Works',
    href: '/#how-it-works',
    imageUrl:
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1800&q=82',
    alt: 'Light kitchen with white cabinets and a compact island',
    position: 'center',
  },
  {
    id: 'kitchen-style-story',
    eyebrow: 'Kitchen Styles',
    title: 'Choose a kitchen look that feels polished and easy to live with.',
    cta: 'View Styles',
    href: '/#kitchen-styles',
    imageUrl:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=82',
    alt: 'Two tone kitchen with island and bright counters',
    position: 'center',
  },
  {
    id: 'kitchen-contact-story',
    eyebrow: 'Free Kitchen Design',
    title: 'Send a few details and start with a kitchen plan you can understand.',
    cta: 'Open Form',
    href: '/#contact',
    imageUrl:
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1800&q=82',
    alt: 'White kitchen cabinets with a clean countertop',
    position: 'center',
  },
];

export const kitchenGalleryGroups: GalleryGroup[] = [
  {
    label: 'Light Kitchens',
    title:
      'Bright kitchen layouts with clean cabinets, useful counters, and realistic finishes.',
    images: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=82',
        alt: 'Bright kitchen with white cabinets and a compact island',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80',
        alt: 'Clean white kitchen countertop and upper cabinets',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=900&q=80',
        alt: 'Modern kitchen shelving and cabinetry',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80',
        alt: 'Small kitchen with natural light',
      },
    ],
  },
  {
    label: 'Warm Kitchens',
    title: 'Warm kitchen finishes that keep the room inviting without feeling overdone.',
    images: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
        alt: 'Warm two tone kitchen cabinetry with stone counters',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=900&q=80',
        alt: 'Kitchen cabinet detail with warm finishes',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
        alt: 'Kitchen with wood accents and bright light',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
        alt: 'Two tone kitchen inspiration with island',
      },
    ],
  },
];

export const kitchenStyles: ServiceCategory[] = [
  {
    title: 'White Shaker',
    summary: 'A clean, familiar kitchen style with bright cabinets and simple hardware.',
    imageUrl:
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80',
    alt: 'White shaker kitchen cabinets with a clean countertop',
  },
  {
    title: 'Modern Flat Panel',
    summary: 'Smooth cabinet fronts for a calm modern kitchen.',
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern flat panel kitchen cabinetry',
  },
  {
    title: 'Warm Wood',
    summary: 'Natural tones that make a practical kitchen feel welcoming.',
    imageUrl:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    alt: 'Kitchen with warm wood accents and bright light',
  },
  {
    title: 'Two-Tone',
    summary: 'Balanced contrast for a kitchen that feels custom and approachable.',
    imageUrl:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    alt: 'Two tone kitchen with island and light counters',
  },
  {
    title: 'Compact Apartment',
    summary: 'Efficient cabinet planning for smaller kitchens.',
    imageUrl:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80',
    alt: 'Compact apartment kitchen with natural light',
  },
  {
    title: 'Light Contemporary',
    summary: 'Bright finishes, clean counters, and everyday ease.',
    imageUrl:
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=900&q=80',
    alt: 'Light contemporary kitchen shelving and cabinetry',
  },
  {
    title: 'Family Kitchen',
    summary: 'Durable cabinets and clear zones for busy daily cooking.',
    imageUrl:
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=80',
    alt: 'Family kitchen with white cabinets and compact island',
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: 'home',
    title: 'Get In Touch',
    summary:
      'Tell us what kind of kitchen you need. Call, text, or request a free design.',
  },
  {
    icon: 'measure',
    title: 'Choose & Measure',
    summary: 'We help choose the direction and take accurate property measurements.',
  },
  {
    icon: 'cube',
    title: 'Design & Approve',
    summary: 'Review the layout, cabinet options, and project price before approving.',
  },
  {
    icon: 'tools',
    title: 'Delivery & Installation',
    summary: 'Your kitchen is ordered, delivered, and professionally installed.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'How does the free kitchen design process work?',
    answer:
      'Start by calling, texting, or requesting a free design. From there, the kitchen direction, measurements, layout, cabinet options, and estimate can be reviewed before you decide what comes next.',
  },
  {
    question: 'Do my kitchen measurements need to be exact?',
    answer:
      'Approximate measurements are enough to start. Final cabinet dimensions and details can be confirmed before ordering and installation.',
  },
  {
    question: 'Can you help with small kitchens or apartments?',
    answer:
      'Yes. Compact kitchens can benefit from careful cabinet planning, better use of corners, and simpler finish choices that keep the room feeling open.',
  },
  {
    question: 'What affects the price of a kitchen cabinet project?',
    answer:
      'Price depends on kitchen size, cabinet style, finish selection, layout complexity, and installation needs. The estimate should make those choices easy to understand.',
  },
  {
    question: 'Is installation included in the kitchen process?',
    answer:
      'The site is prepared around a design-to-installation kitchen workflow. Final scheduling and scope can be confirmed when real project details are collected.',
  },
];

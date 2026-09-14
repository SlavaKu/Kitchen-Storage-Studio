import realKitchenProject01 from '@/assets/kitchen-projects/real-kitchen-cabinet-installation-01.webp';
import realKitchenProject02 from '@/assets/kitchen-projects/real-kitchen-cabinet-installation-02.webp';
import realKitchenProject03 from '@/assets/kitchen-projects/real-kitchen-cabinet-installation-03.webp';
import realKitchenProject04 from '@/assets/kitchen-projects/real-kitchen-cabinet-installation-04.webp';
import realKitchenProject05 from '@/assets/kitchen-projects/real-kitchen-cabinet-installation-05.webp';
import kitchenDesignOption01 from '@/assets/kitchen-variants/kitchen-design-option-01.webp';
import kitchenDesignOption02 from '@/assets/kitchen-variants/kitchen-design-option-02.webp';
import kitchenDesignOption03 from '@/assets/kitchen-variants/kitchen-design-option-03.webp';
import kitchenDesignOption04 from '@/assets/kitchen-variants/kitchen-design-option-04.webp';
import kitchenDesignOption05 from '@/assets/kitchen-variants/kitchen-design-option-05.webp';
import kitchenDesignOption06 from '@/assets/kitchen-variants/kitchen-design-option-06.webp';
import kitchenStoryBackground05 from '@/assets/kitchen-backgrounds/custom-kitchen-cabinet-design-story-05.webp';
import kitchenStoryBackground06 from '@/assets/kitchen-backgrounds/kitchen-cabinet-process-story-06-updated.webp';
import kitchenStoryBackground07 from '@/assets/kitchen-backgrounds/free-kitchen-estimate-cabinet-installation-story-07.webp';
import type { LineIconName } from '@/components/icons/LineIcon';
import type { SocialIconName } from '@/components/icons/SocialIcon';

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
  href: string;
  icon: SocialIconName;
  label: string;
};

export const contactDetails = {
  phoneLabel: '+1 (650) 484-5564',
  phoneNumber: '+16504845564',
  phoneHref: 'tel:+16504845564',
  whatsappHref: 'https://wa.me/16504845564',
  emailLabel: 'hello@example.com',
  emailHref: 'mailto:hello@example.com',
};

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'TikTok', href: '#', icon: 'tiktok' },
  { label: 'Yelp', href: '#', icon: 'yelp' },
];

export const benefits: Benefit[] = [
  {
    icon: 'cube',
    title: 'Free Kitchen Estimate',
    summary: 'A simple estimate before you decide.',
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
    cta: 'Get Free Estimate',
    href: '/#contact',
    imageUrl: kitchenStoryBackground05,
    alt: 'Custom kitchen cabinet design background for Bay Area homes',
    position: 'center',
  },
  {
    id: 'kitchen-process-story',
    eyebrow: 'Kitchen Process',
    title: 'From choosing your kitchen to professional installation.',
    cta: 'See How It Works',
    href: '/#how-it-works',
    imageUrl: kitchenStoryBackground06,
    alt: 'Kitchen cabinet process background with modern cabinets and warm counters',
    position: 'center',
  },
  {
    id: 'kitchen-contact-story',
    eyebrow: 'Free Kitchen Estimate',
    title: 'Send a few details and start with a kitchen plan you can understand.',
    cta: 'Get Free Estimate',
    href: '/#contact',
    imageUrl: kitchenStoryBackground07,
    alt: 'Kitchen cabinet installation background for a free kitchen estimate',
    position: 'center',
  },
];

export const kitchenGalleryGroups: GalleryGroup[] = [
  {
    label: 'Real Kitchen Projects',
    title:
      'Completed kitchen cabinet projects with clean layouts, practical storage, and installed finishes.',
    images: [
      {
        imageUrl: realKitchenProject01,
        alt: 'Real kitchen cabinet installation with white shaker cabinets and a bright countertop',
      },
      {
        imageUrl: realKitchenProject02,
        alt: 'Real kitchen project with white cabinets, open shelving, and finished cabinet storage',
      },
      {
        imageUrl: realKitchenProject03,
        alt: 'Real kitchen remodel with installed upper cabinets and a clean working layout',
      },
      {
        imageUrl: realKitchenProject04,
        alt: 'Real kitchen cabinet project with white cabinetry, backsplash, and practical counter space',
      },
      {
        imageUrl: realKitchenProject05,
        alt: 'Real completed kitchen installation with bright cabinets and modern storage details',
      },
    ],
  },
];

export const kitchenStyles: ServiceCategory[] = [
  {
    title: 'White Shaker',
    summary: 'A clean, familiar kitchen style with bright cabinets and simple hardware.',
    imageUrl: kitchenDesignOption01,
    alt: 'White shaker kitchen cabinet design option with bright counters',
  },
  {
    title: 'Modern Flat Panel',
    summary: 'Smooth cabinet fronts for a calm modern kitchen.',
    imageUrl: kitchenDesignOption02,
    alt: 'Modern flat panel kitchen cabinet design with clean finishes',
  },
  {
    title: 'Warm Wood',
    summary: 'Natural tones that make a practical kitchen feel welcoming.',
    imageUrl: kitchenDesignOption03,
    alt: 'Warm wood kitchen cabinet option with natural cabinet tones',
  },
  {
    title: 'Two-Tone',
    summary: 'Balanced contrast for a kitchen that feels custom and approachable.',
    imageUrl: kitchenDesignOption04,
    alt: 'Two tone kitchen cabinet design option with balanced contrast',
  },
  {
    title: 'Compact Apartment',
    summary: 'Efficient cabinet planning for smaller kitchens.',
    imageUrl: kitchenDesignOption05,
    alt: 'Compact apartment kitchen cabinet option for smaller spaces',
  },
  {
    title: 'Light Contemporary',
    summary: 'Bright finishes, clean counters, and everyday ease.',
    imageUrl: kitchenDesignOption06,
    alt: 'Light contemporary kitchen cabinet design with bright finishes',
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: 'home',
    title: 'Get In Touch',
    summary:
      'Tell us what kind of kitchen you need. Call, text, or request a free estimate.',
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
    question: 'How does the free kitchen estimate process work?',
    answer:
      'Start by calling, texting, or requesting a free estimate. From there, the kitchen direction, measurements, layout, cabinet options, and estimate can be reviewed before you decide what comes next.',
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

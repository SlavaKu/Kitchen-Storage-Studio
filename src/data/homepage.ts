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

export const benefits: Benefit[] = [
  {
    icon: 'cube',
    title: 'Free 3D Design',
    summary: 'See your space before you buy',
  },
  {
    icon: 'wallet',
    title: 'Affordable Price',
    summary: 'Quality solutions at the right price',
  },
  {
    icon: 'tools',
    title: 'Professional Install',
    summary: 'Fast, clean and reliable service',
  },
  {
    icon: 'map',
    title: 'Local in Bay Area',
    summary: 'Proudly serving the Bay Area',
  },
];

export const stories: Story[] = [
  {
    id: 'kitchen-story',
    eyebrow: 'Kitchens',
    title: 'Designed around your space. Built around your budget.',
    cta: 'Explore Kitchens',
    href: '/kitchens',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1800&q=82',
    alt: 'Bright white apartment kitchen with simple cabinets and natural light',
    position: 'center',
  },
  {
    id: 'closet-story',
    eyebrow: 'Closets',
    title: 'More storage. Less clutter.',
    cta: 'Explore Closets',
    href: '/closets',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=82',
    alt: 'Organized residential closet with shelves, hanging areas and drawers',
    position: 'center',
  },
  {
    id: 'garage-story',
    eyebrow: 'Garage Storage',
    title: 'Everything has a place.',
    cta: 'Explore Garage Storage',
    href: '/garage-storage',
    imageUrl:
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1800&q=82',
    alt: 'Clean residential garage with practical storage and cabinets',
    position: 'center',
  },
];

export const serviceSections: ServiceSection[] = [
  {
    id: 'kitchens',
    eyebrow: 'Kitchens',
    title: 'Cabinetry that makes daily routines feel lighter.',
    summary:
      'Kitchen storage can feel refined without feeling out of reach. These categories create a flexible starting point for future kitchen style pages.',
    cta: 'Explore Kitchens',
    href: '/kitchens',
    variant: 'grid',
    categories: [
      {
        title: 'White Shaker',
        summary: 'Clean profiles, bright finishes, and familiar warmth.',
        imageUrl:
          'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80',
        alt: 'White shaker kitchen cabinets with a clean countertop',
      },
      {
        title: 'Modern Flat Panel',
        summary: 'Simple lines for apartments, condos, and modern homes.',
        imageUrl:
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
        alt: 'Modern flat panel kitchen cabinetry',
      },
      {
        title: 'Warm Wood',
        summary: 'Natural texture that softens a practical layout.',
        imageUrl:
          'https://images.unsplash.com/photo-1764526624453-db32c24eca55?auto=format&fit=crop&w=900&q=80',
        alt: 'Warm wood kitchen cabinets',
      },
      {
        title: 'Two-Tone',
        summary: 'Balanced contrast for a custom but approachable look.',
        imageUrl:
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
        alt: 'Two tone kitchen cabinetry with island',
      },
    ],
  },
  {
    id: 'closets',
    eyebrow: 'Closets',
    title: 'Storage systems made for real rooms and real mornings.',
    summary:
      'Closet layouts can be calm, practical, and tailored without turning the home into a showroom.',
    cta: 'Explore Closets',
    href: '/closets',
    variant: 'offset',
    categories: [
      {
        title: 'Walk-In Closets',
        summary: 'Clear zones for hanging, folded storage, and drawers.',
        imageUrl:
          'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&w=900&q=80',
        alt: 'Walk in closet with organized clothing and shelves',
      },
      {
        title: 'Reach-In Closets',
        summary: 'More usable storage inside everyday footprints.',
        imageUrl:
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
        alt: 'Reach in closet with shelves and hanging space',
      },
      {
        title: 'Wardrobes',
        summary: 'Built-in storage that feels like part of the room.',
        imageUrl:
          'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80',
        alt: 'Bedroom wardrobe cabinetry with neutral finishes',
      },
      {
        title: 'Wall Storage',
        summary: 'Vertical space planned with simple, durable details.',
        imageUrl:
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
        alt: 'Wall storage shelves in a warm neutral room',
      },
    ],
  },
  {
    id: 'garage-storage',
    eyebrow: 'Garage Storage',
    title: 'A cleaner garage without losing the utility.',
    summary:
      'Garage storage should be tough, organized, and realistic for the way Bay Area homes use every square foot.',
    cta: 'Explore Garage Storage',
    href: '/garage-storage',
    variant: 'band',
    categories: [
      {
        title: 'Garage Cabinets',
        summary: 'Closed storage for tools, supplies, and seasonal items.',
        imageUrl:
          'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80',
        alt: 'Garage cabinet storage system',
      },
      {
        title: 'Wall Storage',
        summary: 'Keep floors open with practical wall organization.',
        imageUrl:
          'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=900&q=80',
        alt: 'Organized wall storage for utility items',
      },
      {
        title: 'Utility Storage',
        summary: 'A better home for household supplies and bulky gear.',
        imageUrl:
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
        alt: 'Utility storage cabinets in a clean residential space',
      },
      {
        title: 'Work & Storage Systems',
        summary: 'Surfaces and cabinets designed around everyday projects.',
        imageUrl:
          'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80',
        alt: 'Work surface with organized cabinets and tools',
      },
    ],
  },
];

export const kitchenGalleryGroups: GalleryGroup[] = [
  {
    label: 'Light Kitchens',
    title: 'Bright layouts with practical storage.',
    images: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=82',
        alt: 'Bright kitchen with white cabinets and a compact island',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1556912173-3bb406ef7e8d?auto=format&fit=crop&w=900&q=80',
        alt: 'Clean kitchen countertop and upper cabinets',
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
    label: 'Warm Details',
    title: 'Natural materials that still feel easy to live with.',
    images: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=82',
        alt: 'Warm kitchen cabinetry with stone counters',
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
          'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
        alt: 'White kitchen in an apartment setting',
      },
    ],
  },
];

export const projectGalleryGroups: GalleryGroup[] = [
  {
    label: 'Spaces We Love',
    title: 'A curated mix of storage ideas for the whole home.',
    images: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1665507279458-b21dea52c447?auto=format&fit=crop&w=1200&q=82',
        alt: 'White kitchen inspiration with clean cabinetry',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
        alt: 'Closet storage inspiration',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=900&q=80',
        alt: 'Garage and utility storage inspiration',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
        alt: 'Wall storage inspiration in a neutral home',
      },
    ],
  },
  {
    label: 'Organized Living',
    title: 'Ideas for cabinetry that disappears into daily life.',
    images: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82',
        alt: 'Modern kitchen and living storage inspiration',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80',
        alt: 'Bedroom wardrobe inspiration',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
        alt: 'Two tone kitchen inspiration',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
        alt: 'Utility storage inspiration',
      },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: 'camera',
    title: 'Send Photos',
    summary: 'Upload photos and measurements',
  },
  {
    icon: 'cube',
    title: 'Get Free Design',
    summary: 'We create a design and estimate',
  },
  {
    icon: 'check',
    title: 'Approve & Order',
    summary: 'You approve the design and price',
  },
  {
    icon: 'tools',
    title: 'We Install',
    summary: 'Professional installation',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'How does the free design process work?',
    answer:
      'You share photos, rough measurements, and the storage goals for the space. A future phase will connect this flow to a proper upload experience.',
  },
  {
    question: 'Do measurements need to be exact?',
    answer:
      'Early measurements can be approximate. Final details can be confirmed before ordering and installation.',
  },
  {
    question: 'How is pricing estimated?',
    answer:
      'Pricing depends on size, materials, storage features, and installation needs. The estimate format will become more detailed in a later phase.',
  },
  {
    question: 'Is installation included?',
    answer:
      'The homepage is prepared to explain professional installation as part of the customer journey.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'The site is structured around a Bay Area service area statement that can be refined with exact cities later.',
  },
];

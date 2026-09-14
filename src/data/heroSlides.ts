import kitchenHeroBackground01 from '@/assets/kitchen-backgrounds/kitchen-cabinet-design-bay-area-hero-01.webp';
import kitchenHeroBackground02 from '@/assets/kitchen-backgrounds/modern-kitchen-cabinet-installation-hero-02.webp';
import kitchenHeroBackground03 from '@/assets/kitchen-backgrounds/apartment-kitchen-cabinets-hero-03.webp';
import kitchenHeroBackground04 from '@/assets/kitchen-backgrounds/white-kitchen-cabinet-installation-hero-04.webp';

export type HeroSlide = {
  eyebrow: string;
  title: string;
  imageUrl: string;
  position: string;
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'White Shaker Kitchen',
    title: 'Quiet cabinetry, bright counters, and practical daily flow.',
    imageUrl: kitchenHeroBackground01,
    position: 'center',
  },
  {
    eyebrow: 'Modern White Kitchen',
    title: 'Simple cabinet fronts for clean apartment kitchens.',
    imageUrl: kitchenHeroBackground02,
    position: 'center',
  },
  {
    eyebrow: 'Warm Wood Kitchen',
    title: 'Natural wood tones that keep everyday kitchens inviting.',
    imageUrl: kitchenHeroBackground03,
    position: 'center',
  },
  {
    eyebrow: 'Compact Apartment Kitchen',
    title: 'Practical cabinet planning for smaller spaces and rentals.',
    imageUrl: kitchenHeroBackground04,
    position: 'center',
  },
];

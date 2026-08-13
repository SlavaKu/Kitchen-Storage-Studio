export type HeroSlide = {
  eyebrow: string;
  title: string;
  imageUrl: string;
  sourceUrl: string;
  credit: string;
  position: string;
  overlay: string;
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'White Shaker Kitchen',
    title: 'Quiet cabinetry, bright counters, and practical daily flow.',
    imageUrl:
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1800&q=82',
    sourceUrl: 'https://unsplash.com/photos/white-kitchen-cabinets',
    credit: 'Unsplash',
    position: 'center',
    overlay:
      'linear-gradient(90deg, rgb(37 26 20 / 0.34), rgb(37 26 20 / 0.10) 46%, rgb(37 26 20 / 0.18))',
  },
  {
    eyebrow: 'Modern White Kitchen',
    title: 'Simple cabinet fronts for clean apartment kitchens.',
    imageUrl:
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1800&q=82',
    sourceUrl: 'https://unsplash.com/photos/modern-white-kitchen',
    credit: 'Unsplash',
    position: 'center',
    overlay:
      'linear-gradient(90deg, rgb(37 26 20 / 0.34), rgb(37 26 20 / 0.10) 48%, rgb(37 26 20 / 0.18))',
  },
  {
    eyebrow: 'Warm Wood Kitchen',
    title: 'Natural wood tones that keep everyday kitchens inviting.',
    imageUrl:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=82',
    sourceUrl: 'https://unsplash.com/photos/warm-wood-kitchen',
    credit: 'Unsplash',
    position: 'center',
    overlay:
      'linear-gradient(90deg, rgb(37 26 20 / 0.30), rgb(37 26 20 / 0.08) 52%, rgb(37 26 20 / 0.18))',
  },
  {
    eyebrow: 'Compact Apartment Kitchen',
    title: 'Practical cabinet planning for smaller spaces and rentals.',
    imageUrl:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1800&q=82',
    sourceUrl: 'https://unsplash.com/photos/compact-apartment-kitchen',
    credit: 'Unsplash',
    position: 'center',
    overlay:
      'linear-gradient(90deg, rgb(37 26 20 / 0.38), rgb(37 26 20 / 0.12) 48%, rgb(37 26 20 / 0.20))',
  },
];

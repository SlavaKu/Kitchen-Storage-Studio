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
    title: 'Quiet cabinetry, bright stone, and refined daily storage.',
    imageUrl:
      'https://images.unsplash.com/photo-1665507279458-b21dea52c447?auto=format&fit=crop&w=1800&q=82',
    sourceUrl: 'https://unsplash.com/photos/a-kitchen-with-white-cabinets-mge6e3V2fBo',
    credit: 'Zac Gudakov',
    position: 'center',
    overlay:
      'linear-gradient(90deg, rgb(37 26 20 / 0.30), rgb(37 26 20 / 0.08) 44%, rgb(37 26 20 / 0.18))',
  },
  {
    eyebrow: 'Modern Apartment Kitchen',
    title: 'Minimal profiles for compact homes with a premium finish.',
    imageUrl:
      'https://images.unsplash.com/photo-1762810944373-d3cd437cbd1d?auto=format&fit=crop&w=1800&q=82',
    sourceUrl:
      'https://unsplash.com/photos/modern-apartment-hallway-with-kitchen-island-and-cabinets-6cFOz5A9ZoQ',
    credit: 'RETRATO INMOBILIARIO',
    position: 'center',
    overlay:
      'linear-gradient(90deg, rgb(37 26 20 / 0.36), rgb(37 26 20 / 0.12) 48%, rgb(37 26 20 / 0.22))',
  },
  {
    eyebrow: 'Warm Wood Kitchen',
    title: 'Natural walnut tones that make modern storage feel inviting.',
    imageUrl:
      'https://images.unsplash.com/photo-1764526624453-db32c24eca55?auto=format&fit=crop&w=1800&q=82',
    sourceUrl:
      'https://unsplash.com/photos/modern-kitchen-with-wooden-cabinets-and-island-XU_ODlSO9ac',
    credit: 'Clay Banks',
    position: 'center',
    overlay:
      'linear-gradient(90deg, rgb(37 26 20 / 0.28), rgb(37 26 20 / 0.08) 52%, rgb(37 26 20 / 0.18))',
  },
  {
    eyebrow: 'Bright Family Kitchen',
    title: 'Durable spaces designed around the way families actually live.',
    imageUrl:
      'https://images.unsplash.com/photo-1761839258568-fd466a93f68b?auto=format&fit=crop&w=1800&q=82',
    sourceUrl:
      'https://unsplash.com/photos/family-cooking-together-in-a-bright-kitchen-m9cBmbOQCmQ',
    credit: "Land O'Lakes, Inc.",
    position: 'center',
    overlay:
      'linear-gradient(90deg, rgb(37 26 20 / 0.42), rgb(37 26 20 / 0.12) 48%, rgb(37 26 20 / 0.22))',
  },
];

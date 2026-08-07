import { EditorialGallery } from '@/components/gallery/EditorialGallery';
import {
  kitchenGalleryGroups,
  projectGalleryGroups,
  serviceSections,
  stories,
} from '@/data/homepage';
import { BenefitsStrip } from '@/sections/BenefitsStrip';
import { FaqPreview } from '@/sections/FaqPreview';
import { FreeDesignCta } from '@/sections/FreeDesignCta';
import { HeroSection } from '@/sections/HeroSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { ServiceSection } from '@/sections/ServiceSection';
import { SiteFooter } from '@/sections/SiteFooter';
import { StoryImageSection } from '@/sections/StoryImageSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsStrip />
      <StoryImageSection story={stories[0]} />
      <ServiceSection section={serviceSections[0]} />
      <EditorialGallery
        ctaHref="/kitchens"
        ctaLabel="Explore Kitchens"
        eyebrow="Kitchen Inspiration"
        groups={kitchenGalleryGroups}
        title="Ideas with enough polish to inspire and enough restraint to live with."
      />
      <StoryImageSection story={stories[1]} />
      <ServiceSection section={serviceSections[1]} />
      <StoryImageSection story={stories[2]} />
      <ServiceSection section={serviceSections[2]} />
      <EditorialGallery
        ctaHref="/projects"
        ctaLabel="View Projects"
        eyebrow="Spaces We Love"
        groups={projectGalleryGroups}
        title="Representative inspiration for kitchens, closets, and garage storage."
      />
      <ProcessSection />
      <FreeDesignCta />
      <FaqPreview />
      <SiteFooter />
    </>
  );
}

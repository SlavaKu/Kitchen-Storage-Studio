import { EditorialGallery } from '@/components/gallery/EditorialGallery';
import { kitchenGalleryGroups, serviceSections, stories } from '@/data/homepage';
import { BenefitsStrip } from '@/sections/BenefitsStrip';
import { FaqPreview } from '@/sections/FaqPreview';
import { FreeDesignCta } from '@/sections/FreeDesignCta';
import { HeroSection } from '@/sections/HeroSection';
import { KitchenStylesSection } from '@/sections/KitchenStylesSection';
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
        ctaHref="/#contact"
        ctaLabel="Get Free Kitchen Design"
        eyebrow="Kitchen Inspiration"
        groups={kitchenGalleryGroups}
        title="Kitchen ideas with enough polish to inspire and enough restraint to live with."
      />
      <ProcessSection />
      <StoryImageSection story={stories[1]} />
      <KitchenStylesSection />
      <StoryImageSection story={stories[2]} />
      <FreeDesignCta />
      <StoryImageSection story={stories[3]} />
      <FaqPreview />
      <SiteFooter />
    </>
  );
}

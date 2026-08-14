import { EditorialGallery } from '@/components/gallery/EditorialGallery';
import { kitchenGalleryGroups, stories } from '@/data/homepage';
import { BenefitsStrip } from '@/sections/BenefitsStrip';
import { FaqPreview } from '@/sections/FaqPreview';
import { FreeDesignCta } from '@/sections/FreeDesignCta';
import { HeroSection } from '@/sections/HeroSection';
import { EstimatePrompt } from '@/sections/EstimatePrompt';
import { KitchenStylesSection } from '@/sections/KitchenStylesSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { SiteFooter } from '@/sections/SiteFooter';
import { StoryImageSection } from '@/sections/StoryImageSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsStrip />
      <StoryImageSection story={stories[0]} />
      <EditorialGallery
        ctaHref="/#contact"
        ctaLabel="Get Free Estimate"
        eyebrow="Kitchen Gallery"
        groups={kitchenGalleryGroups}
        sectionId="kitchen-gallery"
        title="Find a kitchen style that works for your space."
      />
      <EstimatePrompt />
      <FreeDesignCta />
      <ProcessSection />
      <StoryImageSection story={stories[1]} />
      <KitchenStylesSection />
      <StoryImageSection story={stories[2]} />
      <FaqPreview />
      <SiteFooter />
    </>
  );
}

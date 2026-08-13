import { Button } from '@/components/ui/Button';
import type { Story } from '@/data/homepage';

type StoryImageSectionProps = {
  story: Story;
};

export function StoryImageSection({ story }: StoryImageSectionProps) {
  return (
    <section className="story-section relative z-0 h-[240vh] bg-background" id={story.id}>
      <div className="story-sticky sticky top-[72px] z-0 h-[calc(100svh-72px)] overflow-hidden">
        <img
          alt={story.alt}
          className="story-image h-full w-full object-cover"
          decoding="async"
          loading="lazy"
          src={story.imageUrl}
          style={{ objectPosition: story.position }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/44 via-foreground/18 to-foreground/8" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="story-copy-wrap mx-auto flex w-full max-w-container px-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">
            <div className="story-copy-panel text-white">
              <p className="story-copy-eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {story.eyebrow}
              </p>
              <h2 className="story-copy-title mt-4 font-serif font-semibold">
                {story.title}
              </h2>
              <Button
                className="story-copy-cta"
                href={story.href}
                size="sm"
                variant="secondary"
              >
                {story.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

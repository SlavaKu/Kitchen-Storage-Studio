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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/58 via-foreground/20 to-foreground/10" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto flex w-full max-w-container px-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">
            <div className="max-w-xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {story.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
                {story.title}
              </h2>
              <Button className="mt-7" href={story.href} variant="secondary">
                {story.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { LineIcon } from '@/components/icons/LineIcon';
import { contactDetails } from '@/data/homepage';

export function FloatingContactButtons() {
  return (
    <div
      aria-label="Quick contact"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6"
    >
      <a
        aria-label="Call Kitchen and Storage Studio"
        className="quick-contact-button"
        href={contactDetails.phoneHref}
      >
        <LineIcon className="size-5" name="phone" />
      </a>
      <a
        aria-label="Open WhatsApp chat"
        className="quick-contact-button"
        href={contactDetails.whatsappHref}
        rel="noreferrer"
        target="_blank"
      >
        <LineIcon className="size-5" name="whatsapp" />
      </a>
    </div>
  );
}

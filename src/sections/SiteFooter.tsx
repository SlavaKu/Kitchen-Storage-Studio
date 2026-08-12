import { Link } from 'react-router-dom';

import { Container } from '@/components/ui/Container';
import { contactDetails, socialLinks } from '@/data/homepage';
import { primaryNavigation } from '@/data/navigation';

export function SiteFooter() {
  return (
    <footer className="bg-primaryDark py-16 text-white sm:py-20" id="footer">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.9fr_0.9fr] lg:items-start">
          <div>
            <p className="font-serif text-3xl font-semibold">Kitchen & Storage Studio</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
              Kitchen cabinet design and installation with practical planning,
              approachable style, and a simple free design process.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/74">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm leading-7 text-white/74 lg:text-right">
            <a
              className="block transition hover:text-white"
              href={contactDetails.phoneHref}
            >
              {contactDetails.phoneLabel}
            </a>
            <a
              className="block transition hover:text-white"
              href={contactDetails.emailHref}
            >
              {contactDetails.emailLabel}
            </a>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 lg:justify-end">
              {socialLinks.map((link) => (
                <a
                  className="transition hover:text-white"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/14 pt-7 text-sm text-white/58">
          Copyright {new Date().getFullYear()} Kitchen & Storage Studio. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}

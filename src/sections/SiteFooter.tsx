import { Link } from 'react-router-dom';

import { Container } from '@/components/ui/Container';
import { primaryNavigation } from '@/data/navigation';

export function SiteFooter() {
  return (
    <footer className="bg-primaryDark py-14 text-white" id="footer">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <p className="font-serif text-3xl font-semibold">Kitchen & Storage Studio</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
              Premium cabinetry and practical storage planning for Bay Area homes.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-3 text-sm text-white/72">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm leading-7 text-white/72">
            <a className="block transition hover:text-white" href="tel:+10000000000">
              (000) 000-0000
            </a>
            <a
              className="block transition hover:text-white"
              href="mailto:hello@example.com"
            >
              hello@example.com
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/14 pt-6 text-sm text-white/54">
          Copyright {new Date().getFullYear()} Kitchen & Storage Studio. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}

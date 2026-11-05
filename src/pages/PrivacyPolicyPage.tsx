import { Link } from 'react-router-dom';

import { Container } from '@/components/ui/Container';
import { contactDetails } from '@/data/homepage';
import { SiteFooter } from '@/sections/SiteFooter';

const sections = [
  {
    title: 'Information we collect',
    paragraphs: [
      'When you request an estimate or contact us through the website, you provide your name, phone number, city, and any project notes you choose to include. Email and project notes are optional. We also receive information you choose to provide when communicating with us about your inquiry. Please avoid including sensitive information that is not needed for your request.',
      'Our form includes a hidden spam-detection field. Basin, our form processor, may also process submission metadata such as your IP address, approximate location derived from it, browser information, and referring page. GitHub Pages, our website host, logs visitor IP addresses for security purposes.',
    ],
  },
  {
    title: 'How we use information',
    paragraphs: [
      'We use information to respond to inquiries, prepare estimates, discuss potential kitchen projects, arrange requested services, maintain necessary business records, and protect the website and form from abuse or spam. The website does not include marketing sign-ups or advertising tracking.',
    ],
  },
  {
    title: 'Form processing and service providers',
    paragraphs: [
      'We use Basin (usebasin.com), an independent service provider, to receive, process, and store website form submissions and send notification emails to the business. Information you submit is sent to Basin for these purposes. Basin may use its own service providers for processing and spam protection, depending on its service and form settings.',
      'The website is hosted on GitHub Pages. Hosting and form-processing providers handle technical information needed to deliver and protect their services. Their handling of information is also described in their privacy notices, linked below.',
    ],
  },
  {
    title: 'Sharing of personal information',
    paragraphs: [
      'Kitchen Up does not sell personal information. We disclose information to service providers where reasonably necessary to operate the website, process inquiries, communicate with you, or provide requested services. We may also disclose information when required by law or reasonably necessary to protect legal rights and prevent abuse.',
      'The website does not use advertising tools that share personal information for cross-context behavioral advertising.',
    ],
  },
  {
    title: 'Cookies, storage, and tracking',
    paragraphs: [
      'The current website does not include analytics or advertising tracking scripts, and its application code does not set cookies or use browser local storage or session storage. This is not a promise that hosting or external service providers never use cookies or other technical mechanisms when delivering their services.',
      'The website does not track your activity across other websites or embed third-party advertising trackers. It does not change its behavior in response to a browser Do Not Track signal. Provider processing described above still occurs when you visit the website or submit a form.',
    ],
  },
  {
    title: 'Data retention',
    paragraphs: [
      'We retain personal information only as long as reasonably necessary for the purposes described in this policy, legitimate business needs, resolving disputes, and meeting applicable legal obligations. The appropriate period depends on the inquiry, project, record, and applicable requirements; no single fixed period applies to all information.',
    ],
  },
  {
    title: 'Data security',
    paragraphs: [
      'We use reasonable measures to protect personal information, including HTTPS for website access and form transmission. No method of Internet transmission or electronic storage can be guaranteed to be completely secure.',
    ],
  },
  {
    title: 'California privacy rights and your choices',
    paragraphs: [
      'You may contact Kitchen Up to ask about personal information you provided through the website or to request access, correction, or deletion. Call us or use the website contact form, identify your request as a privacy inquiry, and provide enough information for us to locate your inquiry. We may need to verify your identity before acting and may need to keep certain records to meet legal obligations.',
      'California privacy rights depend on the law that applies to the business and the information involved. Where the California Consumer Privacy Act, as amended by the California Privacy Rights Act, applies, rights may include knowing and accessing information, correcting or deleting it, opting out of sale or sharing for cross-context behavioral advertising, limiting certain uses of sensitive personal information, and freedom from discrimination for exercising those rights. These rights are subject to legal conditions and exceptions. This policy does not assert that Kitchen Up meets the statutory thresholds for coverage under that law.',
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      'Our website and services are intended for adults seeking kitchen design, cabinetry, and installation services and are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided information, please contact us so we can address it.',
    ],
  },
  {
    title: 'Third-party links',
    paragraphs: [
      'If you choose to open an external link, including the WhatsApp contact link or any social-media links connected in the future, the external service has its own privacy practices. Using WhatsApp to contact us sends the information you choose to share through that service. Kitchen Up is not responsible for external privacy policies. Review the relevant policy before providing information to an external service.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this policy as website practices or legal requirements change. Updates will be posted on this page with a revised Last Updated date. Please review this page for the current version.',
    ],
  },
];

const linkClass =
  'font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary';

export function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-background py-12 sm:py-20">
        <Container>
          <article className="mx-auto max-w-3xl break-words">
            <Link className={linkClass} to="/">
              Back to Kitchen Up
            </Link>
            <h1 className="mt-8 font-serif text-4xl font-semibold sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted">
              Last Updated: <time dateTime="2026-11-05">November 5, 2026</time>
            </p>
            <p className="mt-6 text-base leading-8 text-muted">
              This policy explains how Kitchen Up handles personal information through
              getkitchenup.com and related inquiries about our kitchen design, cabinetry,
              and installation services in the San Francisco Bay Area.
            </p>
            <div className="mt-10 space-y-9">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p className="mt-4 text-base leading-8 text-muted" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
              <section>
                <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                  Contact Kitchen Up
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  For privacy questions or requests, call{' '}
                  <a className={linkClass} href={contactDetails.phoneHref}>
                    {contactDetails.phoneLabel}
                  </a>{' '}
                  or use our{' '}
                  <Link className={linkClass} to="/#contact">
                    website contact and estimate form
                  </Link>
                  . Please mention that your inquiry concerns privacy. The same form
                  processing described in this policy applies to privacy inquiries sent
                  through the form.
                </p>
              </section>
              <p className="text-sm leading-7 text-muted">
                Provider privacy notices:{' '}
                <a className={linkClass} href="https://usebasin.com/privacy">
                  Basin
                </a>
                {' · '}
                <a
                  className={linkClass}
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                >
                  GitHub
                </a>
                {' · '}
                <a
                  className={linkClass}
                  href="https://www.whatsapp.com/legal/privacy-policy"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </article>
        </Container>
      </section>
      <SiteFooter />
    </>
  );
}

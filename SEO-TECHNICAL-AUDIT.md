# Kitchen Up technical SEO audit — Phase 3

Audit date: November 6, 2026. Production: https://getkitchenup.com. Repository: SlavaKu/Kitchen-Storage-Studio, branch main.

## Initial findings

Production HTTP requests before editing confirmed:

| Resource                           | Initial result                                                                                                  |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Homepage                           | HTTP 200, correct HTTPS non-www canonical, 2,610-byte HTML shell with an empty React root                       |
| Privacy Policy                     | HTTP 200 on direct access, correct `/privacy-policy/` canonical, 1,555-byte HTML shell with an empty React root |
| robots.txt                         | HTTP 200; allows crawling and points at the correct sitemap                                                     |
| sitemap.xml                        | HTTP 200; listed only the homepage and an older modification date                                               |
| HTTP homepage                      | Redirected to the HTTPS non-www homepage                                                                        |
| HTTPS www homepage                 | Redirected to the HTTPS non-www homepage                                                                        |
| Legacy GitHub Pages repository URL | Redirected to the production homepage                                                                           |

Existing strengths were retained: Kitchen Up branding, English language and viewport metadata, JSON-LD for Organization/WebSite/WebPage/Service on the homepage, root-relative asset paths, a working Privacy Policy directory entry, GitHub Actions Pages deployment, CNAME, no tracking scripts or external font downloads, high-priority/eager first hero image, compressed WebP kitchen photography, descriptive image alternatives, labelled form fields, responsive layouts, and reduced-motion styling.

Problems identified: both pages depended on JavaScript for all content; the policy reused the homepage description; client navigation updated only the title and could leave a 404's noindex behind; the sitemap omitted the policy; social metadata had no preview image; image dimensions were absent; below-fold galleries eagerly loaded their initial slides; and the transparent logo was a 2172 × 724 PNG of 925,187 bytes. Invisible gallery buttons remained in keyboard/accessibility navigation, and collapsed FAQ content was still exposed to assistive technology.

## Implemented changes

### Static content and routing

The production build now compiles a temporary Node renderer using Vite's existing SSR support and renders the same React route tree used by the browser. It writes meaningful HTML to `dist/index.html`, `dist/privacy-policy/index.html`, and `dist/404.html`. No runtime server, paid service, crawler detection, or new package is needed. The temporary renderer stays in ignored `node_modules/.tmp/`, outside the published build.

The browser hydrates the existing markup with React's `hydrateRoot`; development shells still use `createRoot`. Carousels, FAQ, scrolling, menu, reveal effects, and form handling use their existing React components. A real policy directory supports HTTP 200 direct visits and refreshes on GitHub Pages. Unknown URLs receive the prerendered custom 404 with noindex and no canonical.

Reveal animations are enabled by an early `js` class; without JavaScript, prerendered content remains readable. A noscript notice offers the business phone and hides the unusable JavaScript form, preventing a native GET submission from putting contact information in a URL. JavaScript-enabled form behavior is unchanged.

### Metadata and crawlability

Shared route metadata drives both initial HTML and client navigation, including canonical, robots, description, Open Graph, Twitter/X, and structured data. Navigating away from a 404 restores indexability for real pages. Both actual public routes appear in the sitemap; no fragment URLs, location pages, fake URLs, or legacy repository URLs are added.

| Route              | Title                                                  | Description                                                                                                                                                  |
| ------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`                | Bay Area Kitchen Cabinets & Installation \| Kitchen Up | San Francisco Bay Area kitchen cabinets, design, and installation. Serving Mountain View, Palo Alto, Sunnyvale, and nearby communities. Get a free estimate. |
| `/privacy-policy/` | Privacy Policy \| Kitchen Up                           | Learn how Kitchen Up handles estimate requests, personal information, form processing, and privacy inquiries on getkitchenup.com.                            |

City mentions are limited to natural metadata wording. There are no new keyword paragraphs, hidden location lists, landing pages, or doorway pages. Robots, canonical domain, CNAME, and existing working redirects are preserved. No DNS, Cloudflare, verification token, analytics, or third-party script has been added.

### Structured data

Both pages have truthful Organization, WebSite, and route-specific WebPage nodes. The homepage retains its Service node for kitchen cabinet design and installation in the Bay Area. The Organization now references the real optimized logo. The policy is not misrepresented as a service page.

No legalName, physical address, showroom, hours, prices, social profiles, reviews, ratings, licenses, staff biographies, or invented business claims are added. LocalBusiness rich-result markup is deliberately omitted: Google's documentation requires a physical address for that feature, and no verified public address is supplied. Breadcrumb and FAQ rich-result markup are not necessary for this two-page site. Valid generic schema does not guarantee a Google rich result.

### Images and performance

The logo is now a transparent, losslessly encoded WebP at 750 × 250, adequate for its existing displayed sizes at high pixel density: **100,720 bytes**, down from **925,187 bytes** (about **89.1% smaller**). The original PNG remains in source for future use; the application imports the smaller file. The logo's aspect ratio, transparency, composition, and CSS display size are preserved.

All original kitchen photographs remain byte-for-byte unchanged. The social preview is an exact copy of the existing 1672 × 941 first hero photograph at `/social/kitchen-up-kitchen.webp`, with absolute production Open Graph/Twitter image URLs and descriptive alternative text. The existing WebP photographs range from roughly 64–225 KB, so further recompression or new crops were not justified.

Rendered images now have intrinsic dimensions. Below-fold gallery/style images use lazy loading; the first hero stays eager and high priority, and the header logo is eager. Existing fixed carousel/story boxes, object positioning, animations, and system/Georgia font stacks are retained. No additional render-blocking font or third-party script is introduced. Prerendered image discovery and the smaller logo reduce avoidable startup work; actual LCP/INP/CLS outcomes require measurement in real browsers/field data.

### Accessibility and preservation

Each route keeps one H1 and the existing heading hierarchy. Hidden gallery buttons are removed from the keyboard/accessibility sequence. Collapsed FAQ panels use aria-hidden and inert while retaining their visual animation. Existing labels, focus styles, phone links, navigation, social icons, and responsive design remain.

The Basin endpoint, form component, field names, required/optional validation, spam honeypot, submission logic, and success/error states are unchanged. Privacy Policy text and date, footer, floating contact buttons, social link values, lockfile, all original images, and CNAME are unchanged.

## Verification design

`pnpm run build` runs `scripts/verify-seo.mjs` after prerendering. It fails on missing content, duplicate H1/IDs/canonicals/metadata, incorrect route descriptions or URLs, malformed JSON-LD, unsupported business claims, broken local resource or fragment links, missing image alternatives/dimensions, missing form fields, changed hero priority, sitemap mismatch, incorrect 404 indexing, or missing CNAME. The deployment workflow additionally requires the policy artifact. The SSR bundle is not published.

Local browser results are recorded below. Deployment confirmation is reported separately after pushing. No successful indexing, Search Console submission, ownership verification, or Core Web Vitals score is implied by a successful build.

## Owner actions and limitations

See [SEARCH-ENGINE-SETUP.md](SEARCH-ENGINE-SETUP.md) for exact Google Search Console/Cloudflare TXT verification, sitemap, URL Inspection, indexing requests, Bing verification/import, and monitoring instructions. Search account access and DNS ownership verification are manual owner actions. Search engines control indexing and ranking.

The package/repository identifier `kitchen-storage-studio`, GitHub remote, and workflow guard against old repository asset paths intentionally remain internal. No production canonical or sitemap uses the old repository URL. GitHub Pages controls HTTP status and redirects; this change does not install server-side redirect rules.

## Primary references

- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [React hydration](https://react.dev/reference/react-dom/client/hydrateRoot)
- [Vite SSR and static prerendering](https://vite.dev/guide/ssr)
- [Google LocalBusiness requirements](https://developers.google.com/search/docs/appearance/structured-data/local-business)

## Local validation results

- Final client/SSR build and automated SEO output verification passed.
- Format check and ESLint passed.
- Static preview returned HTTP 200 for both canonical pages, HTTP 301 for the policy path without a slash, and HTTP 404 for an unknown path.
- Initial generated HTML contains 56,900 bytes for the homepage, 23,716 bytes for the policy, and 10,203 bytes for the 404, each with one H1.
- Client JavaScript is approximately 335 KB (105 KB gzip); CSS is approximately 36 KB (7.93 KB gzip). The added hydration/metadata behavior slightly increases JavaScript; no runtime framework or dependency was added. The much smaller logo and earlier content/image discovery are the primary startup improvements.
- Desktop baseline comparison confirmed identical heading/logo rectangles, H1 text, and main-page text.
- Browser checks covered 1440px desktop, 768px tablet, and 390px mobile overrides, plus physical index-file aliases. Real document widths at those sizes had no horizontal overflow.
- Hero controls, both galleries, keyboard FAQ activation, mobile menu/contact navigation, policy links, direct policy refresh, and 404-to-home metadata recovery worked.
- No React hydration warnings, duplicate H1, missing image alternatives/dimensions, or application console errors were observed.
- Source comparison confirmed the entire Basin form component and Privacy Policy component unchanged, along with footer, floating contact controls, social link data, CNAME, lockfile, and original images. No live lead was submitted to Basin.
- No owner search-account verification, sitemap submission, or indexing request was performed.

## Files changed or created

- `.github/workflows/deploy-pages.yml`
- `README.md`
- `SEARCH-ENGINE-SETUP.md`
- `SEO-TECHNICAL-AUDIT.md`
- `index.html`
- `package.json`
- `public/sitemap.xml`
- `public/social/kitchen-up-kitchen.webp`
- `public/social/kitchen-up-logo.webp`
- `scripts/create-pages-404.mjs`
- `scripts/generate-seo-files.mjs`
- `scripts/prerender.mjs`
- `scripts/verify-seo.mjs`
- `site.config.json`
- `src/app/router.tsx`
- `src/app/routes.tsx`
- `src/assets/kitchen-up-logo.webp`
- `src/components/PageSeo.tsx`
- `src/components/SiteHeader.tsx`
- `src/components/gallery/EditorialGallery.tsx`
- `src/data/homepage.ts`
- `src/data/seo.ts`
- `src/entry-server.tsx`
- `src/layouts/AppLayout.tsx`
- `src/main.tsx`
- `src/pages/NotFoundPage.tsx`
- `src/sections/FaqPreview.tsx`
- `src/sections/HeroSection.tsx`
- `src/sections/KitchenStylesSection.tsx`
- `src/sections/StoryImageSection.tsx`
- `src/styles/global.css`
- `vite.config.ts`

The old copy-only `scripts/create-pages-404.mjs` is replaced by `scripts/prerender.mjs`; policy direct-access and custom 404 output are retained.

## Measurement limits

The public mobile PageSpeed API request returned HTTP 429 (quota exceeded), so no Lighthouse/PageSpeed score or CrUX LCP/INP/CLS field metrics were obtained. No performance score or Core Web Vitals pass is claimed. Recheck PageSpeed Insights and the verified Search Console Core Web Vitals report after deployment when data is available. Local interaction, static-output, and asset-size checks are not substitutes for field measurements.

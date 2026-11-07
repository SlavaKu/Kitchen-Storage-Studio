# Kitchen Up

A modern React application for kitchen cabinet design and installation.

## Scripts

- `pnpm run dev` starts local development.
- `pnpm run build` builds the client, prerenders the existing routes, and verifies SEO output.
- `pnpm run preview` serves the production build for browser checks.
- `pnpm run lint` checks source quality.
- `pnpm run format:check` checks formatting.
- `pnpm run format` formats the project.

The build renders `/` and `/privacy-policy/` from the shared React route tree and
creates a custom `404.html`. React hydrates that HTML to preserve interactivity.
The temporary Node renderer stays in `node_modules/.tmp/`; only `dist/` is deployed.
Page metadata is configured in `site.config.json` and `src/data/seo.ts`.

See [the SEO audit](SEO-TECHNICAL-AUDIT.md) and
[owner search-engine setup instructions](SEARCH-ENGINE-SETUP.md).

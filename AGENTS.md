# AGENTS.md

Academic portfolio for Sabbir Ahamed. React 18 + Vite 6 + Tailwind CSS v4 + React Router 6, plain JSX (no TypeScript).

## Commands

- `npm run dev` — dev server on http://localhost:5173
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build

There is **no lint, test, or typecheck script**. `npm run build` is the only verification step; run it after changes.

## Architecture

- All content (text, projects, publications, awards, certificates, experience, skills, nav, CV/email links) lives in `src/data/*.js`. Edit data there, not in components.
- Routing: `HashRouter` in `src/App.jsx` + `base: "./"` in `vite.config.js` for zero-config static hosting. URLs are `#/about`; adding a route uses hash URLs. `/projects/:slug` is resolved by slug lookup in `src/data/projects.js`.
- Project detail pages require a matching entry in `src/data/projects.js` with `slug`, `cover_image`, `gallery`, and optional `videos`; assets must exist under `public/assets/...`.
- Imports always include the explicit extension, e.g. `./pages/Home.jsx`.

## Design conventions

- Theme tokens (colors `paper`/`ink`/`moss`/`clay`/`cream`, fonts, shadows) are defined only in the `@theme` block of `src/index.css` — there is no `tailwind.config.js`. Add new tokens there.
- Typography: `font-display` = Fraunces (headings), `font-body` = Inter, `font-mono` = JetBrains Mono (labels/eyebrows, uppercase + tracking). Fonts load from Google Fonts in `index.html`.
- Reuse existing building blocks instead of adding new ones: `Reveal` (scroll-reveal), `Gallery` (lightbox), `VideoPlayer`, `StatusBadge`/`TagList`/`ArrowLink` from `components/ui.jsx`.
- Data files use snake_case keys (`cover_image`, `related_publication`, `future_plan`); keep new fields consistent.

## Gotchas

- Asset paths in `src/data` are root-absolute (`/assets/...`) and resolve to files under `public/`. New media must be copied into `public/` before referencing it.
- `dist/` and `node_modules/` are gitignored build artifacts.

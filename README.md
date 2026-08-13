# Sabbir Ahamed — Portfolio v2

A complete redesign of the [original portfolio](https://github.com/your-org/sabbir-ahamed-portfolio) built with
**React + Vite + Tailwind CSS v4**. All content from the original site is preserved — the design is new.

## Design notes

- Light, editorial, minimalist aesthetic (warm paper background, ink text, moss-green accent) — deliberately
  distinct from the original dark + amber theme.
- Display type: **Fraunces** (serif) · Body: **Inter** · Labels: **JetBrains Mono**.
- Asymmetric hero with framed portrait, marquee tagline strip, numbered project lists, hairline-grid layouts,
  image lightbox, scroll-reveal animations, and a fully responsive mobile navigation.

## Tech stack

- React 18
- Vite 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- React Router 6 (hash-based routing for zero-config static hosting)

## Getting started

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Project structure

```
public/            static assets (images, videos, CV, certificates, favicon)
src/
  data/            all site content (projects, publications, awards, ...)
  components/      Layout, Header, Footer, Lightbox, Reveal, Gallery, ui
  pages/           Home, About, Projects, ProjectDetail, Publications, Experience, Awards, Certificates
  App.jsx          routes
  index.css        Tailwind theme tokens + custom utilities
```

## Content parity

All text, project descriptions, outcomes, citations, awards, certificates, videos, and images match the
original site 1:1 — see the `src/data/` modules.

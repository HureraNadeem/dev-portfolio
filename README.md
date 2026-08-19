# Hurera's dev portfolio 💯

Hit the live example, [click here](https://hurera-dev.netlify.app) 🚀

This repository contains the source code and for my personal dev portfolio website. The website showcases my experience, education, and projects as a full stack developer.

## Features

- **About Me**: Provides an overview of my background, skills, and expertise.
- **Experience**: Highlights my professional experience, including previous work positions and projects.
- **Education**: Displays my educational background, including degrees and certifications.
- **Projects**: Showcases a selection of my notable projects, providing details about their features and technologies used.
- **Contact**: Offers a convenient way for visitors to get in touch with me.

## Technologies Used

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- React Awesome Reveal

## Project structure

All application code lives under `src/`, so the repository root holds nothing but
tooling config. `src/app/` is kept purely as the routing layer — every non-route
file lives in a dedicated top-level folder next to it.

```
public/                     Static files served as-is at the site root
  assets/{fonts,images,resume}
src/
  app/                      Routing layer ONLY (App Router)
    layout.tsx              Root layout: metadata, chrome, global styles
    page.tsx                /
    {contact,education,experience,projects}/page.tsx
    not-found.tsx           404
    robots.ts sitemap.ts    Metadata file conventions
  components/               Shared, route-agnostic UI
    icons/                  SVG illustrations & tech logos as React components
    layout/                 Site chrome: navbar, footer, wrapper, scroll-to-top
    ui/                     Small reusable primitives
  features/                 Route-scoped composition, one folder per page
    home/                   greeting, what-i-do (+ its card)
    education/              education-view (+ course-card)
    experience/             experience-view (+ experience-card)
    projects/               projects-view (+ project-card)
    contact/                contact-view
  config/site.ts            Single source of truth for site metadata + routes
  lib/                      Framework/third-party setup (Font Awesome)
  styles/globals.css        Global stylesheet & @font-face declarations
```

Conventions:

- **Files and folders are kebab-case**; components are `PascalCase` exports.
- **A component lives in `features/` if exactly one route renders it**, and in
  `components/` once it is shared. Cards are colocated with the view that uses
  them rather than pooled in a global bucket.
- **`public/` contains static files only** — never `.ts`/`.tsx`. SVGs that are
  React components belong in `src/components/icons/`.
- **Import aliases**: `@/*` resolves to `src/*`, `@public/*` to `public/*`
  (used for statically imported images). No `../../..` climbing.
- **`src/config/site.ts` is the single source of truth** for the site URL,
  metadata and navigation; the navbar, sitemap, robots and JSON-LD all read
  from it, so adding a route means editing one array.

## Architecture

- **Static Site Generation (SSG)** — the site is fully pre-rendered to static
  HTML at build time via `output: 'export'`, so it can be served from any static
  host (Netlify, Vercel, GitHub Pages, S3, …) with no server runtime.
- **App Router** — routes live under `src/app/`, each page is a server component
  that exposes SEO metadata through the Next.js **Metadata API** and delegates
  its markup to the matching slice in `src/features/`.
- **SEO built in** — per-page `<title>`/description, canonical URLs, Open Graph
  and Twitter cards, JSON-LD `Person` structured data, and generated
  `robots.txt` (`src/app/robots.ts`) and `sitemap.xml` (`src/app/sitemap.ts`).

## Illustrations

- Undraw

## Deployment

The website is deployed and accessible at [hurera-dev.netlify.app](https://hurera-dev.netlify.app)

The production URL used for canonical tags, Open Graph and the sitemap can be
overridden at build time with the `NEXT_PUBLIC_SITE_URL` environment variable —
see `.env.example` for the expected format.

## Run the project locally

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/HureraNadeem/dev-portfolio`
2. Install the required dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit `http://localhost:3000` to view the website.

To generate the static production build, run `npm run build` — the exported
site is written to the `out/` directory.

Feel free to explore the source code and modify it to create your own portfolio website. If you have any questions or suggestions, feel free to reach out to me.

## Special Shoutout:

A special shoutout to [Ashutosh Hathidara](https://github.com/ashutosh1919) and [Muhammad Kumail](https://github.com/mkumail1) as most of the UI inspiration has been taken from their portfolio websites.



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

## Architecture

- **Static Site Generation (SSG)** — the site is fully pre-rendered to static
  HTML at build time via `output: 'export'`, so it can be served from any static
  host (Netlify, Vercel, GitHub Pages, S3, …) with no server runtime.
- **App Router** — routes live under `app/`, each page is a server component
  that exposes SEO metadata through the Next.js **Metadata API**.
- **SEO built in** — per-page `<title>`/description, canonical URLs, Open Graph
  and Twitter cards, JSON-LD `Person` structured data, and generated
  `robots.txt` (`app/robots.ts`) and `sitemap.xml` (`app/sitemap.ts`).

## Illustrations

- Undraw

## Deployment

The website is deployed and accessible at [hurera-dev.netlify.app](https://hurera-dev.netlify.app)

The production URL used for canonical tags, Open Graph and the sitemap can be
overridden at build time with the `NEXT_PUBLIC_SITE_URL` environment variable.

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



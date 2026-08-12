/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site (SSG) into `out/` at build time.
  // Every route in this portfolio renders from build-time data, so the whole
  // app can be pre-rendered to static HTML for the best possible SEO and TTFB.
  output: 'export',

  reactStrictMode: true,

  // `next/image` optimization needs a server; with a static export we serve the
  // original assets as-is.
  images: {
    unoptimized: true,
  },

  eslint: {
    // Linting runs as its own step (`npm run lint`); don't fail static builds on it.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

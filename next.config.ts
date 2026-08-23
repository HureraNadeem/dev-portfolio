import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

  /**
   * Every page lives under a locale prefix, so `/` matches no route.
   *
   * Three surfaces need covering and each needs its own mechanism:
   *   - `next dev`      this redirect
   *   - Netlify         the forced 302 in netlify.toml
   *   - any other host  public/index.html, which ships in the export
   *
   * Gated to development because `redirects()` needs a server and a static
   * export has none; leaving it on unconditionally just makes `next build`
   * warn three times that it is being ignored.
   *
   * Deliberately not language-negotiated — see the note in netlify.toml.
   */
  ...(process.env.NODE_ENV === 'development'
    ? {
        async redirects() {
          const routes = ['education', 'experience', 'projects', 'contact'];
          return [
            { source: '/', destination: '/en', permanent: false },
            ...routes.map((route) => ({
              source: `/${route}`,
              destination: `/en/${route}`,
              permanent: true,
            })),
          ];
        },
      }
    : {}),
};

export default nextConfig;

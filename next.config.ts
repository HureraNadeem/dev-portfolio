import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /**
   * Emit a fully static site (SSG) into `out/` at build time. Every route
   * renders from build-time data, so the whole app pre-renders to static HTML.
   *
   * Applied to builds only. `output` describes what `next build` produces, but
   * `next dev` also enforces its constraints — including that every dynamic
   * param appear in generateStaticParams. That makes an unknown locale
   * (`/nope` matching `[lang]`) a hard error before the layout can call
   * notFound(), so the dev server answers with an error overlay where the built
   * site correctly serves the 404 page. Leaving it off in dev lets routing
   * behave the way the deployed site does.
   *
   * The trade is that dev no longer flags export incompatibilities early —
   * `next build` still catches them, and it runs in CI and before every deploy.
   */
  ...(isDev ? {} : { output: 'export' as const }),

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
  ...(isDev
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

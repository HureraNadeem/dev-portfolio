/**
 * Central place for site-wide metadata used by the Metadata API, sitemap,
 * robots and structured data. Override the production URL at build time with
 * `NEXT_PUBLIC_SITE_URL` (e.g. in the hosting provider's env settings).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hurera-dev.netlify.app'
).replace(/\/$/, '')

export const SITE_NAME = 'Hurera Nadeem'

export const SITE_TITLE = 'Hurera Nadeem — Full-Stack Developer'

export const SITE_DESCRIPTION =
  'Portfolio of Hurera Nadeem, a full-stack software engineer specialising in ' +
  'React, Next.js, Node.js and cloud-native applications. Explore my experience, ' +
  'education and projects.'

/** Default social-share image (relative to `SITE_URL`). */
export const OG_IMAGE = '/assets/images/dp.png'

export type NavRoute = {
  href: string
  label: string
}

/** Single source of truth for navigation and the sitemap. */
export const ROUTES: NavRoute[] = [
  { href: '/', label: 'Home' },
  { href: '/education', label: 'Education' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Me' },
]

import type { MetadataRoute } from 'next'
import { ROUTES, SITE_URL } from '@/config/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ href }) => ({
    url: `${SITE_URL}${href === '/' ? '' : href}`,
    changeFrequency: 'monthly',
    priority: href === '/' ? 1 : 0.8,
  }))
}

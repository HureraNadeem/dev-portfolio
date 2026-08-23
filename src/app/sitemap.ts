import type { MetadataRoute } from 'next';
import { DEFAULT_LOCALE, LOCALES, LOCALE_META, localePath } from '@/config/i18n';
import { ROUTES, SITE_URL } from '@/config/site';

export const dynamic = 'force-static';

/**
 * Every page in every locale, each entry declaring its siblings.
 *
 * The `alternates.languages` block mirrors the hreflang tags in the page head.
 * Stating it in both places is deliberate: Google accepts either, and a sitemap
 * is the more robust channel of the two because it cannot be broken by a
 * caching layer or a partial render.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = (path: string) =>
    Object.fromEntries([
      ...LOCALES.map((l) => [LOCALE_META[l].htmlLang, `${SITE_URL}${localePath(l, path)}`]),
      ['x-default', `${SITE_URL}${localePath(DEFAULT_LOCALE, path)}`],
    ]);

  return LOCALES.flatMap((locale) =>
    ROUTES.map(({ href }) => ({
      url: `${SITE_URL}${localePath(locale, href)}`,
      changeFrequency: 'monthly' as const,
      priority: href === '/' ? 1 : 0.8,
      alternates: { languages: languages(href) },
    })),
  );
}

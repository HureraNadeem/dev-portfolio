import type { Metadata } from 'next';
import { DEFAULT_LOCALE, LOCALES, LOCALE_META, localePath, type Locale } from '@/config/i18n';
import { SITE_URL } from '@/config/site';

/**
 * hreflang is the part of multilingual SEO that most often ships broken, and it
 * fails silently: a cluster with one bad or missing return link is discarded by
 * Google wholesale, so you pay the maintenance cost and get none of the benefit.
 *
 * Building it in one place from `LOCALES` makes the three rules structural
 * rather than something to remember:
 *
 *   1. Reciprocal — every locale lists every other locale, so whichever version
 *      a crawler reaches first, it finds links back to all the rest.
 *   2. Self-referencing — a page's own locale is included in its own cluster.
 *   3. `x-default` — points at the default locale, for readers whose language
 *      none of the versions match.
 */
export function localeAlternates(path: string) {
  const languages: Record<string, string> = {};

  for (const locale of LOCALES) {
    languages[LOCALE_META[locale].htmlLang] = `${SITE_URL}${localePath(locale, path)}`;
  }
  languages['x-default'] = `${SITE_URL}${localePath(DEFAULT_LOCALE, path)}`;

  return languages;
}

/** Canonical always points at the page's own locale — never at the English one. */
export function canonicalFor(locale: Locale, path: string) {
  return `${SITE_URL}${localePath(locale, path)}`;
}

type PageMetaInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
};

export function buildMetadata({ locale, path, title, description }: PageMetaInput): Metadata {
  const url = canonicalFor(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: localeAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      locale: LOCALE_META[locale].ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => LOCALE_META[l].ogLocale),
    },
  };
}

/**
 * Locale configuration.
 *
 * Every locale is served from its own subdirectory (`/en`, `/es`, ...) rather
 * than a subdomain or ccTLD: subdirectories inherit the domain's authority
 * instead of splitting it, which is what Google recommends for a single-owner
 * site.
 *
 * Note there is deliberately no automatic redirect based on IP or
 * Accept-Language anywhere in this codebase. Googlebot crawls predominantly
 * from US addresses, so language-sniffing redirects can leave every non-English
 * version undiscovered. Visitors choose from the switcher in the navbar and
 * that choice is all that moves them.
 */

export const LOCALES = ['en', 'es', 'fr', 'ar'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

type LocaleMeta = {
  /** Written in its own language — a switcher a reader cannot read is useless. */
  label: string;
  /** BCP 47 tag for `<html lang>` and hreflang. */
  htmlLang: string;
  dir: 'ltr' | 'rtl';
  /** Used by Open Graph, which wants `language_TERRITORY`. */
  ogLocale: string;
  /**
   * Shown in the language menu. Flags stand for countries, not languages —
   * Arabic is not Saudi and English is not British — so these are decoration
   * beside the name, never the only thing identifying an option.
   */
  flag: string;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: 'English', htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US', flag: '🇬🇧' },
  es: { label: 'Español', htmlLang: 'es', dir: 'ltr', ogLocale: 'es_ES', flag: '🇪🇸' },
  fr: { label: 'Français', htmlLang: 'fr', dir: 'ltr', ogLocale: 'fr_FR', flag: '🇫🇷' },
  ar: { label: 'العربية', htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_AR', flag: '🇸🇦' },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localeDir(locale: Locale) {
  return LOCALE_META[locale].dir;
}

/** `/en`, `/es/education`, ... — the single place a localised path is built. */
export function localePath(locale: Locale, path = '/') {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${clean}`;
}

import { LOCALES, LOCALE_META, localePath, type Locale } from '@/config/i18n';
import {
  ALMA_MATER,
  CONTACT_EMAIL,
  OG_IMAGE,
  RESUME_URL,
  ROUTES,
  SITE_NAME,
  SITE_ROLE,
  SITE_URL,
  SKILLS,
  SOCIAL_LINKS,
} from '@/config/site';

/**
 * JSON-LD is the one part of a page an answer engine can read without having to
 * interpret prose, so it carries the facts about who this is and what they do.
 *
 * The Person is a single entity across every locale — the same human, described
 * in different languages — so its `@id` is deliberately locale-independent and
 * every localised page points at it. Only the page-level nodes (`WebPage`,
 * `ProfilePage`) are per-locale, each declaring `inLanguage` and listing its
 * translations via `workTranslation`, so a crawler can tell a translation from
 * a duplicate.
 */

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: SITE_ROLE,
  image: `${SITE_URL}${OG_IMAGE}`,
  email: `mailto:${CONTACT_EMAIL}`,
  sameAs: SOCIAL_LINKS,
  knowsAbout: SKILLS,
  knowsLanguage: LOCALES.map((l) => LOCALE_META[l].htmlLang),
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: ALMA_MATER.name,
    url: ALMA_MATER.url,
  },
  nationality: { '@type': 'Country', name: 'Pakistan' },
  subjectOf: { '@type': 'DigitalDocument', name: 'Resume', url: RESUME_URL },
};

/** Sibling locales of a page, so translations are declared rather than inferred. */
function translationsOf(locale: Locale, path: string) {
  return LOCALES.filter((l) => l !== locale).map((l) => ({
    '@type': 'WebPage',
    '@id': `${SITE_URL}${localePath(l, path)}#webpage`,
    inLanguage: LOCALE_META[l].htmlLang,
  }));
}

export function homeJsonLd(locale: Locale, description: string) {
  const url = `${SITE_URL}${localePath(locale, '/')}`;
  const lang = LOCALE_META[locale].htmlLang;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...person, description },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: `${SITE_NAME} — Portfolio`,
        description,
        inLanguage: LOCALES.map((l) => LOCALE_META[l].htmlLang),
        publisher: { '@id': PERSON_ID },
        about: { '@id': PERSON_ID },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profilepage`,
        url,
        name: `${SITE_NAME} — ${SITE_ROLE}`,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': PERSON_ID },
        inLanguage: lang,
        workTranslation: translationsOf(locale, '/'),
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${url}#nav`,
        inLanguage: lang,
        url: ROUTES.map(({ href }) => `${SITE_URL}${localePath(locale, href)}`),
      },
    ],
  };
}

export function pageJsonLd({
  locale,
  path,
  name,
  description,
}: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
}) {
  const url = `${SITE_URL}${localePath(locale, path)}`;
  const home = `${SITE_URL}${localePath(locale, '/')}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        inLanguage: LOCALE_META[locale].htmlLang,
        workTranslation: translationsOf(locale, path),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: home },
          { '@type': 'ListItem', position: 2, name, item: url },
        ],
      },
    ],
  };
}

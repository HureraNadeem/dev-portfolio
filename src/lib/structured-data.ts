import {
  ALMA_MATER,
  CONTACT_EMAIL,
  OG_IMAGE,
  ROUTES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ROLE,
  SITE_URL,
  SKILLS,
  SOCIAL_LINKS,
} from '@/config/site';

/**
 * JSON-LD is the one part of a page an answer engine can read without having to
 * interpret prose, so it is where the facts about who this is, what they do and
 * where else they exist online belong. Everything is derived from
 * `@/config/site` so the graph cannot contradict the rendered page.
 */

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: SITE_ROLE,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}${OG_IMAGE}`,
  email: `mailto:${CONTACT_EMAIL}`,
  sameAs: SOCIAL_LINKS,
  knowsAbout: SKILLS,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: ALMA_MATER.name,
    url: ALMA_MATER.url,
  },
  nationality: { '@type': 'Country', name: 'Pakistan' },
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_TITLE_FALLBACK(),
  description: SITE_DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
  about: { '@id': PERSON_ID },
};

function SITE_TITLE_FALLBACK() {
  return `${SITE_NAME} — Portfolio`;
}

/**
 * One graph on the home page rather than a separate blob per entity: `@id`
 * references let a consumer resolve Person, WebSite and the site's pages as a
 * single connected description instead of three unrelated fragments.
 */
export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    website,
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: `${SITE_NAME} — ${SITE_ROLE}`,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': PERSON_ID },
      mainEntity: { '@id': PERSON_ID },
      inLanguage: 'en',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': `${SITE_URL}/#nav`,
      name: ROUTES.map(({ label }) => label),
      url: ROUTES.map(({ href }) => `${SITE_URL}${href === '/' ? '' : href}`),
    },
  ],
};

/**
 * Per-page graph: states what the page is, that it belongs to the site, and
 * that it is about the same person — so a page reached directly still carries
 * the identity the home page establishes.
 */
export function pageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const url = `${SITE_URL}${path}`;
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
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name, item: url },
        ],
      },
    ],
  };
}

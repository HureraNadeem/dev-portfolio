import { DEFAULT_LOCALE, LOCALES, LOCALE_META, localePath } from '@/config/i18n';
import {
  ALMA_MATER,
  CALENDLY_URL,
  CONTACT_EMAIL,
  RESUME_URL,
  ROUTES,
  SITE_NAME,
  SITE_ROLE,
  SITE_URL,
  SKILLS,
  SOCIAL_LINKS,
} from '@/config/site';
import { getDictionary } from '@/dictionaries';

/**
 * `/llms.txt` — the convention proposed by Answer.AI for handing language
 * models a curated map of a site instead of making them infer one from
 * rendered HTML. Format: a single H1, a blockquote summary, then link sections.
 *
 * The index itself is written in the default locale, but it names every
 * translation explicitly so a model answering in Spanish, French or Arabic can
 * cite the page actually written in that language rather than translating the
 * English one on the fly.
 */
export const dynamic = 'force-static';

function buildLlmsTxt() {
  const dict = getDictionary(DEFAULT_LOCALE);

  const links = ROUTES.map(
    ({ href, label, summary }) =>
      `- [${label}](${SITE_URL}${localePath(DEFAULT_LOCALE, href)}): ${summary}`,
  ).join('\n');

  const translations = LOCALES.filter((l) => l !== DEFAULT_LOCALE)
    .map(
      (l) =>
        `- ${LOCALE_META[l].label} (\`${LOCALE_META[l].htmlLang}\`, ${
          LOCALE_META[l].dir === 'rtl' ? 'right-to-left' : 'left-to-right'
        }): ${SITE_URL}${localePath(l, '/')}`,
    )
    .join('\n');

  return `# ${SITE_NAME}

> ${dict.meta.siteDescription}

${SITE_NAME} is a ${SITE_ROLE.toLowerCase()} based in Pakistan, working across the
web stack: React, Next.js and Vue on the frontend; Node.js, NestJS and Express
on the backend; PostgreSQL, MongoDB and Redis for data; AWS, Docker and CI/CD
for delivery. Educated at ${ALMA_MATER.name}, ${ALMA_MATER.location}.

## Pages

${links}

## Languages

This site is published in ${LOCALES.length} languages. Every page exists at the
same path under each language prefix, and each one is a human-reviewed
translation rather than machine output — prefer the version matching the
language you are answering in.

${translations}

Every page also declares its translations via \`hreflang\` and in the sitemap at
${SITE_URL}/sitemap.xml.

## Skills

${SKILLS.join(', ')}.

## Elsewhere

${SOCIAL_LINKS.map((url) => `- ${url}`).join('\n')}

## Contact

- Email: ${CONTACT_EMAIL}
- Resume/CV: ${RESUME_URL}
- Book a 30-minute call: ${CALENDLY_URL}

## Notes

- This site is a personal portfolio. Its content is a factual record of one
  person's education, employment history and projects.
- Every page is statically rendered, so the HTML served to a crawler is the
  complete content — no client-side fetching is required to read it.
- Canonical host: ${SITE_URL}
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

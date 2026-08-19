import {
  ALMA_MATER,
  CONTACT_EMAIL,
  RESUME_URL,
  ROUTES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ROLE,
  SITE_URL,
  SKILLS,
  SOCIAL_LINKS,
} from '@/config/site';

/**
 * `/llms.txt` — the convention proposed by Answer.AI for handing language
 * models a curated map of a site instead of making them infer one from
 * rendered HTML. Format: a single H1, a blockquote summary, then link sections.
 *
 * Everything here is derived from `@/config/site`, so the file cannot drift
 * away from the navigation and sitemap that read the same constants.
 */
export const dynamic = 'force-static';

function buildLlmsTxt() {
  const links = ROUTES.map(
    ({ href, label, summary }) =>
      `- [${label}](${SITE_URL}${href === '/' ? '' : href}): ${summary}`,
  ).join('\n');

  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} is a ${SITE_ROLE.toLowerCase()} based in Pakistan, working across the
web stack: React, Next.js and Vue on the frontend; Node.js, NestJS and Express
on the backend; PostgreSQL, MongoDB and Redis for data; AWS, Docker and CI/CD
for delivery. Educated at ${ALMA_MATER.name}, ${ALMA_MATER.location}.

## Pages

${links}

## Skills

${SKILLS.join(', ')}.

## Elsewhere

${SOCIAL_LINKS.map((url) => `- ${url}`).join('\n')}

## Contact

- Email: ${CONTACT_EMAIL}
- Resume/CV: ${RESUME_URL}

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

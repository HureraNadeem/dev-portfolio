/**
 * Central place for site-wide metadata used by the Metadata API, sitemap,
 * robots and structured data. Override the production URL at build time with
 * `NEXT_PUBLIC_SITE_URL` (e.g. in the hosting provider's env settings).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hurera-dev.netlify.app'
).replace(/\/$/, '');

export const SITE_NAME = 'Hurera Nadeem';

export const SITE_TITLE = 'Hurera Nadeem — Full-Stack Developer';

export const SITE_DESCRIPTION =
  'Portfolio of Hurera Nadeem, a full-stack software engineer specialising in ' +
  'React, Next.js, Node.js and cloud-native applications. Explore my experience, ' +
  'education and projects.';

/** Default social-share image (relative to `SITE_URL`). */
export const OG_IMAGE = '/assets/images/dp.png';

export const SITE_ROLE = 'Full-Stack Software Engineer';

/** Profiles that establish identity for search and answer engines. */
export const SOCIAL_LINKS = [
  'https://github.com/HureraNadeem',
  'https://www.linkedin.com/in/iamhurera/',
  'https://www.instagram.com/iamhurera/',
  'https://www.facebook.com/iamhurera',
];

export const CONTACT_EMAIL = 'muhammadhureran8@gmail.com';

/** Publicly shared CV. Kept here so the button and llms.txt cannot disagree. */
export const RESUME_URL =
  'https://drive.google.com/file/d/1gRGEmR_rYKr_leux1vztJTQ_X0Ceq5bN/view?usp=sharing';

export const ALMA_MATER = {
  name: 'National University of Sciences and Technology (NUST)',
  url: 'https://nust.edu.pk/',
  location: 'Islamabad, Pakistan',
};

export const SKILLS = [
  'React',
  'Next.js',
  'Vue.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NestJS',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Redis',
  'AWS',
  'Docker',
  'DevOps',
  'Cloud Computing',
  'AI Engineering',
];

export type NavRoute = {
  href: string;
  label: string;
  /**
   * One line describing the page. Written for answer engines as much as for
   * people: llms.txt lists these verbatim, so each should stand alone without
   * the surrounding page for context.
   */
  summary: string;
};

/** Single source of truth for navigation, the sitemap and llms.txt. */
export const ROUTES: NavRoute[] = [
  {
    href: '/',
    label: 'Home',
    summary:
      'Introduction and a breakdown of what I build across frontend, backend, cloud/DevOps and AI engineering, with the technologies used in each.',
  },
  {
    href: '/education',
    label: 'Education',
    summary:
      'Bachelor of Software Engineering from NUST Islamabad, plus completed online courses in React, Next.js, Node.js, TypeScript and machine learning.',
  },
  {
    href: '/experience',
    label: 'Experience',
    summary:
      'Full-stack, product engineering and DevOps roles with dates, employers and responsibilities, followed by community and volunteering work.',
  },
  {
    href: '/projects',
    label: 'Projects',
    summary:
      'Selected projects — AI SaaS platforms, workforce management tools and full-stack web and mobile apps — with the stack behind each.',
  },
  {
    href: '/contact',
    label: 'Contact Me',
    summary: `How to reach me: email (${'muhammadhureran8@gmail.com'}), GitHub, LinkedIn, Instagram and Facebook.`,
  },
];

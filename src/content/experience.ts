/**
 * Structural facts about each role: who, which logo, where it links. None of it
 * is translated — a company name is a proper noun and stays as written. The
 * prose that does get translated (role title, dates, location, bullet points)
 * lives in the dictionaries, keyed by these ids, so adding a locale never means
 * duplicating a logo path or a LinkedIn URL.
 */
export type ExperienceKind = 'work' | 'volunteer';

export type ExperienceEntry = {
  id: ExperienceId;
  kind: ExperienceKind;
  company: string;
  logo: string;
  link: string;
};

export const EXPERIENCE_IDS = [
  'pockla',
  'ripeseed',
  'brilio',
  'cowlar',
  'devsinc-intern',
  'runthesims',
  'creative-chaos',
  'kpibar',
  'codefier',
  'devsinc-ambassador',
  'hackclub-joint-secretary',
  'on22',
  'gdsc',
  'hackclub-social-media',
  'hackclub-web',
  'insaniyat',
  'nust-media',
  'ieee-nust',
] as const;

export type ExperienceId = (typeof EXPERIENCE_IDS)[number];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'pockla',
    kind: 'work',
    company: 'Pockla',
    logo: 'pockla_logo.png',
    link: 'https://www.linkedin.com/company/pockla/',
  },
  {
    id: 'ripeseed',
    kind: 'work',
    company: 'RipeSeed.io',
    logo: 'ripeseed_logo.jpeg',
    link: 'https://pk.linkedin.com/company/ripeseed',
  },
  {
    id: 'brilio',
    kind: 'work',
    company: 'Brilio',
    logo: 'brilio_logo.jpeg',
    link: 'https://www.linkedin.com/company/brilio',
  },
  {
    id: 'cowlar',
    kind: 'work',
    company: 'Cowlar Design Studio',
    logo: 'cowlar_design_studio.jpeg',
    link: 'https://www.linkedin.com/company/cowlar-design/',
  },
  {
    id: 'devsinc-intern',
    kind: 'work',
    company: 'Devsinc',
    logo: 'devsinc.jpeg',
    link: 'https://www.linkedin.com/company/developers-inc/',
  },
  {
    id: 'runthesims',
    kind: 'work',
    company: 'RunTheSims (Contract)',
    logo: 'runthesims.jpg',
    link: 'https://www.runthesims.com/',
  },
  {
    id: 'creative-chaos',
    kind: 'work',
    company: 'Creative Chaos',
    logo: 'creative_chaos.jpg',
    link: 'https://www.linkedin.com/company/creative-chaos/',
  },
  {
    id: 'kpibar',
    kind: 'work',
    company: 'Kpibar',
    logo: 'kpibar.jpeg',
    link: 'https://www.linkedin.com/company/kpibar/',
  },
  {
    id: 'codefier',
    kind: 'work',
    company: 'CodeFier',
    logo: 'codefier.jpeg',
    link: 'https://www.linkedin.com/company/codefier/',
  },
  {
    id: 'devsinc-ambassador',
    kind: 'volunteer',
    company: 'Devsinc',
    logo: 'devsinc.jpeg',
    link: 'https://www.linkedin.com/company/developers-inc/',
  },
  {
    id: 'hackclub-joint-secretary',
    kind: 'volunteer',
    company: 'HackClub, NUST',
    logo: 'hack-club.jpeg',
    link: 'https://www.linkedin.com/company/hackclub-nust/',
  },
  {
    id: 'on22',
    kind: 'volunteer',
    company: "Orientation of NUST 2022 (ON'22)",
    logo: 'ON_22_NUST.jpg',
    link: 'https://instagram.com/o_nust?igshid=MzRlODBiNWFlZA==',
  },
  {
    id: 'gdsc',
    kind: 'volunteer',
    company: 'Google Developers Student Club (GDSC), NUST',
    logo: 'GDSC_NUST.jpeg',
    link: 'https://www.linkedin.com/company/gdscnust/',
  },
  {
    id: 'hackclub-social-media',
    kind: 'volunteer',
    company: 'HackClub, NUST',
    logo: 'hack-club.jpeg',
    link: 'https://www.linkedin.com/company/hackclub-nust/',
  },
  {
    id: 'hackclub-web',
    kind: 'volunteer',
    company: 'HackClub, NUST',
    logo: 'hack-club.jpeg',
    link: 'https://www.linkedin.com/company/hackclub-nust/',
  },
  {
    id: 'insaniyat',
    kind: 'volunteer',
    company: 'Project Insaniyat, NUST',
    logo: 'nust-logo.png',
    link: 'https://www.linkedin.com/school/nustofficial/',
  },
  {
    id: 'nust-media',
    kind: 'volunteer',
    company: 'NUST Media Club',
    logo: 'nust_media_club.jpeg',
    link: 'https://instagram.com/nustmediaclub?igshid=MzRlODBiNWFlZA==',
  },
  {
    id: 'ieee-nust',
    kind: 'volunteer',
    company: 'IEEE-School of Electrical Engineering and Computer Science, NUST',
    logo: 'IEEE-NUST.jpeg',
    link: 'https://www.linkedin.com/company/nustieeeclub/',
  },
];

export const WORK = EXPERIENCE.filter((e) => e.kind === 'work');
export const VOLUNTEERING = EXPERIENCE.filter((e) => e.kind === 'volunteer');

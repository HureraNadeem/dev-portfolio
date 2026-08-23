/**
 * Project identity: name, when it was built, where it lives. Product names and
 * dates are the same in every language, so only the description is translated —
 * it lives in the dictionaries under `projects.entries`, keyed by these ids.
 */
export const PROJECT_IDS = [
  'pockla-ai',
  'brilio-ai',
  'brava-crewconnect',
  'prgrss-ai',
  'thanos',
  'dev-portfolio',
  'katra',
] as const;

export type ProjectId = (typeof PROJECT_IDS)[number];

export type Project = {
  id: ProjectId;
  name: string;
  creationDate: string;
  link: string;
};

export const PROJECTS: Project[] = [
  { id: 'pockla-ai', name: 'Pockla AI', creationDate: '2026', link: 'https://www.pockla.io/' },
  { id: 'brilio-ai', name: 'Brilio.ai', creationDate: '2025', link: 'https://brilio.ai' },
  {
    id: 'brava-crewconnect',
    name: 'Brava CrewConnect',
    creationDate: '2025-2026',
    link: 'https://www.bravarooftile.com/contact-brava-technical-support/crew-connect/',
  },
  {
    id: 'prgrss-ai',
    name: 'PRGRSS.ai',
    creationDate: '2024-2025',
    link: 'https://www.thisisprgrss.com/',
  },
  {
    id: 'thanos',
    name: 'Thanos',
    creationDate: '2024',
    link: 'https://cowlardesignstudio.com/solutions/technology/thanos',
  },
  {
    id: 'dev-portfolio',
    name: 'Dev-Portfolio',
    creationDate: '2023',
    link: 'https://github.com/HureraNadeem/dev-portfolio',
  },
  { id: 'katra', name: 'Katra', creationDate: '2022', link: 'https://creativechaos.co/' },
];

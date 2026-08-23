/**
 * Completed online courses. Course titles, instructor names and platforms are
 * proper nouns, so this file is the same in every language — nothing here is
 * translated. Only the section heading around it is.
 */
export type Course = {
  name: string;
  instructor: string;
  imgsrc: string;
  link: string;
};

export const COURSES: Course[] = [
  {
    name: 'Complete Vue3 Developer Bootcamp (Pinia, Vitest)',
    instructor: 'Andrei Neagoie',
    imgsrc: 'udemy_dark.png',
    link: 'http://coursera.org',
  },
  {
    name: 'Next.js & React - The Complete Guide (incl. Two Paths!)',
    instructor: 'Maximilian Schwarzmüller',
    imgsrc: 'udemy_dark.png',
    link: 'http://coursera.org',
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    instructor: 'Andrew Ng',
    imgsrc: 'coursera.png',
    link: 'http://coursera.org',
  },
  {
    name: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    instructor: 'Jonas Schmedtmann',
    imgsrc: 'udemy_dark.png',
    link: 'http://coursera.org',
  },
  {
    name: 'Understanding TypeScript',
    instructor: 'Maximilian Schwarzmüller',
    imgsrc: 'udemy_dark.png',
    link: 'http://coursera.org',
  },
  {
    name: 'Front-End Web Development with React',
    instructor: 'The Hong Kong University',
    imgsrc: 'coursera.png',
    link: 'http://coursera.org',
  },
];

import type { ExperienceId } from '@/content/experience';
import type { ProjectId } from '@/content/projects';

/**
 * The shape every locale must provide in full.
 *
 * `Record<ExperienceId, …>` and `Record<ProjectId, …>` are deliberate: adding a
 * job or a project makes every locale fail to compile until it has been
 * translated. That is the point — a half-translated page is worse than no
 * translation, both for readers and because search engines read untranslated
 * main content as duplicate or thin content.
 */

export type WhatIDoCardId = 'frontend' | 'backend' | 'cloud' | 'ai';

export type PageMeta = {
  title: string;
  description: string;
};

export type Dictionary = {
  nav: {
    home: string;
    education: string;
    experience: string;
    projects: string;
    contact: string;
  };
  common: {
    resume: string;
    bookCall: string;
    languageLabel: string;
    skipToContent: string;
    madeWith: string;
    scrollToTop: string;
    toggleMenu: string;
    theme: string;
    switchToLight: string;
    switchToDark: string;
  };
  meta: {
    siteTitle: string;
    siteDescription: string;
    education: PageMeta;
    experience: PageMeta;
    projects: PageMeta;
    contact: PageMeta;
  };
  home: {
    greetingTitle: string;
    greetingSubtitle: string;
    whatIDoTitle: string;
    whatIDoLead: string;
    whatIDoLead2: string;
    cards: Record<WhatIDoCardId, { name: string; descriptions: string[] }>;
  };
  education: {
    title: string;
    subtitle: string;
    intro: string;
    degreeSection: string;
    coursesSection: string;
    university: string;
    degree: string;
    location: string;
    bullets: string[];
  };
  experience: {
    title: string;
    subtitle: string;
    intro: string;
    work: string;
    volunteerships: string;
    entries: Record<
      ExperienceId,
      { role: string; tenure: string; location: string; description: string[] }
    >;
  };
  projects: {
    title: string;
    intro: string;
    sectionTitle: string;
    createdIn: string;
    moreOnGithub: string;
    entries: Record<ProjectId, string>;
  };
  contact: {
    title: string;
    intro: string;
    facts: {
      email: string;
      basedIn: string;
      basedInValue: string;
      role: string;
      roleValue: string;
      openTo: string;
      openToValue: string;
    };
    reachOutTitle: string;
    reachOut: string[];
    emailNote: string;
    cta: string;
  };
};

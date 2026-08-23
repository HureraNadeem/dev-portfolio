'use client';

import Link from 'next/link';
import { Slide } from 'react-awesome-reveal';

import ProjectsPageSVG from '@/components/icons/projects-illustration';
import { GithubSVG } from '@/components/icons/social-icons';
import {
  AWSSVG,
  AzureSVG,
  DockerSVG,
  ExpressJsSVG,
  FireBaseSVG,
  GCPSVG,
  MaterialUI,
  MongoDBSVG,
  NextSVG,
  NodeSVG,
  PostgreSQLSVG,
  ReactNativeSVG,
  ReactSVG,
  ReduxSagaSVG,
  ReduxSVG,
  ShadCNSVG,
  TailwindSVG,
  TypescriptSVG,
  VueJSSVG,
} from '@/components/icons/tech-logos';
import Wrapper from '@/components/layout/wrapper';
import { PROJECTS, type ProjectId } from '@/content/projects';
import type { Dictionary } from '@/dictionaries';
import ProjectCard from './project-card';

/**
 * The stack behind each project is markup, not prose, so it lives here rather
 * than in the dictionaries — a tech logo is identical in every language.
 */
const STACK: Record<ProjectId, { name: string; component: React.JSX.Element }[]> = {
  'pockla-ai': [
    { name: 'Next.js', component: <NextSVG /> },
    { name: 'ShadCN', component: <ShadCNSVG /> },
    { name: 'Tailwind CSS', component: <TailwindSVG /> },
  ],
  'brilio-ai': [
    { name: 'Next.js', component: <NextSVG /> },
    { name: 'React.js', component: <ReactSVG /> },
    { name: 'TypeScript', component: <TypescriptSVG /> },
    { name: 'Tailwind CSS', component: <TailwindSVG /> },
    { name: 'ShadCN', component: <ShadCNSVG /> },
    { name: 'Azure', component: <AzureSVG /> },
  ],
  'brava-crewconnect': [
    { name: 'Next.js', component: <NextSVG /> },
    { name: 'React.js', component: <ReactSVG /> },
    { name: 'Node.js', component: <NodeSVG /> },
    { name: 'Express.js', component: <ExpressJsSVG /> },
    { name: 'PostgreSQL', component: <PostgreSQLSVG /> },
    { name: 'Docker', component: <DockerSVG /> },
    { name: 'AWS', component: <AWSSVG /> },
  ],
  'prgrss-ai': [
    { name: 'React Native', component: <ReactNativeSVG /> },
    { name: 'React.js', component: <ReactSVG /> },
    { name: 'Node.js', component: <NodeSVG /> },
    { name: 'Firebase', component: <FireBaseSVG /> },
    { name: 'GCP', component: <GCPSVG /> },
  ],
  thanos: [
    { name: 'Node.js', component: <NodeSVG /> },
    { name: 'Express', component: <ExpressJsSVG /> },
    { name: 'MongoDB', component: <MongoDBSVG /> },
    { name: 'Vue.js', component: <VueJSSVG /> },
    { name: 'Tailwind CSS', component: <TailwindSVG /> },
    { name: 'PostgreSQL', component: <PostgreSQLSVG /> },
  ],
  'dev-portfolio': [
    { name: 'Next.js', component: <NextSVG /> },
    { name: 'React.js', component: <ReactSVG /> },
    { name: 'Tailwind CSS', component: <TailwindSVG /> },
    { name: 'TypeScript', component: <TypescriptSVG /> },
  ],
  katra: [
    { name: 'React.js', component: <ReactSVG /> },
    { name: 'Material UI', component: <MaterialUI /> },
    { name: 'Redux', component: <ReduxSVG /> },
    { name: 'Redux Saga', component: <ReduxSagaSVG /> },
    { name: 'TypeScript', component: <TypescriptSVG /> },
  ],
};

function ProjectsView({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Wrapper>
        <div className="flex flex-row items-start justify-around bg-main-bg-color py-7 sm:flex-col sm:items-center sm:px-0 sm:py-5 md:flex-col md:items-center md:px-0 md:py-5 lg:flex-col lg:items-center lg:px-0 lg:py-5 xl:gap-5 2xl:items-center 2xl:justify-center 2xl:gap-5">
          <Slide
            triggerOnce
            direction="left"
            className="svg-div flex w-100% flex-col items-center justify-center xl:w-50% 2xl:w-50%"
          >
            <ProjectsPageSVG />
          </Slide>
          <div className="flex flex-col items-center justify-center pt-14 sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% xl:pt-12 2xl:w-50% 2xl:pt-0">
            <Slide triggerOnce direction="right">
              <h1 className="primary-heading justify-self-center text-center">
                {dict.projects.title}
              </h1>
              <p className="tertiary-text justify-self-center py-1 text-center">
                {dict.projects.intro}
              </p>
            </Slide>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <h2
          style={{ marginBottom: '50px' }}
          className="primary-heading justify-self-center text-center"
        >
          {dict.projects.sectionTitle}
        </h2>
        <div className="project-container item-center flex flex-row flex-wrap justify-center gap-[2vw] sm:gap-10 md:gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={dict.projects.entries[project.id]}
              creationDate={project.creationDate}
              createdInLabel={dict.projects.createdIn}
              stackSVGs={STACK[project.id]}
              link={project.link}
            />
          ))}
        </div>
      </Wrapper>

      <Wrapper>
        <div className="flex flex-row items-center justify-center">
          <div className="font-GoogleSans-Regular mr-0 mt-5 max-w-max transform cursor-pointer rounded-md bg-text-color px-6 py-3 text-center font-sans text-lg font-medium leading-tight tracking-wide text-main-bg-color no-underline transition-transform duration-500 hover:scale-105 hover:transform">
            <Link
              href={'https://www.github.com/hureranadeem'}
              target="_blank"
              rel="noreferrer"
              className="font-GoogleSans-Regular flex flex-row items-center justify-center gap-4"
            >
              <span className="sm:text-[13px] md:text-[15px]">{dict.projects.moreOnGithub}</span>
              <span className="sm:text-[13px] md:text-[15px]">
                <GithubSVG />
              </span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ProjectsView;

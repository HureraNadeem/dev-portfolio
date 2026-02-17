import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Wrapper from '@/components/wrapper/wrapper';
import ProjectsPageSVG from '@/public/assets/svgs/projects-page-svg';
import {
  HtmlSVG,
  CssSVG,
  JavascriptSVG,
  TypescriptSVG,
  ReactSVG,
  NodeSVG,
  ExpressJsSVG,
  MongoDBSVG,
  MongooseSVG,
  NextSVG,
  PostmanSVG,
  ReduxSVG,
  TailwindSVG,
  ReduxSagaSVG,
  MaterialUI,
  BootstrapSVG,
  CppSVG,
  JavaSVG,
  FireBaseSVG,
  XmlSVG,
  ShadCNSVG,
  AzureSVG,
  PostgreSQLSVG,
  DockerSVG,
  AWSSVG,
  ReactNativeSVG,
  GCPSVG,
  VueJSSVG,
} from '@/public/assets/svgs/projects-tech-logos-svgs';

import ProjectCard from '@/components/project-card/project-card';
import Footer from '@/components/footer/footer';
import Head from 'next/head';
import { Fade, Slide } from 'react-awesome-reveal';
import { GithubSVG } from '@/public/assets/svgs/socials-svg';
import Link from 'next/link';

function Projects() {
  const projectData = [
    {
      name: 'Brilio.ai',
      description:
        'AI SaaS for businesses and individuals to create custom AI agents, train LLMs with their business logic, and integrate data from documents, web links, databases, and QA chats.',
      creationDate: '2025',
      stackSVGs: [
        {
          name: 'Next.js',
          component: <NextSVG />,
        },
        {
          name: 'React.js',
          component: <ReactSVG />,
        },
        {
          name: 'TypeScript',
          component: <TypescriptSVG />,
        },
        {
          name: 'Tailwind CSS',
          component: <TailwindSVG />,
        },
        {
          name: 'ShadCN',
          component: <ShadCNSVG />,
        },
        {
          name: 'Azure',
          component: <AzureSVG />,
        },
      ],
      link: 'https://brilio.ai',
    },
    {
      name: 'Brava CrewConnect',
      description:
        'Workforce management platform for roofing contractors that automates crew training certification, job assignments, and compliance tracking across subcontractors. Features real-time integrations with Monday.com, FlexiQuiz, CompanyCam, and multi-channel notifications (email/SMS).',
      creationDate: '2025-2026',
      stackSVGs: [
        {
          name: 'Next.js',
          component: <NextSVG />,
        },
        {
          name: 'React.js',
          component: <ReactSVG />,
        },
        {
          name: 'Node.js',
          component: <NodeSVG />,
        },
        {
          name: 'Express.js',
          component: <ExpressJsSVG />,
        },
        {
          name: 'PostgreSQL',
          component: <PostgreSQLSVG />,
        },
        {
          name: 'Docker',
          component: <DockerSVG />,
        },
        {
          name: 'AWS',
          component: <AWSSVG />,
        },
      ],
      link: 'https://www.bravarooftile.com/contact-brava-technical-support/crew-connect/',
    },
    {
      name: 'PRGRSS.ai',
      description:
        'Cross-platform Web and Mobile platform for AI assisted mentorship of Black and Brown community in the UK, featuring AI powered mentors/mentees matching, real-time video communication, progress tracking, and in-app chat feature to provide end-to-end mentorship.',
      creationDate: '2024-2025',
      stackSVGs: [
        {
          name: 'React Native',
          component: <ReactNativeSVG />,
        },
        {
          name: 'React.js',
          component: <ReactSVG />,
        },
        {
          name: 'Node.js',
          component: <NodeSVG />,
        },
        {
          name: 'Firebase',
          component: <FireBaseSVG />,
        },
        {
          name: 'GCP',
          component: <GCPSVG />,
        },
      ],
      link: 'https://www.thisisprgrss.com/',
    },
        {
      name: 'Thanos',
      description:
        'Thanos AI is the epitome of our digitization tools-a comprehensive end-to-end solution for machine learning projects. It encompasses everything from data gathering and annotation to AI-assisted model deployment.',
      creationDate: '2024',
      stackSVGs: [
        { name: 'Node.js', component: <NodeSVG /> },
        { name: 'Express', component: <ExpressJsSVG /> },
        { name: 'MongoDB', component: <MongoDBSVG /> },
        { name: 'Vue.js', component: <VueJSSVG /> },
        { name: 'Tailwind CSS', component: <TailwindSVG /> },
        { name: 'PostgreSQL', component: <PostgreSQLSVG /> },
      ],
      link: 'https://cowlardesignstudio.com/solutions/technology/thanos',
    },
    {
      name: 'Dev-Portfolio',
      description:
        'The Website you are scrolling through right now 😉 Dev-Portfolio is open source customizable portfolio website for developers to showcase their technical skills and highlight their achievements.',
      creationDate: '2023',
      stackSVGs: [
        {
          name: 'Next.js',
          component: <NextSVG />,
        },
        {
          name: 'React.js',
          component: <ReactSVG />,
        },
        {
          name: 'Tailwind Css',
          component: <TailwindSVG />,
        },
        {
          name: 'TypeScript',
          component: <TypescriptSVG />,
        },
      ],
      link: 'https://github.com/HureraNadeem/dev-portfolio',
    },
    {
      name: 'Katra',
      description:
        'Full-Stack Cross Platform application for Creative Chaos designed to seamlessly connect individuals in need of blood with generous donors. This innovative solution simplifies and enhances communication between both parties, ensuring a smooth and efficient process.',
      creationDate: '2022',
      stackSVGs: [
        {
          name: 'React',
          component: <ReactSVG />,
        },
        {
          name: 'Material-UI',
          component: <MaterialUI />,
        },
        {
          name: 'Redux',
          component: <ReduxSVG />,
        },
        {
          name: 'Redux Sagas',
          component: <ReduxSagaSVG />,
        },
        {
          name: 'TypeScript',
          component: <TypescriptSVG />,
        },
      ],
      link: 'https://creativechaos.co/',
    },
  ];
  return (
    <>
      <Head>
        <title>Projects - Hurera</title>
        <meta
          name='description'
          content="This is the projects page of hurera'a dev portfolio."
        />
      </Head>

      <Wrapper>
        <div className='py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-start sm:items-center md:items-center lg:items-center bg-main-bg-color xl:gap-5 2xl:gap-5 2xl:justify-center 2xl:items-center'>
          <Slide
            triggerOnce
            direction='left'
            className='svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4'>
            <ProjectsPageSVG />
          </Slide>
          <div className='sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0'>
            <Slide triggerOnce direction='right'>
              <h4 className='primary-heading justify-self-center text-center'>
                Projects
              </h4>
              <p className='tertiary-text justify-self-center text-center py-1'>
                With a deep understanding of React, Next.js, Redux, Node.js,
                Express, GraphQL and MongoDB, my expertise lies in developing
                robust and scalable web applications. By harnessing the power of
                these technologies, I create engaging user interfaces that
                deliver exceptional experiences, effectively manage complex
                application states to ensure seamless data flow, develop
                efficient server-side APIs and design efficient data models and
                ensure secure data storage. My proficiency in these technologies
                enables me to deliver high-quality applications that meet the
                demands of modern web development. 🫡
              </p>
            </Slide>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className='project-container flex flex-row gap-[2vw] flex-wrap justify-center item-center sm:gap-10 md:gap-10 '>
          {projectData.map((e) => (
            <ProjectCard
              name={e.name}
              description={e.description}
              creationDate={e.creationDate}
              stackSVGs={e.stackSVGs}
              link={e.link}
            />
          ))}
        </div>
      </Wrapper>
      <Wrapper>
        <div className={`flex flex-row justify-center items-center`}>
          <div className='bg-text-color text-main-bg-color font-GoogleSans-Regular font-medium leading-tight max-w-max px-6 py-3 mr-0 rounded-md text-center no-underline font-sans mt-5 text-lg cursor-pointer tracking-wide  hover:transform transition-transform duration-500 transform hover:scale-105'>
            <Link
              href={'https://www.github.com/hureranadeem'}
              download={"Hurera's Resume"}
              target='_blank'
              rel='noreferrer'
              className='font-GoogleSans-Regular flex flex-row gap-4 justify-center items-center'>
              <span className='sm:text-[13px] md:text-[15px]'>
                {' '}
                More Projects
              </span>
              <span className='sm:text-[13px] md:text-[15px]'>
                <GithubSVG />
              </span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Projects;

'use client';

import Wrapper from '@/components/layout/wrapper';
import EducationPageSvg from '@/components/icons/education-illustration';
import Image from 'next/image';
import NustLogo from '@public/assets/images/nust-logo.png';
import CourseCard from './course-card';
import { Flip, Slide } from 'react-awesome-reveal';
import Link from 'next/link';

function EducationView() {
  const coursesData = [
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
  return (
    <>
      <Wrapper>
        <div className="flex flex-row items-start justify-around bg-main-bg-color py-7 sm:flex-col sm:items-center sm:px-0 sm:py-5 md:flex-col md:items-center md:px-0 md:py-5 lg:flex-col lg:items-center lg:px-0 lg:py-5 xl:gap-5 2xl:items-center 2xl:justify-center 2xl:gap-5">
          <Slide
            triggerOnce
            direction="left"
            className="svg-div mt-4 w-100% self-start sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center lg:flex lg:flex-col lg:items-center lg:justify-center xl:w-50% 2xl:ml-6 2xl:w-50%"
          >
            <EducationPageSvg />
          </Slide>
          <div className="flex flex-col items-center justify-center pt-14 sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% xl:pt-12 2xl:w-50% 2xl:pt-0">
            <Slide triggerOnce direction="right">
              <h4 className="primary-heading justify-self-center text-center">{`Education`}</h4>
              <h5 className="primary-text justify-self-center text-center">
                My Qualifications and Certifications
              </h5>
              <p className="tertiary-text justify-self-center py-1 text-center">
                Here&apos;s what you need to know about my academic background 🙃
              </p>
            </Slide>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <h4
          style={{ marginBottom: '50px' }}
          className="primary-heading justify-self-center text-center"
        >{`{ Degree Received }`}</h4>
        <div className="degree-card flex flex-row items-center justify-between sm:flex-col sm:gap-7 md:flex-col md:gap-7 lg:flex-col lg:gap-3 xl:gap-3 2xl:gap-3">
          <div
            style={{ borderRadius: '50%' }}
            className="degree-logo-div border-dee2e6 rounded-50% border-2 border-solid p-10px shadow-lg sm:w-50vw md:w-35vw lg:w-30vw"
          >
            <Flip direction="vertical" triggerOnce>
              <Link href={'https://www.linkedin.com/school/nustofficial/'} target="_blank">
                <Image
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    transform: 'scale(80%, 80%)',
                  }}
                  src={NustLogo}
                  alt="NUST logo"
                />
              </Link>
            </Flip>
          </div>
          <div className="degree-details-div border-dee2e6 rounded-lg border-2 border-solid shadow-lg">
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow:
                  'inset 43.3667px -43.3667px 43.3667px rgba(173, 173, 173, 0.1), inset -43.3667px 43.3667px 43.3667px rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(43.3667px)',
              }}
              className="flex flex-row justify-between gap-2 border sm:flex-col sm:p-15px md:flex-col md:p-15px lg:p-20px xl:p-20px 2xl:p-20px"
            >
              <div className="flex flex-col justify-between">
                <h3 className="mb-4 mt-2 text-23px font-semibold">
                  National University of Sciences and Technology, Islamabad
                </h3>
                <h6 className="text-18px font-semibold">Bachelor&apos;s in Software Engineering</h6>
              </div>
              <div>
                <p className="my-4 text-16px font-normal">Islamabad, Pakistan</p>
              </div>
            </div>
            <div className="bg-card-bg-color pr-20px sm:p-15px md:p-15px lg:p-20px xl:p-20px 2xl:p-20px">
              <h2 className="my-3 text-[17px]">
                ⚡ Gained extensive knowledge and insights through rigorous Computer Science courses
                covering areas such as Data Structures, Algorithms, Database Management Systems,
                Operating Systems, Machine Learning.
              </h2>
              <h2 className="my-3 text-[17px]">
                ⚡ Got the inside scoop on the entire software development cycle and the
                industry&apos;s processes by some specialized software engineering courses like
                Software Requirements Engineering, Software Design &amp; Architecture, and Software
                Construction etc.
              </h2>
              <h2 className="my-3 text-[17px]">
                ⚡ In addition to my academic pursuits, I have pursued courses in MERN Stack
                Development and explored the www world :)
              </h2>
              <h2 className="my-3 text-[17px]">
                ⚡ The supportive environment at NUST have played a crucial role in my personal
                development, fostering diversity and building confidence. Additionally, the emphasis
                on community bonding techniques has greatly contributed to my growth.
              </h2>
              <h2 className="my-3 text-[17px]">
                ⚡ One of my most fulfilling extracurricular activities has been leading and
                managing tech communities including HackClub NUST, Google Developers Student Club
                (GDSC) NUST, IEEE-NUST, NUST Media Club, and Orientation of NUST. These experiences
                have been incredibly fulfilling, allowing me to connect with like-minded individuals
                and contribute to the vibrant tech and non-tech ecosystem at NUST.
              </h2>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <h4
          style={{ marginBottom: '50px' }}
          className="primary-heading justify-self-center text-center"
        >{`{ Online Courses }`}</h4>
        <div className="certificates-container flex flex-row flex-wrap items-center justify-center gap-10">
          {coursesData.map((element, index) => (
            <CourseCard
              key={index}
              name={element.name}
              instructor={element.instructor}
              imgsrc={element.imgsrc}
              link={element.link}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default EducationView;

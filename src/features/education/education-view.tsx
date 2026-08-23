'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Flip, Slide } from 'react-awesome-reveal';

import EducationPageSvg from '@/components/icons/education-illustration';
import Wrapper from '@/components/layout/wrapper';
import { COURSES } from '@/content/courses';
import type { Dictionary } from '@/dictionaries';
import NustLogo from '@public/assets/images/nust-logo.png';
import CourseCard from './course-card';

function EducationView({ dict }: { dict: Dictionary }) {
  const { education } = dict;

  return (
    <>
      <Wrapper>
        <div className="flex flex-row items-start justify-around bg-main-bg-color py-7 sm:flex-col sm:items-center sm:px-0 sm:py-5 md:flex-col md:items-center md:px-0 md:py-5 lg:flex-col lg:items-center lg:px-0 lg:py-5 xl:gap-5 2xl:items-center 2xl:justify-center 2xl:gap-5">
          <Slide
            triggerOnce
            direction="left"
            className="svg-div flex w-100% flex-col items-center justify-center xl:w-50% 2xl:w-50%"
          >
            <EducationPageSvg />
          </Slide>
          <div className="flex flex-col items-center justify-center pt-14 sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% xl:pt-12 2xl:w-50% 2xl:pt-0">
            <Slide triggerOnce direction="right">
              <h1 className="primary-heading justify-self-center text-center">{education.title}</h1>
              <p className="primary-text justify-self-center text-center">{education.subtitle}</p>
              <p className="tertiary-text justify-self-center py-1 text-center">
                {education.intro}
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
          {education.degreeSection}
        </h2>
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
                <h3 className="mb-4 mt-2 text-23px font-semibold">{education.university}</h3>
                <h4 className="text-18px font-semibold">{education.degree}</h4>
              </div>
              <div>
                <p className="my-4 text-16px font-normal">{education.location}</p>
              </div>
            </div>
            <div className="bg-card-bg-color pe-20px sm:p-15px md:p-15px lg:p-20px xl:p-20px 2xl:p-20px">
              {education.bullets.map((bullet, index) => (
                <p key={index} className="my-3 text-[17px]">
                  {bullet}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <h2
          style={{ marginBottom: '50px' }}
          className="primary-heading justify-self-center text-center"
        >
          {education.coursesSection}
        </h2>
        <div className="certificates-container flex flex-row flex-wrap items-center justify-center gap-10">
          {COURSES.map((course) => (
            <CourseCard
              key={course.name}
              name={course.name}
              instructor={course.instructor}
              imgsrc={course.imgsrc}
              link={course.link}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default EducationView;

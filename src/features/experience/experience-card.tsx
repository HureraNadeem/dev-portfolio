'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

interface Props {
  lastOne: boolean;
  companyName: string;
  jobRoleTitle: string;
  logo: string;
  tenure: string;
  location: string;
  jobDescription: string[];
  link: string;
}

const ExperienceCard: FC<Props> = ({
  lastOne,
  companyName,
  jobRoleTitle,
  logo,
  tenure,
  location,
  jobDescription,
  link,
}) => {
  return (
    <>
      <Fade triggerOnce direction="up" style={{ width: '100%' }}>
        <div
          className={`employement-card my-[15px] flex flex-row items-start justify-start gap-[2%] rounded-lg border-[1px] border-line-color px-5 py-3 shadow-sm sm:flex-col sm:items-center sm:px-[15px] sm:py-[25px] md:flex-col md:items-center md:px-[15px] md:py-[25px] ${lastOne ? 'mb-[50px]' : ''}`}
        >
          {/* <div className="company-logo pb-3 min-w-min max-w-min sm:self-center md:self-center">
                        <Image className='w-70px h-70px min-w-min max-w-min' src={require(`../../public/assets/images/${logo}`)} alt='company_logo' />
                    </div> */}
          {/* shrink-0 sits on the link because the <a> is the flex item here.
              Without it the card squeezed it to ~69px, and Tailwind's preflight
              `max-width: 100%` dragged the logo down with it — width modified,
              height still pinned at 70px, which is precisely the aspect-ratio
              mismatch next/image warns about. */}
          <Link href={`${link}`} target="_blank" className="shrink-0">
            <div className="company-logo pb-3 sm:self-center md:self-center">
              <span className="block dark:rounded-lg dark:bg-[#eef0eb] dark:p-[5px]">
                <Image
                  className="h-70px w-70px"
                  src={`/assets/images/${logo}`}
                  width={70}
                  height={70}
                  alt={`${companyName} logo`}
                />
              </span>
            </div>
          </Link>
          <div className="employement-details w-94%">
            <div className="first-part flex flex-row items-start justify-between pb-[8px] sm:flex-col sm:items-center sm:justify-center sm:gap-[7px] md:flex-col md:items-center md:justify-center md:gap-[7px]">
              <div className="flex flex-col items-start justify-center sm:items-center sm:justify-center md:items-center md:justify-center">
                <h3 className="text-20px font-medium sm:text-center md:text-center">
                  {jobRoleTitle}
                </h3>
                <p className="text-15px font-normal sm:text-center md:text-center">{companyName}</p>
              </div>
              <div className="flex flex-col items-end justify-center sm:items-center sm:justify-center md:items-center md:justify-center">
                <p className="text-end text-15px font-light sm:text-center md:text-center">
                  {tenure}
                </p>
                <p className="text-end text-15px font-light italic sm:text-center md:text-center">
                  {location}
                </p>
              </div>
            </div>
            <div className="second-part">
              {jobDescription.map((element, index) => (
                <p key={index} className="text-14px font-light leading-[1.25rem]">
                  <span className="me-[10px]">&ndash;</span>
                  {element}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ExperienceCard;

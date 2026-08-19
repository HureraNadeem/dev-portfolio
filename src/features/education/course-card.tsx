'use client';

import React, { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

interface Props {
  key: number;
  name: string;
  instructor: string;
  imgsrc: string;
  link: string;
}

const CourseCard: FC<Props> = ({ name, instructor, imgsrc }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-bottom');
        } else {
          entry.target.classList.remove('animate-fade-in-bottom');
        }
      });
    });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="certificate-card h-350px w-385px transform overflow-hidden rounded-lg border-secondary-bg-color bg-card-bg-color shadow-lg transition-transform duration-500 hover:scale-105 sm:h-fit md:h-fit">
      <Fade triggerOnce direction="up">
        <div>
          <Image
            className="h-215px w-385px rounded-t-lg object-cover transition-all duration-300 hover:brightness-75"
            src={`/assets/images/${imgsrc}`}
            width={385}
            height={215}
            alt={`${name} course platform`}
          />
          <div className="border-t border-t-secondary-bg-color p-5">
            <h5 className="font-GoogleSans-Regular my-2 select-none text-center text-20px font-medium tracking-tight">
              {name}
            </h5>
            <p className="font-GoogleSans-Regular font-18px mb-3 select-none text-center italic">
              {' '}
              - {instructor}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CourseCard;

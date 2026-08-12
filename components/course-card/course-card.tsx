'use client';

import React, { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

interface Props {
    key: number,
    name: String,
    instructor: String,
    imgsrc: String,
    link: String;
}

const CourseCard: FC<Props> = ({ name, instructor, imgsrc, link }) => {
    const elementRef = useRef(null);

    // const handleClick = () => {
    //     window.open(`${link}`, '_blank');
    // }

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
        <>
            <div className="w-385px sm:h-fit md:h-fit h-350px overflow-hidden certificate-card bg-card-bg-color border-secondary-bg-color max-w-sm rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 huihui">
                <Fade triggerOnce direction='up'  >
                    <div> {/* <div onClick={handleClick}> */}
                        {/* custom animation class: animate-fade-in-bottom */}
                        <Image className="hover:brightness-75 transition-all duration-300 w-385px h-215px object-cover rounded-t-lg" src={`/assets/images/${imgsrc}`} width={385} height={215} alt={`${name} course platform`} />
                        <div className="p-5 border-t border-t-secondary-bg-color ">
                            <h5 className="select-none font-GoogleSans-Regular font-medium my-2 tracking-tight text-center text-20px">{name}</h5>
                            <p className=" select-none font-GoogleSans-Regular italic mb-3 text-center font-18px"> - {instructor}</p>
                        </div>
                    </div>
                </Fade >
            </div>
        </>
    )
}

export default CourseCard
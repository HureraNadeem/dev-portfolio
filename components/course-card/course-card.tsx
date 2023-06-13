import React, { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Props {
    key: number,
    name: String,
    instructor: String,
    imgsrc: String
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

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={elementRef} className="animate-fade-in-bottom cursor-default w-385px sm:h-fit md:h-fit h-350px overflow-hidden certificate-card bg-main-bg-color border border-secondary-bg-color max-w-sm rounded-lg shadow-lg motion-safe:from-right transition-transform duration-500 transform hover:scale-110">
                <Image className="hover:brightness-75 transition-all duration-300 w-385px h-215px object-cover rounded-t-lg" src={require(`../../public/assets/images/${imgsrc}`)} alt='platfrom_img' />
                <div className="p-5">
                    <h5 className="font-GoogleSans-Regular font-medium my-2 tracking-tight text-center text-20px">{name}</h5>
                    <p className="font-GoogleSans-Regular italic mb-3 text-center font-18px"> - {instructor}</p>
                </div>
            </div>
        </>
    )
}

export default CourseCard
import React, { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';


interface Props {
    key: Number;
    lastOne: Boolean;
    companyName: String;
    jobRoleTile: String;
    logo: String;
    tenure: String;
    location: String;
    jobDescription: String[];
    link: String;
}

const ExperienceCard: FC<Props> = ({ lastOne, companyName, jobRoleTile, logo, tenure, location, jobDescription, link }) => {

    return (
        <>
            <Fade triggerOnce direction='up' style={{ width: "100%" }}>
                <div className={`employement-card  flex flex-row justify-start items-start sm:flex-col sm:items-center md:flex-col md:items-center px-5 sm:px-[15px] md:px-[15px] py-3 sm:py-[25px] md:py-[25px] gap-[2%] border-neutral-400 border-[1px] rounded-lg shadow-sm my-[15px] ${lastOne ? "mb-[50px]" : ""}`}>
                    {/* <div className="company-logo pb-3 min-w-min max-w-min sm:self-center md:self-center">
                        <Image className='w-70px h-70px min-w-min max-w-min' src={require(`../../public/assets/images/${logo}`)} alt='company_logo' />
                    </div> */}
                    <Link href={`${link}`} target='_blank'>
                        <div className="company-logo pb-3 sm:self-center md:self-center">
                            <Image className='w-70px h-70px' src={require(`../../public/assets/images/${logo}`)} alt='company_logo' />
                        </div>
                    </Link>
                    <div className="employement-details w-94%">
                        <div className="first-part flex flex-row justify-between items-start  sm:flex-col sm:justify-center sm:items-center md:flex-col md:justify-center md:items-center sm:gap-[7px] md:gap-[7px] pb-[8px]">
                            <div className='flex flex-col justify-center items-start sm:justify-center sm:items-center md:justify-center md:items-center'>
                                <h2 className='font-medium text-20px sm:text-center md:text-center'>{jobRoleTile}</h2>
                                <h1 className='font-normal text-15px sm:text-center md:text-center'>{companyName}</h1>
                            </div>
                            <div className='flex flex-col justify-center items-end sm:justify-center sm:items-center md:justify-center md:items-center'>
                                <p className='font-light text-15px text-right sm:text-center md:text-center'>{tenure}</p>
                                <p className='font-light italic text-15px text-right sm:text-center md:text-center'>{location}</p>
                            </div>
                        </div>
                        <div className="second-part ">
                            {
                                jobDescription.map((element) => (<p className='text-14px leading-[1.25rem] font-light'><span className='mr-[10px]'>&ndash;</span>{element}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Fade>

        </>
    )
}

export default ExperienceCard
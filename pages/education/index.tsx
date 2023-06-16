import Navbar from '@/components/navbar/navbar'
import Wrapper from '@/components/wrapper/wrapper'
import EducationPageSvg from '@/public/assets/svgs/eduction-page-svg'
import Image from 'next/image'
import React from 'react'
import NustLogo from "../../public/assets/images/nust-logo.png"
import CourseCard from '@/components/course-card/course-card'
import Footer from '@/components/footer/footer'
import Head from 'next/head';
import { Flip, Slide } from "react-awesome-reveal";


function Education() {
    const coursesData = [
        {
            name: "Next.js & React - The Complete Guide (incl. Two Paths!)",
            instructor: "Maximilian Schwarzmüller",
            imgsrc: "udemy_light_mode.png",
            link: "http://coursera.org"
        },
        {
            name: "Supervised Machine Learning: Regression and Classification",
            instructor: "Andrew Ng",
            imgsrc: "coursera.png",
            link: "http://coursera.org"

        },
        {
            name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
            instructor: "Jonas Schmedtmann",
            imgsrc: "udemy_light_mode.png",
            link: "http://coursera.org"

        },

        {
            name: "Understanding TypeScript",
            instructor: "Maximilian Schwarzmüller",
            imgsrc: "udemy_light_mode.png",
            link: "http://coursera.org"

        },
        {
            name: "Front-End Web Development with React",
            instructor: "The Hong Kong University of Science and Technology",
            imgsrc: "coursera.png",
            link: "http://coursera.org"

        },
    ]
    return (
        <>
            <Head>
                <title>Eudcation - Hurera</title>
                <meta name="description" content="This is the education page of hurera'a dev portfolio." />
            </Head>


            <Wrapper>
                <div className="py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-start sm:items-center md:items-center lg:items-center bg-main-bg-color xl:gap-5 2xl:gap-5 2xl:justify-center 2xl:items-center">
                    <Slide triggerOnce direction="left" className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
                        <EducationPageSvg />
                    </Slide>
                    <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
                        <Slide triggerOnce direction="right" >
                            <h4 className='primary-heading justify-self-center text-center'>{`Education`}</h4>
                            <h5 className='primary-text justify-self-center text-center'>My Qualifications and Certifications</h5>
                            <p className='tertiary-text justify-self-center text-center py-1'>Here's what you need to know about my academic background 🙃</p>
                        </Slide>
                    </div>

                </div>
            </Wrapper>

            <Wrapper>
                <h4 style={{ marginBottom: "50px" }} className='primary-heading justify-self-center text-center'>{`{ Degree Received }`}</h4>
                <div className='degree-card flex flex-row justify-between items-center sm:flex-col md:flex-col lg:flex-col sm:gap-7 md:gap-7 lg:gap-3 xl:gap-3 2xl:gap-3'>
                    <div style={{ borderRadius: '50%' }} className='sm:w-50vw md:w-35vw lg:w-30vw degree-logo-div border-solid border-2 border-dee2e6 rounded-50% p-10px shadow-lg'>
                        <Flip direction='vertical' triggerOnce>
                            <Image style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                transform: "scale(80%, 80%)"
                            }} src={NustLogo} alt='NUST logo' />
                        </Flip>

                    </div>
                    <div className="degree-details-div border-solid border-2 border-dee2e6 rounded-lg shadow-lg">
                        <div className='border bg-secondary-bg-color lg:p-20px xl:p-20px 2xl:p-20px sm:p-15px md:p-15px  flex flex-row justify-between sm:flex-col md:flex-col gap-2'>
                            <div className='flex flex-col justify-between'>
                                <h3 className='text-23px font-semibold mt-2 mb-4'>National University of Sciences and Technology, Islamabad</h3>
                                <h6 className='text-18px font-semibold'>Bachelor's in Software Engineering</h6>
                            </div>
                            <div>
                                <p className='text-16px font-normal my-4'>Oct 2020 - Jun 2024 (expected)</p>
                            </div>
                        </div>
                        <div className='bg-card-bg-color  lg:p-20px xl:p-20px 2xl:p-20px sm:p-15px md:p-15px pr-20px'>
                            <h2 className='my-3 text-[17px]'>⚡ Gained extensive knowledge and insights through rigorous Computer Science courses covering areas such as Data Structures, Algorithms, Database Management Systems, Operating Systems, Machine Learning.</h2>
                            <h2 className='my-3 text-[17px]'>⚡ Got the inside scoop on the entire software development cycle and the industry's processes by some specialized software engineering courses like Software Requirements Engineering, Software Design & Architecture, and Software Construction etc.</h2>
                            <h2 className='my-3 text-[17px]'>⚡ In addition to my academic pursuits, I have pursued courses in MERN Stack Development and explored the www world :)</h2>
                            <h2 className='my-3 text-[17px]'>⚡ The supportive environment at NUST have played a crucial role in my personal development, fostering diversity and building confidence. Additionally, the emphasis on community bonding techniques has greatly contributed to my growth.</h2>
                            <h2 className='my-3 text-[17px]'>⚡ One of my most fulfilling extracurricular activities has been leading and managing tech communities including HackClub NUST, Google Developers Student Club (GDSC) NUST, IEEE-NUST, NUST Media Club, and Orientation of NUST. These experiences have been incredibly fulfilling, allowing me to connect with like-minded individuals and contribute to the vibrant tech and non-tech ecosystem at NUST.</h2>
                        </div>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <h4 style={{ marginBottom: "50px" }} className='primary-heading justify-self-center text-center'>{`{ Online Courses }`}</h4>
                <div className="certificates-container flex flex-row items-center justify-center flex-wrap gap-10">
                    {
                        coursesData.map((element, index) => {
                            return (
                                <>
                                    <CourseCard key={index} name={element.name} instructor={element.instructor} imgsrc={element.imgsrc} link={element.link} />
                                </>
                            );
                        })
                    }
                </div>
            </Wrapper>
        </>
    )
}

export default Education
import Navbar from '@/components/navbar/navbar'
import Wrapper from '@/components/wrapper/wrapper'
import ExperiencePageSVG from '@/public/assets/svgs/experience-page-svg'
import React, { useState } from 'react';
import ExperienceCard from '@/components/experience-card/experience-card';
import Footer from '@/components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import { Slide } from "react-awesome-reveal";


function Experience() {

    const [showWork, setShowWork] = useState<boolean>(false);
    const [showVolunteership, setShowVolunteership] = useState<boolean>(false);

    const WorkData = [
        {
            companyName: 'Creative Choas',
            jobRoleTile: 'Software Engineer Intern',
            logo: "creative_chaos.jpg",
            tenure: 'June 2022 - August 2022',
            location: 'San Francisco, US / Karachi, Pakistan / Remote',
            jobDescription: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!"
            ]
        },
        {
            companyName: 'Kpibar',
            jobRoleTile: 'Frontend Engineer',
            logo: "kpibar.jpeg",
            tenure: 'February 2022 - March 2022',
            location: 'Madrid, Spain / Remote',
            jobDescription: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!"
            ]
        },
        {
            companyName: 'CodeFier',
            jobRoleTile: 'Junior Web Developer',
            logo: "codefier.jpeg",
            tenure: 'January 2022 - March 2022',
            location: 'Rawalpindi, Pakistan / Remote',
            jobDescription: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!"
            ]
        }
    ]
    const VolunteershipData = [
        {
            companyName: 'HackClub',
            jobRoleTile: 'Joint Secretary (Web and IT)',
            logo: "creative_chaos.jpg",
            tenure: 'June 2022 - August 2022',
            location: 'San Francisco, US / Karachi, Pakistan / Remote',
            jobDescription: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reiciendis at accusamus eveniet enim consectetur totam, odit, minima minus quidem aliquid sunt. Tempore, iure earum minus sapiente, illo laborum alias dolor expedita molestias enim nesciunt magni. Ducimus dolores quis fugit dolor odit deleniti commodi, provident maxime corporis numquam in quia aliquid culpa vitae cum, voluptates quisquam eum vel aperiam quibusdam exercitationem impedit aspernatur ut nulla. Voluptatibus iusto iste architecto sapiente voluptates? Deleniti inventore velit at sit nesciunt, earum tempore placeat reprehenderit adipisci quasi praesentium suscipit impedit accusantium sequi beatae voluptas commodi vero. Maiores optio adipisci blanditiis necessitatibus placeat neque id?",
            ]
        },

        {
            companyName: 'Kpibar',
            jobRoleTile: 'Frontend Engineer',
            logo: "kpibar.jpeg",
            tenure: 'February 2022 - March 2022',
            location: 'Madrid, Spain / Remote',
            jobDescription: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!"
            ]
        },
        {
            companyName: 'CodeFier',
            jobRoleTile: 'Junior Web Developer',
            logo: "codefier.jpeg",
            tenure: 'January 2022 - March 2022',
            location: 'Rawalpindi, Pakistan / Remote',
            jobDescription: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt!"
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Experience - Hurera</title>
                <meta name="description" content="This is the work experience page of hurera'a dev portfolio." />
            </Head>

            <Wrapper>
                <div className="py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-start sm:items-center md:items-center lg:items-center bg-main-bg-color xl:gap-5 2xl:gap-5 2xl:justify-center 2xl:items-center">
                    <Slide triggerOnce direction="left" className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
                        <ExperiencePageSVG />
                    </Slide>
                    <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
                        <Slide triggerOnce direction="right" >
                            <h4 className='primary-heading justify-self-center text-center'>Experience</h4>
                            <h5 className='primary-text justify-self-center text-center'>Work, Internship and Volunteership</h5>
                            <p className='tertiary-text justify-self-center text-center py-1'>I am working as a Senior Software Engineer as a Full Stack Developer, Designer and a Software Architect. Its been 3 years of dedication that has made me capable of building solutions at scale. I am in Love with building research driven innovative solutions from scratch. Having the urge of giving back to people I teach students in my freetime, and raise funds for the deserving lads. From personally conducting hackathons to mentoring students as a Developer Advocate I have built empowering tech communities benefitting thousands of people across Pakistan</p>
                        </Slide>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <div>
                    <div onClick={() => setShowWork(prev => !prev)} className="employement-type-heading flex flex-row justify-between items-center border border-secondary-bg-color bg-white h-50px px-20px py-10px font-medium cursor-pointer">
                        <h6>Work</h6>
                        <p>{showWork ? <FontAwesomeIcon className='text-text-color' icon={faMinus} /> : <FontAwesomeIcon className='text-text-color' icon={faPlus} />}</p>

                    </div>
                    {
                        showWork && (
                            <div className="employement-container flex flex-col">
                                {
                                    WorkData.map((element, index) => {
                                        return (
                                            <>
                                                <ExperienceCard key={index} lastOne={(WorkData.length - index) == 1 ? true : false} companyName={element.companyName} jobRoleTile={element.jobRoleTile} logo={element.logo} tenure={element.tenure} location={element.location} jobDescription={element.jobDescription} />
                                            </>
                                        );
                                    })
                                }
                            </div>
                        )
                    }
                </div>

                <div>
                    <div onClick={() => setShowVolunteership(prev => !prev)} className="employement-type-heading flex flex-row justify-between items-center border border-secondary-bg-color bg-white h-50px px-20px py-10px font-medium cursor-pointer">
                        <h6>Volunteerships</h6>
                        <p>{showVolunteership ? <FontAwesomeIcon className='text-text-color' icon={faMinus} /> : <FontAwesomeIcon className='text-text-color' icon={faPlus} />}</p>

                    </div>
                    {
                        showVolunteership && (
                            <div className="employement-container flex flex-col">
                                {
                                    WorkData.map((element, index) => {
                                        return (
                                            <>
                                                <ExperienceCard key={index} lastOne={(WorkData.length - index) == 1 ? true : false} companyName={element.companyName} jobRoleTile={element.jobRoleTile} logo={element.logo} tenure={element.tenure} location={element.location} jobDescription={element.jobDescription} />
                                            </>
                                        );
                                    })
                                }
                            </div>
                        )
                    }
                </div>



            </Wrapper>

        </>
    )
}

export default Experience
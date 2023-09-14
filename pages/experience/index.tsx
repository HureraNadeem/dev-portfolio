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
            companyName: 'Devsinc',
            jobRoleTile: 'DevOps Engineer Intern',
            logo: "devsinc.jpeg",
            tenure: 'July 2023 - September 2023',
            location: 'Islamabad, Pakistan',
            jobDescription : [
                "Achieved distinction by being selected as one of the few candidates out of a massive applicant pool of 25,000",
                "Completed a rigorous training program that delved into the latest DevOps tools and practices.",
                "Achieved mastery in foundational technologies such as Linux and Git, while also excelling in critical DevOps tools like Docker and Kubernetes (K8s).",
                "Gained mastery in writing CI/CD pipelines using GitHub Actions, and Jenkins.",
                "Gained proficiency in Infrastructure as Code (IAC) with Terraform and demonstrated expertise in harnessing various AWS services like EC2 and S3, adhering to CI/CD best practices.",
                "Took sole ownership of two projects, one based on Node.js and the other on Ruby on Rails (ROR), overseeing the entire CI/CD lifecycle.",
                "Utilized a wide array of learned tools to containerize and deploy both applications within the AWS ecosystem, leveraging EC2 services to ensure scalability and reliability.",
                "Implemented Nginx as a reverse proxy to optimize application performance and efficiently manage incoming traffic."
            ],
            link: 'https://www.linkedin.com/company/developers-inc/'
        },
        {
            companyName: 'Creative Choas',
            jobRoleTile: 'Software Engineer Intern',
            logo: "creative_chaos.jpg",
            tenure: 'June 2022 - August 2022',
            location: 'San Francisco, US / Karachi, Pakistan / Remote',
            jobDescription: [
                "Took on the sole ownership of developing the front-end for the KATRA project under the mentorship of a solution architect and senior software engineers. This challenging endeavor allowed me to demonstrate my ability to independently tackle complex projects and deliver exceptional outcomes. Working closely with cross-functional team, successfully delivered impressive results.",
                "Developed and maintained complex application logic with Redux Sagas, enabling efficient state management and asynchronous data flow.",
                "Optimized performance by employing best architectural techniques and practices like code splitting and lazy loading to enhance the application's speed.",
                "Worked closely with the back-end developers to integrate RESTful APIs and handled data fetching and manipulation using Redux Sagas, ensuring smooth data flow between the front-end and back-end systems.",
                "Collaborated with designers and product managers to translate wireframes and mockups into interactive and functional components, ensuring a consistent and visually appealing design across multiple devices.",
                "Collaborated closely with DevOps engineer to ensure seamless deployment and release processes.",
            ],
            link: 'https://www.linkedin.com/company/creative-chaos/'

        },
        {
            companyName: 'Kpibar',
            jobRoleTile: 'Frontend Engineer',
            logo: "kpibar.jpeg",
            tenure: 'February 2022 - March 2022',
            location: 'Madrid, Spain / Remote',
            jobDescription: [
                "Contributed to the development of Kpibar by leveraging React, Ant Design, and React Context to create reusable and modular front-end components.",
                "Collaborated with the team to implement UI enhancements and optimize user interactions, resulting in an improved user experience and increased usability.",
                "Utilized React Context to manage global state and facilitate seamless data sharing between components, enhancing code maintainability and reducing redundancy.",
                "Played a key role in refactoring and optimizing the existing codebase, resulting in improved performance, scalability, and code reusability."
            ],
            link: 'https://www.linkedin.com/company/kpibar/'

        },
        {
            companyName: 'CodeFier',
            jobRoleTile: 'Junior Web Developer',
            logo: "codefier.jpeg",
            tenure: 'January 2022 - March 2022',
            location: 'Rawalpindi, Pakistan / Remote',
            jobDescription: [
                "Developed the front-end of an in-house HR tool using Vanilla JavaScript, HTML, and CSS.",
                "Created interactive and intuitive user interfaces to facilitate easy generation of reports and letters, simplifying the HR workflow.",
                "Implemented responsive designs to ensure optimal user experience across various devices.",
                "Collaborated with the HR team to understand their requirements and translate them into functional and visually appealing UI components."
            ],
            link: 'https://www.linkedin.com/company/codefier/'
        }
    ]
    const VolunteershipData = [
        {
            companyName: 'Devsinc',
            jobRoleTile: 'Campus Ambassador',
            logo: "devsinc.jpeg",
            tenure: 'March 2023 - present',
            location: 'Islamabad, Pakistan / Remote',
            jobDescription: [
                "Actively contributing in Devsinc's mission to bridge the gap between industry and academia.",
                "Responsible for organizing various Devsinc's events on campus.",
                "Utilizing my strong social media skills, particularly on LinkedIn, responsible for promoting these events to maximize their reach and impact within the NUST community.",
                "Working closely with the Devsinc team, ensuring seamless event planning and execution, creating engaging and valuable experiences for the participants.",
                "By effectively marketing and showcasing Devsinc's initiatives and events, contributing to the company's brand awareness and visibility among students at NUST."
            ],
            link: 'https://www.linkedin.com/company/developers-inc/'
        },
        {
            companyName: 'HackClub, NUST',
            jobRoleTile: 'Joint Secretary (Web and IT)',
            logo: "hack-club.jpeg",
            tenure: 'August 2022 - July 2023',
            location: 'NUST, Islamabad',
            jobDescription: [
                "Leading the team in maintaining the club's website, ensuring its functionality and aesthetic appeal.",
                "Helping team members and juniors in enhancing their technical skills as developers.",
                "Actively mentoring team members, offering guidance and support in their web development journey."
            ],
            link: "https://www.linkedin.com/company/hackclub-nust/"
        },
        {
            companyName: "Orientation of NUST 2022 (ON'22)",
            jobRoleTile: 'Sponsorships Executive',
            logo: "ON_22_NUST.jpg",
            tenure: 'August 2022 - October 2022',
            location: 'NUST, Islamabad',
            jobDescription: [
                "Orientation is the flagship event of NUST that witnesses a remarkable turnout of over 1800 students and 3000+ enthusiastic participants engaging in a wide array of captivating social events.",
                "Engaged with numerous potential companies, showcasing the value and benefits of sponsoring the event.",
                "Successfully closed deals with two companies, securing their support as sponsors for the Orientation event.",
                "Played a pivotal role in securing financial contributions and resources, ensuring the successful execution of the event."
            ],
            link: "https://instagram.com/o_nust?igshid=MzRlODBiNWFlZA=="
        },
        {
            companyName: 'Google Developers Student Club (GDSC), NUST',
            jobRoleTile: 'Team Member (Web Development)',
            logo: "GDSC_NUST.jpeg",
            tenure: 'April 2022 - August 2022',
            location: 'NUST, Islamabad',
            jobDescription: [
                "As a member of GDSC, actively participated in the club's management and operations.",
                "Collaborated with fellow team members to efficiently manage and organize club activities, ensuring smooth coordination and effective execution of events and projects.",
                "Continuously improved my skills as a developer through hands-on experience and exposure to various web development technologies and frameworks.",
            ],
            link: "https://www.linkedin.com/company/gdscnust/"
        },
        {
            companyName: 'HackClub, NUST',
            jobRoleTile: 'Co-Team Lead Social Media Marketing',
            logo: "hack-club.jpeg",
            tenure: 'November 2021 - August 2022',
            location: 'NUST, Islamabad',
            jobDescription: [
                "Led social media marketing as the Team Lead for HackClub, covering major events and delivering timely updates on Instagram and Facebook",
                "Enhanced the social media following and reach of HackClub's social media pages.",
                "Coordinated with volunteers from HackClub and GDSC NUST during Devfest Islamabad 2021 and Codefest 2021, fostering collaboration and synergy.",
                "Collaborated with 10Pearls Islamabad for Game Of Code, a speed coding competition."
            ],
            link: "https://www.linkedin.com/company/hackclub-nust/"

        },
        {
            companyName: 'HackClub, NUST',
            jobRoleTile: 'Team Member Web and IT',
            logo: "hack-club.jpeg",
            tenure: 'June 2021 - November 2021',
            location: 'NUST, Islamabad',
            jobDescription: [
                "Contributed as a member of the Web and IT team, actively involved in the development of Hack Club, NUST's official website.",
                "Utilizing React.js, React Bootstrap (Reactstrap), and Material UI, we crafted a modern and visually appealing website.",
                "Additionally, collaborated closely with the team on various web and IT tasks, ensuring smooth coordination and efficient project execution."
            ],
            link: "https://www.linkedin.com/company/hackclub-nust/"

        },
        {
            companyName: 'Project Insaniyat, NUST',
            jobRoleTile: 'Fundraiser',
            logo: "nust-logo.png",
            tenure: 'April 2021 - May 2021',
            location: 'NUST, Islamabad',
            jobDescription: [
                "Participated in Project Insaniyat, a fundraising initiative for social causes, during my second semester at NUST.",
                "Led a team effort to collect donations and raise funds for noble causes.",
                "Successfully raised approximately Rs. 127k in donations.",
                "Donated the funds to the Sunbeams school system to support their campaign of establishing schools in rural areas of the country."
            ],
            link: "https://www.linkedin.com/school/nustofficial/"
        },

        {

            companyName: 'NUST Media Club',
            jobRoleTile: 'Team Lead (Web and IT)',
            logo: "nust_media_club.jpeg",
            tenure: 'September 2021 - December 2021',
            location: 'NUST, Islamabad',
            jobDescription: [
                "Led a team of 5 individuals as the Team Lead of Web and IT at the NUST Media Club.",
                "Managed and maintained the club's WordPress website, ensuring its functionality and performance.",
                "Collaborated closely with the Publications Team to update and publish engaging blog posts on the website.",
                "Responsible to keep the website up-to-date with NUST Media Club blogs and relevant and informative content, enhancing the club's online presence."
            ],
            link: "https://instagram.com/nustmediaclub?igshid=MzRlODBiNWFlZA=="

        },
        {
            companyName: 'IEEE-School of Electrical Engineering and Computer Science, NUST',
            jobRoleTile: 'Team Member (Web and IT)',
            logo: "IEEE-NUST.jpeg",
            tenure: 'October 2021 - December 2021',
            location: 'NUST, Islamabad',
            jobDescription: [
                "Contributed as a valuable member of the Web and IT team at IEEE NUST.",
                "Designed and developed professional email templates, ensuring consistent branding and effective communication with the audience.",
                "Coordinated with teams, such as Marketing and Graphics, to align web and IT efforts and enhance overall project success.",
                "Actively participated in community-building initiatives, organizing events and activities to foster engagement and collaboration within the IEEE NUST community."
            ],
            link: 'https://www.linkedin.com/company/nustieeeclub/'
        },

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
                            <p className='tertiary-text justify-self-center text-center py-1'>I'm a passionate software engineer who loves crafting creative solutions with code. My main area of expertise revolves around building scalable applications using the MERN stack. Additionally, I have a strong enthusiasm for fostering tech communities and actively engage in various tech events. Guiding and supporting aspiring developers as they begin their career paths brings me immense joy because we all know the struggle of finding the missing semicolon. 😉</p>
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
                                                <ExperienceCard key={index} lastOne={(WorkData.length - index) == 1 ? true : false} companyName={element.companyName} jobRoleTile={element.jobRoleTile} logo={element.logo} tenure={element.tenure} location={element.location} jobDescription={element.jobDescription} link={element.link} />
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
                                    VolunteershipData.map((element, index) => {
                                        return (
                                            <>
                                                <ExperienceCard key={index} lastOne={(VolunteershipData.length - index) == 1 ? true : false} companyName={element.companyName} jobRoleTile={element.jobRoleTile} logo={element.logo} tenure={element.tenure} location={element.location} jobDescription={element.jobDescription} link={element.link} />
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
import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Wrapper from '@/components/wrapper/wrapper';
import ProjectsPageSVG from '@/public/assets/svgs/projects-page-svg';
import { HtmlSVG, CssSVG, JavascriptSVG, TypescriptSVG, ReactSVG, NodeSVG, ExpressJsSVG, MongoDBSVG, MongooseSVG, NextSVG, PostmanSVG, ReduxSVG, TailwindSVG, ReduxSagaSVG, MaterialUI,BootstrapSVG,CppSVG, JavaSVG, FireBaseSVG, XmlSVG} from '@/public/assets/svgs/projects-tech-logos-svgs';
import ProjectCard from '@/components/project-card/project-card';
import Footer from '@/components/footer/footer';
import Head from 'next/head';
import { Fade, Slide } from "react-awesome-reveal";
import { GithubSVG } from '@/public/assets/svgs/socials-svg';
import Link from 'next/link';



function Projects() {
    const projectData = [
        {
            name: "ezNMC",
            description: "Full-stack Web based solution for the NUST Medical Centre, providing convenient access to medical services for NUST students. It automates processes such as ambulance requests, doctor appointments, and pharmacy purchases, eliminating the need for manual intervention.",
            creationDate: "January 2023",
            stackSVGs: [
                {
                    name: 'React.js',
                    component: <ReactSVG />
                },
                {
                    name: 'Redux',
                    component: <ReduxSVG />
                },
                {
                    name: 'Node.js',
                    component: <NodeSVG />
                },
                {
                    name: 'MongoDB',
                    component: <MongoDBSVG />
                },
                {
                    name: 'Mongoose',
                    component: <MongooseSVG />
                },
            ],
            link: "https://www.github.com/hureranadeem/eznmc"
        },
        {
            name: "Dev-Portfolio",
            description: "The Website you are scrolling through right now ;) Dev-Portfolio is open source customizable portfolio website for developers to showcase their technical skills and highlight their achievements. Fork it, update it, deploy it :)",
            creationDate: "June 2023",
            stackSVGs: [
                {
                    name: 'Next.js',
                    component: <NextSVG />
                },
                {
                    name: 'React.js',
                    component: <ReactSVG />
                },
                {
                    name: 'Tailwind Css',
                    component: <TailwindSVG />
                },
                {
                    name: 'TypeScript',
                    component: <TypescriptSVG />
                },
            ],
            link: "https://github.com/HureraNadeem/dev-portfolio"
        },
        {
            name: "Katra",
            description: "Full-Stack Cross Platform application for Creative Chaos designed to seamlessly connect individuals in need of blood with generous donors. This innovative solution simplifies and enhances communication between both parties, ensuring a smooth and efficient process.",
            creationDate: "July 2022",
            stackSVGs: [
                {
                    name: 'React',
                    component: <ReactSVG />
                },
                {
                    name: 'Material-UI',
                    component: <MaterialUI />
                },
                {
                    name: 'Redux',
                    component: <ReduxSVG />
                },
                {
                    name: 'Redux Sagas',
                    component: <ReduxSagaSVG />
                },
                {
                    name: 'TypeScript',
                    component: <TypescriptSVG />
                },
                
            ],
            link: "https://creativechaos.co/"
        },
        {
            name: "BarCode Scanner",
            description: "Platform for small scaled businesses and local shops to efficiently scan barcodes to retrieve product codes, and instantly access relevant product data from an extensive excel database.",
            creationDate: "March 203",
            stackSVGs: [
                {
                    name: 'Next.js',
                    component: <NextSVG />
                },
                {
                    name: 'React.js',
                    component: <ReactSVG />
                },
                {
                    name: 'Node.js',
                    component: <NodeSVG />
                },
                {
                    name: 'Tailwind Css',
                    component: <TailwindSVG />
                },
                {
                    name: 'TypeScript',
                    component: <TypescriptSVG />
                },
            ],
            link: "about:blank"
        },
        {
            name: "Text File compressor and decompressor",
            description: "Text File compressor and decompressor using Huffman Coding (i.e Huffman encoding and Decoding) implementing several data structures and algorithms in c++.",
            creationDate: "December 2021",
            stackSVGs: [
                {
                    name: 'C++',
                    component: <CppSVG />
                },
                
            ],
            link: "https://github.com/HureraNadeem/Text-File-compressor"
        },
        // {
        //     name: "Weather Finder",
        //     description: "Web page to discover real-time weather updates and forecasts for any City with the Weather Finder website. Using Open-source weather API, it helps you stay informed and make informed decisions with ease.",
        //     creationDate: "May 2021",
        //     stackSVGs: [
        //         {
        //             name: 'React',
        //             component: <ReactSVG />
        //         },
        //         {
        //             name: 'Bootstrap',
        //             component: <BootstrapSVG />
        //         },
        //         {
        //             name: 'JavaScript',
        //             component: <JavascriptSVG />
        //         },
        //         {
        //             name: 'HTML',
        //             component: <HtmlSVG />
        //         },
        //         {
        //             name: 'CSS',
        //             component: <CssSVG />
        //         },
               
        //     ],
        //     link: "https://github.com/HureraNadeem/Mart-By-Marsh"
        // },
        {
            name: "Mart by MARSH",
            description: "An android application for online grocery shopping ensures secure and efficient data management and intuitive interfaces. Used Firebase as database and for authentication.",
            creationDate: "May 2021",
            stackSVGs: [
                {
                    name: 'Java',
                    component: <JavaSVG />
                },
                {
                    name: 'Firebase',
                    component: <FireBaseSVG />
                },
                {
                    name: 'XML',
                    component: <XmlSVG />
                },
            ],
            link: "https://github.com/HureraNadeem/Mart-By-Marsh"
        },
    ]
    return (
        <>
            <Head>
                <title>Projects - Hurera</title>
                <meta name="description" content="This is the projects page of hurera'a dev portfolio." />
            </Head>

            <Wrapper>
                <div className="py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-start sm:items-center md:items-center lg:items-center bg-main-bg-color xl:gap-5 2xl:gap-5 2xl:justify-center 2xl:items-center">
                    <Slide triggerOnce direction="left" className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
                        <ProjectsPageSVG />
                    </Slide>
                    <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
                        <Slide triggerOnce direction="right">
                            <h4 className='primary-heading justify-self-center text-center'>Projects</h4>
                            <p className='tertiary-text justify-self-center text-center py-1'>Over the years I have used various tech architectures and tools comprising ReactJs, NextJs, Redux, Hooks, Nodejs, ExpressJs, MongoDB, HTML/CSS, C/C++, Python, Solidity, Android Apps in Java, Flutter, Firebase, and React Native. I have mixed the blends of different technologies into microservices to solve coupling problems of a particular framework. Having versatility has brought me to the forefront of the industry and I am currently working on projects that will be part of the next major breakthroughs in the industry.</p>
                        </Slide>

                    </div>
                </div>
            </Wrapper>

            <Wrapper>

                <div className="project-container flex flex-row gap-[2vw] flex-wrap justify-center item-center sm:gap-10 md:gap-10 ">
                    {
                        projectData.map(e => <ProjectCard name={e.name} description={e.description} creationDate={e.creationDate} stackSVGs={e.stackSVGs} link={e.link} />)
                    }
                </div>
            </Wrapper>
            <Wrapper>

                <div className={`flex flex-row justify-center items-center`}>
                    <div className='bg-text-color text-main-bg-color font-GoogleSans-Regular font-medium leading-tight max-w-max px-6 py-3 mr-0 rounded-md text-center no-underline font-sans mt-5 text-lg cursor-pointer tracking-wide  hover:transform transition-transform duration-500 transform hover:scale-105'>
                        <Link href={'https://www.github.com/hureranadeem'} download={"Hurera's Resume"} target='_blank' rel='noreferrer' className='font-GoogleSans-Regular flex flex-row gap-4 justify-center items-center'>
                            <span className='sm:text-[13px] md:text-[15px]'> More Projects</span>
                            <span className='sm:text-[13px] md:text-[15px]'><GithubSVG /></span>
                        </Link>
                    </div>
                </div>
            </Wrapper>

        </>

    )
}

export default Projects
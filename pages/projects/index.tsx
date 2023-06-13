import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Wrapper from '@/components/wrapper/wrapper';
import ProjectsPageSVG from '@/public/assets/svgs/projects-page-svg';
import { HtmlSVG, CssSVG, JavascriptSVG, TypescriptSVG } from '@/public/assets/svgs/projects-tech-logos-svgs';
import ProjectCard from '@/components/project-card/project-card';
import Footer from '@/components/footer/footer';
import Head from 'next/head'




function Projects() {
    const projectData = [
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },
        {
            name: "ezNMC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at veniam sapiente nesciunt eos eius, magni corporis voluptate repellendus accusantium recusandae, nihil unde iste amet esse hic, adipisci nulla officia!",
            creationDate: "July 2022",
            stackSVGs: [
                <HtmlSVG />,
                <CssSVG />,
                <JavascriptSVG />,
                <TypescriptSVG />
            ]
        },

    ]
    return (
        <>
            <Head>
                <title>Projects - Hurera</title>
                <meta name="description" content="This is the projects page of hurera'a dev portfolio." />
            </Head>
            <Navbar />

            <Wrapper>
                <div className="py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-start sm:items-center md:items-center lg:items-center bg-main-bg-color xl:gap-5 2xl:gap-5 2xl:justify-center 2xl:items-center">
                    <div className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
                        <ProjectsPageSVG />
                    </div>
                    <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
                        <h4 className='primary-heading justify-self-center text-center'>Projects</h4>
                        <p className='tertiary-text justify-self-center text-center py-1'>Over the years I have used various tech architectures and tools comprising ReactJs, NextJs, Redux, Hooks, Nodejs, ExpressJs, MongoDB, HTML/CSS, C/C++, Python, Solidity, Android Apps in Java, Flutter, Firebase, and React Native. I have mixed the blends of different technologies into microservices to solve coupling problems of a particular framework. Having versatility has brought me to the forefront of the industry and I am currently working on projects that will be part of the next major breakthroughs in the industry.</p>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <div className="project-container flex flex-row gap-[2vw] flex-wrap justify-center item-center sm:gap-10 md:gap-10 ">
                    {
                        projectData.map(e => <ProjectCard name={e.name} description={e.description} creationDate={e.creationDate} stackSVGs={e.stackSVGs} />)
                    }
                </div>
            </Wrapper>

            <Footer />
        </>

    )
}

export default Projects
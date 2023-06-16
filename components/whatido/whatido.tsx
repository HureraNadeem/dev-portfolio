import React from 'react'
import Wrapper from '../wrapper/wrapper';
import { WhatIDoCard } from '../whatido-card/whatido-card';
import { ReactSVG, MongoDBSVG, JavascriptSVG, TypescriptSVG, HtmlSVG, CssSVG, NodeSVG, TailwindSVG, BootstrapSVG, JwtSVG, NextSVG, ReduxSVG, ReduxSagaSVG, ExpressJsSVG, MongooseSVG, JiraSVG, GitSVG, PostmanSVG, FigmaSVG, MaterialUI } from '@/public/assets/svgs/tech-skills-svgs'
import { FullStackDevSVG, FullStackDevSVGAlt } from '@/public/assets/svgs/tech-stack-svgs'


function WhatIDo() {

    const Data = [
        {
            skillName: "Full-stack Web Developement",
            MainSVG: <FullStackDevSVGAlt />,
            iconsArr: [
                {
                    name: "React",
                    svg: <ReactSVG />
                },
                {
                    name: "Next.js",
                    svg: <NextSVG />
                },
                {
                    name: "Redux",
                    svg: <ReduxSVG />
                },
                {
                    name: "Redux Saga",
                    svg: <ReduxSagaSVG />
                },
                {
                    name: "JavaScript",
                    svg: <JavascriptSVG />
                },
                {
                    name: "TypeScript",
                    svg: <TypescriptSVG />
                },
                {
                    name: "Tailwind-CSS",
                    svg: <TailwindSVG />
                },
                {
                    name: "Material-UI",
                    svg: <MaterialUI />
                },
                {
                    name: "Bootstrap",
                    svg: <BootstrapSVG />
                },
                {
                    name: "HTML5",
                    svg: <HtmlSVG />
                },
                {
                    name: "CSS3",
                    svg: <CssSVG />
                },
                {
                    name: "Node.js",
                    svg: <NodeSVG />
                },

                {
                    name: "Express.js",
                    svg: <ExpressJsSVG />
                },
                {
                    name: "MongoDB",
                    svg: <MongoDBSVG />
                },
                {
                    name: "Mongoose",
                    svg: <MongooseSVG />
                },

                {
                    name: "JWT",
                    svg: <JwtSVG />
                },
                {
                    name: "Git",
                    svg: <GitSVG />
                },
                {
                    name: "Jira",
                    svg: <JiraSVG />
                },
                {
                    name: "Postman",
                    svg: <PostmanSVG />
                },
                {
                    name: "Figma",
                    svg: <FigmaSVG />
                },

            ],
            descriptionArr: [
                'Developing responsive single page web applications front end using React.js, Next.js, Redux.js, Redux Saga, TailwindCSS, Material-UI,  HTML/CSS and Bootstrap.',
                'Creating secure and fast backends for application utilizing Node.js and Express.js',
                'Interacting with the databases like MongoDB and PostgreSQL using ORMs like Mongoose and Prisma respectively.',
                'Utilizing  GraphQL for efficient data querying and manipulation.',
                'Utilizing TypeScript for its powerful features like static typing etc to develop both front-end and back-end applications with enhanced code quality, maintainability, and scalability.',
                'Developing and consuming RESTful APIs, employing modern programming practices to ensure integration.',
                'Implementing secure authentication using JWT and OAuth to enable robust and reliable user authentication and authorization.',
                'Utilizing Docker, Jira and Figma for seamless collaboration within cross-functional teams.',
            ]
        },
    ]

    return (
        <>
            <Wrapper>
                <h3 className='primary-heading text-center'>{`{ What I do? }`}</h3>
                <h4 className='secondary-text text-center'>I love to code for contract based projects and help companies expand their businesses.🤜🤛</h4>
                <h4 className='secondary-text text-center'>My tech expertise are as follows:</h4>
                {
                    Data.map((element, index) => {
                        return (
                            <WhatIDoCard key={index} MainSVG={element.MainSVG} skillName={element.skillName} iconsArr={element.iconsArr} descriptionArr={element.descriptionArr} />
                        );
                    })

                }
            </Wrapper>
        </>
    )
}

export default WhatIDo
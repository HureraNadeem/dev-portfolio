import React from 'react'
import Wrapper from '../wrapper/wrapper';
import WhatIDoCard from '../whatido-card/whatido-card';
import { ReactSVG, MongoDBSVG, JavascriptSVG, TypescriptSVG, HtmlSVG, CssSVG, NodeSVG, TailwindSVG, BootstrapSVG, JwtSVG, NextSVG, ReduxSVG, ReduxSagaSVG, ExpressJsSVG, MongooseSVG, JiraSVG, GitSVG, PostmanSVG, FigmaSVG, MaterialUI } from '@/public/assets/svgs/tech-skills-svgs'
import { FullStackDevSVG, FullStackDevSVGAlt } from '@/public/assets/svgs/tech-stack-svgs'


function WhatIDo() {

    const Data = [
        {
            id: 0,
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
                'Building responsive websites using React-Redux.js | HTML/CSS | Tailwind-CSS | Bootstrap | Material UI',
                'Creating Single page rendering applications using Redux and HooksJs',
                'Developing cross-platform mobile applications using React Native and Flutter',
                'Creating optimized application backends in Node.js and Express.js',
                'Experience in usage of Rest APIs in modern programming practices',
                'Building secure authentication using JWT, Passport, Cognito, Auth0'
            ]
        },
    ]


    return (
        <>
            <Wrapper>
                <h3 className='primary-heading text-center'>What I do?</h3>
                <h4 className='secondary-text text-center'>I love to work contractually helping to growing my clients' business🤝</h4>
                <h4 className='secondary-text text-center'>The tech stack i use is as follows:</h4>
                {
                    Data.map((element, index) => {
                        return (
                            <WhatIDoCard key={element.id} MainSVG={element.MainSVG} skillName={element.skillName} iconsArr={element.iconsArr} descriptionArr={element.descriptionArr} />
                        );
                    })

                }
            </Wrapper>
        </>
    )
}

export default WhatIDo
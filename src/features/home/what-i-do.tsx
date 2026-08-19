'use client'

import React from 'react'
import Wrapper from '@/components/layout/wrapper';
import { WhatIDoCard } from './what-i-do-card';
import {
    ReactSVG, NextSVG, VueSVG, ReduxSVG, ReduxSagaSVG, PiniaSVG, JavascriptSVG, TypescriptSVG,
    TailwindSVG, MaterialUI, BootstrapSVG, HtmlSVG, CssSVG, FigmaSVG, AstroSVG,
    NodeSVG, ExpressJsSVG, NestJsSVG, FastifySVG, PostgreSQLSVG, PrismaSVG, MongoDBSVG,
    MongooseSVG, MySqlSVG, SequelizeSVG, RedisSVG, JwtSVG, PostmanSVG,
    AwsSVG, AzureSVG, GcpSVG, DockerSVG, GithubActionsSVG,
    NginxSVG, GitSVG, JestSVG, PlaywrightSVG, JiraSVG,
    ClaudeSVG, OpenAiSVG, McpSVG,
} from '@/components/icons/tech-skills'
import { ShadCNSVG } from '@/components/icons/tech-logos'
import { FrontendDevSVG, BackendDevSVG, CloudDevOpsSVG, AiEngineeringSVG } from '@/components/icons/tech-stack'


function WhatIDo() {

    const Data = [
        {
            skillName: "Frontend Engineering",
            MainSVG: <FrontendDevSVG />,
            iconsArr: [
                { name: "React", svg: <ReactSVG /> },
                { name: "Next.js", svg: <NextSVG /> },
                { name: "Vue3.js", svg: <VueSVG /> },
                { name: "Astro", svg: <AstroSVG /> },
                { name: "TypeScript", svg: <TypescriptSVG /> },
                { name: "JavaScript", svg: <JavascriptSVG /> },
                { name: "Redux", svg: <ReduxSVG /> },
                { name: "Redux Saga", svg: <ReduxSagaSVG /> },
                { name: "Pinia", svg: <PiniaSVG /> },
                { name: "Tailwind-CSS", svg: <TailwindSVG /> },
                { name: "ShadCN", svg: <ShadCNSVG /> },
                { name: "Material-UI", svg: <MaterialUI /> },
                { name: "Bootstrap", svg: <BootstrapSVG /> },
                { name: "HTML5", svg: <HtmlSVG /> },
                { name: "CSS3", svg: <CssSVG /> },
                { name: "Figma", svg: <FigmaSVG /> },
            ],
            descriptionArr: [
                'Developing responsive single-page and server-rendered web applications using React.js, Next.js, Vue 3 and Astro.',
                'Managing application state with Redux, Redux Saga, Pinia and React Context.',
                'Building reusable, modular component libraries with Tailwind CSS, ShadCN, Material-UI and Bootstrap, working from Figma designs.',
                'Writing type-safe frontends in TypeScript, with an eye on accessibility, responsiveness and performance across devices.',
                'Working with internationalisation (i18n), embeddable widgets and third-party frontend integrations.',
            ]
        },
        {
            skillName: "Backend Engineering & APIs",
            MainSVG: <BackendDevSVG />,
            iconsArr: [
                { name: "Node.js", svg: <NodeSVG /> },
                { name: "Express.js", svg: <ExpressJsSVG /> },
                { name: "NestJS", svg: <NestJsSVG /> },
                { name: "Fastify", svg: <FastifySVG /> },
                { name: "PostgreSQL", svg: <PostgreSQLSVG /> },
                { name: "Prisma", svg: <PrismaSVG /> },
                { name: "MongoDB", svg: <MongoDBSVG /> },
                { name: "Mongoose", svg: <MongooseSVG /> },
                { name: "MySQL", svg: <MySqlSVG /> },
                { name: "Sequelize", svg: <SequelizeSVG /> },
                { name: "Redis", svg: <RedisSVG /> },
                { name: "JWT", svg: <JwtSVG /> },
                { name: "Postman", svg: <PostmanSVG /> },
            ],
            descriptionArr: [
                'Designing and building RESTful APIs, services and microservices with Node.js, Express.js, NestJS and Fastify.',
                'Working with both relational and document databases — PostgreSQL, MySQL, MongoDB and DynamoDB — through ORMs and ODMs like Prisma, Sequelize and Mongoose.',
                'Implementing authentication and authorization using JWT, OAuth, OTP verification and role-based access control.',
                'Using Redis for caching and session management, and designing schemas and migrations for evolving data models.',
                'Integrating third-party APIs and webhooks, and building notification pipelines over email and SMS.',
            ]
        },
        {
            skillName: "Cloud, DevOps & Infrastructure",
            MainSVG: <CloudDevOpsSVG />,
            iconsArr: [
                { name: "AWS", svg: <AwsSVG /> },
                { name: "Azure", svg: <AzureSVG /> },
                { name: "Google Cloud Platform", svg: <GcpSVG /> },
                { name: "Docker", svg: <DockerSVG /> },
                { name: "GitHub Actions", svg: <GithubActionsSVG /> },
                { name: "Nginx", svg: <NginxSVG /> },
                { name: "Git", svg: <GitSVG /> },
                { name: "Jest", svg: <JestSVG /> },
                { name: "Playwright", svg: <PlaywrightSVG /> },
                { name: "Jira", svg: <JiraSVG /> },
            ],
            descriptionArr: [
                'Building and deploying on AWS — Lambda, DynamoDB, S3, CloudFront, ECS Fargate and EC2 — with infrastructure defined as code using the AWS CDK.',
                'Containerising applications with Docker, and configuring Nginx and Caddy as reverse proxies.',
                'Automating testing, builds and deployments through CI/CD pipelines on GitHub Actions, GitLab CI/CD and Jenkins.',
                'Writing unit and end-to-end tests with Jest and Playwright to keep codebases reliable as they grow.',
                'Working across GCP, Azure and Firebase alongside AWS, and collaborating through Git and Jira.',
            ]
        },
        {
            skillName: "AI & Agentic Engineering",
            MainSVG: <AiEngineeringSVG />,
            iconsArr: [
                { name: "Claude", svg: <ClaudeSVG /> },
                { name: "OpenAI", svg: <OpenAiSVG /> },
                { name: "Model Context Protocol (MCP)", svg: <McpSVG /> },
            ],
            descriptionArr: [
                'Building AI-powered products and agentic workflows with LLMs from Anthropic (Claude), OpenAI and others.',
                'Working with the Model Context Protocol (MCP) to expose tools and data to coding agents and AI clients.',
                'Integrating retrieval over documents, websites and databases, with human review and guardrails around model output.',
                'Automating content and page generation pipelines, from model output through build and deployment.',
                'Writing agent tooling, skills and prompts that stay version-controlled and reproducible.',
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

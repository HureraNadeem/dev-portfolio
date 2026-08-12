'use client'

import React from 'react'
import Wrapper from '../wrapper/wrapper';
import { WhatIDoCard } from '../whatido-card/whatido-card';
import {
    ReactSVG, NextSVG, VueSVG, ReduxSVG, ReduxSagaSVG, PiniaSVG, JavascriptSVG, TypescriptSVG,
    TailwindSVG, MaterialUI, BootstrapSVG, HtmlSVG, CssSVG, FigmaSVG, AstroSVG,
    NodeSVG, ExpressJsSVG, NestJsSVG, FastifySVG, PostgreSQLSVG, PrismaSVG, MongoDBSVG,
    MongooseSVG, MySqlSVG, SequelizeSVG, RedisSVG, JwtSVG, PostmanSVG,
    AwsSVG, AzureSVG, GcpSVG, DockerSVG, KubernetesSVG, TerraformSVG, GithubActionsSVG,
    CiCdSVG, NginxSVG, GitSVG, JestSVG, PlaywrightSVG, JiraSVG,
    ClaudeSVG, OpenAiSVG, McpSVG,
} from '@/public/assets/svgs/tech-skills-svgs'
import { ShadCNSVG } from '@/public/assets/svgs/projects-tech-logos-svgs'
import { FrontendDevSVG, BackendDevSVG, CloudDevOpsSVG, AiEngineeringSVG } from '@/public/assets/svgs/tech-stack-svgs'


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
                'Building responsive single-page and server-rendered applications with React.js, Next.js, Vue 3 and Astro — from marketing sites through to dense, data-heavy dashboards.',
                'Managing complex client state with Redux, Redux Saga, Pinia and React Context, reaching for the lightest tool that fits the problem instead of a global store by default.',
                'Styling with Tailwind CSS, ShadCN, Material-UI and Bootstrap, translating Figma designs into pixel-accurate, reusable component libraries.',
                'Leading frontend teams and setting technical direction — component conventions, coding standards and review culture.',
                'Shipping for international audiences with multi-language (i18n) support, and embedding products into customers’ sites via drop-in scripts and WordPress/Shopify plugins.',
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
                { name: "TypeScript", svg: <TypescriptSVG /> },
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
                'Designing and building RESTful APIs, services and microservices with Node.js, Express.js, NestJS and Fastify — typed end-to-end with TypeScript so contracts hold across the wire.',
                'Modelling and querying both relational and document databases — PostgreSQL, MySQL, MongoDB and DynamoDB — through Prisma, Sequelize and Mongoose.',
                'Implementing authentication and authorization properly: JWT access and refresh flows, OTP verification, and database-driven role-based access control enforced at the API boundary, not just in the UI.',
                'Running data-model migrations on live systems — moving read paths onto the new structure while keeping legacy writes intact so a rollback is always available.',
                'Integrating third-party APIs and webhooks, and building multi-channel notification pipelines over email and SMS.',
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
                { name: "Kubernetes", svg: <KubernetesSVG /> },
                { name: "Terraform", svg: <TerraformSVG /> },
                { name: "GitHub Actions", svg: <GithubActionsSVG /> },
                { name: "CI/CD pipelines with GitHub Actions, GitLab CI/CD and Jenkins", svg: <CiCdSVG /> },
                { name: "Nginx", svg: <NginxSVG /> },
                { name: "Git", svg: <GitSVG /> },
                { name: "Jest", svg: <JestSVG /> },
                { name: "Playwright", svg: <PlaywrightSVG /> },
                { name: "Jira", svg: <JiraSVG /> },
            ],
            descriptionArr: [
                'Architecting serverless and containerised infrastructure on AWS — Lambda, DynamoDB, S3, CloudFront and ECS Fargate — provisioned entirely as code with the AWS CDK.',
                'Containerising applications with Docker and Kubernetes, provisioning with Terraform, and fronting services with Nginx and Caddy reverse proxies, including on-demand TLS for multi-tenant custom domains.',
                'Automating testing, builds and deployments through CI/CD pipelines on GitHub Actions, GitLab CI/CD and Jenkins, keeping release cycles short and repeatable.',
                'Writing unit and end-to-end tests with Jest and Playwright, and chasing production issues down to root cause — from N+1 queries to a compiler’s memory ceiling.',
                'Working across GCP, Azure and Firebase alongside AWS, choosing the platform that fits the product rather than bending the product to the platform.',
            ]
        },
        {
            skillName: "AI & Agentic Engineering",
            MainSVG: <AiEngineeringSVG />,
            iconsArr: [
                { name: "Claude", svg: <ClaudeSVG /> },
                { name: "OpenAI", svg: <OpenAiSVG /> },
                { name: "Model Context Protocol (MCP)", svg: <McpSVG /> },
                { name: "Node.js", svg: <NodeSVG /> },
                { name: "TypeScript", svg: <TypescriptSVG /> },
                { name: "Astro", svg: <AstroSVG /> },
            ],
            descriptionArr: [
                'Building agent-first products — CLI platforms and MCP servers that expose tooling to coding agents and drive autonomous skills through a workflow state machine with explicit gates.',
                'Shipping GenAI products end-to-end: retrieval over documents, websites and databases, with confidence thresholds so an agent hands over to a human instead of guessing.',
                'Integrating LLMs across providers — Claude, GPT and DeepSeek — and building the guardrails, evaluation and human-review layers that make their output safe to ship.',
                'Generating and deploying content at scale, taking AI-authored pages through build, static export and CDN delivery without a human touching a deploy.',
                'Treating agents as a real deployment target: version-controlled prompts and skills, deterministic state machines and reversible steps, so autonomous runs stay reproducible and debuggable.',
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

'use client'

import Wrapper from '@/components/layout/wrapper'
import ExperiencePageSVG from '@/components/icons/experience-illustration'
import { useState } from 'react'
import ExperienceCard from './experience-card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Slide } from 'react-awesome-reveal'

function ExperienceView() {
  const [showWork, setShowWork] = useState<boolean>(false)
  const [showVolunteership, setShowVolunteership] = useState<boolean>(false)

  const WorkData = [
    {
      companyName: 'Pockla',
      jobRoleTitle: 'Senior Software Engineer',
      logo: 'pockla_logo.png',
      tenure: 'November 2025 - Present',
      location: 'London, United Kingdom · Remote',
      jobDescription: [
        'Pockla is a London-based AdTech startup, building agent-first infrastructure for self-adapting websites — instead of one static landing page for everyone, AI agents generate a page tailored to every individual prospect, without rebuilding the site.',
        'The platform runs the full lead generation loop for UK insurance, finance, claims and legal businesses: driving traffic through paid ads, AI outbound calling and cold email, landing each prospect on a page generated just for them, then qualifying and nurturing them with AI SMS and voice agents. Trusted by brands including Lottie, Kene, Omnos and NWEH.',
        'Backed by ~£2M in funding, including a £1.6M seed round led by Venrex, with participation from Upside Ventures (the Sidemen’s VC arm), Love Ventures, Shuttle and SyndicateRoom.',
        'Engineering the core CLI platform in Node.js, an MCP server exposing 30+ tools that drives 20 autonomous Claude Code skills through a workflow state machine to generate, QA, test and deploy Astro landing pages end-to-end.',
        'Architecting the serverless backend on AWS with a Fastify API on Lambda, DynamoDB, S3 and CloudFront provisioned through CDK, plus an ECS Fargate edge layer running Caddy with on-demand TLS for multi-tenant custom domain routing.',
        'Diagnosed and eliminated a production-blocking out-of-memory failure in bulk page builds by tracing it to a fixed WASM compiler memory ceiling and migrating to Astro’s native Rust compiler, unlocking 2,000+ page builds in ~40 seconds and retiring the batching workaround entirely.',
        'Redesigned the deploy pipeline to mirror the full build output to S3 with checksum-based diffing, so only changed files upload while every page, asset and SEO artifact is served same-origin.',
        'Implementing multi-tenant workspaces with JWT access and refresh authentication and role-based access control, alongside a lead ingestion and buyer-forwarding pipeline with per-submission delivery tracking.',
      ],
      link: 'https://www.linkedin.com/company/pockla/',
    },
    {
      companyName: 'RipeSeed.io',
      jobRoleTitle: 'Software Engineer',
      logo: 'ripeseed_logo.jpeg',
      tenure: 'August 2024 - Present',
      location: 'Lahore, Pakistan',
      jobDescription: [
        'RipeSeed is a Lahore-based product engineering studio, founded in 2021, that ships web, mobile and AI products for SaaS, eCommerce and startup clients — 150+ projects delivered, a 5.0 Clutch rating and $1M+ earned on Upwork entirely out of Pakistan.',
        'Developing high-performance, scalable web applications using React.js, Next.js, Node.js and NestJS, with TypeScript to ensure type-safe and maintainable code, backed by cloud-native AWS infrastructure and RESTful APIs built for scalability and high availability.',
        'Building Brava CrewConnect, a workforce management platform for a US roof-tile manufacturer that automates crew training certification, job assignment and compliance tracking across subcontractors, integrating Monday.com, FlexiQuiz and CompanyCam with multi-channel email and SMS notifications.',
        'Designed and shipped a database-driven role-based access control system with a runtime-editable permission matrix, plus an acting-role “view as” switcher that resolves permissions for a single role and can only narrow privileges, never escalate — enforced on both the API and the admin panel.',
        'Architected a geographic territory engine that routes every job to exactly one owning territory and field service rep, with multi-level country, state and postal coverage, most-specific-wins resolution and an interactive choropleth map for painting coverage areas.',
        'Delivered an event-based VR training feature end-to-end — event scheduling, trainer and trainee rosters, a dedicated SMS access-code subsystem with scoped expiry, resend cooldown and attempt lockout, and an API-key-scoped external API for the VR platform to consume.',
        'Drove a v2 data-model migration off deprecated tables onto a user-centric identity model, moving every read path to the new structure while keeping legacy writes intact for rollback safety.',
        'Shipped PRGRSS.ai, a cross-platform web and mobile mentorship platform for the Black and Brown community in the UK, featuring AI-powered mentor–mentee matching, real-time video, in-app chat and progress tracking on React Native, Firebase and GCP.',
      ],
      link: 'https://pk.linkedin.com/company/ripeseed',
    },
    {
      companyName: 'Brilio',
      jobRoleTitle: 'Founding Product Engineer',
      logo: 'brilio_logo.jpeg',
      tenure: 'Jan 2025 - Oct 2025',
      location: 'Abu Dhabi, United Arab Emirates · Remote',
      jobDescription: [
        'Brilio is a no-code agentic AI platform that lets businesses stand up self-learning AI agents in minutes — trained on documents, websites, YouTube transcripts, Q&A pairs and SQL databases, running on GPT, Claude and DeepSeek, with configurable confidence thresholds so an agent hands over to a human instead of guessing, and learns from every answer that human gives.',
        'Led a team of 4 Frontend Engineers, set technical direction and standards.',
        'Delivered 4 GenAI products including Brilio, end-to-end within a 9-month timeline.',
        'Owned the product lifecycle - from concept validation to launch.',
        'Revamped Brilio’s frontend, transforming it into a UX-first product experience.',
        'Scaled Brilio for the European market by implementing support for 6 languages.',
        'Led the launch of Brilio’s embeddable AI chatbot via script and WordPress/Shopify plugins, enabling instant integration across customers’ apps.',
      ],
      link: 'https://www.linkedin.com/company/brilio',
    },
    {
      companyName: 'Cowlar Design Studio',
      jobRoleTitle: 'Full Stack Software Engineer',
      logo: 'cowlar_design_studio.jpeg',
      tenure: 'February 2024 - August 2024',
      location: 'Islamabad, Pakistan',
      jobDescription: [
        'Cowlar Design Studio is a 175+ person end-to-end product development and technology consulting firm — the studio arm of Cowlar Inc. (Y Combinator W17), the smart-collar startup dubbed the “Fitbit for cows” — with expertise spanning IoT, robotics, computer vision, machine learning and enterprise software.',
        'Collaborated with the ML team on an AI-driven retail product, incorporating continuous user feedback to enhance functionality and satisfaction.',
        'Developed modular and reusable frontend components with Vue.js, React.js, and TypeScript to drive UI efficiency and ensure robust product performance.',
        'Implemented RESTful APIs with Node.js and Express.js, using Sequelize for MySQL and Mongoose for MongoDB to ensure efficient database interactions.',
        'Worked on Thanos, the studio’s end-to-end machine learning platform covering everything from data gathering and annotation to AI-assisted model deployment, increasing annotation throughput by 60% on large-scale image datasets and accelerating model development cycles.',
        'Wrote complex database queries for dashboard statistics, boosting data retrieval speed by 40% and enhancing real-time analytics.',
        'Optimized existing APIs and database queries, cutting execution time by 75% and improving system throughput by 55%, resulting in faster application responsiveness.',
      ],
      link: 'https://www.linkedin.com/company/cowlar-design/',
    },
    {
      companyName: 'Devsinc',
      jobRoleTitle: 'DevOps Engineer Intern',
      logo: 'devsinc.jpeg',
      tenure: 'July 2023 - September 2023',
      location: 'Islamabad, Pakistan',
      jobDescription: [
        'Devsinc is one of Pakistan’s largest and fastest-growing software companies, with 2,000+ employees across Pakistan, the US and India, delivering digital transformation and product engineering for startups, enterprises and public-sector organisations.',
        'Achieved distinction by being selected as one of the few candidates out of a massive applicant pool of 25,000',
        'Completed a rigorous training program that delved into the latest DevOps tools and practices.',
        'Achieved mastery in foundational technologies such as Linux and Git, while also excelling in critical DevOps tools like Docker and Kubernetes (K8s).',
        'Gained mastery in writing CI/CD pipelines using GitHub Actions, and Jenkins.',
        'Gained proficiency in Infrastructure as Code (IAC) with Terraform and demonstrated expertise in harnessing various AWS services like EC2 and S3, adhering to CI/CD best practices.',
        'Took sole ownership of two projects, one based on Node.js and the other on Ruby on Rails (ROR), overseeing the entire CI/CD lifecycle.',
        'Utilized a wide array of learned tools to containerize and deploy both applications within the AWS ecosystem, leveraging EC2 services to ensure scalability and reliability.',
        'Implemented Nginx as a reverse proxy to optimize application performance and efficiently manage incoming traffic.',
      ],
      link: 'https://www.linkedin.com/company/developers-inc/',
    },
    {
      companyName: 'RunTheSims (Contract)',
      jobRoleTitle: 'Frontend Engineer',
      logo: 'runthesims.jpg',
      tenure: 'May 2022 - August 2022',
      location: 'San Francisco Bay Area, US (Remote)',
      jobDescription: [
        'RunTheSims is a subscription analytics platform for daily fantasy sports, built and operated by professional DFS players, that chains projections, ownership, optimizers, simulations and portfolio optimization into one workflow — taking players from raw player projections to positive-EV lineups across a diversified portfolio, with coverage across NFL, MLB, PGA golf, Formula 1 and MMA.',
        'Contributed to the development of the simulation tool and its dashboard using ReactJS, React Context, and Material-UI, building reusable components for dense, data-heavy projection and simulation views and enhancing the overall user experience.',
      ],
      link: 'https://www.runthesims.com/',
    },
    {
      companyName: 'Creative Chaos',
      jobRoleTitle: 'Software Engineer Intern',
      logo: 'creative_chaos.jpg',
      tenure: 'June 2022 - August 2022',
      location: 'San Francisco, US / Karachi, Pakistan / Remote',
      jobDescription: [
        'Creative Chaos is a San Francisco-headquartered technology innovation firm, founded in 2000, that builds MVPs for startups and Fortune 500 companies — 300+ associates and 400+ delivered projects across a global delivery network spanning the US, Europe, the Middle East and Asia.',
        'Took on the sole ownership of developing the front-end for KATRA, a cross-platform application that connects people in urgent need of blood with willing donors, under the mentorship of a solution architect and senior software engineers. This challenging endeavor allowed me to demonstrate my ability to independently tackle complex projects and deliver exceptional outcomes. Working closely with cross-functional team, successfully delivered impressive results.',
        'Developed and maintained complex application logic with Redux Sagas, enabling efficient state management and asynchronous data flow.',
        'Optimized performance by employing best architectural techniques and practices like code splitting and lazy loading to enhance the application’s speed.',
        'Worked closely with the back-end developers to integrate RESTful APIs and handled data fetching and manipulation using Redux Sagas, ensuring smooth data flow between the front-end and back-end systems.',
        'Collaborated with designers and product managers to translate wireframes and mockups into interactive and functional components, ensuring a consistent and visually appealing design across multiple devices.',
        'Collaborated closely with DevOps engineer to ensure seamless deployment and release processes.',
      ],
      link: 'https://www.linkedin.com/company/creative-chaos/',
    },
    {
      companyName: 'Kpibar',
      jobRoleTitle: 'Frontend Engineer',
      logo: 'kpibar.jpeg',
      tenure: 'February 2022 - March 2022',
      location: 'Madrid, Spain / Remote',
      jobDescription: [
        'Kpibar is a Madrid-based software company, founded in 2020, building a single workspace for task management and team performance tracking — keeping teams on top of the business metrics that matter without hopping between separate tools.',
        'Built reusable, modular front-end components for the Kpibar platform with React, Ant Design and React Context, using Context to hold global state and share data cleanly across the component tree instead of threading props through every layer.',
        'Shipped UI and interaction improvements alongside the team, sharpening usability across the product.',
        'Refactored and optimized the existing codebase, improving performance, scalability and component reuse.',
      ],
      link: 'https://www.linkedin.com/company/kpibar/',
    },
    {
      companyName: 'CodeFier',
      jobRoleTitle: 'Junior Web Developer',
      logo: 'codefier.jpeg',
      tenure: 'January 2022 - March 2022',
      location: 'Rawalpindi, Pakistan / Remote',
      jobDescription: [
        'CodeFier is a Pakistan-based design and development agency serving clients across Islamabad and Rawalpindi, building websites, mobile apps and UI/UX alongside SEO and digital marketing.',
        'Built the front-end of an in-house HR tool from the ground up in vanilla JavaScript, HTML and CSS — no framework, no component library.',
        'Created interactive, intuitive interfaces for generating reports and employment letters, simplifying the HR team’s day-to-day workflow.',
        'Implemented responsive layouts so the tool held up across desktop, tablet and mobile.',
        'Worked directly with the HR team to understand their requirements and translate them into functional, visually consistent UI components.',
      ],
      link: 'https://www.linkedin.com/company/codefier/',
    },
  ]
  const VolunteershipData = [
    {
      companyName: 'Devsinc',
      jobRoleTitle: 'Campus Ambassador',
      logo: 'devsinc.jpeg',
      tenure: 'March 2023 - May 2024',
      location: 'Islamabad, Pakistan / Remote',
      jobDescription: [
        "Actively contributing in Devsinc's mission to bridge the gap between industry and academia.",
        "Responsible for organizing various Devsinc's events on campus.",
        'Utilizing my strong social media skills, particularly on LinkedIn, responsible for promoting these events to maximize their reach and impact within the NUST community.',
        'Working closely with the Devsinc team, ensuring seamless event planning and execution, creating engaging and valuable experiences for the participants.',
        "By effectively marketing and showcasing Devsinc's initiatives and events, contributing to the company's brand awareness and visibility among students at NUST.",
      ],
      link: 'https://www.linkedin.com/company/developers-inc/',
    },
    {
      companyName: 'HackClub, NUST',
      jobRoleTitle: 'Joint Secretary (Web and IT)',
      logo: 'hack-club.jpeg',
      tenure: 'August 2022 - July 2023',
      location: 'NUST, Islamabad',
      jobDescription: [
        "Leading the team in maintaining the club's website, ensuring its functionality and aesthetic appeal.",
        'Helping team members and juniors in enhancing their technical skills as developers.',
        'Actively mentoring team members, offering guidance and support in their web development journey.',
      ],
      link: 'https://www.linkedin.com/company/hackclub-nust/',
    },
    {
      companyName: "Orientation of NUST 2022 (ON'22)",
      jobRoleTitle: 'Sponsorships Executive',
      logo: 'ON_22_NUST.jpg',
      tenure: 'August 2022 - October 2022',
      location: 'NUST, Islamabad',
      jobDescription: [
        'Orientation is the flagship event of NUST that witnesses a remarkable turnout of over 1800 students and 3000+ enthusiastic participants engaging in a wide array of captivating social events.',
        'Engaged with numerous potential companies, showcasing the value and benefits of sponsoring the event.',
        'Successfully closed deals with two companies, securing their support as sponsors for the Orientation event.',
        'Played a pivotal role in securing financial contributions and resources, ensuring the successful execution of the event.',
      ],
      link: 'https://instagram.com/o_nust?igshid=MzRlODBiNWFlZA==',
    },
    {
      companyName: 'Google Developers Student Club (GDSC), NUST',
      jobRoleTitle: 'Team Member (Web Development)',
      logo: 'GDSC_NUST.jpeg',
      tenure: 'April 2022 - August 2022',
      location: 'NUST, Islamabad',
      jobDescription: [
        "As a member of GDSC, actively participated in the club's management and operations.",
        'Collaborated with fellow team members to efficiently manage and organize club activities, ensuring smooth coordination and effective execution of events and projects.',
        'Continuously improved my skills as a developer through hands-on experience and exposure to various web development technologies and frameworks.',
      ],
      link: 'https://www.linkedin.com/company/gdscnust/',
    },
    {
      companyName: 'HackClub, NUST',
      jobRoleTitle: 'Co-Team Lead Social Media Marketing',
      logo: 'hack-club.jpeg',
      tenure: 'November 2021 - August 2022',
      location: 'NUST, Islamabad',
      jobDescription: [
        'Led social media marketing as the Team Lead for HackClub, covering major events and delivering timely updates on Instagram and Facebook',
        "Enhanced the social media following and reach of HackClub's social media pages.",
        'Coordinated with volunteers from HackClub and GDSC NUST during Devfest Islamabad 2021 and Codefest 2021, fostering collaboration and synergy.',
        'Collaborated with 10Pearls Islamabad for Game Of Code, a speed coding competition.',
      ],
      link: 'https://www.linkedin.com/company/hackclub-nust/',
    },
    {
      companyName: 'HackClub, NUST',
      jobRoleTitle: 'Team Member Web and IT',
      logo: 'hack-club.jpeg',
      tenure: 'June 2021 - November 2021',
      location: 'NUST, Islamabad',
      jobDescription: [
        "Contributed as a member of the Web and IT team, actively involved in the development of Hack Club, NUST's official website.",
        'Utilizing React.js, React Bootstrap (Reactstrap), and Material UI, we crafted a modern and visually appealing website.',
        'Additionally, collaborated closely with the team on various web and IT tasks, ensuring smooth coordination and efficient project execution.',
      ],
      link: 'https://www.linkedin.com/company/hackclub-nust/',
    },
    {
      companyName: 'Project Insaniyat, NUST',
      jobRoleTitle: 'Fundraiser',
      logo: 'nust-logo.png',
      tenure: 'April 2021 - May 2021',
      location: 'NUST, Islamabad',
      jobDescription: [
        'Participated in Project Insaniyat, a fundraising initiative for social causes, during my second semester at NUST.',
        'Led a team effort to collect donations and raise funds for noble causes.',
        'Successfully raised approximately Rs. 127k in donations.',
        'Donated the funds to the Sunbeams school system to support their campaign of establishing schools in rural areas of the country.',
      ],
      link: 'https://www.linkedin.com/school/nustofficial/',
    },
    {
      companyName: 'NUST Media Club',
      jobRoleTitle: 'Team Lead (Web and IT)',
      logo: 'nust_media_club.jpeg',
      tenure: 'September 2021 - December 2021',
      location: 'NUST, Islamabad',
      jobDescription: [
        'Led a team of 5 individuals as the Team Lead of Web and IT at the NUST Media Club.',
        "Managed and maintained the club's WordPress website, ensuring its functionality and performance.",
        'Collaborated closely with the Publications Team to update and publish engaging blog posts on the website.',
        'Responsible to keep the website up-to-date with NUST Media Club blogs and relevant and informative content, enhancing the club’s online presence.',
      ],
      link: 'https://instagram.com/nustmediaclub?igshid=MzRlODBiNWFlZA==',
    },
    {
      companyName: 'IEEE-School of Electrical Engineering and Computer Science, NUST',
      jobRoleTitle: 'Team Member (Web and IT)',
      logo: 'IEEE-NUST.jpeg',
      tenure: 'October 2021 - December 2021',
      location: 'NUST, Islamabad',
      jobDescription: [
        'Contributed as a valuable member of the Web and IT team at IEEE NUST.',
        'Designed and developed professional email templates, ensuring consistent branding and effective communication with the audience.',
        'Coordinated with teams, such as Marketing and Graphics, to align web and IT efforts and enhance overall project success.',
        'Actively participated in community-building initiatives, organizing events and activities to foster engagement and collaboration within the IEEE NUST community.',
      ],
      link: 'https://www.linkedin.com/company/nustieeeclub/',
    },
  ]

  return (
    <>
      <Wrapper>
        <div className="py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-start sm:items-center md:items-center lg:items-center bg-main-bg-color xl:gap-5 2xl:gap-5 2xl:justify-center 2xl:items-center">
          <Slide triggerOnce direction="left" className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
            <ExperiencePageSVG />
          </Slide>
          <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
            <Slide triggerOnce direction="right">
              <h4 className="primary-heading justify-self-center text-center">Experience</h4>
              <h5 className="primary-text justify-self-center text-center">Work, Internship and Volunteership</h5>
              <p className="tertiary-text justify-self-center text-center py-1">I&apos;m a passionate software engineer who loves crafting creative solutions with code. My main area of expertise revolves around building scalable applications using the MERN stack. Additionally, I have a strong enthusiasm for fostering tech communities and actively engage in various tech events. Guiding and supporting aspiring developers as they begin their career paths brings me immense joy because we all know the struggle of finding the missing semicolon. 😉</p>
            </Slide>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div>
          <div onClick={() => setShowWork((prev) => !prev)} className="employement-type-heading flex flex-row justify-between items-center border border-secondary-bg-color bg-white h-50px px-20px py-10px font-medium cursor-pointer">
            <h6>Work</h6>
            <p>{showWork ? <FontAwesomeIcon className="text-text-color" icon={faMinus} /> : <FontAwesomeIcon className="text-text-color" icon={faPlus} />}</p>
          </div>
          {showWork && (
            <div className="employement-container flex flex-col">
              {WorkData.map((element, index) => (
                <ExperienceCard
                  key={index}
                  lastOne={WorkData.length - index === 1}
                  companyName={element.companyName}
                  jobRoleTitle={element.jobRoleTitle}
                  logo={element.logo}
                  tenure={element.tenure}
                  location={element.location}
                  jobDescription={element.jobDescription}
                  link={element.link}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <div onClick={() => setShowVolunteership((prev) => !prev)} className="employement-type-heading flex flex-row justify-between items-center border border-secondary-bg-color bg-white h-50px px-20px py-10px font-medium cursor-pointer">
            <h6>Volunteerships</h6>
            <p>{showVolunteership ? <FontAwesomeIcon className="text-text-color" icon={faMinus} /> : <FontAwesomeIcon className="text-text-color" icon={faPlus} />}</p>
          </div>
          {showVolunteership && (
            <div className="employement-container flex flex-col">
              {VolunteershipData.map((element, index) => (
                <ExperienceCard
                  key={index}
                  lastOne={VolunteershipData.length - index === 1}
                  companyName={element.companyName}
                  jobRoleTitle={element.jobRoleTitle}
                  logo={element.logo}
                  tenure={element.tenure}
                  location={element.location}
                  jobDescription={element.jobDescription}
                  link={element.link}
                />
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default ExperienceView

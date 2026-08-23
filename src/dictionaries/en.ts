import type { Dictionary } from './types';

/**
 * English is the source of truth. Every other locale must satisfy the same
 * `Dictionary` type, so a key that is added here and forgotten elsewhere is a
 * compile error rather than a page that silently falls back to English —
 * partially translated pages are exactly what search engines treat as thin.
 */
const en: Dictionary = {
  nav: {
    home: 'Home',
    education: 'Education',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact Me',
  },
  common: {
    resume: 'Resume 📄',
    bookCall: 'Book a 30-min call 📅',
    languageLabel: 'Language',
    skipToContent: 'Skip to content',
    madeWith: 'Made with {heart} by',
    scrollToTop: 'Scroll to top',
    toggleMenu: 'Toggle navigation menu',
    theme: 'Theme',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },
  meta: {
    siteTitle: 'Hurera Nadeem — Full-Stack Developer',
    siteDescription:
      'Portfolio of Hurera Nadeem, a full-stack software engineer specialising in React, Next.js, Node.js and cloud-native applications. Explore my experience, education and projects.',
    education: {
      title: 'Education',
      description:
        'Hurera Nadeem’s education: a Bachelor’s in Software Engineering from NUST, Islamabad, plus online courses in React, Next.js, Node.js, TypeScript and ML.',
    },
    experience: {
      title: 'Experience',
      description:
        'Hurera Nadeem’s professional experience across full-stack engineering, product engineering and DevOps roles, plus community volunteering.',
    },
    projects: {
      title: 'Projects',
      description:
        'A selection of Hurera Nadeem’s projects — AI SaaS platforms, workforce management tools and full-stack web/mobile apps built with Next.js, React and Node.js.',
    },
    contact: {
      title: 'Contact',
      description:
        'Get in touch with Hurera Nadeem — connect on GitHub, LinkedIn, Instagram and Facebook, or reach out via email.',
    },
    notFound: { title: '404 — Page Not Found', description: 'This page does not exist.' },
  },
  home: {
    greetingTitle: 'Wassup! this is Hurera',
    greetingSubtitle:
      'A Full-stack developer (MERN/MEVN) 💻 - DevOps and Cloud Enthusiast ☁️ - Problem Solver 🤔',
    whatIDoTitle: '{ What I do? }',
    whatIDoLead:
      'I love to code for contract based projects and help companies expand their businesses.🤜🤛',
    whatIDoLead2: 'My tech expertise are as follows:',
    cards: {
      frontend: {
        name: 'Frontend Engineering',
        descriptions: [
          'Developing responsive single-page and server-rendered web applications using React.js, Next.js, Vue 3 and Astro.',
          'Managing application state with Redux, Redux Saga, Pinia and React Context.',
          'Building reusable, modular component libraries with Tailwind CSS, ShadCN, Material-UI and Bootstrap, working from Figma designs.',
          'Writing type-safe frontends in TypeScript, with an eye on accessibility, responsiveness and performance across devices.',
          'Working with internationalisation (i18n), embeddable widgets and third-party frontend integrations.',
        ],
      },
      backend: {
        name: 'Backend Engineering & APIs',
        descriptions: [
          'Designing and building RESTful APIs, services and microservices with Node.js, Express.js, NestJS and Fastify.',
          'Working with both relational and document databases — PostgreSQL, MySQL, MongoDB and DynamoDB — through ORMs and ODMs like Prisma, Sequelize and Mongoose.',
          'Implementing authentication and authorization using JWT, OAuth, OTP verification and role-based access control.',
          'Using Redis for caching and session management, and designing schemas and migrations for evolving data models.',
          'Integrating third-party APIs and webhooks, and building notification pipelines over email and SMS.',
        ],
      },
      cloud: {
        name: 'Cloud, DevOps & Infrastructure',
        descriptions: [
          'Building and deploying on AWS — Lambda, DynamoDB, S3, CloudFront, ECS Fargate and EC2 — with infrastructure defined as code using the AWS CDK.',
          'Containerising applications with Docker, and configuring Nginx and Caddy as reverse proxies.',
          'Automating testing, builds and deployments through CI/CD pipelines on GitHub Actions, GitLab CI/CD and Jenkins.',
          'Writing unit and end-to-end tests with Jest and Playwright to keep codebases reliable as they grow.',
          'Working across GCP, Azure and Firebase alongside AWS, and collaborating through Git and Jira.',
        ],
      },
      ai: {
        name: 'AI & Agentic Engineering',
        descriptions: [
          'Building AI-powered products and agentic workflows with LLMs from Anthropic (Claude), OpenAI and others.',
          'Working with the Model Context Protocol (MCP) to expose tools and data to coding agents and AI clients.',
          'Integrating retrieval over documents, websites and databases, with human review and guardrails around model output.',
          'Automating content and page generation pipelines, from model output through build and deployment.',
          'Writing agent tooling, skills and prompts that stay version-controlled and reproducible.',
        ],
      },
    },
  },
  education: {
    title: 'Education',
    subtitle: 'My Qualifications and Certifications',
    intro: 'Here’s what you need to know about my academic background 🙃',
    degreeSection: '{ Degree Received }',
    coursesSection: '{ Online Courses }',
    university: 'National University of Sciences and Technology, Islamabad',
    degree: 'Bachelor’s in Software Engineering',
    location: 'Islamabad, Pakistan',
    bullets: [
      '⚡ Gained extensive knowledge and insights through rigorous Computer Science courses covering areas such as Data Structures, Algorithms, Database Management Systems, Operating Systems, Machine Learning.',
      '⚡ Got the inside scoop on the entire software development cycle and the industry’s processes by some specialized software engineering courses like Software Requirements Engineering, Software Design & Architecture, and Software Construction etc.',
      '⚡ In addition to my academic pursuits, I have pursued courses in MERN Stack Development and explored the www world :)',
      '⚡ The supportive environment at NUST have played a crucial role in my personal development, fostering diversity and building confidence. Additionally, the emphasis on community bonding techniques has greatly contributed to my growth.',
      '⚡ One of my most fulfilling extracurricular activities has been leading and managing tech communities including HackClub NUST, Google Developers Student Club (GDSC) NUST, IEEE-NUST, NUST Media Club, and Orientation of NUST. These experiences have been incredibly fulfilling, allowing me to connect with like-minded individuals and contribute to the vibrant tech and non-tech ecosystem at NUST.',
    ],
  },
  experience: {
    title: 'Experience',
    subtitle: 'Work, Internship and Volunteership',
    intro:
      'I’m a passionate software engineer who loves crafting creative solutions with code. My main area of expertise revolves around building scalable applications using the MERN stack. Additionally, I have a strong enthusiasm for fostering tech communities and actively engage in various tech events. Guiding and supporting aspiring developers as they begin their career paths brings me immense joy because we all know the struggle of finding the missing semicolon. 😉',
    work: 'Work',
    volunteerships: 'Volunteerships',
    entries: {
      pockla: {
        role: 'Senior Software Engineer',
        tenure: 'November 2025 - Present',
        location: 'London, United Kingdom · Remote',
        description: [
          'Pockla is a London-based AdTech startup, building agent-first infrastructure for self-adapting websites — instead of one static landing page for everyone, AI agents generate a page tailored to every individual prospect, without rebuilding the site.',
          'The platform runs the full lead generation loop for UK insurance, finance, claims and legal businesses: driving traffic through paid ads, AI outbound calling and cold email, landing each prospect on a page generated just for them, then qualifying and nurturing them with AI SMS and voice agents. Trusted by brands including Lottie, Kene, Omnos and NWEH.',
          'Backed by ~£2M in funding, including a £1.6M seed round led by Venrex, with participation from Upside Ventures (the Sidemen’s VC arm), Love Ventures, Shuttle and SyndicateRoom.',
          'Engineering the core CLI platform in Node.js, an MCP server exposing 30+ tools that drives 20 autonomous Claude Code skills through a workflow state machine to generate, QA, test and deploy Astro landing pages end-to-end.',
          'Architecting the serverless backend on AWS with a Fastify API on Lambda, DynamoDB, S3 and CloudFront provisioned through CDK, plus an ECS Fargate edge layer running Caddy with on-demand TLS for multi-tenant custom domain routing.',
          'Diagnosed and eliminated a production-blocking out-of-memory failure in bulk page builds by tracing it to a fixed WASM compiler memory ceiling and migrating to Astro’s native Rust compiler, unlocking 2,000+ page builds in ~40 seconds and retiring the batching workaround entirely.',
          'Redesigned the deploy pipeline to mirror the full build output to S3 with checksum-based diffing, so only changed files upload while every page, asset and SEO artifact is served same-origin.',
          'Implementing multi-tenant workspaces with JWT access and refresh authentication and role-based access control, alongside a lead ingestion and buyer-forwarding pipeline with per-submission delivery tracking.',
        ],
      },
      ripeseed: {
        role: 'Software Engineer',
        tenure: 'August 2024 - Present',
        location: 'Lahore, Pakistan',
        description: [
          'RipeSeed is a Lahore-based product engineering studio, founded in 2021, that ships web, mobile and AI products for SaaS, eCommerce and startup clients — 150+ projects delivered, a 5.0 Clutch rating and $1M+ earned on Upwork entirely out of Pakistan.',
          'Developing high-performance, scalable web applications using React.js, Next.js, Node.js and NestJS, with TypeScript to ensure type-safe and maintainable code, backed by cloud-native AWS infrastructure and RESTful APIs built for scalability and high availability.',
          'Building Brava CrewConnect, a workforce management platform for a US roof-tile manufacturer that automates crew training certification, job assignment and compliance tracking across subcontractors, integrating Monday.com, FlexiQuiz and CompanyCam with multi-channel email and SMS notifications.',
          'Designed and shipped a database-driven role-based access control system with a runtime-editable permission matrix, plus an acting-role “view as” switcher that resolves permissions for a single role and can only narrow privileges, never escalate — enforced on both the API and the admin panel.',
          'Architected a geographic territory engine that routes every job to exactly one owning territory and field service rep, with multi-level country, state and postal coverage, most-specific-wins resolution and an interactive choropleth map for painting coverage areas.',
          'Delivered an event-based VR training feature end-to-end — event scheduling, trainer and trainee rosters, a dedicated SMS access-code subsystem with scoped expiry, resend cooldown and attempt lockout, and an API-key-scoped external API for the VR platform to consume.',
          'Drove a v2 data-model migration off deprecated tables onto a user-centric identity model, moving every read path to the new structure while keeping legacy writes intact for rollback safety.',
          'Shipped PRGRSS.ai, a cross-platform web and mobile mentorship platform for the Black and Brown community in the UK, featuring AI-powered mentor–mentee matching, real-time video, in-app chat and progress tracking on React Native, Firebase and GCP.',
        ],
      },
      brilio: {
        role: 'Founding Product Engineer',
        tenure: 'Jan 2025 - Oct 2025',
        location: 'Abu Dhabi, United Arab Emirates · Remote',
        description: [
          'Brilio is a no-code agentic AI platform that lets businesses stand up self-learning AI agents in minutes — trained on documents, websites, YouTube transcripts, Q&A pairs and SQL databases, running on GPT, Claude and DeepSeek, with configurable confidence thresholds so an agent hands over to a human instead of guessing, and learns from every answer that human gives.',
          'Led a team of 4 Frontend Engineers, set technical direction and standards.',
          'Delivered 4 GenAI products including Brilio, end-to-end within a 9-month timeline.',
          'Owned the product lifecycle - from concept validation to launch.',
          'Revamped Brilio’s frontend, transforming it into a UX-first product experience.',
          'Scaled Brilio for the European market by implementing support for 6 languages.',
          'Led the launch of Brilio’s embeddable AI chatbot via script and WordPress/Shopify plugins, enabling instant integration across customers’ apps.',
        ],
      },
      cowlar: {
        role: 'Full Stack Software Engineer',
        tenure: 'February 2024 - August 2024',
        location: 'Islamabad, Pakistan',
        description: [
          'Cowlar Design Studio is a 175+ person end-to-end product development and technology consulting firm — the studio arm of Cowlar Inc. (Y Combinator W17), the smart-collar startup dubbed the “Fitbit for cows” — with expertise spanning IoT, robotics, computer vision, machine learning and enterprise software.',
          'Collaborated with the ML team on an AI-driven retail product, incorporating continuous user feedback to enhance functionality and satisfaction.',
          'Developed modular and reusable frontend components with Vue.js, React.js, and TypeScript to drive UI efficiency and ensure robust product performance.',
          'Implemented RESTful APIs with Node.js and Express.js, using Sequelize for MySQL and Mongoose for MongoDB to ensure efficient database interactions.',
          'Worked on Thanos, the studio’s end-to-end machine learning platform covering everything from data gathering and annotation to AI-assisted model deployment, increasing annotation throughput by 60% on large-scale image datasets and accelerating model development cycles.',
          'Wrote complex database queries for dashboard statistics, boosting data retrieval speed by 40% and enhancing real-time analytics.',
          'Optimized existing APIs and database queries, cutting execution time by 75% and improving system throughput by 55%, resulting in faster application responsiveness.',
        ],
      },
      'devsinc-intern': {
        role: 'DevOps Engineer Intern',
        tenure: 'July 2023 - September 2023',
        location: 'Islamabad, Pakistan',
        description: [
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
      },
      runthesims: {
        role: 'Frontend Engineer',
        tenure: 'May 2022 - August 2022',
        location: 'San Francisco Bay Area, US (Remote)',
        description: [
          'RunTheSims is a subscription analytics platform for daily fantasy sports, built and operated by professional DFS players, that chains projections, ownership, optimizers, simulations and portfolio optimization into one workflow — taking players from raw player projections to positive-EV lineups across a diversified portfolio, with coverage across NFL, MLB, PGA golf, Formula 1 and MMA.',
          'Contributed to the development of the simulation tool and its dashboard using ReactJS, React Context, and Material-UI, building reusable components for dense, data-heavy projection and simulation views and enhancing the overall user experience.',
        ],
      },
      'creative-chaos': {
        role: 'Software Engineer Intern',
        tenure: 'June 2022 - August 2022',
        location: 'San Francisco, US / Karachi, Pakistan / Remote',
        description: [
          'Creative Chaos is a San Francisco-headquartered technology innovation firm, founded in 2000, that builds MVPs for startups and Fortune 500 companies — 300+ associates and 400+ delivered projects across a global delivery network spanning the US, Europe, the Middle East and Asia.',
          'Took on the sole ownership of developing the front-end for KATRA, a cross-platform application that connects people in urgent need of blood with willing donors, under the mentorship of a solution architect and senior software engineers. This challenging endeavor allowed me to demonstrate my ability to independently tackle complex projects and deliver exceptional outcomes. Working closely with cross-functional team, successfully delivered impressive results.',
          'Developed and maintained complex application logic with Redux Sagas, enabling efficient state management and asynchronous data flow.',
          'Optimized performance by employing best architectural techniques and practices like code splitting and lazy loading to enhance the application’s speed.',
          'Worked closely with the back-end developers to integrate RESTful APIs and handled data fetching and manipulation using Redux Sagas, ensuring smooth data flow between the front-end and back-end systems.',
          'Collaborated with designers and product managers to translate wireframes and mockups into interactive and functional components, ensuring a consistent and visually appealing design across multiple devices.',
          'Collaborated closely with DevOps engineer to ensure seamless deployment and release processes.',
        ],
      },
      kpibar: {
        role: 'Frontend Engineer',
        tenure: 'February 2022 - March 2022',
        location: 'Madrid, Spain / Remote',
        description: [
          'Kpibar is a Madrid-based software company, founded in 2020, building a single workspace for task management and team performance tracking — keeping teams on top of the business metrics that matter without hopping between separate tools.',
          'Built reusable, modular front-end components for the Kpibar platform with React, Ant Design and React Context, using Context to hold global state and share data cleanly across the component tree instead of threading props through every layer.',
          'Shipped UI and interaction improvements alongside the team, sharpening usability across the product.',
          'Refactored and optimized the existing codebase, improving performance, scalability and component reuse.',
        ],
      },
      codefier: {
        role: 'Junior Web Developer',
        tenure: 'January 2022 - March 2022',
        location: 'Rawalpindi, Pakistan / Remote',
        description: [
          'CodeFier is a Pakistan-based design and development agency serving clients across Islamabad and Rawalpindi, building websites, mobile apps and UI/UX alongside SEO and digital marketing.',
          'Built the front-end of an in-house HR tool from the ground up in vanilla JavaScript, HTML and CSS — no framework, no component library.',
          'Created interactive, intuitive interfaces for generating reports and employment letters, simplifying the HR team’s day-to-day workflow.',
          'Implemented responsive layouts so the tool held up across desktop, tablet and mobile.',
          'Worked directly with the HR team to understand their requirements and translate them into functional, visually consistent UI components.',
        ],
      },
      'devsinc-ambassador': {
        role: 'Campus Ambassador',
        tenure: 'March 2023 - May 2024',
        location: 'Islamabad, Pakistan / Remote',
        description: [
          "Actively contributing in Devsinc's mission to bridge the gap between industry and academia.",
          "Responsible for organizing various Devsinc's events on campus.",
          'Utilizing my strong social media skills, particularly on LinkedIn, responsible for promoting these events to maximize their reach and impact within the NUST community.',
          'Working closely with the Devsinc team, ensuring seamless event planning and execution, creating engaging and valuable experiences for the participants.',
          "By effectively marketing and showcasing Devsinc's initiatives and events, contributing to the company's brand awareness and visibility among students at NUST.",
        ],
      },
      'hackclub-joint-secretary': {
        role: 'Joint Secretary (Web and IT)',
        tenure: 'August 2022 - July 2023',
        location: 'NUST, Islamabad',
        description: [
          "Leading the team in maintaining the club's website, ensuring its functionality and aesthetic appeal.",
          'Helping team members and juniors in enhancing their technical skills as developers.',
          'Actively mentoring team members, offering guidance and support in their web development journey.',
        ],
      },
      on22: {
        role: 'Sponsorships Executive',
        tenure: 'August 2022 - October 2022',
        location: 'NUST, Islamabad',
        description: [
          'Orientation is the flagship event of NUST that witnesses a remarkable turnout of over 1800 students and 3000+ enthusiastic participants engaging in a wide array of captivating social events.',
          'Engaged with numerous potential companies, showcasing the value and benefits of sponsoring the event.',
          'Successfully closed deals with two companies, securing their support as sponsors for the Orientation event.',
          'Played a pivotal role in securing financial contributions and resources, ensuring the successful execution of the event.',
        ],
      },
      gdsc: {
        role: 'Team Member (Web Development)',
        tenure: 'April 2022 - August 2022',
        location: 'NUST, Islamabad',
        description: [
          "As a member of GDSC, actively participated in the club's management and operations.",
          'Collaborated with fellow team members to efficiently manage and organize club activities, ensuring smooth coordination and effective execution of events and projects.',
          'Continuously improved my skills as a developer through hands-on experience and exposure to various web development technologies and frameworks.',
        ],
      },
      'hackclub-social-media': {
        role: 'Co-Team Lead Social Media Marketing',
        tenure: 'November 2021 - August 2022',
        location: 'NUST, Islamabad',
        description: [
          'Led social media marketing as the Team Lead for HackClub, covering major events and delivering timely updates on Instagram and Facebook',
          "Enhanced the social media following and reach of HackClub's social media pages.",
          'Coordinated with volunteers from HackClub and GDSC NUST during Devfest Islamabad 2021 and Codefest 2021, fostering collaboration and synergy.',
          'Collaborated with 10Pearls Islamabad for Game Of Code, a speed coding competition.',
        ],
      },
      'hackclub-web': {
        role: 'Team Member Web and IT',
        tenure: 'June 2021 - November 2021',
        location: 'NUST, Islamabad',
        description: [
          "Contributed as a member of the Web and IT team, actively involved in the development of Hack Club, NUST's official website.",
          'Utilizing React.js, React Bootstrap (Reactstrap), and Material UI, we crafted a modern and visually appealing website.',
          'Additionally, collaborated closely with the team on various web and IT tasks, ensuring smooth coordination and efficient project execution.',
        ],
      },
      insaniyat: {
        role: 'Fundraiser',
        tenure: 'April 2021 - May 2021',
        location: 'NUST, Islamabad',
        description: [
          'Participated in Project Insaniyat, a fundraising initiative for social causes, during my second semester at NUST.',
          'Led a team effort to collect donations and raise funds for noble causes.',
          'Successfully raised approximately Rs. 127k in donations.',
          'Donated the funds to the Sunbeams school system to support their campaign of establishing schools in rural areas of the country.',
        ],
      },
      'nust-media': {
        role: 'Team Lead (Web and IT)',
        tenure: 'September 2021 - December 2021',
        location: 'NUST, Islamabad',
        description: [
          'Led a team of 5 individuals as the Team Lead of Web and IT at the NUST Media Club.',
          "Managed and maintained the club's WordPress website, ensuring its functionality and performance.",
          'Collaborated closely with the Publications Team to update and publish engaging blog posts on the website.',
          'Responsible to keep the website up-to-date with NUST Media Club blogs and relevant and informative content, enhancing the club’s online presence.',
        ],
      },
      'ieee-nust': {
        role: 'Team Member (Web and IT)',
        tenure: 'October 2021 - December 2021',
        location: 'NUST, Islamabad',
        description: [
          'Contributed as a valuable member of the Web and IT team at IEEE NUST.',
          'Designed and developed professional email templates, ensuring consistent branding and effective communication with the audience.',
          'Coordinated with teams, such as Marketing and Graphics, to align web and IT efforts and enhance overall project success.',
          'Actively participated in community-building initiatives, organizing events and activities to foster engagement and collaboration within the IEEE NUST community.',
        ],
      },
    },
  },
  projects: {
    title: 'Projects',
    intro:
      'With a deep understanding of React, Next.js, Redux, Node.js, Express, GraphQL and MongoDB, my expertise lies in developing robust and scalable web applications. By harnessing the power of these technologies, I create engaging user interfaces that deliver exceptional experiences, effectively manage complex application states to ensure seamless data flow, develop efficient server-side APIs and design efficient data models and ensure secure data storage. My proficiency in these technologies enables me to deliver high-quality applications that meet the demands of modern web development. 🫡',
    sectionTitle: '{ Selected Work }',
    createdIn: 'Created in',
    moreOnGithub: 'More projects on GitHub',
    entries: {
      'pockla-ai':
        'Powered by AI, every customer of yours gets their own personlized landing page. Connect your CRM and give every contact their own personalized landing page automatically.',
      'brilio-ai':
        'AI SaaS for businesses and individuals to create custom AI agents, train LLMs with their business logic, and integrate data from documents, web links, databases, and QA chats.',
      'brava-crewconnect':
        'Workforce management platform for roofing contractors that automates crew training certification, job assignments, and compliance tracking across subcontractors. Features real-time integrations with Monday.com, FlexiQuiz, CompanyCam, and multi-channel notifications (email/SMS).',
      'prgrss-ai':
        'Cross-platform Web and Mobile platform for AI assisted mentorship of Black and Brown community in the UK, featuring AI powered mentors/mentees matching, real-time video communication, progress tracking, and in-app chat feature to provide end-to-end mentorship.',
      thanos:
        'Thanos AI is the epitome of our digitization tools-a comprehensive end-to-end solution for machine learning projects. It encompasses everything from data gathering and annotation to AI-assisted model deployment.',
      'dev-portfolio':
        'The Website you are scrolling through right now 😉 Dev-Portfolio is open source customizable portfolio website for developers to showcase their technical skills and highlight their achievements.',
      katra:
        'Full-Stack Cross Platform application for Creative Chaos designed to seamlessly connect individuals in need of blood with generous donors. This innovative solution simplifies and enhances communication between both parties, ensuring a smooth and efficient process.',
    },
  },
  contact: {
    title: 'Contact Me',
    intro:
      'I’m practically the social media version of Batman, always lurking in the shadows of every platform, ready to swoop in and save the day! So, whether you need some industry wizardry or a tech talk virtuoso, just reach out to me. Let’s connect and sprinkle some laughter into the world of tech! 🤝',
    facts: {
      email: 'Email',
      basedIn: 'Based in',
      basedInValue: 'Islamabad, Pakistan — working with teams across time zones',
      role: 'Role',
      roleValue: 'Full-Stack Software Engineer',
      openTo: 'Open to',
      openToValue: 'Full-time roles, contract work and freelance projects',
    },
    reachOutTitle: 'What to reach out about',
    reachOut: [
      'Building web applications end to end — React, Next.js, Vue, Node.js, NestJS and Express, backed by PostgreSQL, MongoDB or Redis.',
      'Taking an existing product further: new features, performance work, or untangling a codebase that has grown faster than its structure.',
      'Deployment and infrastructure — AWS, Docker, CI/CD pipelines and getting a release process that people trust.',
      'AI-assisted product work, from LLM integrations to internal tooling.',
      'Speaking at or helping run a tech community event — I have organised plenty.',
    ],
    emailNote: 'Email is the surest way to reach me; I usually reply within a couple of days.',
    cta: 'Reach me via email 📧',
  },
  notFound: {
    eyebrow: '404',
    title: 'This page is just hangin’ around',
    body: 'Which is a fun way of saying it doesn’t exist. Either the link is broken, or I moved something and forgot to leave a forwarding address. Either way — nothing to see here. 🙃',
    cta: 'Take me home 🏠',
    suggestionsLabel: 'Or pick up where you meant to go:',
    suggestedPages: 'Suggested pages',
  },
};

export default en;

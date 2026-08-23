'use client';

import Wrapper from '@/components/layout/wrapper';
import type { Dictionary } from '@/dictionaries';
import type { WhatIDoCardId } from '@/dictionaries/types';
import { WhatIDoCard } from './what-i-do-card';
import {
  ReactSVG,
  NextSVG,
  VueSVG,
  ReduxSVG,
  ReduxSagaSVG,
  PiniaSVG,
  JavascriptSVG,
  TypescriptSVG,
  TailwindSVG,
  MaterialUI,
  BootstrapSVG,
  HtmlSVG,
  CssSVG,
  FigmaSVG,
  AstroSVG,
  NodeSVG,
  ExpressJsSVG,
  NestJsSVG,
  FastifySVG,
  PostgreSQLSVG,
  PrismaSVG,
  MongoDBSVG,
  MongooseSVG,
  MySqlSVG,
  SequelizeSVG,
  RedisSVG,
  JwtSVG,
  PostmanSVG,
  AwsSVG,
  AzureSVG,
  GcpSVG,
  DockerSVG,
  GithubActionsSVG,
  NginxSVG,
  GitSVG,
  JestSVG,
  PlaywrightSVG,
  JiraSVG,
  ClaudeSVG,
  OpenAiSVG,
  McpSVG,
} from '@/components/icons/tech-skills';
import { ShadCNSVG } from '@/components/icons/tech-logos';
import {
  FrontendDevSVG,
  BackendDevSVG,
  CloudDevOpsSVG,
  AiEngineeringSVG,
} from '@/components/icons/tech-stack';

/**
 * Illustration and logos per card. These are markup, not copy, so they stay
 * here — only the card's name and its bullet points come from the dictionary.
 */
const CARD_ART: Record<
  WhatIDoCardId,
  { main: React.JSX.Element; icons: { name: string; svg: React.JSX.Element }[] }
> = {
  frontend: {
    main: <FrontendDevSVG />,
    icons: [
      { name: 'React', svg: <ReactSVG /> },
      { name: 'Next.js', svg: <NextSVG /> },
      { name: 'Vue3.js', svg: <VueSVG /> },
      { name: 'Astro', svg: <AstroSVG /> },
      { name: 'TypeScript', svg: <TypescriptSVG /> },
      { name: 'JavaScript', svg: <JavascriptSVG /> },
      { name: 'Redux', svg: <ReduxSVG /> },
      { name: 'Redux Saga', svg: <ReduxSagaSVG /> },
      { name: 'Pinia', svg: <PiniaSVG /> },
      { name: 'Tailwind-CSS', svg: <TailwindSVG /> },
      { name: 'ShadCN', svg: <ShadCNSVG /> },
      { name: 'Material-UI', svg: <MaterialUI /> },
      { name: 'Bootstrap', svg: <BootstrapSVG /> },
      { name: 'HTML5', svg: <HtmlSVG /> },
      { name: 'CSS3', svg: <CssSVG /> },
      { name: 'Figma', svg: <FigmaSVG /> },
    ],
  },
  backend: {
    main: <BackendDevSVG />,
    icons: [
      { name: 'Node.js', svg: <NodeSVG /> },
      { name: 'Express.js', svg: <ExpressJsSVG /> },
      { name: 'NestJS', svg: <NestJsSVG /> },
      { name: 'Fastify', svg: <FastifySVG /> },
      { name: 'PostgreSQL', svg: <PostgreSQLSVG /> },
      { name: 'Prisma', svg: <PrismaSVG /> },
      { name: 'MongoDB', svg: <MongoDBSVG /> },
      { name: 'Mongoose', svg: <MongooseSVG /> },
      { name: 'MySQL', svg: <MySqlSVG /> },
      { name: 'Sequelize', svg: <SequelizeSVG /> },
      { name: 'Redis', svg: <RedisSVG /> },
      { name: 'JWT', svg: <JwtSVG /> },
      { name: 'Postman', svg: <PostmanSVG /> },
    ],
  },
  cloud: {
    main: <CloudDevOpsSVG />,
    icons: [
      { name: 'AWS', svg: <AwsSVG /> },
      { name: 'Azure', svg: <AzureSVG /> },
      { name: 'Google Cloud Platform', svg: <GcpSVG /> },
      { name: 'Docker', svg: <DockerSVG /> },
      { name: 'GitHub Actions', svg: <GithubActionsSVG /> },
      { name: 'Nginx', svg: <NginxSVG /> },
      { name: 'Git', svg: <GitSVG /> },
      { name: 'Jest', svg: <JestSVG /> },
      { name: 'Playwright', svg: <PlaywrightSVG /> },
      { name: 'Jira', svg: <JiraSVG /> },
    ],
  },
  ai: {
    main: <AiEngineeringSVG />,
    icons: [
      { name: 'Claude', svg: <ClaudeSVG /> },
      { name: 'OpenAI', svg: <OpenAiSVG /> },
      { name: 'Model Context Protocol (MCP)', svg: <McpSVG /> },
    ],
  },
};

const CARD_ORDER: WhatIDoCardId[] = ['frontend', 'backend', 'cloud', 'ai'];

function WhatIDo({ dict }: { dict: Dictionary }) {
  return (
    <Wrapper>
      <h2 className="primary-heading text-center">{dict.home.whatIDoTitle}</h2>
      <p className="secondary-text text-center">{dict.home.whatIDoLead}</p>
      <p className="secondary-text text-center">{dict.home.whatIDoLead2}</p>
      {CARD_ORDER.map((id) => (
        <WhatIDoCard
          key={id}
          MainSVG={CARD_ART[id].main}
          skillName={dict.home.cards[id].name}
          iconsArr={CARD_ART[id].icons}
          descriptionArr={dict.home.cards[id].descriptions}
        />
      ))}
    </Wrapper>
  );
}

export default WhatIDo;

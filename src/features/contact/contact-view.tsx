'use client';

import Wrapper from '@/components/layout/wrapper';
import ContactPageSVG from '@/components/icons/contact-illustration';
import Link from 'next/link';
import SocialIconBadge from '@/components/ui/social-icon-badge';
import { GithubSVG, LinkedInSVG, FacebookSVG, InstagramSVG } from '@/components/icons/social-icons';
import { Slide } from 'react-awesome-reveal';
import { CONTACT_EMAIL, SITE_ROLE } from '@/config/site';

function ContactView() {
  return (
    <Wrapper>
      <div className="flex flex-row items-start justify-around bg-main-bg-color py-7 pb-[18vh] sm:flex-col sm:items-center sm:px-0 sm:py-5 md:flex-col md:items-center md:px-0 md:py-5 lg:flex-col lg:items-center lg:px-0 lg:py-5 xl:gap-5 2xl:items-center 2xl:justify-center 2xl:gap-5">
        <Slide
          triggerOnce
          direction="left"
          className="svg-div mt-4 w-100% self-start sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center lg:flex lg:flex-col lg:items-center lg:justify-center xl:w-50% 2xl:ml-6 2xl:w-50%"
        >
          <ContactPageSVG />
        </Slide>
        <div className="flex flex-col items-center justify-center pt-14 sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% xl:pt-12 2xl:w-50% 2xl:pt-0">
          <Slide triggerOnce direction="right">
            <h1 className="primary-heading justify-self-center text-center">Contact Me</h1>
            <p className="tertiary-text justify-self-center py-1 text-center">
              I&apos;m practically the social media version of Batman, always lurking in the shadows
              of every platform, ready to swoop in and save the day! So, whether you need some
              industry wizardry or a tech talk virtuoso, just reach out to me. Let&apos;s connect
              and sprinkle some laughter into the world of tech! 🤝
            </p>
            <div className="socials mb-4 mt-5 flex flex-row gap-1 sm:justify-center md:justify-center">
              <Link href="https://github.com/HureraNadeem" passHref={true} target="_blank">
                <SocialIconBadge bgcolor={'black'}>
                  <GithubSVG />
                </SocialIconBadge>
              </Link>
              <Link href="https://www.linkedin.com/in/iamhurera/" passHref={true} target="_blank">
                <SocialIconBadge bgcolor={'rgb(0, 119, 181)'}>
                  <LinkedInSVG />
                </SocialIconBadge>
              </Link>
              <Link href="https://www.instagram.com/iamhurera/" passHref={true} target="_blank">
                <SocialIconBadge bgcolor={'rgb(214,41,118)'}>
                  <InstagramSVG />
                </SocialIconBadge>
              </Link>
              <Link href="https://www.facebook.com/iamhurera" passHref={true} target="_blank">
                <SocialIconBadge bgcolor={'rgb(24, 119, 242)'}>
                  <FacebookSVG />
                </SocialIconBadge>
              </Link>
            </div>
            <dl className="tertiary-text mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-left">
              <dt className="font-medium">Email</dt>
              <dd>
                <Link href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
                  {CONTACT_EMAIL}
                </Link>
              </dd>
              <dt className="font-medium">Based in</dt>
              <dd>Islamabad, Pakistan — working with teams across time zones</dd>
              <dt className="font-medium">Role</dt>
              <dd>{SITE_ROLE}</dd>
              <dt className="font-medium">Open to</dt>
              <dd>Full-time roles, contract work and freelance projects</dd>
            </dl>

            <h2 className="secondary-text mt-8 text-center">What to reach out about</h2>
            <ul className="tertiary-text mt-2 text-left">
              <li className="my-2">
                ⚡ Building web applications end to end — React, Next.js, Vue, Node.js, NestJS and
                Express, backed by PostgreSQL, MongoDB or Redis.
              </li>
              <li className="my-2">
                ⚡ Taking an existing product further: new features, performance work, or untangling
                a codebase that has grown faster than its structure.
              </li>
              <li className="my-2">
                ⚡ Deployment and infrastructure — AWS, Docker, CI/CD pipelines and getting a
                release process that people trust.
              </li>
              <li className="my-2">
                ⚡ AI-assisted product work, from LLM integrations to internal tooling.
              </li>
              <li className="my-2">
                ⚡ Speaking at or helping run a tech community event — I have organised plenty.
              </li>
            </ul>

            <p className="tertiary-text mt-6 text-center">
              Email is the surest way to reach me; I usually reply within a couple of days.
            </p>

            <div className="resume-div font-GoogleSans-Regular mr-0 mt-5 block max-w-max cursor-pointer rounded-md bg-text-color px-6 py-3 text-center font-sans text-lg font-medium leading-tight tracking-wide text-main-bg-color no-underline">
              <Link href={`mailto:${CONTACT_EMAIL}`} className="font-GoogleSans-Regular">
                Reach me via email 📧
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactView;

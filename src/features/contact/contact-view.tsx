'use client';

import Wrapper from '@/components/layout/wrapper';
import ContactPageSVG from '@/components/icons/contact-illustration';
import Link from 'next/link';
import SocialIconBadge from '@/components/ui/social-icon-badge';
import {
  GithubSVG,
  LinkedInSVG,
  UpworkSVG,
  FacebookSVG,
  InstagramSVG,
} from '@/components/icons/social-icons';
import { Slide } from 'react-awesome-reveal';
import { CALENDLY_URL, CONTACT_EMAIL } from '@/config/site';
import type { Dictionary } from '@/dictionaries';

type ContactFact = { term: string; value: React.ReactNode };

function contactFacts(dict: Dictionary): ContactFact[] {
  const { facts } = dict.contact;
  return [
    {
      term: facts.email,
      value: (
        <Link href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
          {CONTACT_EMAIL}
        </Link>
      ),
    },
    { term: facts.basedIn, value: facts.basedInValue },
    { term: facts.role, value: facts.roleValue },
    { term: facts.openTo, value: facts.openToValue },
  ];
}

function ContactView({ dict }: { dict: Dictionary }) {
  const CONTACT_FACTS = contactFacts(dict);
  const REACH_OUT_ABOUT = dict.contact.reachOut;

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
        {/* Needs a definite width: this column is a flex item with items-center, so
            without it the column shrink-to-fits around its widest child and the
            max-w-md list below ends up setting the page width instead of obeying it. */}
        <div className="flex w-100% flex-col items-center justify-center pt-14 sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% xl:pt-12 2xl:w-50% 2xl:pt-0">
          <Slide triggerOnce direction="right">
            <h1 className="primary-heading justify-self-center text-center">
              {dict.contact.title}
            </h1>
            <p className="tertiary-text justify-self-center py-1 text-center">
              {dict.contact.intro}
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
              <Link
                href="https://www.upwork.com/freelancers/~01604935e54f0437cf"
                passHref={true}
                target="_blank"
              >
                <SocialIconBadge bgcolor={'#14A800'}>
                  <UpworkSVG />
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
            <dl className="mx-auto mt-6 w-full max-w-md divide-y divide-secondary-bg-color rounded-lg border border-secondary-bg-color bg-card-bg-color">
              {CONTACT_FACTS.map(({ term, value }) => (
                <div
                  key={term}
                  className="flex flex-row items-baseline gap-4 px-5 py-3 sm:flex-col sm:items-start sm:gap-1"
                >
                  <dt className="tertiary-text w-[88px] shrink-0 font-medium opacity-60">{term}</dt>
                  <dd className="tertiary-text">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="secondary-text mt-10 text-center">{dict.contact.reachOutTitle}</h2>
            <ul className="mx-auto mt-3 flex w-full max-w-md flex-col gap-3">
              {REACH_OUT_ABOUT.map((topic) => (
                <li key={topic} className="tertiary-text flex flex-row gap-3 text-start">
                  {/* Decorative: a bullet, not a word to be read out before every item. */}
                  <span aria-hidden="true" className="shrink-0 leading-relaxed">
                    ⚡
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <p className="tertiary-text mt-6 text-center">{dict.contact.emailNote}</p>

            {/* Email stays the primary action and keeps the filled treatment;
                booking sits beside it as an outline, so the two read as a
                choice rather than competing for the same emphasis. */}
            <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-3">
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-GoogleSans-Regular block max-w-max cursor-pointer rounded-md bg-text-color px-6 py-3 text-center font-sans text-lg font-medium leading-tight tracking-wide text-main-bg-color no-underline transition-transform duration-300 hover:scale-105"
              >
                {dict.contact.cta}
              </Link>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="font-GoogleSans-Regular block max-w-max cursor-pointer rounded-md border border-text-color px-6 py-3 text-center font-sans text-lg font-medium leading-tight tracking-wide text-text-color no-underline transition-transform duration-300 hover:scale-105"
              >
                {dict.contact.bookCall}
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactView;

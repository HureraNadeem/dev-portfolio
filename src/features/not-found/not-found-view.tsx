'use client';

import Link from 'next/link';
import { Slide } from 'react-awesome-reveal';

import NotFoundIllustration from '@/components/icons/not-found-illustration';
import Wrapper from '@/components/layout/wrapper';
import { ROUTES } from '@/config/site';
import { localePath, type Locale } from '@/config/i18n';
import type { Dictionary } from '@/dictionaries';

/**
 * A dead end should still offer a way out, so alongside the primary "home" call
 * to action we list the real sections of the site. Home is already the primary
 * action, so it does not need repeating here.
 */
const SUGGESTED_ROUTES = ROUTES.filter(({ href }) => href !== '/');

function NotFoundView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const navLabel: Record<string, string> = {
    '/education': dict.nav.education,
    '/experience': dict.nav.experience,
    '/projects': dict.nav.projects,
    '/contact': dict.nav.contact,
  };

  return (
    <Wrapper>
      <div className="flex flex-row items-center justify-around bg-main-bg-color py-7 sm:flex-col sm:px-0 sm:py-5 md:flex-col md:px-0 md:py-5 lg:flex-col lg:px-0 lg:py-5 xl:gap-5 2xl:gap-5">
        <Slide
          triggerOnce
          direction="left"
          className="svg-div flex w-100% flex-col items-center justify-center xl:w-50% 2xl:w-50%"
        >
          <div className="notfound-illustration">
            <NotFoundIllustration />
          </div>
        </Slide>

        <div className="flex flex-col items-center justify-center pt-14 sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% xl:pt-12 2xl:w-50% 2xl:pt-0">
          <Slide triggerOnce direction="right">
            {/* Decorative: the <h1> below already carries the meaning, and the
                document title states the error for assistive tech. */}
            <p
              aria-hidden="true"
              className="font-AgustinaRegular select-none text-center text-55px leading-none text-text-color opacity-40 sm:text-40px"
            >
              {dict.notFound.eyebrow}
            </p>

            <h1 className="primary-heading text-center">{dict.notFound.title}</h1>

            <p className="tertiary-text py-1 text-center">{dict.notFound.body}</p>

            <div className="flex flex-row justify-center sm:justify-center md:justify-center">
              <Link
                href={localePath(locale, '/')}
                className="font-GoogleSans-Regular mt-6 block max-w-max rounded-md bg-text-color px-6 py-3 text-center text-lg font-medium leading-tight tracking-wide text-main-bg-color no-underline transition-transform duration-500 hover:scale-105 sm:text-16px md:text-17px"
              >
                {dict.notFound.cta}
              </Link>
            </div>

            <p className="tertiary-text mb-2 mt-8 text-center opacity-70">
              {dict.notFound.suggestionsLabel}
            </p>
            <nav aria-label={dict.notFound.suggestedPages}>
              <ul className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {SUGGESTED_ROUTES.map(({ href }) => (
                  <li key={href}>
                    <Link
                      href={localePath(locale, href)}
                      className="tertiary-text underline decoration-1 underline-offset-4 opacity-80 transition-opacity duration-300 hover:opacity-100"
                    >
                      {navLabel[href] ?? href}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Slide>
        </div>
      </div>
    </Wrapper>
  );
}

export default NotFoundView;

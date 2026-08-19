'use client'

import Link from 'next/link'
import { Slide } from 'react-awesome-reveal'

import NotFoundIllustration from '@/components/icons/not-found-illustration'
import Wrapper from '@/components/layout/wrapper'
import { ROUTES } from '@/config/site'

/**
 * A dead end should still offer a way out, so alongside the primary "home" call
 * to action we list the real sections of the site. Home is already the primary
 * action, so it does not need repeating here.
 */
const SUGGESTED_ROUTES = ROUTES.filter(({ href }) => href !== '/')

function NotFoundView() {
  return (
    <Wrapper>
      <div className="py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-center bg-main-bg-color xl:gap-5 2xl:gap-5">
        <Slide
          triggerOnce
          direction="left"
          className="svg-div w-100% xl:w-50% 2xl:w-50% flex flex-col items-center justify-center"
        >
          <div className="notfound-illustration">
            <NotFoundIllustration />
          </div>
        </Slide>

        <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
          <Slide triggerOnce direction="right">
            {/* Decorative: the <h1> below already carries the meaning, and the
                document title states the error for assistive tech. */}
            <p
              aria-hidden="true"
              className="font-AgustinaRegular text-center text-55px sm:text-40px leading-none text-text-color opacity-40 select-none"
            >
              404
            </p>

            <h1 className="primary-heading text-center">This page is just hangin&apos; around</h1>

            <p className="tertiary-text text-center py-1">
              Which is a fun way of saying it doesn&apos;t exist. Either the link
              is broken, or I moved something and forgot to leave a forwarding
              address. Either way - nothing to see here. 🙃
            </p>

            <div className="flex flex-row justify-center sm:justify-center md:justify-center">
              <Link
                href="/"
                className="bg-text-color text-main-bg-color font-GoogleSans-Regular font-medium leading-tight max-w-max px-6 py-3 rounded-md text-center no-underline block mt-6 text-lg sm:text-16px md:text-17px tracking-wide transition-transform duration-500 hover:scale-105"
              >
                Take me home 🏠
              </Link>
            </div>

            <p className="tertiary-text text-center mt-8 mb-2 opacity-70">
              Or pick up where you meant to go:
            </p>
            <nav aria-label="Suggested pages">
              <ul className="flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2">
                {SUGGESTED_ROUTES.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="tertiary-text underline underline-offset-4 decoration-1 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Slide>
        </div>
      </div>
    </Wrapper>
  )
}

export default NotFoundView

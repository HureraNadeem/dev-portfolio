'use client';

import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/config/site';
import { localePath, type Locale } from '@/config/i18n';
import type { Dictionary } from '@/dictionaries';
import LanguageSwitcher from './language-switcher';

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();

  /** Nav labels come from the dictionary; ROUTES stays the single list of paths. */
  const navLabel = (href: string) =>
    ({
      '/': dict.nav.home,
      '/education': dict.nav.education,
      '/experience': dict.nav.experience,
      '/projects': dict.nav.projects,
      '/contact': dict.nav.contact,
    })[href] ?? href;

  const [dropDownOpen, setDropDownOpen] = React.useState<boolean>(false);

  const toggleDropdown = () => {
    setDropDownOpen((prev) => !prev);
  };

  const isActive = (path: string) => pathname === localePath(locale, path);

  return (
    <>
      <nav className="navbar flex h-28 flex-row items-center justify-between bg-main-bg-color py-2 sm:hidden md:hidden lg:px-14 xl:px-24 2xl:px-36">
        <div className="logo-div">
          <Link href={localePath(locale, '/')}>
            <span className="underline lg:text-xl xl:text-2xl 2xl:text-3xl">&lt;</span>
            <span className="font-AgustinaRegular pl-1 pr-1 underline lg:text-xl xl:text-2xl 2xl:text-3xl">
              {' '}
              Hurera Nadeem{' '}
            </span>
            <span className="underline lg:text-xl xl:text-2xl 2xl:text-3xl">/&gt;</span>
          </Link>
        </div>
        <div className="nav-links div">
          <ul className="flex flex-row items-center justify-around lg:gap-5 xl:gap-7 2xl:gap-11">
            {ROUTES.map(({ href }) => (
              <Link key={href} href={localePath(locale, href)}>
                <li
                  className={`lg:text-16px xl:text-18px 2xl:text-19px ${isActive(href) ? styles.activeLink : ''} ${styles.underlineTransition}`}
                >
                  {navLabel(href)}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <LanguageSwitcher locale={locale} label={dict.common.languageLabel} />
      </nav>

      <nav className="navbar flex flex-col bg-main-bg-color py-10 sm:px-10 md:px-10 lg:hidden xl:hidden 2xl:hidden">
        <div className="logo-div flex flex-row items-center justify-between">
          <div className="logo-div-1">
            <Link href={localePath(locale, '/')}>
              <span className="underline sm:text-xl md:text-2xl">&lt;</span>
              <span className="font-AgustinaRegular pl-1 pr-1 underline sm:text-xl md:text-2xl">
                {' '}
                Hurera Nadeem{' '}
              </span>
              <span className="underline sm:text-xl md:text-2xl">/&gt;</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label={dict.common.toggleMenu}
            aria-expanded={dropDownOpen}
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon style={{ fontSize: '25px' }} icon={dropDownOpen ? faTimes : faBars} />
          </button>
        </div>
        <div
          style={{
            maxHeight: dropDownOpen ? '1000px' : '0',
            transition: 'max-height 0.7s ease-in-out',
            overflow: 'hidden',
          }}
          className="nav-links mt-5"
        >
          <ul className="flex flex-col items-start justify-around">
            {ROUTES.map(({ href }) => (
              <Link
                key={href}
                href={localePath(locale, href)}
                onClick={() => setDropDownOpen(false)}
              >
                <li
                  className={`sm:text-17px md:text-17px ${isActive(href) ? styles.activeLink : ''} ${styles.underlineTransition}`}
                >
                  {navLabel(href)}
                </li>
              </Link>
            ))}
          </ul>
          <LanguageSwitcher locale={locale} label={dict.common.languageLabel} className="mt-4" />
        </div>
      </nav>
    </>
  );
}

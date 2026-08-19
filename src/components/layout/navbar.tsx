'use client'

import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/config/site'

export default function Navbar() {
  const pathname = usePathname()

  const [dropDownOpen, setDropDownOpen] = React.useState<boolean>(false)

  const toggleDropdown = () => {
    setDropDownOpen((prev) => !prev)
  }

  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav className="sm:hidden md:hidden navbar py-2 lg:px-14 xl:px-24 2xl:px-36 h-28 flex flex-row items-center justify-between bg-main-bg-color">
        <div className="logo-div">
          <Link href="/">
            <span className="lg:text-xl xl:text-2xl 2xl:text-3xl underline">&lt;</span>
            <span className="font-AgustinaRegular lg:text-xl xl:text-2xl 2xl:text-3xl pr-1 pl-1 underline"> Hurera Nadeem </span>
            <span className="lg:text-xl xl:text-2xl 2xl:text-3xl underline">/&gt;</span>
          </Link>
        </div>
        <div className="nav-links div">
          <ul className="flex flex-row items-center justify-around lg:gap-5 xl:gap-7 2xl:gap-11">
            {ROUTES.map(({ href, label }) => (
              <Link key={href} href={href}>
                <li className={`lg:text-16px xl:text-18px 2xl:text-19px ${isActive(href) ? styles.activeLink : ''} ${styles.underlineTransition}`}>
                  {label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      <nav className="lg:hidden xl:hidden 2xl:hidden navbar py-10 sm:px-10 md:px-10 flex flex-col bg-main-bg-color">
        <div className="logo-div flex flex-row items-center justify-between">
          <div className="logo-div-1">
            <Link href="/">
              <span className="sm:text-xl md:text-2xl underline">&lt;</span>
              <span className="font-AgustinaRegular sm:text-xl md:text-2xl pr-1 pl-1 underline"> Hurera Nadeem </span>
              <span className="sm:text-xl md:text-2xl underline">/&gt;</span>
            </Link>
          </div>

          <button type="button" aria-label="Toggle navigation menu" aria-expanded={dropDownOpen} onClick={toggleDropdown}>
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
            {ROUTES.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setDropDownOpen(false)}>
                <li className={`sm:text-17px md:text-17px ${isActive(href) ? styles.activeLink : ''} ${styles.underlineTransition}`}>
                  {label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function Navbar() {

    const router = useRouter();

    const [dropDownOpen, setDropDownOpen] = React.useState<boolean>(false);

    const toggleDropdown = () => {
        setDropDownOpen((prev) => !prev)
    }

    const activeLink = (path: string) => {
        return router.pathname === path ? 'activeLink' : '';
    };

    React.useEffect(() => {


    }, [])


    return (
        <>
            <nav className="sm:hidden md:hidden navbar py-2 lg:px-14 xl:px-24 2xl:px-36 h-28 flex flex-row items-center justify-between bg-main-bg-color">
                <div className="logo-div">
                    <Link href='/'>
                        <span className='lg:text-xl xl:text-2xl 2xl:text-3xl underline'>&lt;</span>
                        <span className='font-AgustinaRegular lg:text-xl xl:text-2xl 2xl:text-3xl pr-1 pl-1 underline'> Hurera Nadeem </span>
                        <span className='lg:text-xl xl:text-2xl 2xl:text-3xl underline'>/&gt;</span>
                    </Link>
                </div>
                <div className="nav-links div">
                    <ul className='flex flex-row items-center justify-around lg:gap-5 xl:gap-7 2xl:gap-11'>
                        <Link href="/">
                            <li className={`lg:text-16px xl:text-18px 2xl:text-19px ${activeLink('/') == "activeLink" ? styles.activeLink : ""} ${styles.underlineTransition}`}>Home</li>
                        </Link>
                        <Link href="/education">
                            <li className={`lg:text-16px xl:text-18px 2xl:text-19px ${activeLink('/education') == "activeLink" ? styles.activeLink : ""}  ${styles.underlineTransition}`}>Education</li>
                        </Link>
                        <Link href="/experience">
                            <li className={`lg:text-16px xl:text-18px 2xl:text-19px ${activeLink('/experience') == "activeLink" ? styles.activeLink : ""} ${styles.underlineTransition}`}>Experience</li>
                        </Link>
                        <Link href="/projects">
                            <li className={`lg:text-16px xl:text-18px 2xl:text-19px ${activeLink('/projects') == "activeLink" ? styles.activeLink : ""} ${styles.underlineTransition}`}>Projects</li>
                        </Link>
                        <Link href="/contact">
                            <li className={`lg:text-16px xl:text-18px 2xl:text-19px ${activeLink('/contact') == "activeLink" ? styles.activeLink : ""} ${styles.underlineTransition}`}>Contact Me</li>
                        </Link>
                    </ul>
                </div>
            </nav>

            <nav className="lg:hidden xl:hidden 2xl:hidden navbar py-10 sm:px-10 md:px-10 flex flex-col bg-main-bg-color">
                <div className="logo-div flex flex-row items-center justify-between">
                    <div className="logo-div-1">
                        <span className='sm:text-xl md:text-2xl underline'>&lt;</span>
                        <span className='font-AgustinaRegular sm:text-xl md:text-2xl pr-1 pl-1 underline'> Hurera Nadeem </span>
                        <span className='sm:text-xl md:text-2xl underline'>/&gt;</span>
                    </div>
                    {
                        dropDownOpen ? (
                            <span >
                                <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faTimes} onClick={toggleDropdown} />
                            </span>
                        ) : (
                            <span >
                                <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faBars} onClick={toggleDropdown} />
                            </span>
                        )
                    }

                </div>
                {
                    dropDownOpen && (
                        <div style={{
                            maxHeight: dropDownOpen ? '1000px' : '0',
                            transition: 'max-height 0.3s ease',
                            overflow: 'hidden',
                        }}
                            className="nav-links mt-5">
                            <ul className='flex flex-col items-start justify-around sm:gap-4 md:gap-4'>
                                <Link href="/">
                                    <li className='sm:text-17px md:text-17px'>Home</li>
                                </Link>
                                <Link href="/education">
                                    <li className='sm:text-17px md:text-17px'>Education</li>
                                </Link>
                                <Link href="/experience">
                                    <li className='sm:text-17px md:text-17px'>Experience</li>
                                </Link>
                                <Link href="/projects">
                                    <li className='sm:text-17px md:text-17px'>Projects</li>
                                </Link>
                                <Link href="/contact">
                                    <li className='sm:text-17px md:text-17px'>Contact Me</li>
                                </Link>
                            </ul>
                        </div>
                    )
                }

            </nav>

        </>
    )
}

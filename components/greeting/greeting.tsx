import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import styles from './greeting.module.css';

import React, { FC, ReactNode } from 'react';
import Wrapper from '../wrapper/wrapper';
import { GithubSVG, LinkedInSVG, InstagramSVG, TwitterSVG, FacebookSVG } from '@/public/assets/svgs/socials-svg';
import ProfilePicture from "@/public/assets/images/cropped-profile-pic.jpg"

interface SocialIconWrappperProps {
    children: ReactNode
    bgcolor: String
}

const SocialIconWrappper: FC<SocialIconWrappperProps> = ({ children, bgcolor }: SocialIconWrappperProps) => {
    return (
        <>
            <span style={{
                borderRadius: '2.6rem',
                cursor: 'pointer',
                fontSize: '1.3rem',
                lineHeight: '2.9rem',
                position: 'relative',
                textAlign: 'center',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none',
                width: '42px',
                height: '42px',
                margin: '0 5px 10px',
                backgroundColor: `${bgcolor}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {children}
            </span>
        </>
    );
}

export default function Greeting() {

    return (
        <>
            <Wrapper>
                <div className="header flex flex-row sm:flex-col-reverse md:flex-col-reverse justify-around items-center bg-main-bg-color">
                    <div className="info-div lg:w-50% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center">
                        <h1 className='primary-heading'>Wassup! this is Hurera</h1>
                        <h3 className='primary-text'>A Full-stack developer (MERN) 💻 - DevOps and Cloud Enthusiast ☁️</h3>
                        <div className="socials flex flex-row gap-1 mt-5 mb-4 sm:justify-center md:justify-center">
                            <Link href="https://github.com/HureraNadeem" passHref={true} target='_blank'>
                                <SocialIconWrappper bgcolor={"black"}>
                                    <GithubSVG />
                                </SocialIconWrappper>
                            </Link>
                            <Link href="https://www.linkedin.com/in/iamhurera/" passHref={true} target='_blank'>
                                <SocialIconWrappper bgcolor={"rgb(0, 119, 181)"}>
                                    <LinkedInSVG />
                                </SocialIconWrappper>
                            </Link>
                            <Link href="https://www.instagram.com/iamhurera/" passHref={true} target='_blank'>
                                <SocialIconWrappper bgcolor={"rgb(214,41,118)"}>
                                    <InstagramSVG />
                                </SocialIconWrappper>
                            </Link>
                            <Link href="https://twitter.com/iamhurera" passHref={true} target='_blank'>
                                <SocialIconWrappper bgcolor={"rgb(29, 161, 242)"}>
                                    <TwitterSVG />
                                </SocialIconWrappper>
                            </Link>
                            <Link href="https://www.facebook.com/iamhurera" passHref={true} target='_blank'>
                                <SocialIconWrappper bgcolor={"rgb(24, 119, 242)"}>
                                    <FacebookSVG />
                                </SocialIconWrappper>
                            </Link>
                        </div>
                        <div className={`resume-div bg-text-color text-main-bg-color font-GoogleSans-Regular ${styles.resumeButton}`}>
                            <Link href="/" className='font-GoogleSans-Regular'>
                                Resume 📄
                            </Link>
                        </div>

                    </div>
                    <div className="sm:mb-8 md:mb-8 lg:w-50% xl:w-50% 2xl:w-50% flex items-center justify-center">
                        <div className="img-div sm:w-80vw sm:h-80vw md:w-65vw md:h-65vw lg:w-432px lg:h-432px xl:w-432px xl:h-432px 2xl:w-432px 2xl:h-432px flex items-center">
                            <Image src={ProfilePicture} alt="hurera.jpeg" style={{ borderRadius: '50%' }} />
                        </div>
                    </div>
                </div>

            </Wrapper>
        </>

    )
}

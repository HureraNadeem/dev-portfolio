import Wrapper from '@/components/wrapper/wrapper';
import ContactPageSVG from '@/public/assets/svgs/contact-page-svg';
import React from 'react';
import Link from 'next/link';
import SocialIconWrappper from '@/components/social-media-icons-wrapper/social-media-icons-wrapper';
import { GithubSVG, LinkedInSVG, FacebookSVG, InstagramSVG, TwitterSVG } from '@/public/assets/svgs/socials-svg';
import Head from 'next/head';
import { Slide } from "react-awesome-reveal";


function Contact() {
    return (
        <>
            <Head>
                <title>Contact - Hurera</title>
                <meta name="description" content="This is the contact page of hurera'a dev portfolio." />
            </Head>
            <Wrapper>
                <div className="py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-start sm:items-center md:items-center lg:items-center bg-main-bg-color xl:gap-5 2xl:gap-5 2xl:justify-center 2xl:items-center pb-[18vh]">
                    <Slide triggerOnce direction="left" className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
                        <ContactPageSVG />
                    </Slide>
                    <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
                        <Slide triggerOnce direction="right">
                            <h4 className='primary-heading justify-self-center text-center'>Contact Me</h4>
                            <p className='tertiary-text justify-self-center text-center py-1'>I'm practically the social media version of Batman, always lurking in the shadows of every platform, ready to swoop in and save the day! So, whether you need some industry wizardry or a tech talk virtuoso, just reach out to me. Let's connect and sprinkle some laughter into the world of tech! 🤝</p>
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
                                {/* <Link href="https://twitter.com/iamhurera" passHref={true} target='_blank'>
                                    <SocialIconWrappper bgcolor={"rgb(29, 161, 242)"}>
                                        <TwitterSVG />
                                    </SocialIconWrappper>
                                </Link> */}
                                <Link href="https://www.facebook.com/iamhurera" passHref={true} target='_blank'>
                                    <SocialIconWrappper bgcolor={"rgb(24, 119, 242)"}>
                                        <FacebookSVG />
                                    </SocialIconWrappper>
                                </Link>
                            </div>
                            <div className={`resume-div bg-text-color text-main-bg-color font-GoogleSans-Regular font-medium leading-tight max-w-max px-6 py-3 mr-0 rounded-md text-center no-underline font-sans block mt-5 text-lg cursor-pointer tracking-wide`}>
                                <Link href='mailto:muhammadhureran8@gmail.com' className='font-GoogleSans-Regular'>
                                    Reach me via email 📧
                                </Link>
                            </div>
                        </Slide>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Contact
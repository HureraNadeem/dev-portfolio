import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import React from 'react';
import Meme from '@/public/assets/images/just_hangin_around.jpg'
import Wrapper from '@/components/wrapper/wrapper';
import Footer from '@/components/footer/footer';
import Link from 'next/link';
import Head from 'next/head';



function FourOhFour() {
    return (
        <>
            <Head>
                <title>404 - Hurera</title>
                <meta name="description" content="This is the 404 page of hurera'a dev portfolio." />
            </Head>
            <Wrapper>
                <div className='flex flex-col justify-start items-center h-screen min-h-[533px]'>

                    <p className='text-center secondary-heading underline'>404</p>
                    <p className='text-center tertiary-text'>Page not found</p>

                    <div className={`flex flex-row justify-center items-center`}>
                        <div className='bg-text-color text-main-bg-color font-GoogleSans-Regular font-medium leading-tight max-w-max px-6 py-3 mr-0 rounded-md text-center no-underline font-sans mt-5 text-lg cursor-pointer tracking-wide  hover:transform transition-transform duration-500 transform hover:scale-105'>
                            <Link href='/' className='font-GoogleSans-Regular flex flex-row gap-4 justify-center items-center'>
                                <span className='sm:text-[13px] md:text-[15px]'>Go back to Home Page</span>
                            </Link>
                        </div>
                    </div>
                    {/* <p className='text-center secondary-text underline'></p> */}
                    {/* <hr /> */}
                    <Image src={Meme} alt='just hangin around' className='2xl:w-[20vw] 2xl:h-[20vw] xl:w-[35vw] xl:h-[35vw] lg:w-[40vw] lg:h-[40vw] md:w-[55vw] md:h-[55vw]  sm:w-[55vw] sm:h-[55vw] mt-[5vh]' />
                </div>
            </Wrapper>

        </>
    )
}

export default FourOhFour
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/navbar'
import Greeting from '@/components/greeting/greeting'
import WhatIDo from '@/components/whatido/whatido'
import Footer from '@/components/footer/footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Hurera Nadeem</title>
        <meta name="description" content="This is the home page of hurera'a dev portfolio." />
      </Head>
      <Greeting />
      <WhatIDo />
    </>
  )
}

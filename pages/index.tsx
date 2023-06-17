import Head from 'next/head'
import { Inter } from 'next/font/google'
import Greeting from '@/components/greeting/greeting'
import WhatIDo from '@/components/whatido/whatido'

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

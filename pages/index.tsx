import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <div className=''>
        <h1 className="font-GoogleSans-Regular">hurera</h1>
        <h1 className='bg-main-bg-color text-text-color text-lg'>hey i am hurera</h1>

      </div> */}
      {/* <h1 className='sm:text-xs md:text-sm lg:text-lg'>Hellow i am hurera</h1> */}
      <Navbar />

    </>
  )
}

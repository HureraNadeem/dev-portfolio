import type { Metadata } from 'next'
import Greeting from '@/components/greeting/greeting'
import WhatIDo from '@/components/whatido/whatido'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './site-config'

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: 'Full-Stack Software Engineer',
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/assets/images/dp.png`,
  sameAs: [
    'https://github.com/HureraNadeem',
    'https://www.linkedin.com/in/iamhurera/',
    'https://www.instagram.com/iamhurera/',
    'https://www.facebook.com/iamhurera',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'DevOps',
    'Cloud Computing',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD is static, build-time data — safe to inline.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Greeting />
      <WhatIDo />
    </>
  )
}

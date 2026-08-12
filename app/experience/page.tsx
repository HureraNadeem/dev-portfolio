import type { Metadata } from 'next'
import ExperienceView from '@/components/views/experience-view'

const description =
  'Hurera Nadeem’s professional experience across full-stack engineering, ' +
  'product engineering and DevOps roles, plus community volunteering.'

export const metadata: Metadata = {
  title: 'Experience',
  description,
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience | Hurera Nadeem',
    description,
    url: '/experience',
  },
}

export default function ExperiencePage() {
  return <ExperienceView />
}

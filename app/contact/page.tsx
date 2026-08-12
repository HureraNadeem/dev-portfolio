import type { Metadata } from 'next'
import ContactView from '@/components/views/contact-view'

const description =
  'Get in touch with Hurera Nadeem — connect on GitHub, LinkedIn, Instagram ' +
  'and Facebook, or reach out via email.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Hurera Nadeem',
    description,
    url: '/contact',
  },
}

export default function ContactPage() {
  return <ContactView />
}

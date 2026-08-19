import type { Metadata } from 'next';
import JsonLd from '@/components/json-ld';
import ContactView from '@/features/contact/contact-view';
import { pageJsonLd } from '@/lib/structured-data';

const description =
  'Get in touch with Hurera Nadeem — connect on GitHub, LinkedIn, Instagram ' +
  'and Facebook, or reach out via email.';

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Hurera Nadeem',
    description,
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path: '/contact', name: 'Contact', description })} />
      <ContactView />
    </>
  );
}

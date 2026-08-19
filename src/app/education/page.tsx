import type { Metadata } from 'next';
import JsonLd from '@/components/json-ld';
import EducationView from '@/features/education/education-view';
import { pageJsonLd } from '@/lib/structured-data';

const description =
  'Hurera Nadeem’s education: a Bachelor’s in Software Engineering from ' +
  'NUST, Islamabad, plus online courses in React, Next.js, Node.js, TypeScript and ML.';

export const metadata: Metadata = {
  title: 'Education',
  description,
  alternates: { canonical: '/education' },
  openGraph: {
    title: 'Education | Hurera Nadeem',
    description,
    url: '/education',
  },
};

export default function EducationPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path: '/education', name: 'Education', description })} />
      <EducationView />
    </>
  );
}

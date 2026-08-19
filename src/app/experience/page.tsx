import type { Metadata } from 'next';
import JsonLd from '@/components/json-ld';
import ExperienceView from '@/features/experience/experience-view';
import { pageJsonLd } from '@/lib/structured-data';

const description =
  'Hurera Nadeem’s professional experience across full-stack engineering, ' +
  'product engineering and DevOps roles, plus community volunteering.';

export const metadata: Metadata = {
  title: 'Experience',
  description,
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience | Hurera Nadeem',
    description,
    url: '/experience',
  },
};

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path: '/experience', name: 'Experience', description })} />
      <ExperienceView />
    </>
  );
}

import type { Metadata } from 'next';
import JsonLd from '@/components/json-ld';
import ProjectsView from '@/features/projects/projects-view';
import { pageJsonLd } from '@/lib/structured-data';

const description =
  'A selection of Hurera Nadeem’s projects — AI SaaS platforms, workforce ' +
  'management tools and full-stack web/mobile apps built with Next.js, React and Node.js.';

export const metadata: Metadata = {
  title: 'Projects',
  description,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Hurera Nadeem',
    description,
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path: '/projects', name: 'Projects', description })} />
      <ProjectsView />
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/json-ld';
import { isLocale } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import ProjectsView from '@/features/projects/projects-view';
import { buildMetadata } from '@/lib/seo';
import { pageJsonLd } from '@/lib/structured-data';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: '/projects',
    title: meta.projects.title,
    description: meta.projects.description,
  });
}

export default async function ProjectsPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          locale: lang,
          path: '/projects',
          name: dict.meta.projects.title,
          description: dict.meta.projects.description,
        })}
      />
      <ProjectsView dict={dict} />
    </>
  );
}

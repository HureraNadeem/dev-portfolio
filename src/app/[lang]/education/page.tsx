import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/json-ld';
import { isLocale } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import EducationView from '@/features/education/education-view';
import { buildMetadata } from '@/lib/seo';
import { pageJsonLd } from '@/lib/structured-data';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: '/education',
    title: meta.education.title,
    description: meta.education.description,
  });
}

export default async function EducationPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          locale: lang,
          path: '/education',
          name: dict.meta.education.title,
          description: dict.meta.education.description,
        })}
      />
      <EducationView dict={dict} />
    </>
  );
}

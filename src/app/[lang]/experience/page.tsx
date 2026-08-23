import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/json-ld';
import { isLocale } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import ExperienceView from '@/features/experience/experience-view';
import { buildMetadata } from '@/lib/seo';
import { pageJsonLd } from '@/lib/structured-data';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: '/experience',
    title: meta.experience.title,
    description: meta.experience.description,
  });
}

export default async function ExperiencePage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          locale: lang,
          path: '/experience',
          name: dict.meta.experience.title,
          description: dict.meta.experience.description,
        })}
      />
      <ExperienceView dict={dict} />
    </>
  );
}

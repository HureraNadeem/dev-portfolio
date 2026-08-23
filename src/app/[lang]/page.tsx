import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/json-ld';
import { isLocale } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import Greeting from '@/features/home/greeting';
import WhatIDo from '@/features/home/what-i-do';
import { buildMetadata } from '@/lib/seo';
import { homeJsonLd } from '@/lib/structured-data';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: '/',
    title: meta.siteTitle,
    description: meta.siteDescription,
  });
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  return (
    <>
      <JsonLd data={homeJsonLd(lang, dict.meta.siteDescription)} />
      <Greeting dict={dict} />
      <WhatIDo dict={dict} />
    </>
  );
}

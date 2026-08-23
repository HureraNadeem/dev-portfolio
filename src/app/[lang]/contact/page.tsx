import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/json-ld';
import { isLocale } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import ContactView from '@/features/contact/contact-view';
import { buildMetadata } from '@/lib/seo';
import { pageJsonLd } from '@/lib/structured-data';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: '/contact',
    title: meta.contact.title,
    description: meta.contact.description,
  });
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          locale: lang,
          path: '/contact',
          name: dict.meta.contact.title,
          description: dict.meta.contact.description,
        })}
      />
      <ContactView dict={dict} />
    </>
  );
}

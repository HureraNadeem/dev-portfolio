import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { isLocale } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import NotFoundView from '@/features/not-found/not-found-view';

/**
 * A real, pre-rendered 404 page per locale.
 *
 * `not-found.tsx` alone is not enough for a static export: that boundary only
 * renders when something calls `notFound()`, and since `generateStaticParams`
 * only ever produces valid locales, nothing does — so the export fell back to
 * the framework's built-in 404. Netlify serves this page (with a real 404
 * status) for unmatched paths; see the catch-all in netlify.toml.
 */
type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  return {
    title: meta.notFound.title,
    description: meta.notFound.description,
    robots: { index: false, follow: false },
  };
}

export default async function NotFoundPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <NotFoundView dict={getDictionary(lang)} locale={lang} />;
}

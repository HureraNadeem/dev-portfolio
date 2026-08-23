import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { isLocale } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import NotFoundView from '@/features/not-found/not-found-view';

/**
 * The real 404 page, pre-rendered per locale.
 *
 * `not-found.tsx` alone is not enough for a static export: that boundary only
 * renders when something calls `notFound()`, and generateStaticParams only ever
 * produces valid locales, so nothing does. This is a normal route, so it is
 * actually built — and the build step copies the English one to /404.html,
 * which is the file every static host serves for a path it cannot match.
 *
 * A catch-all route cannot improve on this. With `output: export` the dev
 * server enforces the same rule as the export — every dynamic param must appear
 * in generateStaticParams — so a catch-all answers 500 rather than 404 for the
 * arbitrary paths it was meant to cover.
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

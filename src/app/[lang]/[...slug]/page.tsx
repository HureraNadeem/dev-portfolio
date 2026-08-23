import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { DEFAULT_LOCALE, LOCALES, isLocale } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import NotFoundView from '@/features/not-found/not-found-view';

/**
 * The 404 page, and the catch-all that reaches it.
 *
 * `generateStaticParams` pins the one slug worth pre-rendering, /{lang}/404.
 * The build step copies the English one to /404.html, which is the file every
 * static host serves for a path it cannot match — that is what puts the real
 * 404 in front of visitors.
 *
 * The catch-all shape earns its keep in development, where it matches anything
 * unrecognised under a locale (/en/typo, /es/old-link) and renders this page
 * rather than the framework's default. Static segments take precedence, so it
 * never shadows a real route.
 *
 * A global app/not-found.tsx cannot do this: it renders into the root layout,
 * and the root layout is app/[lang]/layout.tsx because <html lang> and
 * <html dir> vary per locale. With nothing above it, Next answers 500.
 */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang, slug: ['404'] }));
}

type Props = { params: Promise<{ lang: string; slug?: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const { meta } = getDictionary(locale);

  return {
    title: meta.notFound.title,
    description: meta.notFound.description,
    robots: { index: false, follow: false },
  };
}

export default async function NotFoundPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;

  /*
   * Only /{lang}/404 renders as a page. Everything else the catch-all swallows
   * goes to the not-found boundary instead, so it answers 404 rather than 200 —
   * rendering it here directly would make every mistyped URL a soft 404, which
   * search engines treat as a real page worth indexing.
   */
  if (slug?.join('/') !== '404') notFound();

  return <NotFoundView dict={getDictionary(locale)} locale={locale} />;
}

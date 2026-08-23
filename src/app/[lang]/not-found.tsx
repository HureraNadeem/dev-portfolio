import type { Metadata } from 'next';

import { DEFAULT_LOCALE } from '@/config/i18n';
import { getDictionary } from '@/dictionaries';
import NotFoundView from '@/features/not-found/not-found-view';

/**
 * A not-found boundary cannot read route params — Next renders it outside the
 * matched segment — so it falls back to the default locale. The 404 is the one
 * page where that is acceptable: it is noindex, and the links it offers carry
 * the reader back into a real localised page.
 */
export const metadata: Metadata = {
  title: getDictionary(DEFAULT_LOCALE).meta.notFound.title,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const dict = getDictionary(DEFAULT_LOCALE);
  return <NotFoundView dict={dict} locale={DEFAULT_LOCALE} />;
}

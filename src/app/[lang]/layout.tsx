import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ScrollToTopButton from '@/components/layout/scroll-to-top-button';
import FontAwesomeConfig from '@/lib/fontawesome';
import { LOCALES, LOCALE_META, isLocale, type Locale } from '@/config/i18n';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/config/site';
import { getDictionary } from '@/dictionaries';
import { localeAlternates } from '@/lib/seo';
import { THEME_INIT_SCRIPT } from '@/lib/theme';

/**
 * This is the root layout — there is deliberately no `app/layout.tsx` above it.
 * `<html lang>` and `<html dir>` have to change per locale, and only a root
 * layout renders the `<html>` element, so the locale segment has to own it.
 */

type LayoutParams = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);
  const meta = LOCALE_META[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.siteTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: dict.meta.siteDescription,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    keywords: [
      'Hurera Nadeem',
      'Full-Stack Developer',
      'Software Engineer',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'MERN',
      'Portfolio',
    ],
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: localeAlternates('/'),
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      url: `${SITE_URL}/${lang}`,
      locale: meta.ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => LOCALE_META[l].ogLocale),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: { icon: '/favicon.ico' },
  };
}

export const viewport: Viewport = {
  themeColor: '#f5f5f5',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LayoutParams) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const { dir } = LOCALE_META[locale];

  return (
    <html lang={LOCALE_META[locale].htmlLang} dir={dir} suppressHydrationWarning>
      <head>
        {/* Blocking and inline on purpose — see THEME_INIT_SCRIPT. Anything
            deferred would paint the wrong palette first. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      {/*
        Sticky-footer shell. The page background only ever came from the navbar,
        each Wrapper and the footer, so a short page left the footer floating
        mid-screen above bare white. The body is a full-height flex column that
        paints the background itself, and <main> absorbs the unused space.
      */}
      <body suppressHydrationWarning className="flex min-h-screen flex-col bg-main-bg-color">
        <FontAwesomeConfig />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-text-color focus:px-4 focus:py-2 focus:text-main-bg-color"
        >
          {dict.common.skipToContent}
        </a>
        <Navbar locale={locale} dict={dict} />
        <main id="main-content" className="grow">
          {children}
        </main>
        <Footer dict={dict} />
        <ScrollToTopButton label={dict.common.scrollToTop} />
      </body>
    </html>
  );
}

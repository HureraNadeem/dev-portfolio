'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LOCALES, LOCALE_META, isLocale, localePath, type Locale } from '@/config/i18n';

/**
 * Switching language is a choice the reader makes, never something inferred
 * from their IP or Accept-Language header. Sniffing and redirecting would hide
 * the other versions from Googlebot, which crawls mostly from US addresses and
 * would only ever be shown English.
 *
 * Each option is a real `<a href>` to the same page in that locale, so crawlers
 * follow them and readers can open one in a new tab. Every label is written in
 * its own language — a switcher you cannot read is no use to the person who
 * needs it.
 */
export default function LanguageSwitcher({
  locale,
  label,
  className = '',
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  // `/es/education` -> `/education`, so the reader lands on the page they are
  // already reading rather than being dropped back at the home page.
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.length && isLocale(segments[0]) ? segments.slice(1) : segments;
  const currentPath = rest.length ? `/${rest.join('/')}` : '/';

  return (
    <nav aria-label={label} className={`flex flex-row items-center gap-2 ${className}`}>
      {LOCALES.map((option) => {
        const isCurrent = option === locale;
        return (
          <Link
            key={option}
            href={localePath(option, currentPath)}
            hrefLang={LOCALE_META[option].htmlLang}
            lang={LOCALE_META[option].htmlLang}
            aria-current={isCurrent ? 'true' : undefined}
            title={LOCALE_META[option].label}
            className={`rounded px-1.5 py-0.5 text-14px uppercase transition-opacity duration-200 ${
              isCurrent
                ? 'font-medium underline underline-offset-4'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            {option}
          </Link>
        );
      })}
    </nav>
  );
}

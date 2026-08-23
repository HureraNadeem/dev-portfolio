'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { LOCALES, LOCALE_META, isLocale, localePath, type Locale } from '@/config/i18n';

/**
 * Switching language is a choice the reader makes, never something inferred
 * from their IP or Accept-Language header. Sniffing and redirecting would hide
 * the other versions from Googlebot, which crawls mostly from US addresses and
 * would only ever be shown English.
 *
 * The menu holds real `<a href>` links that stay in the DOM whether it is open
 * or not — collapsed only visually — so crawlers still follow them and readers
 * can open one in a new tab. Each label is written in its own language, because
 * a switcher you cannot read is no use to the person who needs it.
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
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // `/es/education` -> `/education`, so switching keeps the reader on the page
  // they are already reading rather than dropping them at the home page.
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.length && isLocale(segments[0]) ? segments.slice(1) : segments;
  const currentPath = rest.length ? `/${rest.join('/')}` : '/';

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const current = LOCALE_META[locale];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((prev) => !prev)}
        className="flex flex-row items-center gap-1.5 rounded-full border border-line-color bg-secondary-bg-color px-2.5 py-[3px] text-14px transition-colors duration-200 hover:border-muted-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span aria-hidden="true" className="text-[13px] leading-none">
          {current.flag}
        </span>
        <span className="uppercase leading-none">{locale}</span>
        <svg
          width="9"
          height="9"
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* `end-0` rather than `right-0` so the panel hangs off the correct edge
          under RTL. Kept mounted and hidden so the links stay crawlable. */}
      <div
        role="menu"
        aria-label={label}
        hidden={!open}
        className="shadow-card absolute end-0 top-[calc(100%+8px)] z-50 min-w-[168px] overflow-hidden rounded-lg border border-line-color bg-card-bg-color py-1"
      >
        {LOCALES.map((option) => {
          const meta = LOCALE_META[option];
          const isCurrent = option === locale;
          return (
            <Link
              key={option}
              role="menuitem"
              href={localePath(option, currentPath)}
              hrefLang={meta.htmlLang}
              lang={meta.htmlLang}
              aria-current={isCurrent ? 'true' : undefined}
              onClick={() => setOpen(false)}
              className={`flex flex-row items-center gap-2.5 px-3 py-2 text-14px transition-colors duration-150 hover:bg-secondary-bg-color ${
                isCurrent ? 'font-medium' : 'opacity-75 hover:opacity-100'
              }`}
            >
              <span aria-hidden="true" className="text-[15px] leading-none">
                {meta.flag}
              </span>
              <span className="flex-1 text-start">{meta.label}</span>
              {isCurrent ? (
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path
                    d="M2.5 6.5 5 9l4.5-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

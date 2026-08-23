'use client';

import { useSyncExternalStore } from 'react';

import { getTheme, setTheme, subscribeToTheme, type Theme } from '@/lib/theme';

/**
 * A sliding pill rather than an icon that swaps in place: the track shows both
 * destinations at once, so the control reads as a switch with a position rather
 * than a button whose icon you have to interpret. It sits beside the language
 * switcher and borrows the same restrained styling.
 *
 * The knob's position is driven by Tailwind's `dark:` variant — which keys off
 * the `data-theme` attribute the pre-paint script has already set — rather than
 * by React state. That means it is already in the right place on the first
 * frame, instead of visibly sliding across once hydration catches up.
 *
 * React state is only needed for `aria-checked`, and it comes from
 * `useSyncExternalStore` because the source of truth is the DOM attribute, not
 * this component.
 */
export default function ThemeToggle({
  label,
  toLight,
  toDark,
}: {
  label: string;
  toLight: string;
  toDark: string;
}) {
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, getTheme, () => 'light');
  const isDark = theme === 'dark';
  const description = isDark ? toLight : toDark;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={description}
      title={description}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      suppressHydrationWarning
      className="group relative inline-flex h-[26px] w-[48px] shrink-0 items-center rounded-full border border-line-color bg-secondary-bg-color transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="sr-only">{label}</span>

      {/* Both destinations stay on the track; the one you are not on dims. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[6px] text-text-color opacity-0 transition-opacity duration-300 dark:opacity-40"
      >
        <SunIcon />
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[6px] text-text-color opacity-40 transition-opacity duration-300 dark:opacity-0"
      >
        <MoonIcon />
      </span>

      {/* Knob. The translate is mirrored under RTL so the switch always travels
          toward the direction the page reads. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute flex h-[20px] w-[20px] translate-x-[3px] items-center justify-center rounded-full bg-card-bg-color text-text-color shadow-sm transition-transform duration-300 ease-out rtl:-translate-x-[3px] dark:translate-x-[25px] dark:rtl:-translate-x-[25px]"
      >
        <span className="hidden dark:block">
          <MoonIcon />
        </span>
        <span className="block dark:hidden">
          <SunIcon />
        </span>
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="1.5"
          x2="12"
          y2="4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* A crescent described as one path so it stays crisp at 12px. */}
      <path
        d="M21 14.2A9 9 0 1 1 9.8 3 7.2 7.2 0 0 0 21 14.2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

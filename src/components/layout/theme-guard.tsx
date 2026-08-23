'use client';

import { useEffect, useLayoutEffect } from 'react';

import { getTheme, resolveTheme } from '@/lib/theme';

/**
 * Keeps `data-theme` on <html> once the pre-paint script has put it there.
 *
 * React removes it on every client-side navigation. The attribute is set
 * imperatively — by the inline script and by the toggle — so it is not among
 * the props React reconciles for <html>, and re-rendering the root layout (as
 * happens when the locale segment changes) drops it.
 *
 * The symptom is easy to miss because the page mostly still looks right: the
 * `prefers-color-scheme` fallback in globals.css keeps the palette, but every
 * Tailwind `dark:` utility keys off the attribute, so the toggle silently
 * flips to its light position while the page stays dark.
 *
 * A layout effect rather than a plain effect, so the attribute is restored
 * before the browser paints — otherwise a reader whose system is light but who
 * chose dark would see a white flash on every navigation.
 */
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function ThemeGuard() {
  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;

    const reassert = () => {
      if (root.dataset.theme !== getTheme()) root.dataset.theme = resolveTheme();
    };

    reassert();

    // Catches the removal itself, so this does not depend on knowing which
    // navigations re-render the layout.
    const observer = new MutationObserver(() => {
      if (!root.dataset.theme) root.dataset.theme = resolveTheme();
    });
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  });

  return null;
}

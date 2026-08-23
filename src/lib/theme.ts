export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

/**
 * Runs before the browser paints, injected into <head> in the root layout.
 *
 * This has to be a blocking inline script rather than a React effect: an effect
 * runs after first paint, so a reader who prefers dark would see a white page
 * flash first. Reading storage synchronously here puts the right palette in
 * place for the very first frame.
 *
 * It always stamps a resolved theme onto <html>, even when the reader has never
 * chosen one — Tailwind's `dark:` variant keys off that attribute, so leaving it
 * absent would give a dark page (via prefers-color-scheme) with light-mode
 * `dark:` utilities. The *choice* is still only recorded in localStorage, which
 * is what the OS listener below checks before following a system change.
 */
export const THEME_INIT_SCRIPT = `(function(){try{
var k=${JSON.stringify(THEME_STORAGE_KEY)};
var s=localStorage.getItem(k);
var t=(s==='dark'||s==='light')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
document.documentElement.dataset.theme=t;
}catch(e){document.documentElement.dataset.theme='light';}})();`;

/**
 * What the theme *should* be: an explicit choice if one was made, otherwise the
 * operating system's preference. Never reads the DOM, so it stays correct even
 * when the attribute has gone missing.
 */
export function resolveTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // Storage unavailable — fall through to the system preference.
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * The theme currently applied to the document.
 *
 * Falls back to `resolveTheme()` when the attribute is absent rather than
 * assuming light: React drops `data-theme` from <html> whenever it re-renders
 * the root layout, because the attribute is set imperatively and so is not one
 * of the props it is reconciling.
 */
export function getTheme(): Theme {
  const applied = document.documentElement.dataset.theme;
  if (applied === 'dark' || applied === 'light') return applied;
  return resolveTheme();
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). The theme
    // still applies to this page view, it just is not remembered.
  }
}

/**
 * Subscribe to theme changes — both our own writes and the OS flipping while
 * the page is open, which should only be followed if the reader has not made
 * an explicit choice.
 */
export function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const onSystemChange = (event: MediaQueryListEvent) => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      // treated as "no choice recorded"
    }
    if (stored === 'dark' || stored === 'light') return;
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
  };
  media.addEventListener('change', onSystemChange);

  return () => {
    observer.disconnect();
    media.removeEventListener('change', onSystemChange);
  };
}

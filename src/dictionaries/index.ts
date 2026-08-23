import type { Locale } from '@/config/i18n';
import type { Dictionary } from './types';

import ar from './ar';
import en from './en';
import es from './es';
import fr from './fr';

/**
 * Static import rather than `import()` per locale: the whole site is
 * pre-rendered at build time, so there is no runtime win from splitting the
 * dictionaries, and a static map keeps `getDictionary` synchronous — which in
 * turn keeps every page component synchronous.
 */
const DICTIONARIES: Record<Locale, Dictionary> = { en, es, fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary } from './types';

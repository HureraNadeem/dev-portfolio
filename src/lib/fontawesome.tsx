'use client';

import { config } from '@fortawesome/fontawesome-svg-core';

// The Font Awesome core CSS is imported once in the root layout, so stop the
// library from injecting it again at runtime (which causes icon flicker).
config.autoAddCss = false;

export default function FontAwesomeConfig() {
  return null;
}

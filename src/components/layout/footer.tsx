import Link from 'next/link';
import type { Dictionary } from '@/dictionaries';

/**
 * The heart is a placeholder in the translated string rather than a literal
 * character, because an emoji cannot be recoloured with CSS — a black heart
 * stays black on a dark background. Swapping the glyph is the only way to make
 * it follow the theme, and the placeholder keeps the surrounding word order
 * intact in every language (Arabic, for one, puts "by" on the other side).
 */
function Footer({ dict }: { dict: Dictionary }) {
  const [before, after] = dict.common.madeWith.split('{heart}');

  return (
    <footer className="tertiary-text bg-main-bg-color py-3 text-center">
      {before}
      <span className="dark:hidden" aria-hidden="true">
        🖤
      </span>
      <span className="hidden dark:inline" aria-hidden="true">
        🤍
      </span>
      {after}{' '}
      <span className="tertiary-text underline">
        <Link href="https://www.linkedin.com/in/iamhurera/" passHref={true} target="_blank">
          Hurera
        </Link>
      </span>
    </footer>
  );
}

export default Footer;

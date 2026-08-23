import Link from 'next/link';
import type { Dictionary } from '@/dictionaries';

function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="tertiary-text bg-main-bg-color py-3 text-center">
      {dict.common.madeWith}{' '}
      <span className="tertiary-text underline">
        <Link href="https://www.linkedin.com/in/iamhurera/" passHref={true} target="_blank">
          Hurera
        </Link>
      </span>
    </footer>
  );
}

export default Footer;

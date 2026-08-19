import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className="tertiary-text bg-main-bg-color py-3 text-center">
        {'Made with 🖤 by '}
        <span className="tertiary-text underline">
          <Link href="https://www.linkedin.com/in/iamhurera/" passHref={true} target="_blank">
            Hurera
          </Link>
        </span>
      </footer>
    </>
  );
}

export default Footer;

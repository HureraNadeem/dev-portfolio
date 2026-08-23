'use client';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

const ScrollToTopButton = ({ label }: { label: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={scrollToTop}
      className={`font-GoogleSans-Regular fixed bottom-12 right-12 mr-0 mt-5 block max-w-max cursor-pointer rounded-md bg-text-color px-6 py-3 text-center font-sans text-lg font-medium leading-tight tracking-wide text-main-bg-color no-underline opacity-90 hover:opacity-100 sm:bottom-4 sm:right-4 sm:px-4 sm:py-2 md:bottom-5 md:right-5 md:px-4 md:py-2 rtl:left-12 rtl:right-auto sm:rtl:left-4 sm:rtl:right-auto md:rtl:left-5 md:rtl:right-auto`}
    >
      {/* Scroll To Top */}
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;

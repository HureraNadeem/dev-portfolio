import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
        <button onClick={scrollToTop} className={`fixed bottom-12 right-12 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 bg-text-color text-main-bg-color font-GoogleSans-Regular font-medium leading-tight max-w-max px-6 py-3 sm:px-4 sm:py-2 md:px-4 md:py-2  mr-0 rounded-md text-center no-underline font-sans block mt-5 text-lg cursor-pointer tracking-wide opacity-90 hover:opacity-100`}>

            {/* Scroll To Top */}
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default ScrollToTopButton;

import React, { useEffect, useState } from 'react';

const SlideInOnVisible = ({ children, direction, id }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(id);
            if (!element) return;

            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll); // Remove listener after visibility is set
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [id]);

    const slideInClass = direction === 'left' ? 'slide-in-left' : direction === 'right' ? 'slide-in-right' : 'slide-in-top';


    return (
        <div id={id} className={`slide-in ${slideInClass} ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default SlideInOnVisible;

import React, { useState, useEffect } from 'react';
import './FloatingButton.css'; // Import your CSS or styling file

function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`floating-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ^
    </button>
  );
}

export default FloatingButton;

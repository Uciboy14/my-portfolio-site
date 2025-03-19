import React, { useState, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";

const ArrowUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-[#1ab394] text-white px-[16px] py-[18px] rounded-full shadow-lg transition-all duration-300 hover:bg-[#0c9b7e] focus:outline-none ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ArrowUpButton
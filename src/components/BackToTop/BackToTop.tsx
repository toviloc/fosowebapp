import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-blue-300 text-white rounded-full shadow-lg transition cursor-pointer
      ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <Image
        src='/assets/startPage.svg'
        alt="Example image"
        width={30}
        height={36}
        className='rounded-[24px]'
      />
    </button>
  );
}

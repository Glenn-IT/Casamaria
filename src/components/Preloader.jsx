import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete, subtitle = "BEACHFRONT VILLA" }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F5F2] transition-opacity duration-700 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src="./img/Logo.jpg"
          alt="Casa Maria Logo"
          className="w-24 h-24 rounded-full object-cover border-2 border-[#D7C7AE]/60 shadow-lg mb-5 animate-pulse"
        />
        <h1 className="text-4xl md:text-5xl font-serif text-[#2F3A33] tracking-wide mb-2">
          Casa Maria
        </h1>
        <span className="text-[10px] md:text-xs font-semibold tracking-[0.35em] text-[#586B5A] uppercase mb-6">
          {subtitle}
        </span>
        <div className="w-28 h-[2px] bg-[#EAE2D5] overflow-hidden rounded-full">
          <div className="w-full h-full bg-[#586B5A] animate-pulse origin-left"></div>
        </div>
      </div>
    </div>
  );
}

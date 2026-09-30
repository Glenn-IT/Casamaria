import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="relative max-h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <span className="text-[10px] uppercase tracking-widest text-[#D7C7AE] font-semibold">
            {image.category}
          </span>
          <h3 className="text-xl font-serif mt-1 font-medium">{image.title}</h3>
        </div>
      </div>
    </div>
  );
}

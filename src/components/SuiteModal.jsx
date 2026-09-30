import React, { useEffect } from 'react';
import { X, Check, Maximize2, Users, Bed, Sparkles, ArrowRight } from 'lucide-react';

export default function SuiteModal({ suite, onClose, onBookSuite }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!suite) return null;

  const features = [
    "180° Panoramic Adriatic Sea View",
    "Private cantilevered terrace & outdoor sun loungers",
    "Italian marble bathroom with rain shower & soaking tub",
    "Complimentary daily gourmet breakfast prepared by private chef",
    "24/7 dedicated butler & concierge service",
    "Ultra-high-speed fiber Wi-Fi & Bang & Olufsen sound system",
    "Daily evening turn-down service with organic lavender amenities"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative bg-[#F7F5F2] w-full max-w-3xl rounded-[26px] overflow-hidden shadow-2xl border border-white/60 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-300">
          <img
            src={suite.image}
            alt={suite.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] font-bold tracking-widest text-[#D7C7AE] uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm inline-block mb-2">
              {suite.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold">
              {suite.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-[#2F3A33]/5 mb-6 text-center">
            <div>
              <span className="block text-[11px] text-[#586B5A] uppercase tracking-wider">Area</span>
              <strong className="block text-sm sm:text-base font-serif text-[#2F3A33]">{suite.sqm}</strong>
            </div>
            <div>
              <span className="block text-[11px] text-[#586B5A] uppercase tracking-wider">Guests</span>
              <strong className="block text-sm sm:text-base font-serif text-[#2F3A33]">{suite.capacity}</strong>
            </div>
            <div>
              <span className="block text-[11px] text-[#586B5A] uppercase tracking-wider">Rate</span>
              <strong className="block text-sm sm:text-base font-serif text-[#586B5A] font-bold">{suite.price}</strong>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#2D2D2D]/80 leading-relaxed font-light mb-6">
            {suite.desc}
          </p>

          {/* Key Amenities */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F3A33] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Suite Inclusions & Amenities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#2D2D2D]/80">
                  <Check className="w-3.5 h-3.5 text-[#586B5A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#2F3A33]/10">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-[#2D2D2D] hover:bg-black/5 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookSuite(suite);
              }}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#2F3A33] hover:bg-[#586B5A] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>Reserve This Suite</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#EFECE6] border-y border-[#2F3A33]/5">
      <div className="w-[92%] max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: FAQ Intro */}
        <div className="lg:col-span-5">
          <span className="block text-[11px] font-semibold tracking-[0.25em] text-[#586B5A] uppercase mb-4">
            {data.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F3A33] leading-tight mb-5">
            {data.title}
          </h2>
          <p className="text-base text-[#2D2D2D]/80 leading-relaxed font-light">
            {data.description}
          </p>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-[18px] border border-[#2F3A33]/5 overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-[#2F3A33] hover:text-[#586B5A] transition-colors"
                >
                  <span className="font-medium pr-2">{item.q}</span>
                  <div className="w-8 h-8 rounded-full bg-[#F7F5F2] flex items-center justify-center shrink-0 text-[#2F3A33]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#2D2D2D]/75 leading-relaxed font-light border-t border-[#F7F5F2] animate-fadeIn">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

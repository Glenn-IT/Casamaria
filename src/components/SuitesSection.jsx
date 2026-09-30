import React from 'react';
import { Maximize2, Users, ArrowRight } from 'lucide-react';

export default function SuitesSection({ headerData, suites, onSelectSuite }) {
  return (
    <section id="suites" className="py-24 md:py-32 bg-[#F7F5F2]">
      <div className="w-[92%] max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="block text-[11px] font-semibold tracking-[0.25em] text-[#586B5A] uppercase mb-4">
            {headerData.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F3A33] leading-tight mb-5">
            {headerData.title}
          </h2>
          <p className="text-base text-[#2D2D2D]/80 leading-relaxed font-light">
            {headerData.description}
          </p>
        </div>

        {/* 6-Card Grid matching casamaria structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suites.map((suite) => (
            <article
              key={suite.number}
              onClick={() => onSelectSuite(suite)}
              className="group bg-white rounded-[22px] p-6 md:p-7 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-[#2F3A33]/5 hover:border-[#586B5A]/30 hover:shadow-[0_25px_60px_rgba(47,58,51,0.12)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Preview with Hover Zoom */}
                <div className="relative w-full h-52 overflow-hidden rounded-[16px] mb-6 bg-stone-100">
                  <img
                    src={suite.image}
                    alt={suite.title}
                    className="w-full h-full object-cover img-zoom transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#2F3A33]/80 backdrop-blur-md text-[#EEE4D5] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                    {suite.tag}
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#2F3A33] flex items-center justify-center font-serif text-sm font-semibold shadow-sm">
                    {suite.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-[#2F3A33] group-hover:text-[#586B5A] transition-colors mb-3">
                  {suite.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#2D2D2D]/75 leading-relaxed font-light mb-6 line-clamp-3">
                  {suite.desc}
                </p>
              </div>

              {/* Card Meta & Action Footer */}
              <div className="pt-4 border-t border-[#2F3A33]/10 flex items-center justify-between text-xs text-[#2F3A33]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#586B5A]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{suite.sqm}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#586B5A]">
                    <Users className="w-3.5 h-3.5" />
                    <span>{suite.capacity}</span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#2F3A33] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>{suite.price}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#586B5A]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

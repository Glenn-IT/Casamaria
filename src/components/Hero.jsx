import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ data, onOpenBooking }) {
  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center bg-[#1F2B23] text-white overflow-hidden"
    >
      {/* Background Image with layered gradient overlays matching original site */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85')`,
        }}
      />
      {/* Top and horizontal directional gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2B23]/90 via-[#1F2B23]/60 to-[#1F2B23]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B23] via-transparent to-black/40" />

      {/* Main Hero Content */}
      <div className="relative z-10 w-[92%] max-w-[1240px] mx-auto pt-36 pb-20 md:pt-40 md:pb-24">
        {/* Eyebrow badge */}
        <div className="inline-block mb-6">
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#EEE4D5] uppercase bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
            {data.eyebrow}
          </span>
        </div>

        {/* Serif Headline with clamp scaling matching casamaria.online */}
        <h1 className="max-w-4xl text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.92] font-serif font-medium tracking-tight">
          <span className="block">{data.titleMain}</span>
          <span className="block text-[#D7C7AE] italic font-light">{data.titleSub}</span>
        </h1>

        {/* Hero narrative description */}
        <p className="max-w-xl mt-7 text-base md:text-lg leading-relaxed text-white/85 font-light">
          {data.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-9">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-[#2F3A33] hover:bg-[#D7C7AE] hover:text-[#1B241E] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
          >
            <span>{data.ctaPrimary}</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </button>

          <a
            href="#suites"
            className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-full text-xs font-bold tracking-wider uppercase border border-white/40 text-white hover:bg-white/15 hover:border-white transition-all duration-300 backdrop-blur-sm"
          >
            {data.ctaSecondary}
          </a>
        </div>

        {/* 3-Column Highlights Row at bottom of Hero matching casamaria layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-16 md:mt-24 pt-8 border-t border-white/20">
          {data.highlights.map((item, idx) => (
            <div key={idx} className="pr-4 border-l-2 md:border-l-0 pl-3 md:pl-0 border-[#D7C7AE]/50">
              <strong className="block font-serif text-xl font-medium text-[#EEE4D5] mb-1">
                {item.title}
              </strong>
              <span className="block text-xs md:text-sm text-white/70 leading-snug">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

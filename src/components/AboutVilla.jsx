import React from 'react';
import { Award, Compass, ShieldCheck, Waves } from 'lucide-react';

export default function AboutVilla({ data }) {
  const icons = [Waves, ShieldCheck, Compass, Award];

  return (
    <section id="o-nama" className="py-24 md:py-32 bg-[#EFECE6] border-y border-[#2F3A33]/5">
      <div className="w-[92%] max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with architectural framing & badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[26px] overflow-hidden shadow-2xl border-4 border-white/60 aspect-[4/5] bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
              alt="Casa Maria Beachfront Villa Architecture"
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating Architectural Badge */}
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-[0_20px_45px_rgba(47,58,51,0.15)] border border-[#D7C7AE]/60 max-w-[220px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2F3A33] text-[#EEE4D5] flex items-center justify-center font-serif text-lg font-bold">
                5★
              </div>
              <div>
                <strong className="block text-xs font-serif text-[#2F3A33]">
                  Private Sanctuary
                </strong>
                <span className="text-[10px] text-[#586B5A] tracking-wider uppercase">
                  Montenegro Coast
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative and 4 Numbered Points */}
        <div className="lg:col-span-7">
          <span className="block text-[11px] font-semibold tracking-[0.25em] text-[#586B5A] uppercase mb-4">
            {data.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F3A33] leading-tight mb-6">
            {data.title}
          </h2>
          <p className="text-base text-[#2D2D2D]/80 leading-relaxed font-light mb-10">
            {data.description}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#2F3A33]/5 mb-10">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <span className="block text-2xl font-serif font-bold text-[#2F3A33]">
                  {stat.value}
                </span>
                <span className="block text-[11px] uppercase tracking-wider text-[#586B5A] mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* 4 Numbered Feature Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.points.map((point, index) => {
              const IconComp = icons[index % icons.length];
              return (
                <article key={point.num} className="flex gap-4">
                  <span className="font-serif text-2xl font-bold text-[#C5A880] leading-none shrink-0 w-8">
                    {point.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-serif text-[#2F3A33] font-semibold mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed font-light">
                      {point.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

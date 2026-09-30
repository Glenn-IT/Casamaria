import React from 'react';
import { CalendarCheck, Compass, Sparkles } from 'lucide-react';

export default function ExperienceProcess({ data }) {
  const stepIcons = [CalendarCheck, Compass, Sparkles];

  return (
    <section id="proces" className="py-24 md:py-32 bg-[#F7F5F2]">
      <div className="w-[92%] max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
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

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <article
                key={step.num}
                className="relative bg-white rounded-[22px] p-8 md:p-9 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-[#2F3A33]/5 hover:border-[#586B5A]/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl font-bold text-[#C5A880] group-hover:text-[#586B5A] transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#F7F5F2] text-[#2F3A33] flex items-center justify-center group-hover:bg-[#2F3A33] group-hover:text-[#EEE4D5] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-serif text-[#2F3A33] font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#2D2D2D]/75 leading-relaxed font-light">
                  {step.desc}
                </p>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#EAE2D5] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-full bg-[#586B5A]"></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

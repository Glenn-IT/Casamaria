import React from 'react';
import { ShieldCheck, HeartHandshake, Gem, Clock } from 'lucide-react';

export default function PromisesSection({ data }) {
  const promiseIcons = [ShieldCheck, HeartHandshake, Gem, Clock];

  return (
    <section className="py-24 md:py-32 bg-[#F7F5F2] border-t border-[#2F3A33]/5">
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

        {/* 4 Promise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, idx) => {
            const Icon = promiseIcons[idx % promiseIcons.length];
            return (
              <article
                key={idx}
                className="bg-white rounded-[22px] p-7 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-[#2F3A33]/5 hover:border-[#586B5A]/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#EFECE6] text-[#586B5A] flex items-center justify-center mb-5 group-hover:bg-[#2F3A33] group-hover:text-[#EEE4D5] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif text-[#2F3A33] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D2D2D]/75 leading-relaxed font-light">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

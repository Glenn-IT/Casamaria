import React, { useState } from 'react';
import { Expand, Sparkles } from 'lucide-react';

export default function GallerySection({ headerData, images, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Pool & Deck', 'Suites', 'Beach', 'Living', 'Outdoor'];

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const initialLimit = 6;
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, initialLimit);

  return (
    <section id="galerija" className="py-24 md:py-32 bg-[#EFECE6]">
      <div className="w-[92%] max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="block text-[11px] font-semibold tracking-[0.25em] text-[#586B5A] uppercase mb-4">
            {headerData.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F3A33] leading-tight mb-5">
            {headerData.title}
          </h2>
          <p className="text-base text-[#2D2D2D]/80 leading-relaxed font-light">
            {headerData.description}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-[#2F3A33] text-white shadow-sm'
                    : 'bg-white/70 text-[#2F3A33] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with dynamic tall/wide spans matching casamaria style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {displayedImages.map((img, idx) => {
            const isTall = img.span === 'tall';
            const isWide = img.span === 'wide';

            return (
              <figure
                key={img.id || idx}
                onClick={() => onOpenLightbox(img)}
                className={`group relative overflow-hidden rounded-[20px] bg-stone-300 shadow-md cursor-pointer ${
                  isTall ? 'sm:row-span-2' : ''
                } ${isWide ? 'lg:col-span-2' : ''}`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover img-zoom transition-transform duration-700"
                  loading="lazy"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D7C7AE]">
                        {img.category}
                      </span>
                      <h4 className="text-lg font-serif font-medium text-white">
                        {img.title}
                      </h4>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Expand className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>

        {/* View More Button */}
        {filteredImages.length > initialLimit && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center min-h-[50px] px-8 rounded-full text-xs font-bold tracking-wider uppercase border border-[#2F3A33] text-[#2F3A33] hover:bg-[#2F3A33] hover:text-white transition-all duration-300"
            >
              {showAll ? 'Show Fewer Spaces' : 'View More Spaces'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles } from 'lucide-react';

export default function Navbar({ navLinks, brand, contentMode, onToggleMode, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F5F2]/95 backdrop-blur-md py-3 shadow-[0_10px_35px_rgba(47,58,51,0.08)]'
          : 'bg-gradient-to-b from-black/40 via-black/10 to-transparent py-5 text-white'
      }`}
    >
      <div className="w-[92%] max-w-[1240px] mx-auto flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <a href="#pocetna" className="flex items-center gap-3 md:gap-3.5 group leading-none">
          <img
            src="./img/Logo.jpg"
            alt="Casa Maria Logo"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-[#D7C7AE]/60 shadow-sm shrink-0"
          />
          <div className="flex flex-col">
            <span
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors ${
                scrolled ? 'text-[#2F3A33]' : 'text-white'
              }`}
            >
              {brand.name}
            </span>
            <span
              className={`text-[8px] md:text-[9px] font-semibold tracking-[0.3em] uppercase mt-1 transition-colors ${
                scrolled ? 'text-[#586B5A]' : 'text-[#D7C7AE]'
              }`}
            >
              {brand.subtitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-[13px] font-medium tracking-wide transition-colors py-1 group ${
                scrolled
                  ? 'text-[#2F3A33] hover:text-[#586B5A]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-[#586B5A]' : 'bg-[#D7C7AE]'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Mode Switcher (Luxury / Lorem Ipsum) */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              scrolled
                ? 'border-[#586B5A]/30 text-[#2F3A33] bg-white/50'
                : 'border-white/30 text-white bg-black/20 backdrop-blur-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <button
              onClick={() => onToggleMode('villa')}
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all ${
                contentMode === 'villa'
                  ? 'text-[#2F3A33] bg-[#D7C7AE]'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              Villa
            </button>
            <span className="opacity-40">/</span>
            <button
              onClick={() => onToggleMode('lorem')}
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all ${
                contentMode === 'lorem'
                  ? 'text-[#2F3A33] bg-[#D7C7AE]'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              Lorem
            </button>
          </div>

          {/* Book / Request Quote CTA Button */}
          <button
            onClick={onOpenBooking}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              scrolled
                ? 'border border-[#2F3A33] text-[#2F3A33] hover:bg-[#2F3A33] hover:text-white'
                : 'bg-white text-[#2F3A33] hover:bg-[#D7C7AE] hover:text-[#1B241E] shadow-lg'
            }`}
          >
            {contentMode === 'villa' ? 'Book Your Stay' : 'Pete Reservationem'}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#2F3A33] hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#F7F5F2] border-b border-[#2F3A33]/10 shadow-2xl py-6 px-6 text-[#2F3A33] animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium hover:text-[#586B5A] py-1 border-b border-black/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#2F3A33] text-white rounded-full text-xs font-semibold uppercase tracking-wider text-center"
              >
                {contentMode === 'villa' ? 'Book Your Stay' : 'Pete Reservationem'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

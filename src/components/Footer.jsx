import React, { useState } from 'react';
import { ArrowUp, MessageCircle, Phone, Mail, MapPin, Shield, FileText, X } from 'lucide-react';

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Footer({ brand, navLinks, contact }) {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2B23] text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="w-[92%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <a href="#pocetna" className="inline-flex items-center gap-3.5 mb-6 leading-none">
            <img
              src="./img/Logo.png"
              alt="Casa Maria Logo"
              className="w-12 h-12 rounded-full object-cover border border-[#D7C7AE]/50 shadow-md shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-white tracking-wide">
                {brand.name}
              </span>
              <span className="text-[9px] font-semibold tracking-[0.35em] uppercase text-[#D7C7AE] mt-1.5">
                {brand.subtitle}
              </span>
            </div>
          </a>
          <p className="text-sm text-white/70 leading-relaxed font-light max-w-sm mb-6">
            A private beach villa retreat in Barangay Amunitan, Gonzaga, Cagayan. Designed for those who value absolute peace, exclusivity, and effortless coastal tranquility.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#D7C7AE]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Capacity: 8 to 16 Guests • 4 Bedrooms</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="lg:col-span-2">
          <h3 className="font-serif text-lg text-[#EEE4D5] font-semibold mb-5">
            Navigation
          </h3>
          <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Policies Column */}
        <div className="lg:col-span-3">
          <h3 className="font-serif text-lg text-[#EEE4D5] font-semibold mb-5">
            Policies & Information
          </h3>
          <ul className="space-y-3 text-xs text-white/75 font-light">
            <li>
              <button
                type="button"
                onClick={() => setActiveModal('privacy')}
                className="hover:text-white transition-colors text-left flex items-center gap-2 cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-[#D7C7AE]" />
                <span>Privacy & Guest Data Policy</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setActiveModal('terms')}
                className="hover:text-white transition-colors text-left flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#D7C7AE]" />
                <span>Stay Terms & House Rules</span>
              </button>
            </li>
            <li>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
                title="AI & Agent Factsheet"
              >
                <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-[#D7C7AE]">TXT</span>
                <span>AI & LLM Documentation (llms.txt)</span>
              </a>
            </li>
            <li>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2 text-white/50"
              >
                <span>XML Sitemap</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-3">
          <h3 className="font-serif text-lg text-[#EEE4D5] font-semibold mb-5">
            Contact & Inquiries
          </h3>
          <ul className="space-y-3 text-xs text-white/75 font-light">
            <li className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-[#D7C7AE]" />
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-[#D7C7AE]" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#D7C7AE] shrink-0 mt-0.5" />
              <a
                href={contact.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Open in Google Maps"
              >
                {contact.location}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            {contact.facebook && (
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-[#D7C7AE] hover:text-[#1F2B23] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={contact.instagramLink || "https://www.instagram.com/casamariabeachvilla"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-[#D7C7AE] hover:text-[#1F2B23] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={contact.whatsappLink || `https://wa.me/${(contact.whatsappNumber || contact.whatsapp).replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-[#D7C7AE] hover:text-[#1F2B23] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-[92%] max-w-[1240px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <p>© 2026 Casa Maria Beach Villa (<a href="https://casamariaph.com" className="hover:text-white underline underline-offset-2">casamariaph.com</a>). All rights reserved.</p>

        <div className="flex items-center gap-4 text-white/60">
          <button
            type="button"
            onClick={() => setActiveModal('privacy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => setActiveModal('terms')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Stay Terms
          </button>
          <span>•</span>
          <a href="#kontakt" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Legal & Policies Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative bg-[#F7F5F2] text-[#2F3A33] w-full max-w-2xl rounded-[24px] p-6 sm:p-8 shadow-2xl border border-white/60 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#2F3A33] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'privacy' ? (
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#586B5A] uppercase bg-[#EFECE6] px-3 py-1 rounded-full">
                  Casa Maria Policy
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#2F3A33] font-semibold mt-3 mb-4">
                  Privacy & Guest Data Policy
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed font-light">
                  <p>
                    At Casa Maria Beach Villa, we value the trust and privacy of all our guests. This policy explains how we collect, handle, and protect your information when booking or inquiring about our private staycation villa in Barangay Amunitan, Gonzaga, Cagayan.
                  </p>
                  <h4 className="font-serif text-base font-semibold text-[#2F3A33] pt-2">
                    1. Information We Collect
                  </h4>
                  <p>
                    We collect personal details voluntarily provided by you, including your name, contact phone number, email address, preferred stay dates, and group size, exclusively to coordinate reservations and customize your stay.
                  </p>
                  <h4 className="font-serif text-base font-semibold text-[#2F3A33] pt-2">
                    2. Use of Information
                  </h4>
                  <p>
                    Your contact information is used strictly by our management and on-site caretakers to verify availability, send confirmations, and assist during your stay. We never sell, trade, or share your private data with third parties.
                  </p>
                  <h4 className="font-serif text-base font-semibold text-[#2F3A33] pt-2">
                    3. Contact Us
                  </h4>
                  <p>
                    For inquiries regarding our privacy practices, contact us directly at <a href="mailto:reservations@casamariaph.com" className="text-[#586B5A] font-semibold underline">reservations@casamariaph.com</a> or via phone at <strong>0956 019 3089</strong>.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#586B5A] uppercase bg-[#EFECE6] px-3 py-1 rounded-full">
                  Stay Guidelines
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#2F3A33] font-semibold mt-3 mb-4">
                  Stay Terms & House Guidelines
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed font-light">
                  <p>
                    Welcome to Casa Maria Beach Villa. To ensure an unforgettable, peaceful stay for your group and protect our coastal property, please review our standard house policies:
                  </p>
                  <h4 className="font-serif text-base font-semibold text-[#2F3A33] pt-2">
                    1. Capacity & Exclusive Buyout
                  </h4>
                  <p>
                    Casa Maria accommodates a maximum of <strong>8 to 16 guests</strong> across 4 private bedrooms (including 1 Master Suite). The compound is 100% exclusive to your party during your stay.
                  </p>
                  <h4 className="font-serif text-base font-semibold text-[#2F3A33] pt-2">
                    2. Check-in & Check-out Schedule
                  </h4>
                  <p>
                    Standard <strong>Check-in is at 2:00 PM</strong> and <strong>Check-out is at 12:00 PM (Noon)</strong>. Early arrival or late departure may be requested in advance and is subject to villa availability.
                  </p>
                  <h4 className="font-serif text-base font-semibold text-[#2F3A33] pt-2">
                    3. Smoking & Pool Safety
                  </h4>
                  <p>
                    Smoking is strictly prohibited inside the bedrooms and enclosed living salons; outdoor smoking areas in the garden are available. Children must be supervised around the swimming pools at all times.
                  </p>
                  <h4 className="font-serif text-base font-semibold text-[#2F3A33] pt-2">
                    4. Caretaker Assistance
                  </h4>
                  <p>
                    Our dedicated on-site caretakers are available throughout your stay for gate access, housekeeping, and immediate assistance.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[#2F3A33]/10 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 bg-[#2F3A33] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#586B5A] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

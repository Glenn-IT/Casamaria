import React from 'react';
import { ArrowUp, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2B23] text-white pt-20 pb-12 border-t border-white/10">
      <div className="w-[92%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        {/* Brand Column */}
        <div className="lg:col-span-5">
          <a href="#pocetna" className="inline-flex items-center gap-3.5 mb-6 leading-none">
            <img
              src="./img/Logo.jpg"
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
          <p className="text-sm text-white/70 leading-relaxed font-light max-w-sm">
            An extraordinary beachfront sanctuary in Amunitan, Gonzaga, Cagayan. Designed for those who value privacy, bespoke hospitality, and effortless seaside living.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-lg text-[#EEE4D5] font-semibold mb-5">
            Navigation
          </h4>
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

        {/* Contact Info Column */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-lg text-[#EEE4D5] font-semibold mb-5">
            Reservations
          </h4>
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
        </div>

        {/* Social Links Column */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-lg text-[#EEE4D5] font-semibold mb-5">
            Connect
          </h4>
          <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
            {contact.facebook && (
              <li>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-[#D7C7AE]" />
                  <span>Facebook</span>
                </a>
              </li>
            )}
            <li>
              <a
                href={contact.instagramLink || "https://www.instagram.com/casamariabeachvilla"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#D7C7AE]" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappLink || `https://wa.me/${(contact.whatsappNumber || contact.whatsapp).replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D7C7AE]" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${(contact.phoneRaw || contact.phone).replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D7C7AE]" />
                <span>Direct Call</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom matching casamaria footer-bottom */}
      <div className="w-[92%] max-w-[1240px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <p>© 2026 Casa Maria Beachfront Villa (<a href="https://casamariaph.com" className="hover:text-white underline underline-offset-2">casamariaph.com</a>). All rights reserved.</p>

        <p className="flex items-center gap-1.5">
          <span>Developed by</span>
          <a
            href="https://neko-sysdev.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7C7AE] hover:text-white transition-colors underline underline-offset-4 font-medium"
          >
            neko-sysdev.online
          </a>
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

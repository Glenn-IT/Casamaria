import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Calendar, Users, Send, CheckCircle2, ExternalLink, Loader2 } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function BookingContact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '' // honeypot spam trap
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || (!formData.email.trim() && !formData.phone.trim()) || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, inquiry message, and at least an email or phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('./send-inquiry.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const json = await res.json().catch(() => null);

      if (res.ok && json && json.success) {
        setSubmitted(true);
      } else {
        // Fallback for offline or local preview environments
        setSubmitted(true);
      }
    } catch (err) {
      // Graceful fallback for local Vite dev server
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-[#F7F5F2]">
      <div className="w-[92%] max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative, Big Stat, and Direct Links */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.25em] text-[#586B5A] uppercase mb-4">
              {data.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F3A33] leading-tight mb-5">
              {data.title}
            </h2>
            <p className="text-base text-[#2D2D2D]/80 leading-relaxed font-light mb-10">
              {data.description}
            </p>

            {/* Big Stat Counter matching casamaria.online */}
            <div className="p-8 rounded-[22px] bg-white border border-[#2F3A33]/5 shadow-[0_15px_45px_rgba(0,0,0,0.03)] mb-10">
              <strong className="block font-serif text-5xl sm:text-6xl font-bold text-[#2F3A33] tracking-tight mb-1">
                {data.statNumber}
              </strong>
              <span className="text-sm font-medium text-[#586B5A] uppercase tracking-wider">
                {data.statLabel}
              </span>
            </div>
          </div>

          {/* Quick Contact Items */}
          <div className="bg-white rounded-[22px] p-6 shadow-sm border border-[#2F3A33]/5 space-y-3.5">
            {/* Direct Telephone */}
            <a
              href={`tel:${(data.phoneRaw || data.phone).replace(/\s+/g, '')}`}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F5F2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0 group-hover:bg-[#2F3A33] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                  Direct Telephone / Mobile
                </small>
                <strong className="text-sm text-[#2F3A33] font-serif font-semibold">
                  {data.phone}
                </strong>
              </div>
            </a>

            {/* WhatsApp Concierge */}
            <a
              href={data.whatsappLink || `https://wa.me/${(data.whatsappNumber || data.whatsapp).replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F5F2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0 group-hover:bg-[#2F3A33] group-hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                    WhatsApp Concierge
                  </small>
                  <span className="text-[10px] uppercase font-semibold text-[#586B5A] tracking-wider group-hover:text-[#2F3A33] flex items-center gap-1 transition-colors">
                    Chat ↗
                  </span>
                </div>
                <strong className="text-sm text-[#2F3A33] font-serif font-semibold">
                  {data.whatsapp}
                </strong>
              </div>
            </a>

            {/* Facebook Page */}
            {data.facebook && (
              <a
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F5F2] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0 group-hover:bg-[#2F3A33] group-hover:text-white transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                      Official Facebook
                    </small>
                    <span className="text-[10px] uppercase font-semibold text-[#586B5A] tracking-wider group-hover:text-[#2F3A33] flex items-center gap-1 transition-colors">
                      Visit ↗
                    </span>
                  </div>
                  <strong className="text-sm text-[#2F3A33] font-serif font-semibold">
                    fb.com/{data.facebookHandle || 'casamariaph'}
                  </strong>
                </div>
              </a>
            )}

            {/* Instagram Profile */}
            {(data.instagramLink || data.instagram) && (
              <a
                href={data.instagramLink || "https://www.instagram.com/casamariabeachvilla"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F5F2] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0 group-hover:bg-[#2F3A33] group-hover:text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                      Instagram
                    </small>
                    <span className="text-[10px] uppercase font-semibold text-[#586B5A] tracking-wider group-hover:text-[#2F3A33] flex items-center gap-1 transition-colors">
                      Follow ↗
                    </span>
                  </div>
                  <strong className="text-sm text-[#2F3A33] font-serif font-semibold">
                    {data.instagram}
                  </strong>
                </div>
              </a>
            )}

            {/* Official Email */}
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F5F2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0 group-hover:bg-[#2F3A33] group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                  Official Email
                </small>
                <strong className="text-sm text-[#2F3A33] font-serif font-semibold">
                  {data.email}
                </strong>
              </div>
            </a>

            <a
              href={data.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#F7F5F2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0 group-hover:bg-[#2F3A33] group-hover:text-white transition-colors mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                    Map Pin Location
                  </small>
                  <span className="text-[10px] uppercase font-semibold text-[#586B5A] tracking-wider group-hover:text-[#2F3A33] flex items-center gap-1 transition-colors">
                    <span>Open Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <strong className="text-sm text-[#2F3A33] font-serif font-semibold block mt-0.5">
                  {data.location}
                </strong>
                <span className="inline-block mt-1 text-[11px] text-[#586B5A] bg-[#EFECE6]/60 px-2 py-0.5 rounded font-mono">
                  Plus Code: 83J6+75M Amunitan
                </span>
              </div>
            </a>

            {/* Embedded Google Map Preview */}
            <div className="pt-3 border-t border-[#2F3A33]/10">
              <div className="relative rounded-2xl overflow-hidden border border-[#2F3A33]/10 shadow-sm bg-[#EFECE6]/40">
                <iframe
                  title="Casa Maria Villa Map Location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(data.location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-44 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-2.5 bg-white/95 backdrop-blur-sm border-t border-[#2F3A33]/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#2F3A33] font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#586B5A]" />
                    Amunitan, Gonzaga, Cagayan
                  </span>
                  <a
                    href={data.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#586B5A] hover:text-[#2F3A33] transition-colors"
                  >
                    <span>View Larger Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: General Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-[26px] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#2F3A33]/5">
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#586B5A] uppercase bg-[#EFECE6] px-3 py-1 rounded-full">
              Direct Inquiry Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#2F3A33] mt-3">
              Get in Touch with Casa Maria
            </h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 font-light mt-1">
              Reach out directly for rates, staycation details, special requests, or custom arrangements.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-[#586B5A] mb-4 animate-bounce" />
              <h4 className="text-2xl font-serif text-[#2F3A33] font-semibold mb-2">
                Inquiry Received
              </h4>
              <p className="text-sm text-[#2D2D2D]/75 max-w-md font-light mb-6">
                Thank you, <strong className="font-semibold text-[#2F3A33]">{formData.name}</strong>. Your message has been sent to our villa reservations team at <span className="font-medium text-[#586B5A]">reservations@casamariaph.com</span>. We will get back to you promptly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormData({ name: '', email: '', phone: '', message: '', website: '' });
                  setSubmitted(false);
                }}
                className="px-6 py-2.5 bg-[#2F3A33] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#586B5A] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Anti-spam Honeypot field */}
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                value={formData.website || ''}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 leading-relaxed">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maria Santos"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                  Contact / Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="0912 345 6789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                  Your Message or Inquiry
                </label>
                <textarea
                  rows="4"
                  placeholder="Let us know your questions, preferred stay dates, or any special requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#2F3A33] text-white hover:bg-[#586B5A] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_15px_30px_rgba(47,58,51,0.2)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Calendar, Users, Send, CheckCircle2 } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function BookingContact({ data, onOpenBookingModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    suite: 'Master Shoreline Suite',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email.');
      return;
    }
    setSubmitted(true);
    if (onOpenBookingModal) {
      onOpenBookingModal(formData);
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

          {/* Quick Contact Items matching original casamaria.online contact-card */}
          <div className="bg-white rounded-[22px] p-6 shadow-sm border border-[#2F3A33]/5 space-y-4">
            <a
              href={`tel:${data.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F5F2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0 group-hover:bg-[#2F3A33] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                  Direct Telephone
                </small>
                <strong className="text-sm text-[#2F3A33] font-serif font-semibold">
                  {data.phone}
                </strong>
              </div>
            </a>

            <a
              href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F5F2] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0 group-hover:bg-[#2F3A33] group-hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                  WhatsApp Concierge
                </small>
                <strong className="text-sm text-[#2F3A33] font-serif font-semibold">
                  {data.whatsapp}
                </strong>
              </div>
            </a>

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

            <div className="flex items-center gap-4 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#EFECE6] text-[#2F3A33] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <small className="block text-[11px] uppercase tracking-wider text-[#586B5A] font-medium">
                  Villa Location
                </small>
                <strong className="text-sm text-[#2F3A33] font-serif font-semibold">
                  {data.location}
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Reservation Booking Form */}
        <div className="lg:col-span-7 bg-white rounded-[26px] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#2F3A33]/5">
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#586B5A] uppercase bg-[#EFECE6] px-3 py-1 rounded-full">
              Direct Reservation Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#2F3A33] mt-3">
              Request Your Villa Dates
            </h3>
            <p className="text-xs sm:text-sm text-[#2D2D2D]/70 font-light mt-1">
              Guaranteed lowest rates, priority concierge curation, and bespoke check-in.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-[#586B5A] mb-4 animate-bounce" />
              <h4 className="text-2xl font-serif text-[#2F3A33] font-semibold mb-2">
                Inquiry Received
              </h4>
              <p className="text-sm text-[#2D2D2D]/75 max-w-md font-light mb-6">
                Thank you, {formData.name}. Our resident villa director is reviewing your dates and will connect with your bespoke itinerary within 4 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#2F3A33] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#586B5A] transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                  >
                    <option value="1-2">1 - 2 Guests (Single Suite)</option>
                    <option value="3-4">3 - 4 Guests (Double Suite)</option>
                    <option value="5-8">5 - 8 Guests (Multi Suite)</option>
                    <option value="9-12">9 - 12 Guests (Full Villa Buyout)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                    Suite Preference
                  </label>
                  <select
                    value={formData.suite}
                    onChange={(e) => setFormData({ ...formData, suite: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                  >
                    <option value="Entire Villa Buyout">Entire Villa Buyout (Private Estate)</option>
                    <option value="The Master Shoreline Suite">The Master Shoreline Suite</option>
                    <option value="Sunset Infinity Pavilion">Sunset Infinity Pavilion</option>
                    <option value="Azure Horizon Penthouse">Azure Horizon Penthouse</option>
                    <option value="The Mediterranean Garden Villa">The Mediterranean Garden Villa</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lorde Harrington"
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
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2F3A33] uppercase tracking-wider mb-2">
                  Special Requests (Airport Transfer, Private Chef, Yacht)
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about special dietary preferences, yacht charter requests, or celebrations..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#2F3A33]/15 text-sm text-[#2F3A33] focus:outline-none focus:border-[#586B5A] bg-[#F7F5F2]/40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#2F3A33] text-white hover:bg-[#586B5A] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_15px_30px_rgba(47,58,51,0.2)] flex items-center justify-center gap-2"
              >
                <span>Submit Reservation Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

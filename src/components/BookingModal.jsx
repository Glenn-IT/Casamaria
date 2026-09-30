import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, Users, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preselectedSuite }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    suite: preselectedSuite ? preselectedSuite.title : 'Entire Villa Buyout',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedSuite) {
      setFormData((prev) => ({ ...prev, suite: preselectedSuite.title }));
    }
  }, [preselectedSuite]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="relative bg-[#F7F5F2] w-full max-w-xl rounded-[26px] p-6 sm:p-8 shadow-2xl border border-white/60 my-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#2F3A33] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-[#586B5A] mb-4" />
            <h3 className="text-2xl font-serif text-[#2F3A33] font-semibold mb-2">
              Reservation Inquiry Sent
            </h3>
            <p className="text-sm text-[#2D2D2D]/75 max-w-md font-light mb-6">
              Thank you, {formData.name}! Our villa director will reach out via WhatsApp / Email with full availability, bespoke dining options, and deposit instructions.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 bg-[#2F3A33] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#586B5A] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#586B5A] uppercase bg-[#EFECE6] px-3 py-1 rounded-full">
                Concierge Booking Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#2F3A33] mt-2">
                Reserve Casa Maria
              </h3>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/70 font-light mt-1">
                Receive customized quotation and bespoke itinerary within 4 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#2F3A33] uppercase tracking-wider mb-1.5">
                    Check-in
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2F3A33]/15 text-sm bg-white focus:outline-none focus:border-[#586B5A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2F3A33] uppercase tracking-wider mb-1.5">
                    Check-out
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2F3A33]/15 text-sm bg-white focus:outline-none focus:border-[#586B5A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#2F3A33] uppercase tracking-wider mb-1.5">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2F3A33]/15 text-sm bg-white focus:outline-none focus:border-[#586B5A]"
                  >
                    <option value="1-2">1 - 2 Guests</option>
                    <option value="3-4">3 - 4 Guests</option>
                    <option value="5-8">5 - 8 Guests</option>
                    <option value="9-12">9 - 12 Guests (Full Villa)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2F3A33] uppercase tracking-wider mb-1.5">
                    Suite Option
                  </label>
                  <select
                    value={formData.suite}
                    onChange={(e) => setFormData({ ...formData, suite: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2F3A33]/15 text-sm bg-white focus:outline-none focus:border-[#586B5A]"
                  >
                    <option value="Entire Villa Buyout">Entire Villa Buyout (Private)</option>
                    <option value="The Master Shoreline Suite">The Master Shoreline Suite</option>
                    <option value="Sunset Infinity Pavilion">Sunset Infinity Pavilion</option>
                    <option value="Azure Horizon Penthouse">Azure Horizon Penthouse</option>
                    <option value="The Mediterranean Garden Villa">The Mediterranean Garden Villa</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#2F3A33] uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2F3A33]/15 text-sm bg-white focus:outline-none focus:border-[#586B5A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#2F3A33] uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2F3A33]/15 text-sm bg-white focus:outline-none focus:border-[#586B5A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2F3A33] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+382 ... / +1 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2F3A33]/15 text-sm bg-white focus:outline-none focus:border-[#586B5A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#2F3A33] uppercase tracking-wider mb-1.5">
                  Preferences & Special Inquiries
                </label>
                <textarea
                  rows="2"
                  placeholder="Yacht tender, private chef requests, arrival time..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2F3A33]/15 text-sm bg-white focus:outline-none focus:border-[#586B5A]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-full bg-[#2F3A33] text-white hover:bg-[#586B5A] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Booking Confirmation</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

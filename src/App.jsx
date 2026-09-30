import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SuitesSection from './components/SuitesSection';
import AboutVilla from './components/AboutVilla';
import ExperienceProcess from './components/ExperienceProcess';
import GallerySection from './components/GallerySection';
import PromisesSection from './components/PromisesSection';
import FaqSection from './components/FaqSection';
import BookingContact from './components/BookingContact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import SuiteModal from './components/SuiteModal';
import BookingModal from './components/BookingModal';

import { villaContent } from './data/villaData';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [contentMode, setContentMode] = useState('villa'); // 'villa' or 'lorem'
  const [selectedSuite, setSelectedSuite] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreselectedSuite, setBookingPreselectedSuite] = useState(null);

  const activeData = villaContent[contentMode];

  const handleOpenBooking = (suite = null) => {
    setBookingPreselectedSuite(suite);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#2D2D2D] selection:bg-[#586B5A] selection:text-white font-sans antialiased relative">
      {/* Opening Preloader */}
      {loading && (
        <Preloader
          subtitle={activeData.brand.subtitle}
          onComplete={() => setLoading(false)}
        />
      )}

      {/* Navigation Header */}
      <Navbar
        navLinks={activeData.nav}
        brand={activeData.brand}
        contentMode={contentMode}
        onToggleMode={(mode) => setContentMode(mode)}
        onOpenBooking={() => handleOpenBooking(null)}
      />

      {/* Hero Section */}
      <Hero
        data={activeData.hero}
        onOpenBooking={() => handleOpenBooking(null)}
      />

      {/* Suites & Accommodations Section (Services equivalent) */}
      <SuitesSection
        headerData={activeData.suitesSection}
        suites={activeData.suites}
        onSelectSuite={(suite) => setSelectedSuite(suite)}
      />

      {/* About Casa Maria Section (Why Us equivalent) */}
      <AboutVilla data={activeData.about} />

      {/* Experience & Guest Journey Section (How it works equivalent) */}
      <ExperienceProcess data={activeData.process} />

      {/* Curated Visual Gallery Section */}
      <GallerySection
        headerData={activeData.gallery}
        images={activeData.galleryImages}
        onOpenLightbox={(img) => setLightboxImage(img)}
      />

      {/* Guarantees & Promises Section */}
      <PromisesSection data={activeData.promises} />

      {/* FAQ Accordion Section */}
      <FaqSection data={activeData.faq} />

      {/* Booking & Contact Section */}
      <BookingContact
        data={activeData.contact}
        onOpenBookingModal={(data) => {
          setBookingPreselectedSuite({ title: data.suite });
          setBookingModalOpen(true);
        }}
      />

      {/* Footer */}
      <Footer
        brand={activeData.brand}
        navLinks={activeData.nav}
        contact={activeData.contact}
      />

      {/* Modals */}
      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <SuiteModal
        suite={selectedSuite}
        onClose={() => setSelectedSuite(null)}
        onBookSuite={(suite) => handleOpenBooking(suite)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setBookingPreselectedSuite(null);
        }}
        preselectedSuite={bookingPreselectedSuite}
      />
    </div>
  );
}

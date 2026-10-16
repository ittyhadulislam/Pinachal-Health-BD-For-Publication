import React, { useState } from 'react';
import Header from '../components/header/Header';
import HeroSlider from '../components/hero/HeroSlider';
import ApproachZigzag from '../components/approach/ApproachZigzag';
import PinnacleDental from '../components/dental/PinnacleDental';
import ServicesSection from '../components/services/ServicesSection';
import DoctorsSection from '../components/doctors/DoctorsSection';
import PackagesSection from '../components/packages/PackagesSection';
import LiveQueueBanner from '../components/live-queue/LiveQueueBanner';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import LocationSection from '../components/location/LocationSection';
import Footer from '../components/footer/Footer';
import AppointmentModal from '../components/modals/AppointmentModal';
import DiagnosticReportModal from '../components/modals/DiagnosticReportModal';
import AiSymptomModal from '../components/modals/AiSymptomModal';
import FloatingActions from '../components/floating/FloatingActions';

export default function HomePage() {
  const [lang, setLang] = useState('en');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isAiGuideOpen, setIsAiGuideOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState(null);
  const [preselectedPackage, setPreselectedPackage] = useState(null);

  const toggleLang = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleOpenAppointment = () => {
    setPreselectedDoctor(null);
    setPreselectedPackage(null);
    setIsAppointmentOpen(true);
  };

  const handleSelectDoctor = (doctor) => {
    setPreselectedDoctor(doctor);
    setPreselectedPackage(null);
    setIsAppointmentOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    setPreselectedPackage(pkg);
    setPreselectedDoctor(null);
    setIsAppointmentOpen(true);
  };

  const handleScrollToDoctors = () => {
    const el = document.getElementById('doctors');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#009688] selection:text-white">
      {/* 1. Header with Hotline & Language Switcher */}
      <Header
        lang={lang}
        onToggleLang={toggleLang}
        onOpenAppointment={handleOpenAppointment}
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onOpenAiGuide={() => setIsAiGuideOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Slider with Full-Width Transition & Floating Actions */}
        <HeroSlider
          lang={lang}
          onOpenAppointment={handleOpenAppointment}
          onOpenReportModal={() => setIsReportModalOpen(true)}
          onOpenAiGuide={() => setIsAiGuideOpen(true)}
          onScrollToDoctors={handleScrollToDoctors}
        />

        {/* 3. Live Chamber Queue Tracker Strip */}
        <LiveQueueBanner
          lang={lang}
          onOpenAppointment={handleOpenAppointment}
        />

        {/* 4. Our Approach (Zig-Zag reference design from user image) */}
        <ApproachZigzag
          lang={lang}
          onOpenAppointment={handleOpenAppointment}
          onOpenReportModal={() => setIsReportModalOpen(true)}
        />
        {/* 6. Comprehensive Clinical & Diagnostic Services */}
        <ServicesSection
          lang={lang}
          onOpenAppointment={handleOpenAppointment}
          onOpenReportModal={() => setIsReportModalOpen(true)}
        />

        {/* 5. Pinnacle Dental Special Section */}
        <PinnacleDental
          lang={lang}
          onOpenAppointment={handleOpenAppointment}
        />


        {/* 7. Senior Specialists & Live Chamber Timings */}
        <DoctorsSection
          lang={lang}
          onSelectDoctor={handleSelectDoctor}
          onOpenAppointment={handleOpenAppointment}
        />

        {/* 8. Health Packages & Overseas Visa Pre-Medical */}
        <PackagesSection
          lang={lang}
          onSelectPackage={handleSelectPackage}
          onOpenAppointment={handleOpenAppointment}
        />

        {/* 9. Verified Patient Reviews & Google 4.9 Rating */}
        <TestimonialsSection lang={lang} />

        {/* 10. Location, Interactive Map & Operating Hours */}
        <LocationSection
          lang={lang}
          onOpenAppointment={handleOpenAppointment}
        />
      </main>

      {/* 11. Dark Navy Footer */}
      <Footer
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onOpenAiGuide={() => setIsAiGuideOpen(true)}
      />

      {/* Floating Action Hub (WhatsApp, Call, AI Triage, Top) */}
      <FloatingActions
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
        onOpenAiGuide={() => setIsAiGuideOpen(true)}
      />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        lang={lang}
        preselectedDoctor={preselectedDoctor}
        preselectedPackage={preselectedPackage}
      />

      <DiagnosticReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        lang={lang}
      />

      <AiSymptomModal
        isOpen={isAiGuideOpen}
        onClose={() => setIsAiGuideOpen(false)}
        lang={lang}
        onSelectDoctor={handleSelectDoctor}
      />
    </div>
  );
}

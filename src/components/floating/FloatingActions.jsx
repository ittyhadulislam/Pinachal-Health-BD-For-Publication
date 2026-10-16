import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Sparkles, ArrowUp } from 'lucide-react';

export default function FloatingActions({
  lang,
  onOpenAppointment,
  onOpenAiGuide,
}) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white shadow-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <button
        onClick={onOpenAiGuide}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0B1E33] hover:bg-[#082846] text-white shadow-xl border border-teal-500/30 transition-all cursor-pointer hover:scale-105 group text-xs font-bold"
      >
        <Sparkles className="w-4 h-4 text-teal-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">
          {lang === 'bn' ? 'এআই লক্ষণ গাইড' : 'AI Symptom Guide'}
        </span>
      </button>

      <a
        href="https://api.whatsapp.com/send?phone=8801711002233&text=Hello%20Pinnacle%20Healthcare,%20I%20would%20like%20to%20inquire%20about%20an%20appointment"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl transition-all cursor-pointer hover:scale-105 text-xs font-bold"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <a
        href="tel:10620"
        className="sm:hidden w-12 h-12 rounded-full bg-[#009688] text-white shadow-xl flex items-center justify-center transition-all cursor-pointer"
        aria-label="Call Emergency Hotline"
      >
        <Phone className="w-5 h-5" />
      </a>
    </aside>
  );
}

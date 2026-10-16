import React, { useEffect } from 'react';
import { 
  X, 
  PhoneCall, 
  ListChecks,
  ExternalLink,
  Calendar,
  Stethoscope,
  CheckCircle2,
  Clock,
  Smile,
  FlaskConical,
  Globe,
  HeartPulse,
  Activity,
  Ambulance,
  Baby
} from 'lucide-react';

export default function ServiceDetailModal({ 
  isOpen, 
  onClose, 
  service, 
  lang, 
  onOpenAppointment,
  onViewFullDetails 
}) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const getServiceIcon = (iconName, className = "w-6 h-6 text-white") => {
    switch (iconName) {
      case 'Smile': return <Smile className={className} />;
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Stethoscope': return <Stethoscope className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Ambulance': return <Ambulance className={className} />;
      case 'Baby': return <Baby className={className} />;
      default: return <Stethoscope className={className} />;
    }
  };

  // Features fallback
  const features = lang === 'bn' 
    ? (service.featuresBn || service.features || [])
    : (service.features || []);

  const defaultFeatures = lang === 'bn' 
    ? [
        'অভিজ্ঞ বিশেষজ্ঞ চিকিৎসক দ্বারা পরামর্শ',
        'আধুনিক প্রযুক্তি ও মানসম্মত সেবা',
        'দ্রুত রিপোর্ট ও ফলো-আপ সুবিধা',
        'সাশ্রয়ী মূল্যে প্যাকেজ সুবিধা',
        '২৪/৭ জরুরি সহায়তা সেবা',
        'ডিজিটাল রেকর্ড ও অনলাইন অ্যাক্সেস'
      ]
    : [
        'Expert specialist consultation',
        'Modern technology & quality care',
        'Fast report delivery & follow-up',
        'Affordable package facilities',
        '24/7 emergency support',
        'Digital records & online access'
      ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B1E33] text-white px-5 sm:px-6 py-4 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#009688] flex items-center justify-center shrink-0">
              {getServiceIcon(service.iconName)}
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-[10px] font-bold uppercase tracking-wider text-teal-300 mb-1">
                {lang === 'bn' ? 'ক্লিনিক্যাল স্পেশালিটি ওভারভিউ' : 'Clinical Specialty Overview'}
              </span>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide leading-tight">
                {lang === 'bn' ? service.titleBn : service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          {/* Image Banner */}
          <div className="relative w-full h-44 sm:h-56 bg-gradient-to-br from-[#009688] to-[#0B1E33] overflow-hidden">
            {service.image ? (
              <img 
                src={service.image} 
                alt={lang === 'bn' ? service.titleBn : service.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm border border-white/30">
                      {getServiceIcon(service.iconName, "w-10 h-10 text-white")}
                    </div>
                    <p className="text-lg font-bold uppercase tracking-wider">
                      {lang === 'bn' ? service.titleBn : service.title}
                    </p>
                    <p className="text-xs text-teal-100 mt-1">
                      {lang === 'bn' ? 'আধুনিক প্রযুক্তি · অভিজ্ঞ বিশেষজ্ঞ · নির্ভরযোগ্য সেবা' : 'Modern Technology · Expert Specialists · Reliable Care'}
                    </p>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-2xl" />
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {lang === 'bn' 
                ? (service.detailedDescriptionBn || service.descriptionBn || service.subtitleBn)
                : (service.detailedDescription || service.description || service.subtitle)}
            </p>

            {/* Available Tests Box */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
              <div className="flex items-center gap-2 mb-4">
                <ListChecks className="w-4 h-4 text-[#009688]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1E33]">
                  {lang === 'bn' ? 'উপলব্ধ টেস্ট, পদ্ধতি ও ডায়াগনস্টিক সুবিধা:' : 'Available Tests, Procedures & Diagnostic Scope:'}
                </h4>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {displayFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#009688] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hotline Info Bar */}
            <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#0B1E33]">
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>
                  {lang === 'bn' ? '২৪/৭ ডায়াগনস্টিক ও পরামর্শ হটলাইন:' : '24/7 Diagnostic & Consultation Hotline:'}
                </span>
                <a href="tel:096399911" className="text-blue-700 hover:underline">096399911</a>
                <span className="text-slate-400">|</span>
                <a href="tel:01708800889" className="text-blue-700 hover:underline">01708800889</a>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-[10px] font-bold text-blue-700 uppercase tracking-wider whitespace-nowrap">
                <Clock className="w-3 h-3" />
                {lang === 'bn' ? 'একই দিনে অনলাইন রিপোর্ট' : 'Same-Day Online Report Delivery'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-white px-5 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all cursor-pointer"
          >
            {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>

          <button
            onClick={() => {
              onClose();
              if (onViewFullDetails) onViewFullDetails(service);
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'সম্পূর্ণ সেবার বিবরণ' : 'Full Service Details'}</span>
            <span>→</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenAppointment();
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট / টেস্ট বুক করুন' : 'Book Appointment / Test'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
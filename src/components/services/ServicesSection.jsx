// import React, { useState } from 'react';
// import { SERVICES_DATA } from '../../data/mockData';
// import { 
//   Smile, 
//   FlaskConical, 
//   Globe, 
//   Stethoscope, 
//   HeartPulse, 
//   Activity, 
//   Check, 
//   Calendar
// } from 'lucide-react';

// export default function ServicesSection({
//   lang,
//   onOpenAppointment,
//   onOpenReportModal,
// }) {
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const categories = [
//     { id: 'all', label: 'All Services', labelBn: 'সকল সেবা' },
//     { id: 'pathology', label: 'Pathology & Lab', labelBn: 'প্যাথলজি ও ল্যাব' },
//     { id: 'dental', label: 'Pinnacle Dental', labelBn: 'পিনাকল ডেন্টাল' },
//     { id: 'medicine', label: 'Medicine', labelBn: 'মেডিসিন' },
//     { id: 'gynae', label: 'Gynae & Obs', labelBn: 'গাইনী ও প্রসূতি' },
//     { id: 'overseas', label: 'Overseas Medical', labelBn: 'বিদেশগামী চেকআপ' },
//     { id: 'physio', label: 'Physiotherapy', labelBn: 'ফিজিওথেরাপি' },
//   ];

//   const filteredServices = selectedCategory === 'all'
//     ? SERVICES_DATA
//     : SERVICES_DATA.filter((s) => s.category === selectedCategory);

//   const getServiceIcon = (iconName) => {
//     switch (iconName) {
//       case 'Smile': return <Smile className="w-6 h-6 text-[#009688]" />;
//       case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-[#009688]" />;
//       case 'Globe': return <Globe className="w-6 h-6 text-[#009688]" />;
//       case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-[#009688]" />;
//       case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#009688]" />;
//       case 'Activity': return <Activity className="w-6 h-6 text-[#009688]" />;
//       default: return <Stethoscope className="w-6 h-6 text-[#009688]" />;
//     }
//   };

//   return (
//     <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center max-w-3xl mx-auto mb-10">
//           <span className="text-xs font-bold uppercase tracking-wider text-[#009688] mb-2 block">
//             {lang === 'bn' ? 'আমাদের বিশেষায়িত স্বাস্থ্যসেবা' : 'Our Comprehensive Clinical Services'}
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E33] tracking-tight mb-4">
//             {lang === 'bn' 
//               ? 'আন্তর্জাতিক মানের চিকিৎসা ও নির্ভুল ডায়াগনস্টিক' 
//               : 'Specialist Medical Chambers & Diagnostic Excellence'}
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600">
//             {lang === 'bn'
//               ? 'ডায়াগনস্টিক ল্যাব থেকে শুরু করে বিশেষজ্ঞ চিকিৎসকের পরামর্শ—প্রতিটি সেবায় ব্যবহৃত হচ্ছে আধুনিক প্রযুক্তি ও নিবেদিত টিম।'
//               : 'From 100% automated pathology to pain-free dental care and high-risk maternity, explore our world-class medical departments.'}
//           </p>
//         </div>

//         <div className="flex items-center justify-center flex-wrap gap-1.5 p-1.5 bg-slate-200/70 rounded-xl max-w-3xl mx-auto mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setSelectedCategory(cat.id)}
//               className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
//                 selectedCategory === cat.id
//                   ? 'bg-white text-[#0B1E33] shadow-xs'
//                   : 'text-slate-600 hover:text-slate-900'
//               }`}
//             >
//               {lang === 'bn' ? cat.labelBn : cat.label}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredServices.map((service) => (
//             <div
//               key={service.id}
//               className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#009688] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
//             >
//               <div>
//                 <div className="flex items-start justify-between gap-4 mb-4">
//                   <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#009688] group-hover:text-white transition-all">
//                     {getServiceIcon(service.iconName)}
//                   </div>

//                   <div className="text-right">
//                     <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
//                       {lang === 'bn' ? 'শুরু মাত্র' : 'Starting From'}
//                     </span>
//                     <span className="text-base font-extrabold text-[#0B1E33] font-mono">
//                       ৳{service.startingPrice}
//                     </span>
//                   </div>
//                 </div>

//                 <h3 className="text-lg font-bold text-[#0B1E33] mb-1 group-hover:text-[#009688] transition-colors">
//                   {lang === 'bn' ? service.titleBn : service.title}
//                 </h3>
                
//                 <p className="text-xs font-semibold text-[#009688] mb-3">
//                   {lang === 'bn' ? service.subtitleBn : service.subtitle}
//                 </p>

//                 <p className="text-xs text-slate-600 leading-relaxed mb-5">
//                   {lang === 'bn' ? service.descriptionBn : service.description}
//                 </p>

//                 <div className="space-y-2 mb-6">
//                   {(lang === 'bn' ? service.featuresBn : service.features).map((feat, i) => (
//                     <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
//                       <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
//                       <span>{feat}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
//                 <button
//                   onClick={onOpenAppointment}
//                   className="flex-1 py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
//                 >
//                   <Calendar className="w-3.5 h-3.5" />
//                   <span>{lang === 'bn' ? 'সিরিয়াল নিন' : 'Book Appointment'}</span>
//                 </button>

//                 {service.category === 'pathology' && (
//                   <button
//                     onClick={onOpenReportModal}
//                     className="px-3 py-2.5 text-xs font-bold text-[#009688] bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors cursor-pointer"
//                     title={lang === 'bn' ? 'অনলাইন টেস্ট রিপোর্ট চেক' : 'Check Report'}
//                   >
//                     {lang === 'bn' ? 'রিপোর্ট' : 'Reports'}
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import { SERVICES_DATA } from '../../data/mockData';
import ServiceDetailModal from './ServiceDetailModal';
import { 
  Smile, 
  FlaskConical, 
  Globe, 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  Calendar,
  ArrowRight,
  MessageCircle,
  Phone,
  Ambulance,
  Baby
} from 'lucide-react';

// ==================== Scroll Reveal Hook ====================
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// ==================== Reveal Wrapper ====================
function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, isVisible] = useScrollReveal();

  const dirClass = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
    scale: 'scale-95',
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${dirClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ServicesSection({
  lang,
  onOpenAppointment,
  onOpenReportModal,
  onViewFullDetails,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Services', labelBn: 'সকল সেবা' },
    { id: 'pathology', label: 'Pathology & Lab', labelBn: 'প্যাথলজি ও ল্যাব' },
    { id: 'dental', label: 'Pinnacle Dental', labelBn: 'পিনাকল ডেন্টাল' },
    { id: 'medicine', label: 'Medicine', labelBn: 'মেডিসিন' },
    { id: 'gynae', label: 'Gynae & Obs', labelBn: 'গাইনী ও প্রসূতি' },
    { id: 'overseas', label: 'Overseas Medical', labelBn: 'বিদেশগামী চেকআপ' },
    { id: 'physio', label: 'Physiotherapy', labelBn: 'ফিজিওথেরাপি' },
    { id: 'emergency', label: 'Emergency', labelBn: 'জরুরি সেবা' },
    { id: 'pediatrics', label: 'Pediatrics', labelBn: 'শিশু বিশেষজ্ঞ' },
  ];

  const extendedServices = [
    ...SERVICES_DATA,
    {
      id: 'emergency-care',
      category: 'emergency',
      title: '24/7 Emergency & Trauma',
      titleBn: '২৪/৭ জরুরি ও ট্রমা সেবা',
      subtitle: 'Immediate life support & ambulance',
      subtitleBn: 'দ্রুত অ্যাম্বুলেন্স ও লাইফ সাপোর্ট',
      description: 'Round-the-clock emergency medical response with fully-equipped ambulance and trauma care units.',
      descriptionBn: '২৪ ঘণ্টা জরুরি চিকিৎসা সেবা, সম্পূর্ণ প্রস্তুত অ্যাম্বুলেন্স ও ট্রমা কেয়ার ইউনিট।',
      startingPrice: '500',
      iconName: 'Ambulance',
      features: [
        '24/7 on-call emergency doctors',
        'ICU-equipped ambulance service',
        'Trauma & accident care unit',
        'Rapid triage & stabilization',
        'Emergency pathology support',
        'Direct ambulance dispatch',
      ],
      featuresBn: [
        '২৪/৭ অন-কল জরুরি চিকিৎসক',
        'আইসিইউ সুবিধাসহ অ্যাম্বুলেন্স',
        'ট্রমা ও দুর্ঘটনা সেবা ইউনিট',
        'দ্রুত ট্রায়াজ ও স্ট্যাবিলাইজেশন',
        'জরুরি প্যাথলজি সাপোর্ট',
        'সরাসরি অ্যাম্বুলেন্স ডিসপ্যাচ',
      ],
    },
    {
      id: 'pediatrics',
      category: 'pediatrics',
      title: 'Pediatrics & Child Care',
      titleBn: 'পেডিয়াট্রিকস ও শিশু স্বাস্থ্যসেবা',
      subtitle: 'Child specialist & vaccination',
      subtitleBn: 'শিশু বিশেষজ্ঞ ও টিকাদান',
      description: 'Comprehensive child healthcare including growth monitoring, vaccination, and specialist consultations.',
      descriptionBn: 'শিশুর সার্বিক স্বাস্থ্যসেবা, বৃদ্ধি পর্যবেক্ষণ, টিকাদান এবং বিশেষজ্ঞ পরামর্শ।',
      startingPrice: '600',
      iconName: 'Baby',
      features: [
        'Expert child specialist consultations',
        'Complete EPI & routine vaccination',
        'Growth & development monitoring',
        'Newborn & neonatal care',
        'Pediatric emergency support',
        'Nutrition & diet counseling',
      ],
      featuresBn: [
        'অভিজ্ঞ শিশু বিশেষজ্ঞ পরামর্শ',
        'সম্পূর্ণ EPI ও রুটিন টিকাদান',
        'বৃদ্ধি ও বিকাশ পর্যবেক্ষণ',
        'নবজাতক ও নিওনেটাল সেবা',
        'শিশু জরুরি সহায়তা',
        'পুষ্টি ও ডায়েট পরামর্শ',
      ],
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? extendedServices
    : extendedServices.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName) => {
    const iconClass = "w-7 h-7 text-teal-400";
    switch (iconName) {
      case 'Smile': return <Smile className={iconClass} />;
      case 'FlaskConical': return <FlaskConical className={iconClass} />;
      case 'Globe': return <Globe className={iconClass} />;
      case 'Stethoscope': return <Stethoscope className={iconClass} />;
      case 'HeartPulse': return <HeartPulse className={iconClass} />;
      case 'Activity': return <Activity className={iconClass} />;
      case 'Ambulance': return <Ambulance className={iconClass} />;
      case 'Baby': return <Baby className={iconClass} />;
      default: return <Stethoscope className={iconClass} />;
    }
  };

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 200);
  };

  return (
    <>
      {/* 👇 এখানে উপরের padding কমিয়ে py-10 করে দেওয়া হয়েছে */}
      <section id="services" className="py-10 sm:py-16 bg-[#0B1E33] text-white relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* ================= Header with Reveal Animation ================= */}
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold uppercase tracking-wider text-teal-400 mb-6 hover:scale-105 transition-transform duration-300">
                <Activity className="w-4 h-4 animate-pulse" />
                {lang === 'bn' ? 'ক্লিনিক্যাল স্পেশালিটি ও ডায়াগনস্টিক সেবা' : 'Clinical Specialties & Diagnostic Services'}
              </span>
              
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5 uppercase">
                {lang === 'bn' ? 'আমাদের সেবা সমূহ' : 'Our Services'}
              </h2>
              
              <p className="text-base text-slate-400 leading-relaxed">
                {lang === 'bn' 
                  ? 'আমাদের মূল ক্লিনিক্যাল, ডায়াগনস্টিক এবং স্পেশালিটি বিভাগগুলো ব্রাউজ করুন। সম্পূর্ণ টেস্ট, সুবিধা এবং বিভাগের বিবরণ দেখতে যেকোনো কার্ডে ক্লিক করুন।' 
                  : 'Explore our key clinical, diagnostic, and specialty medical divisions. Click any service card to view complete tests, facilities, and department details.'}
              </p>
            </div>
          </Reveal>

          {/* ================= Category Filters with Reveal ================= */}
          <Reveal direction="up" delay={150}>
            <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
              {categories.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap border transform hover:scale-105 active:scale-95 ${
                    selectedCategory === cat.id
                      ? 'bg-teal-500 text-white border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.4)]'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {lang === 'bn' ? cat.labelBn : cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* ================= Services Grid with Staggered Animation ================= */}
          <div className="flex flex-wrap justify-center gap-6">
            {filteredServices.map((service, idx) => (
              <Reveal
                key={service.id}
                direction="up"
                delay={idx * 80}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="h-full bg-[#0E233B] border border-white/10 hover:border-teal-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 group hover:shadow-[0_10px_40px_rgba(20,184,166,0.25)] hover:-translate-y-2 relative overflow-hidden">
                  
                  {/* Hover Gradient Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-teal-500/20 group-hover:rotate-6 transition-all duration-500 border border-teal-500/20 group-hover:border-teal-400/50 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]">
                      {getServiceIcon(service.iconName)}
                    </div>
                    
                    <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide leading-snug group-hover:text-teal-300 transition-colors duration-300">
                      {lang === 'bn' ? service.titleBn : service.title}
                    </h3>
                    
                    <div className="mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-teal-300 font-bold group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-all duration-300">
                      {lang === 'bn' ? 'শুরু মাত্র' : 'Starting From'} ৳{service.startingPrice}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                      {lang === 'bn' ? service.subtitleBn : service.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-auto relative z-10">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="w-full py-3 text-xs font-bold text-teal-400 bg-teal-500/10 hover:bg-teal-500 hover:text-white rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn"
                    >
                      <span>{lang === 'bn' ? 'বিস্তারিত ও টেস্ট দেখুন' : 'View Details & Tests'}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ================= Bottom Help Section with Reveal ================= */}
          <Reveal direction="up" delay={200}>
            <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm hover:bg-white/[0.07] hover:border-teal-500/30 transition-all duration-500">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 border border-teal-500/30 hidden md:flex animate-pulse">
                  <Stethoscope className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {lang === 'bn' ? 'সঠিক টেস্ট বা বিশেষজ্ঞ ডাক্তার খুঁজে পাচ্ছেন না?' : 'Need help choosing the right test or specialist doctor?'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'bn' ? 'আমাদের হেল্পলাইন বা হোয়াটসঅ্যাপে যোগাযোগ করুন, আমরা সাহায্য করব।' : 'Contact our hotline or WhatsApp, we are here to help you.'}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none px-5 py-2.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                
                <a
                  href="tel:10620"
                  className="flex-1 md:flex-none px-5 py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>10620</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="flex-1 md:flex-none px-5 py-2.5 text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Book Appointment'}</span>
                </button>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 👇 Popup Modal */}
      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
        lang={lang}
        onOpenAppointment={onOpenAppointment}
        onViewFullDetails={onViewFullDetails}
      />
    </>
  );
}
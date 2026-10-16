// import React, { useState } from 'react';
// import { DENTAL_TECH_ITEMS } from '../../data/mockData';
// import { 
//   Smile, 
//   CheckCircle2, 
//   ShieldCheck, 
//   Camera, 
//   Cpu, 
//   Scan, 
//   Calendar, 
//   Flame, 
//   Volume2
// } from 'lucide-react';

// export default function PinnacleDental({ lang, onOpenAppointment }) {
//   const [activeTab, setActiveTab] = useState('tech');

//   const dentalServicesCategories = [
//     {
//       title: 'Root Canal Treatment (RCT)',
//       titleBn: 'আধুনিক রোটারি রুট ক্যানাল (RCT)',
//       desc: 'Single-visit painless rotary endodontics with electronic apex locators and sterile endo-irrigation activation.',
//       descBn: 'ব্যথামুক্ত রোটারি এন্ডোডন্টিক্স, এপেক্স লোকেটর ও একটি মাত্র সিটিংয়ে রুট ক্যানাল সম্পন্ন করার আধুনিক সুবিধা।',
//       badge: 'Single-Visit Pain-Free',
//       badgeBn: 'এক সিটিংয়ে ব্যথামুক্ত',
//     },
//     {
//       title: 'Digital OPG & Panoramic Imaging',
//       titleBn: 'ডিজিটাল প্যানোরামিক ওপিজি এক্স-রে',
//       desc: 'Full-jaw panoramic visualization in 15 seconds to pinpoint hidden impactions, cysts, and jaw infections with minimal radiation.',
//       descBn: 'মাত্র ১৫ সেকেন্ডে সম্পূর্ণ চোয়াল ও দাঁতের নিখুঁত দৃশ্য। লো-রেডিয়েশনে জটিল ইনফেকশন ও আক্কেল দাঁতের অবস্থান নির্ণয়।',
//       badge: 'Low Radiation',
//       badgeBn: 'স্বল্প রেডিয়েশন',
//     },
//     {
//       title: 'Aesthetic Composite Filling & Smile Design',
//       titleBn: 'লেজার কম্পোজিট ফিলিং ও স্মাইল ডিজাইন',
//       desc: 'Tooth-colored composite restorations pre-warmed with composite heaters for seamless adaptation, high durability, and natural brilliance.',
//       descBn: 'দাঁতের রঙের সাথে হুবহু মেলানো ন্যানো-কম্পোজিট ফিলিং ও ক্রাউন যা দেখতে একদম প্রাকৃতিক দাঁতের মতো আকর্ষণীয়।',
//       badge: 'Natural Aesthetics',
//       badgeBn: 'প্রাকৃতিক সৌন্দর্য',
//     },
//     {
//       title: 'Wisdom Tooth & Minor Oral Surgery',
//       titleBn: 'আক্কেল দাঁতের সার্জারি ও ওরাল এক্সট্রাকশন',
//       desc: 'Surgical extraction of impacted third molars performed under local anesthesia with post-extraction laser biostimulation.',
//       descBn: 'অল্প সময়ে ও ব্যথামুক্ত অবশকরণ প্রযুক্তিতে আঁকাবাঁকা ও আটকে থাকা আক্কেল দাঁতের নিরাপদ অপসারণ।',
//       badge: 'Expert Oral Surgeon',
//       badgeBn: 'সার্জন দ্বারা সম্পন্ন',
//     },
//     {
//       title: 'Ultrasonic Scaling & Periodontal Care',
//       titleBn: 'আল্ট্রাসনিক স্কেলিং ও মাড়ির চিকিৎসা',
//       desc: 'Deep subgingival cleaning to stop bleeding gums, eliminate bad breath, and reverse gingivitis using magnetic ultrasonic tips.',
//       descBn: 'দাঁতের পাথর, হলদেটে দাগ ও মাড়ি দিয়ে রক্ত পড়ার কার্যকর সমাধান। সেনসিটিভিটি মুক্ত নিরাপদ আল্ট্রাসনিক স্কেলিং।',
//       badge: 'Enamel-Safe',
//       badgeBn: 'এনামেল সুরক্ষিত',
//     },
//     {
//       title: 'Zirconia Crowns, Bridges & Implants',
//       titleBn: 'জারকোনিয়া ক্রাউন, ব্রিজ ও দাঁত প্রতিস্থাপন',
//       desc: 'High-strength bio-compatible crowns designed using CAD/CAM precision to restore missing teeth and chew with confidence.',
//       descBn: 'ভাঙা বা হারানো দাঁতের জায়গায় জারকোনিয়া ক্যাপ ও ব্রিজ যা আজীবন মজবুত ও স্বাভাবিকভাবে খাবার চিবানোর অনুভূতি দেয়।',
//       badge: 'CAD/CAM Precision',
//       badgeBn: 'ক্যাড/ক্যাম নিখুঁত মাপ',
//     },
//   ];

//   return (
//     <section id="dental" className="py-16 sm:py-24 bg-white relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-70" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-70" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009688] mb-2">
//               <Smile className="w-4 h-4 text-[#009688]" />
//               <span>{lang === 'bn' ? 'পিনাকল ডেন্টাল স্পেশালিস্ট কেয়ার' : 'Pinnacle Dental Specialty'}</span>
//             </div>
            
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E33] tracking-tight mb-3">
//               {lang === 'bn' 
//                 ? 'আধুনিক প্রযুক্তিতে ব্যথামুক্ত ও নিখুঁত ডেন্টাল চিকিৎসা'
//                 : 'Advanced Dental Care with Modern Technology'}
//             </h2>
            
//             <p className="text-base text-slate-600 leading-relaxed">
//               {lang === 'bn'
//                 ? 'ডিজিটাল প্যানোরামিক ওপিজি, ইন্ট্রাওরাল ক্যামেরা, রোটারি এন্ডোমোটর এবং ক্লাস-বি অটোক্লেভ দ্বারা সম্পূর্ণ জীবাণুমুক্ত নিরাপদ চিকিৎসার নিশ্চয়তা।'
//                 : 'Comprehensive dental treatment with modern equipment, precise digital diagnosis, and patient-focused compassionate care under one roof.'}
//             </p>
//           </div>

//           <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0 self-start md:self-auto">
//             <button
//               onClick={() => setActiveTab('tech')}
//               className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
//                 activeTab === 'tech'
//                   ? 'bg-[#009688] text-white shadow-xs'
//                   : 'text-slate-600 hover:text-slate-900'
//               }`}
//             >
//               {lang === 'bn' ? 'আধুনিক প্রযুক্তি (Technology)' : 'Advanced Technology'}
//             </button>
//             <button
//               onClick={() => setActiveTab('services')}
//               className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
//                 activeTab === 'services'
//                   ? 'bg-[#009688] text-white shadow-xs'
//                   : 'text-slate-600 hover:text-slate-900'
//               }`}
//             >
//               {lang === 'bn' ? 'চিকিৎসা সমূহ (Treatments)' : 'Dental Treatments'}
//             </button>
//           </div>
//         </div>

//         {activeTab === 'tech' && (
//           <div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//               {DENTAL_TECH_ITEMS.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-slate-50 hover:bg-white rounded-xl p-6 border border-slate-200/80 hover:border-[#009688] hover:shadow-xl transition-all duration-200 group flex flex-col justify-between"
//                 >
//                   <div>
//                     <div className="w-12 h-12 rounded-xl bg-teal-100/60 text-[#009688] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#009688] group-hover:text-white transition-all">
//                       {item.id === 'tech-opg' && <Scan className="w-6 h-6" />}
//                       {item.id === 'tech-camera' && <Camera className="w-6 h-6" />}
//                       {item.id === 'tech-endomotor' && <Cpu className="w-6 h-6" />}
//                       {item.id === 'tech-autoclave' && <ShieldCheck className="w-6 h-6" />}
//                     </div>

//                     <span className="text-[11px] font-mono tracking-wider text-[#009688] block mb-1">
//                       {lang === 'bn' ? item.taglineBn : item.tagline}
//                     </span>

//                     <h3 className="text-lg font-bold text-[#0B1E33] mb-3 leading-snug">
//                       {lang === 'bn' ? item.titleBn : item.title}
//                     </h3>

//                     <p className="text-xs text-slate-600 leading-relaxed mb-4">
//                       {lang === 'bn' ? item.descriptionBn : item.description}
//                     </p>
//                   </div>

//                   <div className="pt-4 border-t border-slate-200/60 mt-2">
//                     <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
//                       <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
//                       <span>{lang === 'bn' ? item.patientBenefitBn : item.patientBenefit}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-[#0B1E33] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden mb-8">
//               <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="flex items-start gap-3.5">
//                   <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
//                     <Volume2 className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-bold text-white mb-1">
//                       {lang === 'bn' ? 'এন্ডো অ্যাক্টিভেটর (Endo Activator)' : 'Endo Activator Irrigation'}
//                     </h4>
//                     <p className="text-xs text-slate-300 leading-relaxed">
//                       {lang === 'bn' 
//                         ? 'সনিক এনার্জির মাধ্যমে রুট ক্যানালের সূক্ষ্মতম খাঁজ পর্যন্ত জীবাণুমুক্ত করে ইনফেকশন পুনরাবৃত্তি রোধ করে।'
//                         : 'Sonic activation of irrigants for deep canal disinfection, ensuring zero bacteria and lasting RCT success.'}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3.5">
//                   <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
//                     <Flame className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-bold text-white mb-1">
//                       {lang === 'bn' ? 'কম্পোজিট হিটার (Composite Heater)' : 'Pre-Warmed Composite Fillings'}
//                     </h4>
//                     <p className="text-xs text-slate-300 leading-relaxed">
//                       {lang === 'bn'
//                         ? 'ফিলিং উপাদান নির্দিষ্ট তাপমাত্রায় গরম করে ব্যবহারের ফলে দাঁতের খাঁজে নিখুঁতভাবে বসে এবং স্থায়িত্ব কয়েকগুণ বৃদ্ধি পায়।'
//                         : 'Pre-warming resin composites dramatically improves marginal adaptation, micro-hardness, and cosmetic finish.'}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3.5">
//                   <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
//                     <ShieldCheck className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-bold text-white mb-1">
//                       {lang === 'bn' ? '৬-ধাপ স্টেরিলাইজেশন প্রোটোকল' : '6-Stage Sterilization Cycle'}
//                     </h4>
//                     <p className="text-xs text-slate-300 leading-relaxed">
//                       {lang === 'bn'
//                         ? 'প্রতিটি রোগীর জন্য সিল করা ফ্রেশ ইনস্ট্রুমেন্ট পাউচ খোলা হয়। হেপাটাইটিস ও ক্রস-ইনফেকশনের ঝুঁকি শূন্য।'
//                         : 'Hermetically sealed individual instrument pouches vacuum autoclaved at 134°C for absolute patient safety.'}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'services' && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {dentalServicesCategories.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#009688] hover:shadow-lg transition-all flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="text-[11px] font-bold text-[#009688] uppercase tracking-wider">
//                       {lang === 'bn' ? item.badgeBn : item.badge}
//                     </span>
//                     <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
//                   </div>

//                   <h3 className="text-lg font-bold text-slate-900 mb-2">
//                     {lang === 'bn' ? item.titleBn : item.title}
//                   </h3>

//                   <p className="text-xs text-slate-600 leading-relaxed mb-6">
//                     {lang === 'bn' ? item.descBn : item.desc}
//                   </p>
//                 </div>

//                 <button
//                   onClick={onOpenAppointment}
//                   className="w-full py-2.5 text-xs font-bold text-[#009688] hover:text-white bg-teal-50/70 hover:bg-[#009688] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
//                 >
//                   <Calendar className="w-3.5 h-3.5" />
//                   <span>{lang === 'bn' ? 'ডেন্টাল অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book Dental Consultation'}</span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="bg-gradient-to-r from-teal-50 via-white to-teal-50/50 rounded-2xl p-6 sm:p-8 border border-teal-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="max-w-xl text-center md:text-left">
//             <span className="text-xs font-bold uppercase tracking-wider text-[#009688] mb-1 block">
//               {lang === 'bn' ? 'নির্ণয় থেকে নিরাময়—সবই এক ছাদের নিচে' : 'From Diagnosis to Treatment — All Under One Roof'}
//             </span>
//             <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1E33] mb-2">
//               {lang === 'bn' 
//                 ? 'উন্নত ইমেজিং · আধুনিক প্রযুক্তি · সার্বিক ডেন্টাল কেয়ার'
//                 : 'Advanced Imaging. Modern Technology. Comprehensive Dental Care.'}
//             </h3>
//             <p className="text-xs sm:text-sm text-slate-600">
//               {lang === 'bn'
//                 ? 'ডেন্টাল সমস্যা নিয়ে একাধিক জায়গায় যাওয়ার দরকার নেই। এক্স-রে থেকে শুরু করে রুট ক্যানাল, ক্যাপ ও ফিলিং—সবই পিনাকল ডেন্টালে।'
//                 : 'No need to visit multiple clinics for scans and treatment. Experience complete pain-free dental care with digital accuracy.'}
//             </p>
//           </div>

//           <div className="flex items-center gap-3 shrink-0">
//             <button
//               onClick={onOpenAppointment}
//               className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
//             >
//               {lang === 'bn' ? 'ডেন্টাল সিরিয়াল নিন' : 'Book Dental Appointment'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import { DENTAL_TECH_ITEMS } from '../../data/mockData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Camera, 
  Cpu, 
  Scan, 
  Calendar, 
  Flame, 
  Volume2,
  ArrowRight
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
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: '-translate-x-10',
    right: 'translate-x-10',
    scale: 'scale-95',
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 ${dirClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function PinnacleDental({ lang, onOpenAppointment }) {
  const [activeTab, setActiveTab] = useState('tech');

  const dentalServicesCategories = [
    {
      title: 'Root Canal Treatment (RCT)',
      titleBn: 'আধুনিক রোটারি রুট ক্যানাল (RCT)',
      desc: 'Single-visit painless rotary endodontics with electronic apex locators and sterile endo-irrigation activation.',
      descBn: 'ব্যথামুক্ত রোটারি এন্ডোডন্টিক্স, এপেক্স লোকেটর ও একটি মাত্র সিটিংয়ে রুট ক্যানাল সম্পন্ন করার আধুনিক সুবিধা।',
      badge: 'Single-Visit Pain-Free',
      badgeBn: 'এক সিটিংয়ে ব্যথামুক্ত',
    },
    {
      title: 'Digital OPG & Panoramic Imaging',
      titleBn: 'ডিজিটাল প্যানোরামিক ওপিজি এক্স-রে',
      desc: 'Full-jaw panoramic visualization in 15 seconds to pinpoint hidden impactions, cysts, and jaw infections with minimal radiation.',
      descBn: 'মাত্র ১৫ সেকেন্ডে সম্পূর্ণ চোয়াল ও দাঁতের নিখুঁত দৃশ্য। লো-রেডিয়েশনে জটিল ইনফেকশন ও আক্কেল দাঁতের অবস্থান নির্ণয়।',
      badge: 'Low Radiation',
      badgeBn: 'স্বল্প রেডিয়েশন',
    },
    {
      title: 'Aesthetic Composite Filling & Smile Design',
      titleBn: 'লেজার কম্পোজিট ফিলিং ও স্মাইল ডিজাইন',
      desc: 'Tooth-colored composite restorations pre-warmed with composite heaters for seamless adaptation, high durability, and natural brilliance.',
      descBn: 'দাঁতের রঙের সাথে হুবহু মেলানো ন্যানো-কম্পোজিট ফিলিং ও ক্রাউন যা দেখতে একদম প্রাকৃতিক দাঁতের মতো আকর্ষণীয়।',
      badge: 'Natural Aesthetics',
      badgeBn: 'প্রাকৃতিক সৌন্দর্য',
    },
    {
      title: 'Wisdom Tooth & Minor Oral Surgery',
      titleBn: 'আক্কেল দাঁতের সার্জারি ও ওরাল এক্সট্রাকশন',
      desc: 'Surgical extraction of impacted third molars performed under local anesthesia with post-extraction laser biostimulation.',
      descBn: 'অল্প সময়ে ও ব্যথামুক্ত অবশকরণ প্রযুক্তিতে আঁকাবাঁকা ও আটকে থাকা আক্কেল দাঁতের নিরাপদ অপসারণ।',
      badge: 'Expert Oral Surgeon',
      badgeBn: 'সার্জন দ্বারা সম্পন্ন',
    },
    {
      title: 'Ultrasonic Scaling & Periodontal Care',
      titleBn: 'আল্ট্রাসনিক স্কেলিং ও মাড়ির চিকিৎসা',
      desc: 'Deep subgingival cleaning to stop bleeding gums, eliminate bad breath, and reverse gingivitis using magnetic ultrasonic tips.',
      descBn: 'দাঁতের পাথর, হলদেটে দাগ ও মাড়ি দিয়ে রক্ত পড়ার কার্যকর সমাধান। সেনসিটিভিটি মুক্ত নিরাপদ আল্ট্রাসনিক স্কেলিং।',
      badge: 'Enamel-Safe',
      badgeBn: 'এনামেল সুরক্ষিত',
    },
    {
      title: 'Zirconia Crowns, Bridges & Implants',
      titleBn: 'জারকোনিয়া ক্রাউন, ব্রিজ ও দাঁত প্রতিস্থাপন',
      desc: 'High-strength bio-compatible crowns designed using CAD/CAM precision to restore missing teeth and chew with confidence.',
      descBn: 'ভাঙা বা হারানো দাঁতের জায়গায় জারকোনিয়া ক্যাপ ও ব্রিজ যা আজীবন মজবুত ও স্বাভাবিকভাবে খাবার চিবানোর অনুভূতি দেয়।',
      badge: 'CAD/CAM Precision',
      badgeBn: 'ক্যাড/ক্যাম নিখুঁত মাপ',
    },
  ];

  // Colorful premium accents for tech cards
  const techCardStyles = [
    {
      bg: 'bg-gradient-to-br from-teal-50 to-white',
      border: 'border-teal-100 hover:border-teal-300',
      iconBg: 'bg-teal-100 text-teal-600',
      tagline: 'text-teal-600',
      shadow: 'hover:shadow-teal-200/60'
    },
    {
      bg: 'bg-gradient-to-br from-blue-50 to-white',
      border: 'border-blue-100 hover:border-blue-300',
      iconBg: 'bg-blue-100 text-blue-600',
      tagline: 'text-blue-600',
      shadow: 'hover:shadow-blue-200/60'
    },
    {
      bg: 'bg-gradient-to-br from-purple-50 to-white',
      border: 'border-purple-100 hover:border-purple-300',
      iconBg: 'bg-purple-100 text-purple-600',
      tagline: 'text-purple-600',
      shadow: 'hover:shadow-purple-200/60'
    },
    {
      bg: 'bg-gradient-to-br from-amber-50 to-white',
      border: 'border-amber-100 hover:border-amber-300',
      iconBg: 'bg-amber-100 text-amber-600',
      tagline: 'text-amber-600',
      shadow: 'hover:shadow-amber-200/60'
    }
  ];

  return (
    // 👇 উপরের padding কমিয়ে py-10 sm:py-16 করা হয়েছে
    <section id="dental" className="py-10 sm:py-16 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= Header with Reveal ================= */}
        <Reveal direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8 max-w-4xl mx-auto">
              {lang === 'bn' 
                ? 'আধুনিক প্রযুক্তিতে ব্যথামুক্ত ও নিখুঁত ডেন্টাল চিকিৎসা'
                : 'Advanced Dental Care with Modern Technology'}
            </h2>

            {/* Tab Switcher */}
            <div className="inline-flex items-center p-1.5 bg-white rounded-full shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
              <button
                onClick={() => setActiveTab('tech')}
                className={`px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-[1.02] active:scale-95 ${
                  activeTab === 'tech'
                    ? 'bg-[#0B1E33] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {lang === 'bn' ? 'আধুনিক প্রযুক্তি' : 'Advanced Technology'}
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-[1.02] active:scale-95 ${
                  activeTab === 'services'
                    ? 'bg-[#0B1E33] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {lang === 'bn' ? 'চিকিৎসা সমূহ' : 'Dental Treatments'}
              </button>
            </div>
          </div>
        </Reveal>

        {/* ================= TECH TAB CONTENT ================= */}
        {activeTab === 'tech' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {DENTAL_TECH_ITEMS.map((item, idx) => {
                const style = techCardStyles[idx % techCardStyles.length];
                return (
                  <Reveal key={item.id} direction="up" delay={idx * 100} className="h-full">
                    <div
                      className={`h-full rounded-3xl p-8 border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden ${style.bg} ${style.border} ${style.shadow}`}
                    >
                      {/* Top Accent Line on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700" />

                      <div>
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ${style.iconBg}`}>
                          {item.id === 'tech-opg' && <Scan className="w-6 h-6" />}
                          {item.id === 'tech-camera' && <Camera className="w-6 h-6" />}
                          {item.id === 'tech-endomotor' && <Cpu className="w-6 h-6" />}
                          {item.id === 'tech-autoclave' && <ShieldCheck className="w-6 h-6" />}
                        </div>

                        <span className={`text-[10px] font-bold tracking-widest uppercase block mb-2 ${style.tagline}`}>
                          {lang === 'bn' ? item.taglineBn : item.tagline}
                        </span>

                        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-slate-800 transition-colors">
                          {lang === 'bn' ? item.titleBn : item.title}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed mb-6">
                          {lang === 'bn' ? item.descriptionBn : item.description}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-slate-200/60 mt-auto">
                        <div className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <span>{lang === 'bn' ? item.patientBenefitBn : item.patientBenefit}</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* ================= Premium Dark Banner with Reveal ================= */}
            <Reveal direction="up" delay={200}>
              <div className="bg-slate-900 rounded-3xl p-7 sm:p-8 relative overflow-hidden shadow-2xl group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -z-0 pointer-events-none group-hover:bg-teal-400/30 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -z-0 pointer-events-none" />
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/30 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300">
                      <Volume2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {lang === 'bn' ? 'এন্ডো অ্যাক্টিভেটর' : 'Endo Activator Irrigation'}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {lang === 'bn' 
                          ? 'সনিক এনার্জির মাধ্যমে রুট ক্যানালের সূক্ষ্মতম খাঁজ পর্যন্ত জীবাণুমুক্ত করে ইনফেকশন পুনরাবৃত্তি রোধ করে।'
                          : 'Sonic activation of irrigants for deep canal disinfection, ensuring zero bacteria and lasting RCT success.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {lang === 'bn' ? 'কম্পোজিট হিটার' : 'Pre-Warmed Composite Fillings'}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {lang === 'bn'
                          ? 'ফিলিং উপাদান নির্দিষ্ট তাপমাত্রায় গরম করে ব্যবহারের ফলে দাঁতের খাঁজে নিখুঁতভাবে বসে এবং স্থায়িত্ব কয়েকগুণ বৃদ্ধি পায়।'
                          : 'Pre-warming resin composites dramatically improves marginal adaptation, micro-hardness, and cosmetic finish.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {lang === 'bn' ? '৬-ধাপ স্টেরিলাইজেশন প্রোটোকল' : '6-Stage Sterilization Cycle'}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {lang === 'bn'
                          ? 'প্রতিটি রোগীর জন্য সিল করা ফ্রেশ ইনস্ট্রুমেন্ট পাউচ খোলা হয়। হেপাটাইটিস ও ক্রস-ইনফেকশনের ঝুঁকি শূন্য।'
                          : 'Hermetically sealed individual instrument pouches vacuum autoclaved at 134°C for absolute patient safety.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* ================= SERVICES TAB CONTENT ================= */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {dentalServicesCategories.map((item, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 100} className="h-full">
                <div className="h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-teal-200 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group">
                  
                  {/* Watermark Number */}
                  <span className="absolute top-6 right-6 text-6xl font-black text-slate-50/80 group-hover:text-teal-50 transition-colors duration-500 select-none pointer-events-none">
                    0{idx + 1}
                  </span>

                  {/* Hover Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-[10px] font-bold text-teal-700 uppercase tracking-wider mb-5 group-hover:bg-teal-100 transition-colors duration-300">
                      {lang === 'bn' ? item.badgeBn : item.badge}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 pr-8 group-hover:text-teal-700 transition-colors duration-300">
                      {lang === 'bn' ? item.titleBn : item.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed mb-8">
                      {lang === 'bn' ? item.descBn : item.desc}
                    </p>
                  </div>

                  <button
                    onClick={onOpenAppointment}
                    className="relative z-10 w-full py-3.5 text-sm font-bold text-slate-700 hover:text-white bg-slate-50 hover:bg-slate-900 border border-slate-200 hover:border-slate-900 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn hover:scale-[1.02] active:scale-95"
                  >
                    <Calendar className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>{lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book Consultation'}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* ================= BOTTOM CTA with Reveal ================= */}
        <Reveal direction="up" delay={150}>
          <div className="mt-12 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-7 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-teal-900/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-white/20 transition-colors duration-700" />
            
            <div className="max-w-2xl text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-100 mb-3 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                <span>{lang === 'bn' ? 'নির্ণয় থেকে নিরাময়—সবই এক ছাদের নিচে' : 'From Diagnosis to Treatment — All Under One Roof'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
                {lang === 'bn' 
                  ? 'উন্নত ইমেজিং · আধুনিক প্রযুক্তি · সার্বিক ডেন্টাল কেয়ার'
                  : 'Advanced Imaging. Modern Technology. Comprehensive Dental Care.'}
              </h3>
              <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed">
                {lang === 'bn'
                  ? 'ডেন্টাল সমস্যা নিয়ে একাধিক জায়গায় যাওয়ার দরকার নেই। এক্স-রে থেকে শুরু করে রুট ক্যানাল, ক্যাপ ও ফিলিং—সবই পিনাকল ডেন্টালে।'
                  : 'No need to visit multiple clinics for scans and treatment. Experience complete pain-free dental care with digital accuracy.'}
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenAppointment}
                className="w-full md:w-auto px-8 py-4 text-sm font-bold text-teal-900 bg-white hover:bg-teal-50 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] group/btn"
              >
                <Calendar className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                {lang === 'bn' ? 'ডেন্টাল সিরিয়াল নিন' : 'Book Dental Appointment'}
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
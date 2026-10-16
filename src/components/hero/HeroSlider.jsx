// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Calendar, 
//   FileText, 
//   PhoneCall, 
//   Sparkles, 
//   ChevronLeft, 
//   ChevronRight, 
//   CheckCircle2, 
//   Stethoscope
// } from 'lucide-react';

// const SLIDES = [
//   {
//     id: 'slide-1',
//     tag: 'COMPLETE HEALTHCARE UNDER ONE ROOF',
//     tagBn: 'এক ছাদের নিচে পূর্ণাঙ্গ চিকিৎসা সেবা',
//     title: 'Your Health. Our Priority.',
//     titleBn: 'আপনার স্বাস্থ্য, আমাদের অগ্রাধিকার।',
//     subtitle: 'Advanced Healthcare & Diagnostics, Closer to You.',
//     subtitleBn: 'উন্নত চিকিৎসা ও নিখুঁত রোগ নির্ণয় এখন আপনার আরও কাছে। অভিজ্ঞ বিশেষজ্ঞ চিকিৎসক ও সর্বাধুনিক প্রযুক্তির নির্ভরযোগ্য প্রতিষ্ঠান।',
//     highlights: [
//       'Senior Consultants from DU & BSMMU',
//       '24/7 Emergency Lab & Diagnostics',
//       'Instant Online Reports with QR Verification',
//     ],
//     highlightsBn: [
//       'দেশের শীর্ষস্থানীয় অভিজ্ঞ বিশেষজ্ঞ ডাক্তার',
//       '২৪/৭ জরুরি ল্যাব ও ডিজিটাল ডায়াগনস্টিক',
//       'অনলাইনে ঘরে বসেই দ্রুত রিপোর্ট দেখার সুবিধা',
//     ],
//     ctaLabel: 'Book Appointment',
//     ctaLabelBn: 'অ্যাপয়েন্টমেন্ট বুক করুন',
//     ctaAction: 'appointment',
//     accentColor: '#009688',
//     bgGradient: 'from-[#0B1E33] via-[#0D2A47] to-[#0A3D4A]',
//     visualTheme: 'multispecialty',
//   },
//   {
//     id: 'slide-2',
//     tag: 'PINNACLE DENTAL SPECIALTY',
//     tagBn: 'পিনাকল ডেন্টাল স্পেশালিস্ট ক্লিনিক',
//     title: 'Modern Dental Care. Pain-Free Smiles.',
//     titleBn: 'আধুনিক প্রযুক্তিতে ব্যথামুক্ত ডেন্টাল কেয়ার।',
//     subtitle: 'Digital OPG Panoramic Imaging, Modern Rotary RCT & Intraoral Cameras.',
//     subtitleBn: 'এক সিটিংয়ে ব্যথামুক্ত রুট ক্যানাল, ডিজিটাল প্যানোরামিক এক্স-রে ও স্ক্রিনে সরাসরি দাঁতের দৃশ্য।',
//     highlights: [
//       'Single-Visit Painless Rotary Endodontics',
//       'HD Intraoral Camera — See What Your Dentist Sees',
//       '100% Class-B Autoclave Sterilization Protocol',
//     ],
//     highlightsBn: [
//       '১ম সিটিংয়েই আধুনিক রোটারি রুট ক্যানাল চিকিৎসা',
//       'এইচডি ক্যামেরায় নিজের দাঁতের অবস্থা সরাসরি পর্যবেক্ষণ',
//       'ইউরোপীয় ক্লাস-বি অটোক্লেভ দ্বারা শতভাগ জীবাণুমুক্তকরণ',
//     ],
//     ctaLabel: 'Explore Dental Care',
//     ctaLabelBn: 'ডেন্টাল সেবা দেখুন',
//     ctaAction: 'dental',
//     accentColor: '#2DD4BF',
//     bgGradient: 'from-[#062038] via-[#09354A] to-[#04434B]',
//     visualTheme: 'dental',
//   },
//   {
//     id: 'slide-3',
//     tag: 'PRECISION PATHOLOGY & LABORATORY',
//     tagBn: 'নির্ভুল প্যাথলজি ও অটোমেটেড ল্যাব',
//     title: '100% Error-Free Diagnostic Testing.',
//     titleBn: 'শতভাগ নির্ভুল ও নির্ভরযোগ্য ল্যাব টেস্ট।',
//     subtitle: 'Fully Automated Barcoded Sample Processing & Online PDF Reports.',
//     subtitleBn: 'বিশ্বমানের স্বয়ংক্রিয় রক্ত পরীক্ষক যন্ত্র, অভিজ্ঞ প্যাথলজিস্ট এবং একই দিনে অনলাইনে ফলাফল।',
//     highlights: [
//       'Barcoded Sample Tracking for Zero-Mixup',
//       'Thyroid & Hormones Reported in 4 Hours',
//       'Trained Home Phlebotomist Blood Collection',
//     ],
//     highlightsBn: [
//       'স্যাম্পল মিক্সআপ রোধে সম্পূর্ণ বারকোডেড ট্র্যাকিং',
//       'মাত্র ৪ ঘণ্টায় থাইরয়েড ও হরমোন টেস্টের নিখুঁত রিপোর্ট',
//       'দক্ষ ল্যাব টেকনিশিয়ান দ্বারা হোম স্যাম্পল কালেকশন',
//     ],
//     ctaLabel: 'Check Diagnostic Reports',
//     ctaLabelBn: 'অনলাইন রিপোর্ট দেখুন',
//     ctaAction: 'reports',
//     accentColor: '#38BDF8',
//     bgGradient: 'from-[#081B30] via-[#0E2C44] to-[#083E4C]',
//     visualTheme: 'pathology',
//   },
//   {
//     id: 'slide-4',
//     tag: 'OVERSEAS MEDICAL & VISA SCREENING',
//     tagBn: 'বিদেশগামী ও ভিসা হেলথ স্ক্রীনিং',
//     title: 'Overseas & Pre-Medical Certification.',
//     titleBn: 'বিদেশগামী ও চাকরির জন্য অনুমোদিত মেডিকেল টেস্ট।',
//     subtitle: 'Fast-Track Biometric Screening with Official Embassy & Employment Certificates.',
//     subtitleBn: 'ডিজিটাল চেস্ট এক্স-রে, হেপাটাইটিস ও বায়োমেট্রিক কিউআর কোডসহ একই দিনে সত্যায়িত ফিটনেস সনদ।',
//     highlights: [
//       'Digital Low-Dose Chest X-ray & Screening',
//       'Hepatitis, HIV, TB & Complete Serology',
//       'Authorized Same-Day Fitness Certification',
//     ],
//     highlightsBn: [
//       'লো-রেডিয়েশন ডিজিটাল চেস্ট এক্স-রে ও কার্ডিয়াক পরীক্ষা',
//       'হেপাটাইটিস, যক্ষ্মা ও ড্রাগ স্ক্রিনিং প্যানেল',
//       'একই দিনে আন্তর্জাতিক ও সরকারি স্ট্যান্ডার্ড ফিটনেস রিপোর্ট',
//     ],
//     ctaLabel: 'Find Qualified Doctors',
//     ctaLabelBn: 'বিশেষজ্ঞ ডাক্তার খুঁজুন',
//     ctaAction: 'doctors',
//     accentColor: '#34D399',
//     bgGradient: 'from-[#091D34] via-[#0F3246] to-[#0D4443]',
//     visualTheme: 'overseas',
//   },
// ];

// export default function HeroSlider({
//   lang,
//   onOpenAppointment,
//   onOpenReportModal,
//   onOpenAiGuide,
//   onScrollToDoctors,
// }) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const slideIntervalRef = useRef(null);

//   useEffect(() => {
//     if (isPaused) return;
//     slideIntervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5500);

//     return () => {
//       if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
//     };
//   }, [isPaused]);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//   };

//   const active = SLIDES[currentSlide];

//   const handleCtaClick = (action) => {
//     if (action === 'appointment') onOpenAppointment();
//     else if (action === 'doctors') onScrollToDoctors();
//     else if (action === 'reports') onOpenReportModal();
//     else if (action === 'dental') {
//       const el = document.getElementById('dental');
//       if (el) el.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div 
//       id="home"
//       className="relative w-full bg-[#0B1E33] text-white overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* Background Graphic Grid */}
//       <div className="absolute inset-0 opacity-15 pointer-events-none">
//         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="medical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2DD4BF" strokeWidth="0.8" opacity="0.4" />
//               <circle cx="20" cy="20" r="1.5" fill="#2DD4BF" opacity="0.5" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#medical-grid)" />
//         </svg>
//       </div>

//       {/* Hero Slides Container */}
//       <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center">
//         {SLIDES.map((slide, index) => {
//           const isCurrent = index === currentSlide;
//           return (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center ${
//                 isCurrent 
//                   ? 'opacity-100 translate-x-0 pointer-events-auto' 
//                   : index < currentSlide 
//                   ? 'opacity-0 -translate-x-12 pointer-events-none' 
//                   : 'opacity-0 translate-x-12 pointer-events-none'
//               }`}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-95`} />

//               <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 lg:opacity-40 pointer-events-none overflow-hidden flex items-center justify-center">
//                 {slide.visualTheme === 'multispecialty' && (
//                   <svg className="w-full h-full max-w-[700px] text-teal-400" viewBox="0 0 500 500" fill="none">
//                     <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
//                     <circle cx="250" cy="250" r="160" stroke="#009688" strokeWidth="2" opacity="0.4" />
//                     <rect x="220" y="100" width="60" height="300" rx="16" fill="currentColor" fillOpacity="0.2" />
//                     <rect x="100" y="220" width="300" height="60" rx="16" fill="currentColor" fillOpacity="0.2" />
//                     <path d="M 50 250 L 150 250 L 175 190 L 205 320 L 235 220 L 260 270 L 280 250 L 450 250" stroke="#5EEAD4" strokeWidth="4" strokeLinecap="round" />
//                     <circle cx="205" cy="320" r="8" fill="#5EEAD4" />
//                   </svg>
//                 )}
//                 {slide.visualTheme === 'dental' && (
//                   <svg className="w-full h-full max-w-[700px] text-teal-300" viewBox="0 0 500 500" fill="none">
//                     <circle cx="250" cy="250" r="210" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
//                     <path
//                       d="M 180 140 C 130 140 120 220 140 280 C 155 330 170 380 200 400 C 220 415 240 370 250 330 C 260 370 280 415 300 400 C 330 380 345 330 360 280 C 380 220 370 140 320 140 C 285 140 265 170 250 170 C 235 170 215 140 180 140 Z"
//                       fill="currentColor"
//                       fillOpacity="0.15"
//                       stroke="#2DD4BF"
//                       strokeWidth="3"
//                     />
//                     <path d="M 360 120 L 370 140 L 390 150 L 370 160 L 360 180 L 350 160 L 330 150 L 350 140 Z" fill="#5EEAD4" />
//                     <path d="M 130 160 L 136 175 L 150 180 L 136 185 L 130 200 L 124 185 L 110 180 L 124 175 Z" fill="#5EEAD4" />
//                   </svg>
//                 )}
//                 {slide.visualTheme === 'pathology' && (
//                   <svg className="w-full h-full max-w-[700px] text-sky-400" viewBox="0 0 500 500" fill="none">
//                     <circle cx="250" cy="250" r="200" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="5 5" />
//                     <path d="M 210 120 L 290 120 L 290 200 L 370 340 C 385 365 365 395 335 395 L 165 395 C 135 395 115 365 130 340 L 210 200 Z" fill="currentColor" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="3" />
//                     <ellipse cx="250" cy="350" rx="70" ry="25" fill="#38BDF8" fillOpacity="0.3" />
//                     <circle cx="230" cy="300" r="10" fill="#38BDF8" />
//                     <circle cx="270" cy="270" r="6" fill="#7DD3FC" />
//                     <circle cx="240" cy="230" r="8" fill="#7DD3FC" />
//                   </svg>
//                 )}
//                 {slide.visualTheme === 'overseas' && (
//                   <svg className="w-full h-full max-w-[700px] text-emerald-400" viewBox="0 0 500 500" fill="none">
//                     <circle cx="250" cy="250" r="190" stroke="#34D399" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
//                     <ellipse cx="250" cy="250" rx="190" ry="80" stroke="#34D399" strokeWidth="1.5" strokeDasharray="6 6" />
//                     <line x1="250" y1="60" x2="250" y2="440" stroke="#34D399" strokeWidth="1.5" />
//                     <rect x="200" y="160" width="100" height="140" rx="8" fill="#0B1E33" stroke="#34D399" strokeWidth="2" />
//                     <line x1="220" y1="190" x2="280" y2="190" stroke="#34D399" strokeWidth="2" />
//                     <line x1="220" y1="210" x2="270" y2="210" stroke="#34D399" strokeWidth="2" />
//                     <line x1="220" y1="230" x2="280" y2="230" stroke="#34D399" strokeWidth="2" />
//                     <circle cx="250" cy="270" r="12" fill="#34D399" />
//                   </svg>
//                 )}
//               </div>

//               {/* Content */}
//               <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 w-full">
//                 <div className="max-w-2xl lg:max-w-3xl">
//                   <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
//                     <span className="w-6 h-0.5 bg-teal-400 inline-block" />
//                     <span>{lang === 'bn' ? slide.tagBn : slide.tag}</span>
//                   </div>

//                   <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.15] text-balance">
//                     {lang === 'bn' ? slide.titleBn : slide.title}
//                   </h1>

//                   <p className="text-base sm:text-lg text-slate-200 mb-6 leading-relaxed max-w-2xl font-normal">
//                     {lang === 'bn' ? slide.subtitleBn : slide.subtitle}
//                   </p>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
//                     {(lang === 'bn' ? slide.highlightsBn : slide.highlights).map((item, i) => (
//                       <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-100">
//                         <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
//                         <span className="font-medium">{item}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex flex-wrap items-center gap-3">
//                     <button
//                       onClick={() => handleCtaClick(slide.ctaAction)}
//                       className="px-6 py-3 text-sm font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg shadow-lg hover:shadow-teal-900/40 transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
//                     >
//                       {lang === 'bn' ? slide.ctaLabelBn : slide.ctaLabel}
//                     </button>

//                     <button
//                       onClick={onOpenAiGuide}
//                       className="px-5 py-3 text-sm font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
//                     >
//                       <Sparkles className="w-4 h-4 text-teal-300" />
//                       <span>{lang === 'bn' ? 'স্মার্ট লক্ষণ ম্যাচিং' : 'AI Symptom Matcher'}</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         <button
//           onClick={handlePrev}
//           aria-label="Previous Slide"
//           className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/15 transition-all backdrop-blur-xs cursor-pointer hover:scale-105"
//         >
//           <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//         </button>
//         <button
//           onClick={handleNext}
//           aria-label="Next Slide"
//           className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/15 transition-all backdrop-blur-xs cursor-pointer hover:scale-105"
//         >
//           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//         </button>

//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
//           {SLIDES.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentSlide(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               className={`h-2 rounded-full transition-all cursor-pointer ${
//                 i === currentSlide 
//                   ? 'w-8 bg-teal-400' 
//                   : 'w-2 bg-white/40 hover:bg-white/70'
//               }`}
//             />
//           ))}
//           <span className="text-[11px] font-mono text-slate-300 ml-2">
//             0{currentSlide + 1} / 0{SLIDES.length}
//           </span>
//         </div>
//       </div>

//       {/* Floating Action Strip */}
//       <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 mb-4">
//         <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-3 sm:p-4 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
//           <button
//             onClick={onOpenAppointment}
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50/70 border border-transparent hover:border-teal-200 transition-all text-left cursor-pointer group"
//           >
//             <div className="w-10 h-10 rounded-lg bg-[#009688]/10 text-[#009688] flex items-center justify-center shrink-0 group-hover:bg-[#009688] group-hover:text-white transition-colors">
//               <Calendar className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900 leading-snug">
//                 {lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Book Appointment'}
//               </p>
//               <p className="text-[11px] text-slate-500 line-clamp-1">
//                 {lang === 'bn' ? 'পছন্দের ডাক্তার ও সময়' : 'Choose doctor & slot'}
//               </p>
//             </div>
//           </button>

//           <button
//             onClick={onScrollToDoctors}
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50/70 border border-transparent hover:border-teal-200 transition-all text-left cursor-pointer group"
//           >
//             <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
//               <Stethoscope className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900 leading-snug">
//                 {lang === 'bn' ? 'ডাক্তার খুঁজুন' : 'Find a Doctor'}
//               </p>
//               <p className="text-[11px] text-slate-500 line-clamp-1">
//                 {lang === 'bn' ? 'লাইভ চেম্বার সময়সূচী' : 'View live chamber timings'}
//               </p>
//             </div>
//           </button>

//           <button
//             onClick={onOpenReportModal}
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50/70 border border-transparent hover:border-teal-200 transition-all text-left cursor-pointer group"
//           >
//             <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
//               <FileText className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900 leading-snug">
//                 {lang === 'bn' ? 'অনলাইন টেস্ট রিপোর্ট' : 'Online Test Reports'}
//               </p>
//               <p className="text-[11px] text-slate-500 line-clamp-1">
//                 {lang === 'bn' ? 'আইডি দিয়ে ডাউনলোড' : 'Instant PDF download'}
//               </p>
//             </div>
//           </button>

//           <a
//             href="tel:10620"
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50/70 border border-transparent hover:border-teal-200 transition-all text-left cursor-pointer group"
//           >
//             <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors">
//               <PhoneCall className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900 leading-snug">
//                 {lang === 'bn' ? 'জরুরি কল: ১০৬২০' : 'Emergency: 10620'}
//               </p>
//               <p className="text-[11px] text-slate-500 line-clamp-1">
//                 {lang === 'bn' ? '২৪/৭ অ্যাম্বুলেন্স ও ল্যাব' : '24/7 Ambulance & Lab'}
//               </p>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  FileText, 
  PhoneCall, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Stethoscope
} from 'lucide-react';

import slide1Img from '../../assets/hero/np1.png';
import slide2Img from '../../assets/hero/hero2.jpg';
import slide3Img from '../../assets/hero/hero4.png';
import slide4Img from '../../assets/hero/hero5.png';

const SLIDES = [
  {
    id: 'slide-1',
    tag: 'COMPLETE HEALTHCARE UNDER ONE ROOF',
    tagBn: 'এক ছাদের নিচে পূর্ণাঙ্গ চিকিৎসা সেবা',
    title: 'Your Health. Our Priority.',
    titleBn: 'আপনার স্বাস্থ্য, আমাদের অগ্রাধিকার।',
    subtitle: 'Advanced Healthcare & Diagnostics, Closer to You.',
    subtitleBn: 'উন্নত চিকিৎসা ও নিখুঁত রোগ নির্ণয় এখন আপনার আরও কাছে। অভিজ্ঞ বিশেষজ্ঞ চিকিৎসক ও সর্বাধুনিক প্রযুক্তির নির্ভরযোগ্য প্রতিষ্ঠান।',
    highlights: [
      'Senior Consultants from DU & BSMMU',
      '24/7 Emergency Lab & Diagnostics',
      'Instant Online Reports with QR Verification',
    ],
    highlightsBn: [
      'দেশের শীর্ষস্থানীয় অভিজ্ঞ বিশেষজ্ঞ ডাক্তার',
      '২৪/৭ জরুরি ল্যাব ও ডিজিটাল ডায়াগনস্টিক',
      'অনলাইনে ঘরে বসেই দ্রুত রিপোর্ট দেখার সুবিধা',
    ],
    ctaLabel: 'Book Appointment',
    ctaLabelBn: 'অ্যাপয়েন্টমেন্ট বুক করুন',
    ctaAction: 'appointment',
    accentColor: '#009688',
    bgGradient: 'from-[#0B1E33] via-[#0D2A47] to-[#0A3D4A]',
    image: slide1Img,
  },
  {
    id: 'slide-2',
    tag: 'PINNACLE DENTAL SPECIALTY',
    tagBn: 'পিনাকল ডেন্টাল স্পেশালিস্ট ক্লিনিক',
    title: 'Modern Dental Care. Pain-Free Smiles.',
    titleBn: 'আধুনিক প্রযুক্তিতে ব্যথামুক্ত ডেন্টাল কেয়ার।',
    subtitle: 'Digital OPG Panoramic Imaging, Modern Rotary RCT & Intraoral Cameras.',
    subtitleBn: 'এক সিটিংয়ে ব্যথামুক্ত রুট ক্যানাল, ডিজিটাল প্যানোরামিক এক্স-রে ও স্ক্রিনে সরাসরি দাঁতের দৃশ্য।',
    highlights: [
      'Single-Visit Painless Rotary Endodontics',
      'HD Intraoral Camera — See What Your Dentist Sees',
      '100% Class-B Autoclave Sterilization Protocol',
    ],
    highlightsBn: [
      '১ম সিটিংয়েই আধুনিক রোটারি রুট ক্যানাল চিকিৎসা',
      'এইচডি ক্যামেরায় নিজের দাঁতের অবস্থা সরাসরি পর্যবেক্ষণ',
      'ইউরোপীয় ক্লাস-বি অটোক্লেভ দ্বারা শতভাগ জীবাণুমুক্তকরণ',
    ],
    ctaLabel: 'Explore Dental Care',
    ctaLabelBn: 'ডেন্টাল সেবা দেখুন',
    ctaAction: 'dental',
    accentColor: '#2DD4BF',
    bgGradient: 'from-[#062038] via-[#09354A] to-[#04434B]',
    image: slide2Img,
  },
  {
    id: 'slide-3',
    tag: 'PRECISION PATHOLOGY & LABORATORY',
    tagBn: 'নির্ভুল প্যাথলজি ও অটোমেটেড ল্যাব',
    title: '100% Error-Free Diagnostic Testing.',
    titleBn: 'শতভাগ নির্ভুল ও নির্ভরযোগ্য ল্যাব টেস্ট।',
    subtitle: 'Fully Automated Barcoded Sample Processing & Online PDF Reports.',
    subtitleBn: 'বিশ্বমানের স্বয়ংক্রিয় রক্ত পরীক্ষক যন্ত্র, অভিজ্ঞ প্যাথলজিস্ট এবং একই দিনে অনলাইনে ফলাফল।',
    highlights: [
      'Barcoded Sample Tracking for Zero-Mixup',
      'Thyroid & Hormones Reported in 4 Hours',
      'Trained Home Phlebotomist Blood Collection',
    ],
    highlightsBn: [
      'স্যাম্পল মিক্সআপ রোধে সম্পূর্ণ বারকোডেড ট্র্যাকিং',
      'মাত্র ৪ ঘণ্টায় থাইরয়েড ও হরমোন টেস্টের নিখুঁত রিপোর্ট',
      'দক্ষ ল্যাব টেকনিশিয়ান দ্বারা হোম স্যাম্পল কালেকশন',
    ],
    ctaLabel: 'Check Diagnostic Reports',
    ctaLabelBn: 'অনলাইন রিপোর্ট দেখুন',
    ctaAction: 'reports',
    accentColor: '#38BDF8',
    bgGradient: 'from-[#081B30] via-[#0E2C44] to-[#083E4C]',
    image: slide3Img,
  },
  {
    id: 'slide-4',
    tag: 'OVERSEAS MEDICAL & VISA SCREENING',
    tagBn: 'বিদেশগামী ও ভিসা হেলথ স্ক্রীনিং',
    title: 'Overseas & Pre-Medical Certification.',
    titleBn: 'বিদেশগামী ও চাকরির জন্য অনুমোদিত মেডিকেল টেস্ট।',
    subtitle: 'Fast-Track Biometric Screening with Official Embassy & Employment Certificates.',
    subtitleBn: 'ডিজিটাল চেস্ট এক্স-রে, হেপাটাইটিস ও বায়োমেট্রিক কিউআর কোডসহ একই দিনে সত্যায়িত ফিটনেস সনদ।',
    highlights: [
      'Digital Low-Dose Chest X-ray & Screening',
      'Hepatitis, HIV, TB & Complete Serology',
      'Authorized Same-Day Fitness Certification',
    ],
    highlightsBn: [
      'লো-রেডিয়েশন ডিজিটাল চেস্ট এক্স-রে ও কার্ডিয়াক পরীক্ষা',
      'হেপাটাইটিস, যক্ষ্মা ও ড্রাগ স্ক্রিনিং প্যানেল',
      'একই দিনে আন্তর্জাতিক ও সরকারি স্ট্যান্ডার্ড ফিটনেস রিপোর্ট',
    ],
    ctaLabel: 'Find Qualified Doctors',
    ctaLabelBn: 'বিশেষজ্ঞ ডাক্তার খুঁজুন',
    ctaAction: 'doctors',
    accentColor: '#34D399',
    bgGradient: 'from-[#091D34] via-[#0F3246] to-[#0D4443]',
    image: slide4Img, 
  },
];

export default function HeroSlider({
  lang,
  onOpenAppointment,
  onOpenReportModal,
  onOpenAiGuide,
  onScrollToDoctors,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    slideIntervalRef.current = setInterval(() => {
      // 1 -> 2 -> 3 -> 4 -> 1 (infinite loop)
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handleCtaClick = (action) => {
    if (action === 'appointment') onOpenAppointment();
    else if (action === 'doctors') onScrollToDoctors();
    else if (action === 'reports') onOpenReportModal();
    else if (action === 'dental') {
      const el = document.getElementById('dental');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="home"
      className="relative w-full bg-[#0B1E33] text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hero Slides Container */}
      <div className="relative min-h-50 sm:min-h-100 lg:min-h-125 flex items-center">
        {SLIDES.map((slide, index) =>{
          const isCurrent = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center ${
                isCurrent 
                  ? 'opacity-150 translate-x-0 pointer-events-auto' 
                  : index < currentSlide 
                  ? 'opacity-0 -translate-x-12 pointer-events-none' 
                  : 'opacity-0 translate-x-12 pointer-events-none'
              }`}
            >
              {/* Background Image Setup */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33]/95 via-[#0B1E33]/50 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 w-full">
                <div className="max-w-2xl lg:max-w-3xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                    <span className="w-6 h-0.5 bg-teal-400 inline-block" />
                    <span>{lang === 'bn' ? slide.tagBn : slide.tag}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.15] text-balance drop-shadow-md">
                    {lang === 'bn' ? slide.titleBn : slide.title}
                  </h1>

                  <p className="text-base sm:text-lg text-slate-100 mb-6 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
                    {lang === 'bn' ? slide.subtitleBn : slide.subtitle}
                  </p>

                  {/* Highlights — শুধু প্রথম ২টি, এক কলামে (বাম দিকে) */}
                  <div className="flex flex-col gap-2.5 mb-8">
                    {(lang === 'bn' ? slide.highlightsBn : slide.highlights)
                      .slice(0, 2)
                      .map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white drop-shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => handleCtaClick(slide.ctaAction)}
                      className="px-4 py-2 text-sm font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg shadow-lg hover:shadow-teal-900/40 transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      {lang === 'bn' ? slide.ctaLabelBn : slide.ctaLabel}
                    </button>

                    <button
                      onClick={onOpenAiGuide}
                      className="px-4 py-2 text-sm font-bold text-slate-100 hover:text-white bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-teal-300" />
                      <span>{lang === 'bn' ? 'স্মার্ট লক্ষণ ম্যাচিং' : 'AI Symptom Matcher'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/15 transition-all backdrop-blur-xs cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/15 transition-all backdrop-blur-xs cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots — "04/04" লেবেল বাদ দেওয়া হয়েছে */}
        <div className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentSlide 
                  ? 'w-8 bg-teal-400' 
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Strip */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 mb-4">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-3 sm:p-4 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          <button
            onClick={onOpenAppointment}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50/70 border border-transparent hover:border-teal-200 transition-all text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#009688]/10 text-[#009688] flex items-center justify-center shrink-0 group-hover:bg-[#009688] group-hover:text-white transition-colors">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                {lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Book Appointment'}
              </p>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                {lang === 'bn' ? 'পছন্দের ডাক্তার ও সময়' : 'Choose doctor & slot'}
              </p>
            </div>
          </button>

          <button
            onClick={onScrollToDoctors}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50/70 border border-transparent hover:border-teal-200 transition-all text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                {lang === 'bn' ? 'ডাক্তার খুঁজুন' : 'Find a Doctor'}
              </p>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                {lang === 'bn' ? 'লাইভ চেম্বার সময়সূচী' : 'View live chamber timings'}
              </p>
            </div>
          </button>

          <button
            onClick={onOpenReportModal}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50/70 border border-transparent hover:border-teal-200 transition-all text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                {lang === 'bn' ? 'অনলাইন টেস্ট রিপোর্ট' : 'Online Test Reports'}
              </p>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                {lang === 'bn' ? 'আইডি দিয়ে ডাউনলোড' : 'Instant PDF download'}
              </p>
            </div>
          </button>

          <a
            href="tel:10620"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50/70 border border-transparent hover:border-teal-200 transition-all text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                {lang === 'bn' ? 'জরুরি কল: ১০৬২০' : 'Emergency: 10620'}
              </p>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                {lang === 'bn' ? '২৪/৭ অ্যাম্বুলেন্স ও ল্যাব' : '24/7 Ambulance & Lab'}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
// import React from 'react';
// import { HEALTH_PACKAGES } from '../../data/mockData';
// import { 
//   Check, 
//   Calendar, 
//   Clock, 
//   Plane
// } from 'lucide-react';

// export default function PackagesSection({
//   lang,
//   onSelectPackage,
//   onOpenAppointment,
// }) {
//   return (
//     <section id="packages" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center max-w-3xl mx-auto mb-14">
//           <span className="text-xs font-bold uppercase tracking-wider text-[#009688] mb-2 block">
//             {lang === 'bn' ? 'প্রিভেন্টিভ কেয়ার ও স্পেশাল হেলথ প্যাকেজ' : 'Preventive Care & Health Screening Packages'}
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E33] tracking-tight mb-4">
//             {lang === 'bn' 
//               ? 'সাশ্রয়ী মূল্যে পূর্ণাঙ্গ শরীর ও বিদেশগামী মেডিকেল চেকআপ' 
//               : 'Comprehensive Health & Overseas Medical Checkups'}
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600">
//             {lang === 'bn'
//               ? 'রোগ হওয়ার আগেই প্রতিরোধ করুন। হোল বডি, ডায়াবেটিস ও ভিসা মেডিকেল প্যাকেজে রয়েছে বিশেষ ডিসকাউন্ট এবং একই দিনে রিপোর্ট।'
//               : 'Designed to proactively detect risks early. Transparent pricing in BDT, authorized visa screening tests, and same-day certified reports.'}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {HEALTH_PACKAGES.map((pkg) => {
//             const savings = pkg.regularPrice - pkg.discountedPrice;
//             const savingsPercent = Math.round((savings / pkg.regularPrice) * 100);

//             return (
//               <div
//                 key={pkg.id}
//                 className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between relative bg-white border ${
//                   pkg.popular
//                     ? 'border-[#009688] ring-2 ring-[#009688]/20 shadow-xl'
//                     : 'border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg'
//                 }`}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#009688] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
//                     {lang === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
//                   </div>
//                 )}

//                 <div>
//                   <div className="mb-4">
//                     <span className="text-[11px] font-bold text-[#009688] uppercase tracking-wider block mb-1">
//                       {pkg.testsCount} {lang === 'bn' ? 'টি গুরুত্বপূর্ণ টেস্ট' : 'Comprehensive Tests'}
//                     </span>
//                     <h3 className="text-lg font-extrabold text-[#0B1E33] leading-snug">
//                       {lang === 'bn' ? pkg.titleBn : pkg.title}
//                     </h3>
//                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
//                       {lang === 'bn' ? pkg.subtitleBn : pkg.subtitle}
//                     </p>
//                   </div>

//                   <div className="bg-slate-50 rounded-xl p-3.5 mb-5 border border-slate-100">
//                     <div className="flex items-baseline gap-2">
//                       <span className="text-2xl font-extrabold text-[#0B1E33] font-mono">
//                         ৳{pkg.discountedPrice}
//                       </span>
//                       <span className="text-xs line-through text-slate-400 font-mono">
//                         ৳{pkg.regularPrice}
//                       </span>
//                       <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded ml-auto">
//                         {savingsPercent}% {lang === 'bn' ? 'ছাড়' : 'OFF'}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-1.5 text-[11px] text-slate-600 mt-2 font-medium">
//                       <Clock className="w-3.5 h-3.5 text-[#009688] shrink-0" />
//                       <span>{lang === 'bn' ? pkg.turnaroundTimeBn : pkg.turnaroundTime}</span>
//                     </div>
//                   </div>

//                   <div className="mb-4 text-xs font-semibold text-slate-700 bg-teal-50/50 p-2.5 rounded-lg border border-teal-100">
//                     <span className="text-[#009688] block text-[10px] uppercase font-bold">
//                       {lang === 'bn' ? 'যাদের জন্য প্রযোজ্য:' : 'Recommended For:'}
//                     </span>
//                     <span>{lang === 'bn' ? pkg.idealForBn : pkg.idealFor}</span>
//                   </div>

//                   <div className="space-y-2 mb-6">
//                     <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
//                       {lang === 'bn' ? 'প্যাকেজের প্রধান টেস্টসমূহ:' : 'Included Tests:'}
//                     </span>
//                     {(lang === 'bn' ? pkg.includedItemsBn : pkg.includedItems).slice(0, 5).map((item, i) => (
//                       <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
//                         <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
//                         <span className="line-clamp-1">{item}</span>
//                       </div>
//                     ))}
//                     {pkg.includedItems.length > 5 && (
//                       <p className="text-[11px] text-slate-400 italic pl-5">
//                         +{pkg.includedItems.length - 5} {lang === 'bn' ? 'টি আরও টেস্ট অন্তর্ভুক্ত' : 'more parameters included'}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => {
//                     onSelectPackage(pkg);
//                     onOpenAppointment();
//                   }}
//                   className={`w-full py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
//                     pkg.popular
//                       ? 'bg-[#009688] hover:bg-[#00897b] text-white shadow-md'
//                       : 'bg-slate-900 hover:bg-[#009688] text-white'
//                   }`}
//                 >
//                   <Calendar className="w-3.5 h-3.5" />
//                   <span>{lang === 'bn' ? 'প্যাকেজ বুক করুন' : 'Book Package'}</span>
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-12 bg-[#0B1E33] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
//           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
//             <div className="max-w-2xl text-center lg:text-left">
//               <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 uppercase tracking-wider mb-2">
//                 <Plane className="w-4 h-4 text-teal-300" />
//                 <span>{lang === 'bn' ? 'আন্তর্জাতিক যাত্রী ও ভিসা প্রি-মেডিকেল ডেস্ক' : 'Authorized Overseas & Visa Medical Hub'}</span>
//               </div>
//               <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
//                 {lang === 'bn' 
//                   ? 'মধ্যপ্রাচ্য ও ইউরোপ গমনকারীদের জন্য ফাস্ট-ট্র্যাক মেডিকেল টেস্ট' 
//                   : 'Fast-Track Medical Clearance for Overseas Travelers & Employment'}
//               </h3>
//               <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
//                 {lang === 'bn'
//                   ? 'বায়োমেট্রিক আইডি, ডিজিটাল চেস্ট এক্স-রে, হেপাটাইটিস, যক্ষ্মা ও মাদক পরীক্ষা। কোনো দীর্ঘ লাইনে দাঁড়ানো ছাড়া একই দিনে অফিশিয়াল সার্টিফাইড রিপোর্ট ডেলিভারি।'
//                   : 'DGHS authorized laboratory providing digital chest radiography, full infectious disease screening, and QR-verified fitness certificates for student and work visas.'}
//               </p>
//             </div>

//             <div className="flex items-center gap-3 shrink-0">
//               <button
//                 onClick={onOpenAppointment}
//                 className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-lg transition-colors cursor-pointer whitespace-nowrap"
//               >
//                 {lang === 'bn' ? 'ভিসা মেডিকেল সিরিয়াল নিন' : 'Book Visa Medical Test'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import { HEALTH_PACKAGES } from '../../data/mockData';
import { 
  Calendar, 
  Info,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Plane,
} from 'lucide-react';

// আপনার assets ফোল্ডার থেকে প্যাকেজের ছবিগুলো এখানে ইমপোর্ট করুন
import packageImg1 from '../../assets/packages/c1.jpg';
import packageImg3 from '../../assets/packages/c3.jpg';
import packageImg4 from '../../assets/packages/c4.png';
import packageImg5 from '../../assets/packages/c5.png';
import packageImg6 from '../../assets/packages/c6.jpg';
import packageImg7 from '../../assets/packages/c7.png';
import packageImg8 from '../../assets/packages/c8.png';
import packageImg9 from '../../assets/packages/c9.jpg';
import packageImg10 from '../../assets/packages/c10.png';

// ================= সব ইমেজের অ্যারে (fallback এর জন্য) =================
const PACKAGE_IMAGES = [
  packageImg1,
  packageImg3,
  packageImg4,
  packageImg5,
  packageImg6,
  packageImg7,
  packageImg8,
  packageImg9,
  packageImg10,
];

// ================= নির্দিষ্ট ID অনুযায়ী ইমেজ ম্যাপিং =================
const packageImageMap = {
  'pkg-cardiac': packageImg1,
  'pkg-women': packageImg3,
  'pkg-men': packageImg4,
  'pkg-senior': packageImg5,
  'pkg-child': packageImg6,
  'pkg-1': packageImg7,
  'pkg-2': packageImg8,
  'pkg-3': packageImg9,
  'pkg-4': packageImg10,
  'pkg-5': packageImg1,
  'pkg-6': packageImg3,
  'pkg-7': packageImg4,
  'pkg-8': packageImg5,
};

// ================= ৫টি নতুন হেলথ প্যাকেজ =================
const EXTRA_PACKAGES = [
  {
    id: 'pkg-cardiac',
    title: 'Cardiac Risk Assessment',
    titleBn: 'কার্ডিয়াক রিস্ক অ্যাসেসমেন্ট',
    regularPrice: 7000,
    discountedPrice: 4500,
    testsCount: 12,
    image: packageImg1,
    includedItems: ['Lipid Profile', 'ECG', 'Echocardiogram', 'Blood Sugar', 'CBC'],
    includedItemsBn: ['লিপিড প্রোফাইল', 'ইসিজি', 'ইকোকার্ডিওগ্রাম', 'ব্লাড সুগার', 'সিবিসি'],
  },
  {
    id: 'pkg-women',
    title: "Women's Wellness Package",
    titleBn: 'নারী স্বাস্থ্য ও ওয়েলনেস প্যাকেজ',
    regularPrice: 8500,
    discountedPrice: 5500,
    testsCount: 15,
    image: packageImg3,
    includedItems: ['CBC', 'Thyroid Profile', 'Vitamin D', 'Pap Smear', 'Ultrasound'],
    includedItemsBn: ['সিবিসি', 'থাইরয়েড প্রোফাইল', 'ভিটামিন ডি', 'প্যাপ স্মেয়ার', 'আল্ট্রাসাউন্ড'],
  },
  {
    id: 'pkg-men',
    title: "Men's Health Checkup",
    titleBn: 'পুরুষদের স্বাস্থ্য চেকআপ',
    regularPrice: 8000,
    discountedPrice: 5000,
    testsCount: 14,
    image: packageImg4,
    includedItems: ['PSA (Prostate)', 'CBC', 'Lipid Profile', 'Liver Function', 'Kidney Function'],
    includedItemsBn: ['পিএসএ (প্রোস্টেট)', 'সিবিসি', 'লিপিড প্রোফাইল', 'লিভার ফাংশন', 'কিডনি ফাংশন'],
  },
  {
    id: 'pkg-senior',
    title: 'Senior Citizen Health Package',
    titleBn: 'প্রবীণ নাগরিক স্বাস্থ্য প্যাকেজ',
    regularPrice: 12000,
    discountedPrice: 7500,
    testsCount: 20,
    image: packageImg5,
    includedItems: ['ECG', 'Chest X-Ray', 'Blood Sugar', 'Lipid Profile', 'Urine Analysis'],
    includedItemsBn: ['ইসিজি', 'চেস্ট এক্স-রে', 'ব্লাড সুগার', 'লিপিড প্রোফাইল', 'ইউরিন অ্যানালাইসিস'],
  },
  {
    id: 'pkg-child',
    title: 'Child Health & Nutrition',
    titleBn: 'শিশু স্বাস্থ্য ও পুষ্টি প্যাকেজ',
    regularPrice: 5000,
    discountedPrice: 3200,
    testsCount: 8,
    image: packageImg6,
    includedItems: ['CBC', 'Blood Sugar', 'Urine Test', 'Calcium', 'Iron Study'],
    includedItemsBn: ['সিবিসি', 'ব্লাড সুগার', 'ইউরিন টেস্ট', 'ক্যালসিয়াম', 'আয়রন স্টাডি'],
  }
];

// মূল ডাটার সাথে নতুন প্যাকেজগুলো মার্জ করা
const ALL_PACKAGES = [...HEALTH_PACKAGES, ...EXTRA_PACKAGES];

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

export default function PackagesSection({
  lang,
  onSelectPackage,
  onOpenAppointment,
}) {
  return (
    // 👇 উপরের padding কমিয়ে py-10 sm:py-16 করা হয়েছে
    <section id="packages" className="py-10 sm:py-16 bg-white relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= Section Header with Reveal ================= */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0284c7] mb-2">
              {lang === 'bn' ? 'প্রিভেন্টিভ কেয়ার ও স্পেশাল হেলথ প্যাকেজ' : 'Preventive Care & Health Screening Packages'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
              {lang === 'bn' 
                ? 'সাশ্রয়ী মূল্যে পূর্ণাঙ্গ শরীর ও মেডিকেল চেকআপ' 
                : 'Comprehensive Health & Medical Checkups'}
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              {lang === 'bn'
                ? 'রোগ হওয়ার আগেই প্রতিরোধ করুন। হোল বডি, ডায়াবেটিস ও স্পেশাল প্যাকেজে রয়েছে বিশেষ ছাড়।'
                : 'Designed to proactively detect risks early. Transparent pricing and certified reports.'}
            </p>
          </div>
        </Reveal>

        {/* ================= Packages Grid with Staggered Reveal ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALL_PACKAGES.map((pkg, idx) => {
            const packageImage =
              packageImageMap[pkg.id] ||
              pkg.image ||
              PACKAGE_IMAGES[idx % PACKAGE_IMAGES.length];

            return (
              <Reveal
                key={pkg.id}
                direction="up"
                delay={idx * 60}
                className="w-full"
              >
                <div className="h-full bg-white border-2 border-sky-100 rounded-[20px] p-4 flex flex-col hover:shadow-[0_15px_40px_rgba(2,132,199,0.15)] hover:border-sky-300 hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden">
                  
                  {/* Hover Gradient Glow (Top Right) */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-teal-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                  {/* Image Section with Medical Verified Badge */}
                  <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 z-10">
                    <img 
                      src={packageImage} 
                      alt={lang === 'bn' ? pkg.titleBn : pkg.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.target.src = packageImg1;
                      }}
                    />
                    {/* Image Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Medical Verified Badge */}
                    <div className="absolute bottom-2 left-2 bg-[#2B4B6F] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm backdrop-blur-sm group-hover:bg-[#0284c7] transition-colors duration-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-300 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Medical Verified</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-center text-[#0369a1] font-extrabold text-[15px] leading-snug min-h-[46px] flex items-center justify-center px-2 mb-2 group-hover:text-[#0284c7] transition-colors duration-300">
                    {lang === 'bn' ? pkg.titleBn : pkg.title}
                  </h3>

                  {/* Pricing Box */}
                  <div className="relative z-10 bg-sky-50/50 border border-sky-100 rounded-xl p-3 text-center mb-4 mt-2 group-hover:bg-sky-50 group-hover:border-sky-200 transition-all duration-500">
                    {pkg.regularPrice && (
                      <p className="text-[11px] font-bold text-red-500 mb-1.5">
                        Regular Price : <span className="line-through">৳ {pkg.regularPrice} BDT</span>
                      </p>
                    )}
                    <p className="text-sm font-extrabold text-emerald-600 group-hover:scale-105 inline-block transition-transform duration-300">
                      {pkg.discountedPrice ? 'Discount Price' : 'Package Price'} : ৳ {pkg.discountedPrice || pkg.regularPrice} BDT
                    </p>
                  </div>

                  {/* Features (Checkmarks) */}
                  <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] font-bold text-slate-500 mb-5">
                    <div className="flex items-center gap-1 group-hover:text-emerald-600 transition-colors duration-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      <span>Complete Lab Panels</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-sky-600 transition-colors duration-300">
                      <Monitor className="w-3.5 h-3.5 text-sky-500 group-hover:scale-110 transition-transform duration-300" />
                      <span>Online Report</span>
                    </div>
                  </div>

                  {/* Action Buttons (Book Now & Details) */}
                  <div className="relative z-10 grid grid-cols-2 gap-2.5 mt-auto">
                    <button
                      onClick={() => {
                        onSelectPackage(pkg);
                        onOpenAppointment();
                      }}
                      className="bg-[#0284c7] hover:bg-[#0369a1] text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-300 shadow-sm hover:shadow-[0_5px_15px_rgba(2,132,199,0.4)] hover:scale-105 active:scale-95 group/btn"
                    >
                      <Calendar className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      {lang === 'bn' ? 'বুক করুন' : 'Book Now'}
                    </button>
                    <button
                      onClick={() => console.log('Details clicked for', pkg.id)}
                      className="bg-white border-[1.5px] border-[#0284c7] text-[#0284c7] hover:bg-sky-50 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md"
                    >
                      <Info className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                      {lang === 'bn' ? 'বিস্তারিত' : 'Details'}
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ================= Overseas Medical Banner with Reveal ================= */}
        <Reveal direction="up" delay={200}>
          <div className="mt-16 bg-[#0B1E33] rounded-[24px] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-slate-800 hover:border-sky-500/40 transition-colors duration-500 group">
            
            {/* Animated Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-sky-400/30 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                  <Plane className="w-4 h-4 text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  <span>{lang === 'bn' ? 'আন্তর্জাতিক যাত্রী ও ভিসা প্রি-মেডিকেল ডেস্ক' : 'Authorized Overseas & Visa Medical Hub'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-white">
                  {lang === 'bn' 
                    ? 'মধ্যপ্রাচ্য ও ইউরোপ গমনকারীদের জন্য ফাস্ট-ট্র্যাক মেডিকেল টেস্ট' 
                    : 'Fast-Track Medical Clearance for Travelers'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {lang === 'bn'
                    ? 'বায়োমেট্রিক আইডি, ডিজিটাল চেস্ট এক্স-রে, হেপাটাইটিস ও যক্ষ্মা পরীক্ষা। কোনো দীর্ঘ লাইন ছাড়া একই দিনে অফিশিয়াল রিপোর্ট।'
                    : 'DGHS authorized laboratory providing digital chest radiography, full infectious disease screening, and QR-verified certificates.'}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-xl shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 active:scale-95 hover:shadow-[0_10px_30px_rgba(2,132,199,0.5)]"
                >
                  {lang === 'bn' ? 'ভিসা মেডিকেল সিরিয়াল নিন' : 'Book Visa Medical Test'}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
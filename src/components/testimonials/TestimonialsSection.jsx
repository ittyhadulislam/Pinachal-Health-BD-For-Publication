// import React from 'react';
// import { REVIEWS_DATA } from '../../data/mockData';
// import { Star, ShieldCheck } from 'lucide-react';

// export default function TestimonialsSection({ lang }) {
//   return (
//     <section className="py-16 sm:py-24 bg-white relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center max-w-3xl mx-auto mb-14">
//           <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#009688] mb-2">
//             <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
//             <span>{lang === 'bn' ? 'রোগীদের বিশ্বাস ও মতামত' : 'Patient Trust & Experience'}</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E33] tracking-tight mb-4">
//             {lang === 'bn' 
//               ? 'আমাদের চিকিৎসা সেবায় সুস্থ ও সন্তুষ্ট রোগীদের গল্প' 
//               : 'Real Patient Stories & Verified Experiences'}
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600">
//             {lang === 'bn'
//               ? 'গুগল রিভিউ এবং হাজারো রোগীর আস্থা—আমরা প্রতিটি রোগীর যত্ন নিই পরিবারের মতো।'
//               : 'Over 15,000+ patients served across Dhaka with transparent clinical precision and warm hospitality.'}
//           </p>
//         </div>

//         <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center font-bold text-lg text-slate-900">
//               G
//             </div>
//             <div>
//               <div className="flex items-center gap-1 text-amber-400 justify-center sm:justify-start">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 fill-amber-400" />
//                 ))}
//                 <span className="text-sm font-extrabold text-slate-900 ml-1">4.9 / 5.0</span>
//               </div>
//               <p className="text-xs text-slate-500 font-medium">
//                 {lang === 'bn' ? '৮৫০+ ভেরিফাইড গুগল রিভিউ' : 'Based on 850+ Google Reviews'}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-6 text-xs text-slate-700">
//             <div className="text-center">
//               <span className="text-lg font-extrabold text-[#009688] font-mono block">15k+</span>
//               <span className="text-[11px] text-slate-500">{lang === 'bn' ? 'সুস্থ রোগী' : 'Treated'}</span>
//             </div>
//             <div className="h-8 w-px bg-slate-200" />
//             <div className="text-center">
//               <span className="text-lg font-extrabold text-[#009688] font-mono block">99.8%</span>
//               <span className="text-[11px] text-slate-500">{lang === 'bn' ? 'নির্ভুলতা' : 'Accuracy'}</span>
//             </div>
//             <div className="h-8 w-px bg-slate-200" />
//             <div className="text-center">
//               <span className="text-lg font-extrabold text-[#009688] font-mono block">24/7</span>
//               <span className="text-[11px] text-slate-500">{lang === 'bn' ? 'ল্যাব সার্ভিস' : 'Lab Open'}</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {REVIEWS_DATA.map((rev) => (
//             <div
//               key={rev.id}
//               className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex items-center justify-between gap-2 mb-3">
//                   <div className="flex items-center text-amber-400">
//                     {[...Array(rev.rating)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 fill-amber-400" />
//                     ))}
//                   </div>
//                   <span className="text-[11px] font-semibold text-slate-400">{rev.date}</span>
//                 </div>

//                 <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
//                   "{lang === 'bn' ? rev.commentBn : rev.comment}"
//                 </p>
//               </div>

//               <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-900">
//                     {lang === 'bn' ? rev.authorBn : rev.author}
//                   </h4>
//                   <span className="text-[11px] text-[#009688] font-semibold">
//                     {lang === 'bn' ? rev.serviceCategoryBn : rev.serviceCategory}
//                   </span>
//                 </div>

//                 {rev.verified && (
//                   <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
//                     <ShieldCheck className="w-3 h-3 text-emerald-600" />
//                     <span>Verified</span>
//                   </span>
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
import { REVIEWS_DATA } from '../../data/mockData';
import { Star, Quote } from 'lucide-react';

import reviewer1 from '../../assets/testimonials/p1.jpg';
import reviewer2 from '../../assets/testimonials/p2.png';
import reviewer3 from '../../assets/testimonials/p3.jpg';
import reviewer4 from '../../assets/doctors/d2.jpg';
import reviewer5 from '../../assets/testimonials/p5.jpg';

const REVIEWER_IMAGES = [reviewer1, reviewer2, reviewer3, reviewer4, reviewer5];

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
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// ==================== Reveal Wrapper ====================
function Reveal({ children, delay = 0, direction = 'right', className = '' }) {
  const [ref, isVisible] = useScrollReveal();

  const dirClass = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: '-translate-x-16',
    right: 'translate-x-16',
    scale: 'scale-90',
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

export default function TestimonialsSection({ lang }) {
  // ==================== Carousel Pagination State ====================
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex + itemsPerPage >= REVIEWS_DATA.length
          ? 0
          : prevIndex + itemsPerPage;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // বর্তমানে যে রিভিউগুলো দেখানো হবে
  const visibleReviews = REVIEWS_DATA.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-10 sm:py-16 bg-white relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= Header Section with Reveal ================= */}
        <Reveal direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-14">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-2">
              {/* Pill Badge */}
              <span className="bg-sky-100 text-sky-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300">
                {lang === 'bn' ? 'রোগীদের মতামত' : 'Patient Feedback'}
              </span>
              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-800 uppercase tracking-tight">
                {lang === 'bn' ? 'আমাদের ক্লায়েন্টরা যা বলেন' : 'What Our Clients Say'}
              </h2>
            </div>
            
            {/* Decorative Underline with Animated Dots */}
            <div className="flex items-center gap-2 mb-6 mt-2">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
              <div className="w-20 h-1.5 bg-sky-600 rounded-full"></div>
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
            </div>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
              {lang === 'bn' 
                ? 'প্রার্থী, ডাক্তার এবং রোগীদের থেকে বাস্তব প্রতিক্রিয়া' 
                : 'Real feedback from candidates, doctors, and patients'}
            </p>
          </div>
        </Reveal>

        {/* ================= Testimonials Grid with Slide-from-Right Animation ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleReviews.map((rev, idx) => {
            // আসল ডেটার ইনডেক্স বের করার জন্য (যাতে ছবি ঠিকভাবে ম্যাপ হয়)
            const globalIndex = currentIndex + idx;
            const reviewerImg = REVIEWER_IMAGES[globalIndex % REVIEWER_IMAGES.length];

            return (
              <Reveal
                key={rev.id}
                direction="right"
                delay={idx * 200}
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl border border-slate-100 p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(2,132,199,0.15)] hover:border-sky-200 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                  
                  {/* Hover Gradient Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-teal-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Background Quote Mark */}
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-slate-100 group-hover:text-sky-100 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 pointer-events-none" />

                  {/* ==================== Profile Image (Fixed Format) ==================== */}
                  <div className="relative z-10 mb-5">
                    {/* Pulse Ring on Hover */}
                    <div className="absolute inset-0 rounded-full bg-sky-400/30 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-ping" />
                    
                    {/* Fixed size circular avatar container */}
                    <div className="w-24 h-24 rounded-full border-4 border-sky-500 overflow-hidden bg-slate-100 shadow-md relative z-10 group-hover:scale-110 group-hover:border-sky-600 group-hover:shadow-[0_0_25px_rgba(2,132,199,0.4)] transition-all duration-500 flex items-center justify-center">
                      <img
                        src={reviewerImg}
                        alt={lang === 'bn' ? rev.authorBn : rev.author}
                        className="w-full h-full object-cover object-center aspect-square"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://ui-avatars.com/api/?name=" + (rev.author || 'User') + "&background=0284c7&color=fff&size=200";
                        }}
                      />
                    </div>
                  </div>
                  {/* ==================== End Profile Image ==================== */}

                  {/* Name */}
                  <h3 className="text-sky-600 font-extrabold uppercase tracking-widest text-sm mb-1 relative z-10 group-hover:text-sky-700 transition-colors duration-300">
                    {lang === 'bn' ? rev.authorBn : rev.author}
                  </h3>

                  {/* Role / Designation */}
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4 relative z-10">
                    {lang === 'bn' ? rev.serviceCategoryBn : rev.serviceCategory}
                  </p>

                  {/* Star Rating - Staggered Hover Animation */}
                  <div className="flex gap-1 text-amber-400 mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-amber-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-500 italic text-sm leading-relaxed relative z-10 px-2 group-hover:text-slate-600 transition-colors duration-300">
                    "{lang === 'bn' ? rev.commentBn : rev.comment}"
                  </p>

                  {/* Bottom Accent Line on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-600 to-teal-400 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 rounded-b-2xl" />
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
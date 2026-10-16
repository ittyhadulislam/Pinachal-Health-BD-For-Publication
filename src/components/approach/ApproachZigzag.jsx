// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// export default function ApproachZigzag({
//   lang,
//   onOpenAppointment,
//   onOpenReportModal,
// }) {
//   return (
//     <section 
//       id="approach" 
//       className="py-16 sm:py-24 bg-[#00808C] text-white relative overflow-hidden"
//     >
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="10%" cy="20%" r="300" fill="white" filter="blur(60px)" opacity="0.15" />
//           <circle cx="90%" cy="80%" r="350" fill="white" filter="blur(80px)" opacity="0.15" />
//         </svg>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
//         <div className="text-center mb-16 sm:mb-20">
//           <h2 
//             className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal mb-3 tracking-wide"
//             style={{ fontFamily: "'Caveat', cursive" }}
//           >
//             {lang === 'bn' 
//               ? 'Accurate Diagnosis. Advanced Treatment. Complete Care.'
//               : 'Accurate Diagnosis. Advanced Treatment. Complete Care.'}
//           </h2>
//           <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-teal-100">
//             {lang === 'bn'
//               ? 'নিখুঁত রোগ নির্ণয় + আধুনিক চিকিৎসা = দীর্ঘস্থায়ী সুস্থতা'
//               : 'Accurate Diagnostics + Specialist Expertise = Lifelong Well-being'}
//           </p>
//           <div className="w-16 h-0.5 bg-teal-200/60 mx-auto mt-4 rounded-full" />
//         </div>

//         <div className="space-y-14 sm:space-y-20">
//           {/* BLOCK 1: Diagnosis */}
//           <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
//             <div className="lg:col-span-8 relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0B2538] to-[#044452] border border-white/20 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-6 sm:p-8">
//               <span 
//                 className="absolute top-4 left-6 text-4xl sm:text-5xl text-white/90 drop-shadow-md select-none pointer-events-none z-10"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//               >
//                 Diagnosis.
//               </span>

//               <div className="relative w-full h-full flex flex-col justify-end text-white">
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#051F30]/90 via-[#051F30]/40 to-transparent z-0" />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-35">
//                   <svg className="w-4/5 h-4/5 text-teal-300" viewBox="0 0 200 200" fill="none">
//                     <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
//                     <rect x="70" y="40" width="60" height="90" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
//                     <circle cx="100" cy="80" r="14" stroke="#5EEAD4" strokeWidth="2" />
//                     <line x1="80" y1="110" x2="120" y2="110" stroke="#5EEAD4" strokeWidth="2" />
//                     <line x1="85" y1="120" x2="115" y2="120" stroke="#5EEAD4" strokeWidth="2" />
//                   </svg>
//                 </div>

//                 <div className="relative z-10 p-2 sm:p-4">
//                   <span className="text-[11px] font-mono tracking-wider text-teal-300 uppercase block mb-1">
//                     Automated Pathology & Digital Radiology
//                   </span>
//                   <p className="text-sm sm:text-base font-medium text-slate-100 max-w-md">
//                     Zero-compromise diagnostic evidence with barcoded automated biochemistry, digital chest X-ray & full panoramic OPG.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-6 lg:-ml-16 relative z-20 bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-2xl border border-teal-100">
//               <h3 className="text-xl sm:text-2xl font-extrabold text-[#00808C] mb-1">
//                 {lang === 'bn' ? 'Accurate Diagnosis.' : 'Accurate Diagnosis.'}
//               </h3>
//               <p className="text-sm font-bold text-slate-700 mb-4">
//                 {lang === 'bn' ? 'সঠিক চিকিৎসার প্রথম শর্ত নিখুঁত রোগ নির্ণয়' : 'Be actively involved in your own healthcare'}
//               </p>
              
//               <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
//                 <p className="leading-relaxed">
//                   {lang === 'bn' 
//                     ? 'আমাদের সম্পূর্ণ অটোমেটেড ল্যাবরেটরিতে রক্ত, হরমোন ও বায়োকেমিস্ট্রি টেস্ট শতভাগ নির্ভুলভাবে সম্পন্ন হয়।'
//                     : 'Work with our precision pathology team and automated biochemical analyzers to uncover the exact source of illness.'}
//                 </p>
//                 <p className="leading-relaxed">
//                   {lang === 'bn'
//                     ? 'প্রতিটি রিপোর্টে রয়েছে স্পষ্ট রেফারেন্স ভ্যালু এবং মোবাইল ফোনে ডিজিটাল ভেরিফিকেশন সুবিধা।'
//                     : 'Access transparent digital report dashboards with highlighted abnormal parameters and direct doctor consultations.'}
//                 </p>
//               </div>

//               <button
//                 onClick={onOpenReportModal}
//                 className="inline-flex items-center gap-2 text-xs font-bold text-[#00808C] hover:text-[#005e67] transition-colors cursor-pointer group"
//               >
//                 <span>{lang === 'bn' ? 'অনলাইন টেস্ট রিপোর্ট চেক করুন' : 'Verify Online Diagnostic Reports'}</span>
//                 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>

//           {/* BLOCK 2: Treatment */}
//           <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
//             <div className="order-2 lg:order-1 lg:col-span-6 relative z-20 bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-2xl border border-teal-100">
//               <h3 className="text-xl sm:text-2xl font-extrabold text-[#00808C] mb-1">
//                 {lang === 'bn' ? 'Advanced Treatment.' : 'Advanced Treatment.'}
//               </h3>
//               <p className="text-sm font-bold text-slate-700 mb-4">
//                 {lang === 'bn' ? 'শুধু উপসর্গ উপশম নয়, সমন্বিত স্থায়ী নিরাময়' : 'Not just sick care'}
//               </p>
              
//               <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
//                 <p className="leading-relaxed">
//                   {lang === 'bn'
//                     ? 'ডেন্টাল, মেডিসিন, গাইনী, স্কিন ও ফিজিওথেরাপিতে অভিজ্ঞ সিনিয়র কনসালট্যান্টদের নিয়মিত চেম্বার সেবা।'
//                     : 'We provide specialized clinical care combining advanced rotary dental equipment, diabetic management, and physical rehabilitation.'}
//                 </p>
//                 <p className="leading-relaxed">
//                   {lang === 'bn'
//                     ? 'আধুনিক প্রযুক্তির রোটারি আরসিটি এবং ব্যথা নিরাময় থেরাপিতে রোগীদের কষ্ট সর্বনিম্ন করা হয়।'
//                     : 'Single-visit pain-free root canals and personalized recovery plans designed to optimize your long-term healthspan.'}
//                 </p>
//               </div>

//               <button
//                 onClick={onOpenAppointment}
//                 className="inline-flex items-center gap-2 text-xs font-bold text-[#00808C] hover:text-[#005e67] transition-colors cursor-pointer group"
//               >
//                 <span>{lang === 'bn' ? 'বিশেষজ্ঞ ডাক্তার বুক করুন' : 'Book Specialist Consultation'}</span>
//                 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div className="order-1 lg:order-2 lg:col-span-8 lg:-ml-16 relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#063046] to-[#01535E] border border-white/20 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-6 sm:p-8">
//               <span 
//                 className="absolute top-4 right-6 text-4xl sm:text-5xl text-white/90 drop-shadow-md select-none pointer-events-none z-10"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//               >
//                 Treatment.
//               </span>

//               <div className="relative w-full h-full flex flex-col justify-end text-white">
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#062438]/90 via-[#062438]/40 to-transparent z-0" />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-30">
//                   <svg className="w-4/5 h-4/5 text-teal-200" viewBox="0 0 200 200" fill="none">
//                     <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
//                     <path d="M 60 120 C 70 80, 130 80, 140 120" stroke="#5EEAD4" strokeWidth="3" />
//                     <circle cx="100" cy="70" r="22" stroke="#5EEAD4" strokeWidth="2" />
//                     <rect x="90" y="130" width="20" height="40" rx="3" fill="#2DD4BF" opacity="0.4" />
//                   </svg>
//                 </div>

//                 <div className="relative z-10 p-2 sm:p-4">
//                   <span className="text-[11px] font-mono tracking-wider text-teal-300 uppercase block mb-1">
//                     Specialist Chambers & Surgical Suites
//                   </span>
//                   <p className="text-sm sm:text-base font-medium text-slate-100 max-w-md">
//                     Compassionate senior doctors dedicated to active listening, accurate prescription, and comfortable dental procedures.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BLOCK 3: Complete Care */}
//           <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
//             <div className="lg:col-span-8 relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#08283E] to-[#044C57] border border-white/20 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-6 sm:p-8">
//               <span 
//                 className="absolute top-4 left-6 text-4xl sm:text-5xl text-white/90 drop-shadow-md select-none pointer-events-none z-10"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//               >
//                 Complete Care.
//               </span>

//               <div className="relative w-full h-full flex flex-col justify-end text-white">
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#061F30]/90 via-[#061F30]/40 to-transparent z-0" />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-30">
//                   <svg className="w-4/5 h-4/5 text-emerald-300" viewBox="0 0 200 200" fill="none">
//                     <circle cx="100" cy="100" r="75" stroke="#34D399" strokeWidth="1.5" />
//                     <path d="M 70 100 Q 100 70 130 100 Q 100 130 70 100 Z" fill="#34D399" fillOpacity="0.2" stroke="#34D399" strokeWidth="2" />
//                     <circle cx="100" cy="100" r="10" fill="#6EE7B7" />
//                   </svg>
//                 </div>

//                 <div className="relative z-10 p-2 sm:p-4">
//                   <span className="text-[11px] font-mono tracking-wider text-teal-300 uppercase block mb-1">
//                     Family Wellness & Overseas Medical
//                   </span>
//                   <p className="text-sm sm:text-base font-medium text-slate-100 max-w-md">
//                     Holistic prevention packages, fast-track visa fitness screenings, and chronic illness monitoring under one roof.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-6 lg:-ml-16 relative z-20 bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-2xl border border-teal-100">
//               <h3 className="text-xl sm:text-2xl font-extrabold text-[#00808C] mb-1">
//                 {lang === 'bn' ? 'Complete Care.' : 'Complete Care.'}
//               </h3>
//               <p className="text-sm font-bold text-slate-700 mb-4">
//                 {lang === 'bn' ? 'আপনার ও পরিবারের আজীবন সুস্থতার সঙ্গী' : 'Experience the benefits of becoming part of our community'}
//               </p>
              
//               <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
//                 <p className="leading-relaxed">
//                   {lang === 'bn'
//                     ? 'হোল বডি চেকআপ, প্রি-মেডিকেল স্ক্রীনিং এবং বিদেশে গমনেচ্ছুকদের জন্য সরকার ও দূতাবাস স্বীকৃত মেডিকেল সনদ প্রদান।'
//                     : 'Benefit from comprehensive annual health screenings, authorized overseas medical checkups, and coordinated multi-specialist care.'}
//                 </p>
//                 <p className="leading-relaxed">
//                   {lang === 'bn'
//                     ? 'ডিজিটাল পেশেন্ট প্রোফাইল, ফলো-আপ অ্যালার্ট এবং টেলিমেডিসিন ফলো-আপের মাধ্যমে সার্বক্ষণিক সহায়তা।'
//                     : 'Digital records, automated WhatsApp reminders, and continuous health coaching so you and your family can thrive.'}
//                 </p>
//               </div>

//               <div className="pt-2">
//                 <button
//                   onClick={onOpenAppointment}
//                   className="px-5 py-2.5 text-xs font-bold text-white bg-[#00808C] hover:bg-[#006e78] rounded-lg shadow-md transition-all cursor-pointer"
//                 >
//                   {lang === 'bn' ? 'প্যাকেজ বুক করুন' : 'Explore Health Packages'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// // Apnar assets folder theke image gulo ekhane import korun
// // File er nam apnar image er namer sathe miliye niben
// import diagImg from '../../assets/approach/app1.png';
// import treatImg from '../../assets/hero/hero1.png'; 
// import careImg from '../../assets/approach/app2.png';

// export default function ApproachZigzag({
//   lang,
//   onOpenAppointment,
//   onOpenReportModal,
// }) {
//   return (
//     <section 
//       id="approach" 
//       className="py-16 sm:py-24 bg-[#00808C] text-white relative overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
//         {/* Main Header */}
//         <div className="text-center mb-16 sm:mb-24">
//           <h2 
//             className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal mb-3 tracking-wide"
//             style={{ fontFamily: "'Caveat', cursive" }}
//           >
//             {lang === 'bn' 
//               ? 'Accurate Diagnosis. Advanced Treatment. Complete Care.'
//               : 'Accurate Diagnosis. Advanced Treatment. Complete Care.'}
//           </h2>
//           <p className="text-sm sm:text-base font-bold tracking-wider uppercase text-white mt-4">
//             {lang === 'bn'
//               ? 'নিখুঁত রোগ নির্ণয় + আধুনিক চিকিৎসা = দীর্ঘস্থায়ী সুস্থতা'
//               : 'Accurate Diagnostics + Specialist Expertise = Lifelong Well-being'}
//           </p>
//         </div>

//         <div className="space-y-16 sm:space-y-24">
          
//           {/* BLOCK 1: Diagnosis */}
//           <div className="relative flex flex-col lg:flex-row items-center">
//             {/* Image Container (Left) */}
//             <div className="w-full lg:w-3/4 relative">
//               <img 
//                 src={diagImg} 
//                 alt="Diagnosis" 
//                 className="w-full h-[300px] sm:h-[450px] object-cover" 
//               />
//               <span 
//                 className="absolute top-4 left-6 sm:top-8 sm:left-10 text-5xl sm:text-7xl text-slate-800/70 select-none pointer-events-none z-10"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//               >
//                 Diagnosis.
//               </span>
//             </div>

//             {/* Overlapping Text Box (Right) */}
//             <div className="w-[90%] lg:w-[45%] bg-white p-8 sm:p-12 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 shadow-2xl mt-[-40px] lg:mt-0">
//               <h3 className="text-2xl sm:text-3xl font-bold text-[#00808C] mb-3">
//                 {lang === 'bn' ? 'Accurate Diagnosis.' : 'Accurate Diagnosis.'}
//               </h3>
//               <p className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
//                 {lang === 'bn' ? 'সঠিক চিকিৎসার প্রথম শর্ত নিখুঁত রোগ নির্ণয়' : 'Be actively involved in your own healthcare'}
//               </p>
//               <div className="space-y-4 text-sm text-slate-600 mb-8">
//                 <p>
//                   {lang === 'bn' 
//                     ? 'আমাদের সম্পূর্ণ অটোমেটেড ল্যাবরেটরিতে রক্ত, হরমোন ও বায়োকেমিস্ট্রি টেস্ট শতভাগ নির্ভুলভাবে সম্পন্ন হয়।'
//                     : 'Work with our precision pathology team and automated biochemical analyzers to uncover the exact source of illness.'}
//                 </p>
//                 <p>
//                   {lang === 'bn'
//                     ? 'প্রতিটি রিপোর্টে রয়েছে স্পষ্ট রেফারেন্স ভ্যালু এবং মোবাইল ফোনে ডিজিটাল ভেরিফিকেশন সুবিধা।'
//                     : 'Access transparent digital report dashboards with highlighted abnormal parameters and direct doctor consultations.'}
//                 </p>
//               </div>
//               <button
//                 onClick={onOpenReportModal}
//                 className="inline-flex items-center gap-2 text-sm font-bold text-[#00808C] hover:text-[#005e67] transition-colors cursor-pointer group"
//               >
//                 <span>{lang === 'bn' ? 'অনলাইন টেস্ট রিপোর্ট চেক করুন' : 'Verify Online Diagnostic Reports'}</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>

//           {/* BLOCK 2: Treatment */}
//           <div className="relative flex flex-col lg:flex-row-reverse items-center">
//             {/* Image Container (Right) */}
//             <div className="w-full lg:w-3/4 relative">
//               <img 
//                 src={treatImg} 
//                 alt="Treatment" 
//                 className="w-full h-[300px] sm:h-[450px] object-cover" 
//               />
//               <span 
//                 className="absolute top-4 right-6 sm:top-8 sm:right-10 text-5xl sm:text-7xl text-slate-800/70 select-none pointer-events-none z-10"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//               >
//                 Treatment.
//               </span>
//             </div>

//             {/* Overlapping Text Box (Left) */}
//             <div className="w-[90%] lg:w-[45%] bg-white p-8 sm:p-12 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-20 shadow-2xl mt-[-40px] lg:mt-0">
//               <h3 className="text-2xl sm:text-3xl font-bold text-[#00808C] mb-3">
//                 {lang === 'bn' ? 'Advanced Treatment.' : 'Advanced Treatment.'}
//               </h3>
//               <p className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
//                 {lang === 'bn' ? 'শুধু উপসর্গ উপশম নয়, সমন্বিত স্থায়ী নিরাময়' : 'Not just sick care'}
//               </p>
//               <div className="space-y-4 text-sm text-slate-600 mb-8">
//                 <p>
//                   {lang === 'bn'
//                     ? 'ডেন্টাল, মেডিসিন, গাইনী, স্কিন ও ফিজিওথেরাপিতে অভিজ্ঞ সিনিয়র কনসালট্যান্টদের নিয়মিত চেম্বার সেবা।'
//                     : 'We provide proactive care to optimize your healthspan with specialized clinical expertise and therapy.'}
//                 </p>
//                 <p>
//                   {lang === 'bn'
//                     ? 'আধুনিক প্রযুক্তির রোটারি আরসিটি এবং ব্যথা নিরাময় থেরাপিতে রোগীদের কষ্ট সর্বনিম্ন করা হয়।'
//                     : 'Learn techniques that can help prevent chronic illness and reduce your risks in highly personalized ways.'}
//                 </p>
//               </div>
//               <button
//                 onClick={onOpenAppointment}
//                 className="inline-flex items-center gap-2 text-sm font-bold text-[#00808C] hover:text-[#005e67] transition-colors cursor-pointer group"
//               >
//                 <span>{lang === 'bn' ? 'বিশেষজ্ঞ ডাক্তার বুক করুন' : 'Book Specialist Consultation'}</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>

//           {/* BLOCK 3: Complete Care */}
//           <div className="relative flex flex-col lg:flex-row items-center">
//             {/* Image Container (Left) */}
//             <div className="w-full lg:w-3/4 relative">
//               <img 
//                 src={careImg} 
//                 alt="Complete Care" 
//                 className="w-full h-[300px] sm:h-[450px] object-cover" 
//               />
//               <span 
//                 className="absolute top-4 left-6 sm:top-8 sm:left-10 text-5xl sm:text-7xl text-slate-800/70 select-none pointer-events-none z-10"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//               >
//                 Complete Care.
//               </span>
//             </div>

//             {/* Overlapping Text Box (Right) */}
//             <div className="w-[90%] lg:w-[45%] bg-white p-8 sm:p-12 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 shadow-2xl mt-[-40px] lg:mt-0">
//               <h3 className="text-2xl sm:text-3xl font-bold text-[#00808C] mb-3">
//                 {lang === 'bn' ? 'Complete Care.' : 'Complete Care.'}
//               </h3>
//               <p className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
//                 {lang === 'bn' ? 'আপনার ও পরিবারের আজীবন সুস্থতার সঙ্গী' : 'Experience the benefits of becoming part of our community'}
//               </p>
//               <div className="space-y-4 text-sm text-slate-600 mb-8">
//                 <p>
//                   {lang === 'bn'
//                     ? 'হোল বডি চেকআপ, প্রি-মেডিকেল স্ক্রীনিং এবং বিদেশে গমনেচ্ছুকদের জন্য সরকার ও দূতাবাস স্বীকৃত মেডিকেল সনদ প্রদান।'
//                     : 'Benefit from comprehensive annual health screenings, authorized overseas medical checkups, and coordinated multi-specialist care.'}
//                 </p>
//                 <p>
//                   {lang === 'bn'
//                     ? 'ডিজিটাল পেশেন্ট প্রোফাইল, ফলো-আপ অ্যালার্ট এবং টেলিমেডিসিন ফলো-আপের মাধ্যমে সার্বক্ষণিক সহায়তা।'
//                     : 'Learn how managing your health can optimize your performance in work and life so you can thrive.'}
//                 </p>
//               </div>
//               <button
//                 onClick={onOpenAppointment}
//                 className="inline-flex items-center gap-2 text-sm font-bold text-[#00808C] hover:text-[#005e67] transition-colors cursor-pointer group"
//               >
//                 <span>{lang === 'bn' ? 'প্যাকেজ বুক করুন' : 'Explore Health Packages'}</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// আপনার assets folder থেকে image গুলো এখানে import করুন
import diagImg from '../../assets/approach/app1.png';
import treatImg from '../../assets/hero/hero1.png';
import careImg from '../../assets/approach/app2.png';

// ==================== Scroll Animation Hook ====================
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
          // একবার ভিজিবল হলে unobserve করে দেবে
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

// ==================== Animated Block Wrapper ====================
function RevealBlock({ children, direction = 'up', delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollReveal();

  const directionClasses = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: '-translate-x-16',
    right: 'translate-x-16',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${directionClasses[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ApproachZigzag({
  lang,
  onOpenAppointment,
  onOpenReportModal,
}) {
  return (
    <section
      id="approach"
      className="py-16 sm:py-24 bg-[#00808C] text-white relative overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Header */}
        <RevealBlock direction="up">
          <div className="text-center mb-16 sm:mb-24">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal mb-3 tracking-wide animate-fade-in-down"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              {lang === 'bn'
                ? 'Accurate Diagnosis. Advanced Treatment. Complete Care.'
                : 'Accurate Diagnosis. Advanced Treatment. Complete Care.'}
            </h2>
            <p className="text-sm sm:text-base font-bold tracking-wider uppercase text-white mt-4 animate-fade-in">
              {lang === 'bn'
                ? 'নিখুঁত রোগ নির্ণয় + আধুনিক চিকিৎসা = দীর্ঘস্থায়ী সুস্থতা'
                : 'Accurate Diagnostics + Specialist Expertise = Lifelong Well-being'}
            </p>
          </div>
        </RevealBlock>

        <div className="space-y-16 sm:space-y-24">
          {/* ==================== BLOCK 1: Diagnosis ==================== */}
          <div className="relative flex flex-col lg:flex-row items-center">
            {/* Image Container (Left) */}
            <RevealBlock direction="left" className="w-full lg:w-3/4 relative">
              <div className="relative group overflow-hidden">
                <img
                  src={diagImg}
                  alt="Diagnosis"
                  className="w-full h-[300px] sm:h-[450px] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span
                  className="absolute top-4 left-6 sm:top-8 sm:left-10 text-5xl sm:text-7xl text-slate-800/70 select-none pointer-events-none z-10 transition-all duration-700 group-hover:text-slate-800/90 group-hover:-translate-y-1"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Diagnosis.
                </span>
              </div>
            </RevealBlock>

            {/* Overlapping Text Box (Right) */}
            <RevealBlock
              direction="right"
              delay={200}
              className="w-[90%] lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-[-40px] lg:mt-0"
            >
              <div className="bg-white p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,128,140,0.5)] hover:-translate-y-1 border-l-4 border-[#00808C]">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00808C] mb-3">
                  {lang === 'bn' ? 'Accurate Diagnosis.' : 'Accurate Diagnosis.'}
                </h3>
                <p className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
                  {lang === 'bn'
                    ? 'সঠিক চিকিৎসার প্রথম শর্ত নিখুঁত রোগ নির্ণয়'
                    : 'Be actively involved in your own healthcare'}
                </p>
                <div className="space-y-4 text-sm text-slate-600 mb-8">
                  <p>
                    {lang === 'bn'
                      ? 'আমাদের সম্পূর্ণ অটোমেটেড ল্যাবরেটরিতে রক্ত, হরমোন ও বায়োকেমিস্ট্রি টেস্ট শতভাগ নির্ভুলভাবে সম্পন্ন হয়।'
                      : 'Work with our precision pathology team and automated biochemical analyzers to uncover the exact source of illness.'}
                  </p>
                  <p>
                    {lang === 'bn'
                      ? 'প্রতিটি রিপোর্টে রয়েছে স্পষ্ট রেফারেন্স ভ্যালু এবং মোবাইল ফোনে ডিজিটাল ভেরিফিকেশন সুবিধা।'
                      : 'Access transparent digital report dashboards with highlighted abnormal parameters and direct doctor consultations.'}
                  </p>
                </div>
                <button
                  onClick={onOpenReportModal}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00808C] hover:text-[#005e67] transition-all cursor-pointer group"
                >
                  <span>
                    {lang === 'bn'
                      ? 'অনলাইন টেস্ট রিপোর্ট চেক করুন'
                      : 'Verify Online Diagnostic Reports'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </RevealBlock>
          </div>

          {/* ==================== BLOCK 2: Treatment ==================== */}
          <div className="relative flex flex-col lg:flex-row-reverse items-center">
            {/* Image Container (Right) */}
            <RevealBlock direction="right" className="w-full lg:w-3/4 relative">
              <div className="relative group overflow-hidden">
                <img
                  src={treatImg}
                  alt="Treatment"
                  className="w-full h-[300px] sm:h-[450px] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span
                  className="absolute top-4 right-6 sm:top-8 sm:right-10 text-5xl sm:text-7xl text-slate-800/70 select-none pointer-events-none z-10 transition-all duration-700 group-hover:text-slate-800/90 group-hover:-translate-y-1"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Treatment.
                </span>
              </div>
            </RevealBlock>

            {/* Overlapping Text Box (Left) */}
            <RevealBlock
              direction="left"
              delay={200}
              className="w-[90%] lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-[-40px] lg:mt-0"
            >
              <div className="bg-white p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,128,140,0.5)] hover:-translate-y-1 border-r-4 border-[#00808C]">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00808C] mb-3">
                  {lang === 'bn' ? 'Advanced Treatment.' : 'Advanced Treatment.'}
                </h3>
                <p className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
                  {lang === 'bn'
                    ? 'শুধু উপসর্গ উপশম নয়, সমন্বিত স্থায়ী নিরাময়'
                    : 'Not just sick care'}
                </p>
                <div className="space-y-4 text-sm text-slate-600 mb-8">
                  <p>
                    {lang === 'bn'
                      ? 'ডেন্টাল, মেডিসিন, গাইনী, স্কিন ও ফিজিওথেরাপিতে অভিজ্ঞ সিনিয়র কনসালট্যান্টদের নিয়মিত চেম্বার সেবা।'
                      : 'We provide proactive care to optimize your healthspan with specialized clinical expertise and therapy.'}
                  </p>
                  <p>
                    {lang === 'bn'
                      ? 'আধুনিক প্রযুক্তির রোটারি আরসিটি এবং ব্যথা নিরাময় থেরাপিতে রোগীদের কষ্ট সর্বনিম্ন করা হয়।'
                      : 'Learn techniques that can help prevent chronic illness and reduce your risks in highly personalized ways.'}
                  </p>
                </div>
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00808C] hover:text-[#005e67] transition-all cursor-pointer group"
                >
                  <span>
                    {lang === 'bn'
                      ? 'বিশেষজ্ঞ ডাক্তার বুক করুন'
                      : 'Book Specialist Consultation'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </RevealBlock>
          </div>

          {/* ==================== BLOCK 3: Complete Care ==================== */}
          <div className="relative flex flex-col lg:flex-row items-center">
            {/* Image Container (Left) */}
            <RevealBlock direction="left" className="w-full lg:w-3/4 relative">
              <div className="relative group overflow-hidden">
                <img
                  src={careImg}
                  alt="Complete Care"
                  className="w-full h-[300px] sm:h-[450px] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span
                  className="absolute top-4 left-6 sm:top-8 sm:left-10 text-5xl sm:text-7xl text-slate-800/70 select-none pointer-events-none z-10 transition-all duration-700 group-hover:text-slate-800/90 group-hover:-translate-y-1"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Complete Care.
                </span>
              </div>
            </RevealBlock>

            {/* Overlapping Text Box (Right) */}
            <RevealBlock
              direction="right"
              delay={200}
              className="w-[90%] lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-[-40px] lg:mt-0"
            >
              <div className="bg-white p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,128,140,0.5)] hover:-translate-y-1 border-l-4 border-[#00808C]">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00808C] mb-3">
                  {lang === 'bn' ? 'Complete Care.' : 'Complete Care.'}
                </h3>
                <p className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
                  {lang === 'bn'
                    ? 'আপনার ও পরিবারের আজীবন সুস্থতার সঙ্গী'
                    : 'Experience the benefits of becoming part of our community'}
                </p>
                <div className="space-y-4 text-sm text-slate-600 mb-8">
                  <p>
                    {lang === 'bn'
                      ? 'হোল বডি চেকআপ, প্রি-মেডিকেল স্ক্রীনিং এবং বিদেশে গমনেচ্ছুকদের জন্য সরকার ও দূতাবাস স্বীকৃত মেডিকেল সনদ প্রদান।'
                      : 'Benefit from comprehensive annual health screenings, authorized overseas medical checkups, and coordinated multi-specialist care.'}
                  </p>
                  <p>
                    {lang === 'bn'
                      ? 'ডিজিটাল পেশেন্ট প্রোফাইল, ফলো-আপ অ্যালার্ট এবং টেলিমেডিসিন ফলো-আপের মাধ্যমে সার্বক্ষণিক সহায়তা।'
                      : 'Learn how managing your health can optimize your performance in work and life so you can thrive.'}
                  </p>
                </div>
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00808C] hover:text-[#005e67] transition-all cursor-pointer group"
                >
                  <span>
                    {lang === 'bn' ? 'প্যাকেজ বুক করুন' : 'Explore Health Packages'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
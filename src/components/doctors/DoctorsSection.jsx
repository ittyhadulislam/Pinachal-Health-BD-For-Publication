// import React, { useState } from 'react';
// import { DOCTORS_DATA } from '../../data/mockData';
// import {
//   Calendar,
//   Clock,
//   MapPin,
//   Stethoscope
// } from 'lucide-react';

// export default function DoctorsSection({
//   lang,
//   onSelectDoctor,
//   onOpenAppointment,
// }) {
//   const [selectedDept, setSelectedDept] = useState('all');

//   const departments = [
//     { id: 'all', label: 'All Specialists', labelBn: 'সকল বিশেষজ্ঞ' },
//     { id: 'medicine', label: 'Medicine & Diabetes', labelBn: 'মেডিসিন ও ডায়াবেটিস' },
//     { id: 'dental', label: 'Dental & RCT', labelBn: 'ডেন্টাল সার্জন' },
//     { id: 'gynae', label: 'Gynae & Obs', labelBn: 'গাইনী ও প্রসূতি' },
//     { id: 'skin', label: 'Skin & Allergy', labelBn: 'চর্ম ও এলার্জি' },
//     { id: 'physio', label: 'Physiotherapy', labelBn: 'ফিজিওথেরাপি' },
//   ];

//   const filteredDoctors = selectedDept === 'all'
//     ? DOCTORS_DATA
//     : DOCTORS_DATA.filter((d) => d.departmentId === selectedDept);

//   const getStatusBadge = (status, currentToken) => {
//     switch (status) {
//       case 'available':
//         return (
//           <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
//             <span className="w-2 h-2 rounded-full bg-emerald-500" />
//             <span>{lang === 'bn' ? 'আজ চেম্বার উপস্থিত (Open)' : 'Available Today'}</span>
//           </div>
//         );
//       case 'in_consultation':
//         return (
//           <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
//             <span className="w-2 h-2 rounded-full bg-amber-500" />
//             <span>
//               {lang === 'bn'
//                 ? `চেম্বারে চলমান (টোকেন #${currentToken || 12})`
//                 : `In Consultation (Token #${currentToken || 12})`}
//             </span>
//           </div>
//         );
//       case 'off_duty':
//         return (
//           <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
//             <span className="w-2 h-2 rounded-full bg-slate-400" />
//             <span>{lang === 'bn' ? 'পরবর্তী স্লট কাল' : 'Next Available Tomorrow'}</span>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section id="doctors" className="py-16 sm:py-24 bg-white relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//           <div className="max-w-2xl">
//             <span className="text-xs font-bold uppercase tracking-wider text-[#009688] mb-2 block">
//               {lang === 'bn' ? 'আমাদের বিশেষজ্ঞ প্যানেল' : 'Distinguished Medical Faculty'}
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E33] tracking-tight mb-3">
//               {lang === 'bn'
//                 ? 'অভিজ্ঞ ও খ্যাতনামা চিকিৎসকগণের তত্ত্বাবধানে সেবা'
//                 : 'Meet Our Senior Specialists & Consultants'}
//             </h2>
//             <p className="text-sm sm:text-base text-slate-600">
//               {lang === 'bn'
//                 ? 'ঢাকা মেডিকেল ও বিএসএমএমইউ-এর অভিজ্ঞ অধ্যাপক ও বিশেষজ্ঞ সার্জনবৃন্দ। প্রতিটি ডাক্তারের সাথে রয়েছে লাইভ কিউ ট্র্যাকিং সুবিধা।'
//                 : 'Board-certified specialists from DU, BSMMU, and premier medical institutes. Book in advance or track live chamber tokens.'}
//             </p>
//           </div>

//           <div className="flex items-center gap-1.5 flex-wrap p-1 bg-slate-100 rounded-lg">
//             {departments.map((dept) => (
//               <button
//                 key={dept.id}
//                 onClick={() => setSelectedDept(dept.id)}
//                 className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
//                   selectedDept === dept.id
//                     ? 'bg-[#009688] text-white shadow-xs'
//                     : 'text-slate-600 hover:text-slate-900'
//                 }`}
//               >
//                 {lang === 'bn' ? dept.labelBn : dept.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredDoctors.map((doc) => (
//             <div
//               key={doc.id}
//               className="bg-white rounded-xl border border-slate-200 hover:border-[#009688] hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between"
//             >
//               <div className="p-6">
//                 <div className="flex items-center justify-between gap-2 mb-4">
//                   {getStatusBadge(doc.status, doc.currentToken)}

//                   <div className="text-right">
//                     <span className="text-[10px] text-slate-400 uppercase font-semibold block">
//                       {lang === 'bn' ? 'ফি' : 'Fee'}
//                     </span>
//                     <span className="text-sm font-extrabold text-[#0B1E33] font-mono">
//                       ৳{doc.consultationFee}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 flex items-center justify-center shrink-0 text-[#009688] font-bold text-xl shadow-xs">
//                     <Stethoscope className="w-8 h-8 text-[#009688]" />
//                   </div>

//                   <div>
//                     <h3 className="text-base sm:text-lg font-bold text-[#0B1E33] leading-snug">
//                       {lang === 'bn' ? doc.nameBn : doc.name}
//                     </h3>
//                     <p className="text-xs font-semibold text-[#009688] mb-1">
//                       {lang === 'bn' ? doc.specialtyBn : doc.specialty}
//                     </p>
//                     <p className="text-[11px] text-slate-500 font-medium">
//                       {lang === 'bn' ? doc.degreesBn : doc.degrees}
//                     </p>
//                   </div>
//                 </div>

//                 <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
//                   {lang === 'bn' ? doc.biographyBn : doc.biography}
//                 </p>

//                 <div className="bg-slate-50 rounded-lg p-3 space-y-2 border border-slate-100 text-xs text-slate-700 mb-2">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-1.5 text-slate-600">
//                       <Clock className="w-3.5 h-3.5 text-[#009688]" />
//                       <span>{lang === 'bn' ? doc.chamberDaysBn : doc.chamberDays}</span>
//                     </div>
//                     <span className="font-semibold text-slate-900">
//                       {lang === 'bn' ? doc.chamberTimeBn : doc.chamberTime}
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-[11px]">
//                     <div className="flex items-center gap-1 text-slate-500">
//                       <MapPin className="w-3 h-3 text-[#009688]" />
//                       <span>{doc.roomNumber}</span>
//                     </div>
//                     <span className="text-slate-500">
//                       {doc.experienceYears}+ {lang === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Yrs Exp'}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
//                 <button
//                   onClick={() => onSelectDoctor(doc)}
//                   className="w-full py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
//                 >
//                   <Calendar className="w-3.5 h-3.5" />
//                   <span>{lang === 'bn' ? 'সিরিয়াল বুক করুন' : 'Book Appointment'}</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { DOCTORS_DATA } from "../../data/mockData";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronDown,
} from "lucide-react";

import doctorImg1 from "../../assets/doctors/d1.jpg";
import doctorImg2 from "../../assets/doctors/d2.jpg";
import doctorImg3 from "../../assets/doctors/d3.png";
import doctorImg4 from "../../assets/doctors/d4.jpg";
import doctorImg5 from "../../assets/doctors/d5.jpg";
import doctorImg6 from "../../assets/doctors/d6.jpg";

// ========= ডাক্তারের ছবি ম্যাপিং ========
const doctorImageMap = {
  "doc-1": doctorImg1,
  "doc-2": doctorImg2,
  "doc-3": doctorImg3,
  "doc-4": doctorImg4,
  "doc-5": doctorImg5,
  "doc-6": doctorImg6,
};

const doctorImages = [doctorImg1, doctorImg2, doctorImg3, doctorImg4, doctorImg5, doctorImg6];

// ==========Scroll Reveal Hook =======
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
        rootMargin: "0px 0px -60px 0px",
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// ==================== Reveal Wrapper ====================
function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, isVisible] = useScrollReveal();

  const dirClass = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "-translate-x-8",
    right: "translate-x-8",
    scale: "scale-95",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${dirClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function DoctorsSection({
  lang,
  onSelectDoctor,
  onOpenAppointment,
}) {
  const [selectedDept, setSelectedDept] = useState("all");

  const departments = [
    { id: "all", label: "All Specialists", labelBn: "সকল বিশেষজ্ঞ" },
    {
      id: "medicine",
      label: "Medicine & Diabetes",
      labelBn: "মেডিসিন ও ডায়াবেটিস",
    },
    { id: "dental", label: "Dental & RCT", labelBn: "ডেন্টাল সার্জন" },
    { id: "gynae", label: "Gynae & Obs", labelBn: "গাইনী ও প্রসূতি" },
    { id: "skin", label: "Skin & Allergy", labelBn: "চর্ম ও এলার্জি" },
    { id: "physio", label: "Physiotherapy", labelBn: "ফিজিওথেরাপি" },
  ];

  const filteredDoctors =
    selectedDept === "all"
      ? DOCTORS_DATA
      : DOCTORS_DATA.filter((d) => d.departmentId === selectedDept);

  const getStatusBadge = (status, currentToken) => {
    switch (status) {
      case "available":
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{lang === "bn" ? "চেম্বার খোলা" : "Available"}</span>
          </div>
        );
      case "in_consultation":
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>
              {lang === "bn"
                ? `চলমান (টোকেন #${currentToken || 12})`
                : `In Consultation (#${currentToken || 12})`}
            </span>
          </div>
        );
      case "off_duty":
        return (
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>{lang === "bn" ? "আগামীকাল" : "Tomorrow"}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    // 👇 উপরের padding কমিয়ে py-10 sm:py-16 করা হয়েছে
    <section id="doctors" className="py-10 sm:py-16 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= Header Section with Reveal ================= */}
        <Reveal direction="up">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#009688] mb-2">
              {lang === "bn" ? "ভিজিটিং শিডিউল" : "VISITING SCHEDULE"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#0B1E33] tracking-tight leading-tight uppercase">
              {lang === "bn"
                ? "বিশেষজ্ঞ ডাক্তার চেম্বার"
                : "SPECIALIZED DOCTOR CHAMBER"}
            </h2>

            {/* Decorative Underline with Animated Dots */}
            <div className="flex justify-center items-center gap-1.5 mt-5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#009688] animate-pulse"></span>
              <span className="w-14 h-1 bg-[#009688] rounded-full"></span>
              <span className="w-2 h-2 rounded-full bg-[#009688] animate-pulse"></span>
            </div>
            <p className="text-sm sm:text-base text-slate-500 leading-7 max-w-xl mx-auto px-2">
              {lang === "bn"
                ? "নিচে আপনার পছন্দের বিভাগ নির্বাচন করে বিশেষজ্ঞ ডাক্তারদের সময়সূচী দেখুন।"
                : "Select a department below to explore specialist doctors and their visiting schedules."}
            </p>
          </div>
        </Reveal>

        {/* ================= Dropdown Filter with Reveal ================= */}
        <Reveal direction="up" delay={150}>
          <div className="max-w-2xl mx-auto mb-12">
            <label className="block text-xs font-bold text-slate-700 mb-2 text-center uppercase tracking-wider">
              {lang === "bn"
                ? "বিশেষজ্ঞ বিভাগ অনুযায়ী ফিল্টার করুন:"
                : "Filter By Specialized Department:"}
            </label>
            <div className="relative group">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full appearance-none bg-white border border-slate-300 text-slate-700 py-3 px-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688] focus:border-[#009688] text-sm font-semibold shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#009688]/50"
              >
                <option value="all">
                  -- All Specialized Doctor Chamber Schedules --
                </option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {lang === "bn" ? dept.labelBn : dept.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 group-hover:text-[#009688] transition-colors">
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= Doctors Grid with Staggered Reveal ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDoctors.map((doc, idx) => {
            const doctorImage =
              doctorImageMap[doc.id] ||
              doc.image ||
              doctorImages[idx % doctorImages.length];

            return (
              <Reveal
                key={doc.id}
                direction="up"
                delay={idx * 80}
                className="w-full"
              >
                <div className="h-full bg-white rounded-xl border-2 border-transparent hover:border-[#009688] shadow-sm hover:shadow-[0_4px_25px_rgba(0,150,136,0.2)] p-5 sm:p-6 flex flex-col sm:flex-row gap-5 transition-all duration-500 relative group overflow-hidden">
                  
                  {/* Hover Gradient Glow (Top Right Corner) */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Left Colorful Accent Bar (Appears on Hover) */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-emerald-500 to-teal-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 rounded-l-xl" />

                  {/* Left Side: Avatar & Status */}
                  <div className="flex flex-col items-center gap-3 shrink-0 relative z-10">
                    <div className="relative">
                      {/* Pulse Ring on Hover */}
                      <div className="absolute inset-0 rounded-full bg-teal-400/30 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping" />
                      
                      <div className="w-24 h-24 rounded-full border-4 border-teal-50 flex items-center justify-center bg-slate-50 overflow-hidden shadow-sm group-hover:border-[#009688]/40 group-hover:scale-105 transition-all duration-500 relative z-10">
                        <img
                          src={doctorImage}
                          alt={lang === "bn" ? doc.nameBn : doc.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.target.src = doctorImg1;
                          }}
                        />
                      </div>
                    </div>
                    <div className="group-hover:scale-105 transition-transform duration-300">
                      {getStatusBadge(doc.status, doc.currentToken)}
                    </div>
                  </div>

                  {/* Right Side: Information */}
                  <div className="flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      {/* Name and Fee */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold text-[#0B1E33] leading-tight group-hover:text-[#009688] transition-colors duration-300">
                          {lang === "bn" ? doc.nameBn : doc.name}
                        </h3>
                        <div className="text-right shrink-0">
                          <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">
                            {lang === "bn" ? "ফি" : "Fee"}
                          </span>
                          <span className="text-sm font-extrabold text-[#009688] font-mono group-hover:scale-110 inline-block transition-transform duration-300">
                            ৳{doc.consultationFee}
                          </span>
                        </div>
                      </div>

                      {/* Specialty and Degrees */}
                      <p className="text-xs font-bold text-[#009688] mb-1">
                        {lang === "bn" ? doc.specialtyBn : doc.specialty}
                      </p>
                      <p className="text-[11px] text-slate-500 mb-3">
                        {lang === "bn" ? doc.degreesBn : doc.degrees}
                      </p>

                      {/* Chamber Info Box */}
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 space-y-2 mb-4 group-hover:bg-teal-50/60 group-hover:border-teal-100 transition-all duration-500">
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <Clock className="w-3.5 h-3.5 text-[#009688] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                          <span className="font-semibold">
                            {lang === "bn" ? doc.chamberDaysBn : doc.chamberDays} -{" "}
                            {lang === "bn" ? doc.chamberTimeBn : doc.chamberTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-[#009688] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span>{doc.roomNumber}</span>
                          <span className="text-slate-300">|</span>
                          <span>
                            {doc.experienceYears}+{" "}
                            {lang === "bn" ? "বছরের অভিজ্ঞতা" : "Yrs Exp"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Book Appointment Button */}
                    <div className="flex justify-end mt-auto pt-2">
                      <button
                        onClick={() => onSelectDoctor(doc)}
                        className="px-6 py-2.5 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-teal-900/10 hover:shadow-[0_8px_20px_rgba(0,150,136,0.4)] group/btn"
                      >
                        <Calendar className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>
                          {lang === "bn" ? "সিরিয়াল বুক করুন" : "Book Appointment"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
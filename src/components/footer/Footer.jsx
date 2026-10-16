// import React from 'react';
// import PinnacleLogo from '../logo/PinnacleLogo';
// import { 
//   Phone, 
//   MapPin, 
//   Mail, 
//   ShieldCheck, 
//   Clock, 
//   CheckCircle2
// } from 'lucide-react';

// export default function Footer({
//   lang,
//   onOpenAppointment,
//   onOpenReportModal,
//   onOpenAiGuide,
// }) {
//   return (
//     <footer className="bg-[#0B1E33] text-white pt-16 pb-8 border-t border-teal-500/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
//           {/* Brand & Licensure */}
//           <div className="lg:col-span-5 space-y-4">
//             <PinnacleLogo theme="dark" size="lg" />
            
//             <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
//               {lang === 'bn'
//                 ? 'পিনাকল হেলথকেয়ার অ্যান্ড ডায়াগনস্টিক সেন্টার — এক ছাদের নিচে উন্নত চিকিৎসা, বিশ্বমানের ল্যাবরেটরি ও সর্বাধুনিক ডেন্টাল কেয়ার। আপনার সুস্থতাই আমাদের সর্বোচ্চ অঙ্গীকার।'
//                 : 'Pinnacle Healthcare & Diagnostic Center — Complete healthcare under one roof. World-standard laboratory testing, senior doctor consultations, and pain-free dental technology.'}
//             </p>

//             <div className="pt-2 space-y-1.5 text-xs text-slate-400">
//               <div className="flex items-center gap-2">
//                 <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
//                 <span>DGHS Approved License: <strong>HSM-2024-8841</strong></span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
//                 <span>ISO 9001:2015 & ISO 15189 Certified Diagnostic Lab</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
//                 <span>Authorized Pre-Medical & Overseas Visa Health Desk</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2 space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
//               {lang === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Links'}
//             </h4>
//             <ul className="space-y-2 text-xs text-slate-300">
//               <li>
//                 <a href="#home" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'হোম পেইজ' : 'Home'}
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'ক্লিনিক্যাল সেবা' : 'All Services'}
//                 </a>
//               </li>
//               <li>
//                 <a href="#dental" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'পিনাকল ডেন্টাল' : 'Pinnacle Dental'}
//                 </a>
//               </li>
//               <li>
//                 <a href="#doctors" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'বিশেষজ্ঞ ডাক্তার' : 'Doctors & Specialists'}
//                 </a>
//               </li>
//               <li>
//                 <a href="#packages" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'হেলথ চেকআপ প্যাকেজ' : 'Health Packages'}
//                 </a>
//               </li>
//               <li>
//                 <a href="#approach" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি' : 'Our Approach'}
//                 </a>
//               </li>
//               <li>
//                 <a href="#location" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'ক্যাম্পাস লোকেশন' : 'Location & Directions'}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Digital Portals */}
//           <div className="lg:col-span-2 space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
//               {lang === 'bn' ? 'ডিজিটাল পেশেন্ট পোর্টাল' : 'Digital Services'}
//             </h4>
//             <ul className="space-y-2 text-xs text-slate-300">
//               <li>
//                 <button
//                   onClick={onOpenReportModal}
//                   className="hover:text-white transition-colors text-left cursor-pointer"
//                 >
//                   {lang === 'bn' ? 'অনলাইন টেস্ট রিপোর্ট' : 'Online Lab Reports'}
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={onOpenAppointment}
//                   className="hover:text-white transition-colors text-left cursor-pointer"
//                 >
//                   {lang === 'bn' ? 'অনলাইন সিরিয়াল বুকিং' : 'Doctor Appointment'}
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={onOpenAiGuide}
//                   className="hover:text-white transition-colors text-left cursor-pointer"
//                 >
//                   {lang === 'bn' ? 'এআই লক্ষণ গাইড' : 'AI Symptom Guidance'}
//                 </button>
//               </li>
//               <li>
//                 <a href="#packages" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'ভিসা মেডিকেল টেস্ট' : 'Overseas Traveler Desk'}
//                 </a>
//               </li>
//               <li>
//                 <a href="#home" className="hover:text-white transition-colors">
//                   {lang === 'bn' ? 'লাইভ চেম্বার কিউ' : 'Live Queue Tracker'}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact & 24/7 Hotline */}
//           <div className="lg:col-span-3 space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
//               {lang === 'bn' ? 'জরুরি যোগাযোগ' : 'Emergency Contact'}
//             </h4>
            
//             <div className="space-y-2.5 text-xs text-slate-300">
//               <div className="flex items-start gap-2.5">
//                 <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
//                 <div>
//                   <span className="block text-[11px] text-slate-400">24/7 Hotline</span>
//                   <a href="tel:10620" className="font-bold text-white hover:text-emerald-400">
//                     10620 / +880 1711-002233
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-2.5">
//                 <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
//                 <p>Plot #14, Road #7, Dhanmondi, Dhaka-1205</p>
//               </div>

//               <div className="flex items-start gap-2.5">
//                 <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
//                 <p>care@pinnaclehealthcarebd.com</p>
//               </div>

//               <div className="flex items-start gap-2.5">
//                 <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
//                 <p>Emergency Lab & Diagnostics: 24/7 Open</p>
//               </div>
//             </div>

//             <div className="pt-3">
//               <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1.5">
//                 {lang === 'bn' ? 'অনুমোদিত পেমেন্ট মাধ্যম:' : 'Supported Payment Methods:'}
//               </span>
//               <div className="flex items-center flex-wrap gap-1.5 text-[10px] font-bold">
//                 <span className="px-2 py-1 rounded bg-pink-900/60 text-pink-300 border border-pink-700/50">bKash</span>
//                 <span className="px-2 py-1 rounded bg-orange-900/60 text-orange-300 border border-orange-700/50">Nagad</span>
//                 <span className="px-2 py-1 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">VISA</span>
//                 <span className="px-2 py-1 rounded bg-red-900/60 text-red-300 border border-red-700/50">Mastercard</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
//           <p>© {new Date().getFullYear()} Pinnacle Healthcare & Diagnostic Center. All rights reserved.</p>
//           <div className="flex items-center gap-4 text-slate-400">
//             <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
//             <span>·</span>
//             <a href="#home" className="hover:text-white transition-colors">Patient Charter & Rights</a>
//             <span>·</span>
//             <a href="#home" className="hover:text-white transition-colors">Terms of Diagnostic Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import React from 'react';
import PinnacleLogo from '../logo/PinnacleLogo';
import { 
  Phone, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  Clock, 
  CheckCircle2
} from 'lucide-react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

export default function Footer({
  lang,
  onOpenAppointment,
  onOpenReportModal,
  onOpenAiGuide,
}) {
  return (
    <footer className="bg-[#0B1E33] text-white pt-16 pb-8 border-t border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Licensure */}
          <div className="lg:col-span-5 space-y-4">
            <PinnacleLogo theme="dark" size="lg" />
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
              {lang === 'bn'
                ? 'পিনাকল হেলথকেয়ার অ্যান্ড ডায়াগনস্টিক সেন্টার — এক ছাদের নিচে উন্নত চিকিৎসা, বিশ্বমানের ল্যাবরেটরি ও সর্বাধুনিক ডেন্টাল কেয়ার। আপনার সুস্থতাই আমাদের সর্বোচ্চ অঙ্গীকার।'
                : 'Pinnacle Healthcare & Diagnostic Center — Complete healthcare under one roof. World-standard laboratory testing, senior doctor consultations, and pain-free dental technology.'}
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>DGHS Approved License: <strong>HSM-2024-8841</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>ISO 9001:2015 & ISO 15189 Certified Diagnostic Lab</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Authorized Pre-Medical & Overseas Visa Health Desk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              {lang === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'হোম পেইজ' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'ক্লিনিক্যাল সেবা' : 'All Services'}
                </a>
              </li>
              <li>
                <a href="#dental" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'পিনাকল ডেন্টাল' : 'Pinnacle Dental'}
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'বিশেষজ্ঞ ডাক্তার' : 'Doctors & Specialists'}
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'হেলথ চেকআপ প্যাকেজ' : 'Health Packages'}
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি' : 'Our Approach'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'ক্যাম্পাস লোকেশন' : 'Location & Directions'}
                </a>
              </li>
            </ul>
          </div>

          {/* Digital Portals */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              {lang === 'bn' ? 'ডিজিটাল পেশেন্ট পোর্টাল' : 'Digital Services'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={onOpenReportModal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {lang === 'bn' ? 'অনলাইন টেস্ট রিপোর্ট' : 'Online Lab Reports'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAppointment}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {lang === 'bn' ? 'অনলাইন সিরিয়াল বুকিং' : 'Doctor Appointment'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAiGuide}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {lang === 'bn' ? 'এআই লক্ষণ গাইড' : 'AI Symptom Guidance'}
                </button>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'ভিসা মেডিকেল টেস্ট' : 'Overseas Traveler Desk'}
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'লাইভ চেম্বার কিউ' : 'Live Queue Tracker'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & 24/7 Hotline */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              {lang === 'bn' ? 'জরুরি যোগাযোগ' : 'Emergency Contact'}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-400">24/7 Hotline</span>
                  <a href="tel:10620" className="font-bold text-white hover:text-emerald-400">
                    10620 / +880 1711-002233
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p>Plot #14, Road #7, Dhanmondi, Dhaka-1205</p>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p>care@pinnaclehealthcarebd.com</p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p>Emergency Lab & Diagnostics: 24/7 Open</p>
              </div>
            </div>

            {/* ==================== Payment Methods with Logos ==================== */}
            <div className="pt-3">
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-2">
                {lang === 'bn' ? 'অনুমোদিত পেমেন্ট মাধ্যম:' : 'Supported Payment Methods:'}
              </span>
              <div className="flex items-center flex-wrap gap-2 text-[10px] font-bold">
                
                {/* bKash Logo */}
                <div className="bg-white/95 px-2 py-1 rounded flex items-center justify-center h-8 min-w-12.5 transition-transform hover:scale-105 duration-200">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/BKash_Logo.svg/120px-BKash_Logo.svg.png"
                    alt="bKash"
                    className="h-3.5 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="text-pink-600 font-bold text-[10px]">bKash</span>';
                    }}
                  />
                </div>

                {/* Nagad Logo */}
                <div className="bg-white/95 px-2 py-1 rounded flex items-center justify-center h-8 min-w-[50px] transition-transform hover:scale-105 duration-200">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Nagad_Logo.svg/120px-Nagad_Logo.svg.png"
                    alt="Nagad"
                    className="h-3.5 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="text-orange-600 font-bold text-[10px]">Nagad</span>';
                    }}
                  />
                </div>

                {/* VISA Icon */}
                <div className="bg-white/95 px-2 py-1 rounded flex items-center justify-center h-8 min-w-[50px] transition-transform hover:scale-105 duration-200">
                  <FaCcVisa className="w-7 h-5 text-[#1A1F71]" />
                </div>

                {/* Mastercard Icon */}
                <div className="bg-white/95 px-2 py-1 rounded flex items-center justify-center h-8 min-w-[50px] transition-transform hover:scale-105 duration-200">
                  <FaCcMastercard className="w-7 h-5 text-[#EB001B]" />
                </div>

              </div>
            </div>
            {/* ============================================================ */}

          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Pinnacle Healthcare & Diagnostic Center. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#home" className="hover:text-white transition-colors">Patient Charter & Rights</a>
            <span>·</span>
            <a href="#home" className="hover:text-white transition-colors">Terms of Diagnostic Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
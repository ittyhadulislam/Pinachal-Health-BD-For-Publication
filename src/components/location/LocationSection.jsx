// import React from 'react';
// import { MapPin, Phone, Clock, Car, Navigation, MessageSquare } from 'lucide-react';

// export default function LocationSection({ lang, onOpenAppointment }) {
//   return (
//     <section id="location" className="py-16 sm:py-24 bg-slate-50 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <span className="text-xs font-bold uppercase tracking-wider text-[#009688] mb-2 block">
//             {lang === 'bn' ? 'আমাদের অবস্থান ও যোগাযোগ' : 'Visit Our Center'}
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E33] tracking-tight mb-3">
//             {lang === 'bn' 
//               ? 'সহজ যাতায়াত ও আধুনিক সুবিধাসম্পন্ন ক্লিনিক ক্যাম্পাস' 
//               : 'Convenient Location & Premium Patient Facilities'}
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600">
//             {lang === 'bn'
//               ? 'ঢাকা শহরের প্রাণকেন্দ্রে অবস্থিত। প্রশস্ত পার্কিং, লিফট এবং ২৪ ঘণ্টা সার্বক্ষণিক ল্যাবরেটরি ও ইমার্জেন্সি সাপোর্ট।'
//               : 'Located at the heart of Dhaka with dedicated basement parking, wheelchair accessibility, and 24/7 diagnostic facilities.'}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
//           <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
//             <div className="space-y-4">
//               <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#009688] flex items-center justify-center shrink-0">
//                   <MapPin className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-bold text-slate-900 mb-1">
//                     {lang === 'bn' ? 'ঠিকানা ও লোকেশন' : 'Pinnacle Healthcare Campus'}
//                   </h3>
//                   <p className="text-xs text-slate-600 leading-relaxed">
//                     {lang === 'bn' 
//                       ? 'প্লট #১৪, রোড #৭, ধানমন্ডি (মিরপুর রোড সংলগ্ন), ঢাকা-১২০৫, বাংলাদেশ।'
//                       : 'Plot #14, Road #7, Dhanmondi (Adjacent to Mirpur Road), Dhaka-1205, Bangladesh.'}
//                   </p>
//                   <span className="text-[11px] text-[#009688] font-semibold mt-1 block">
//                     {lang === 'bn' ? 'ল্যান্ডমার্ক: রাপা প্লাজার বিপরীতে' : 'Landmark: Opposite to Rapa Plaza'}
//                   </span>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
//                   <Clock className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-bold text-slate-900 mb-1">
//                     {lang === 'bn' ? 'কার্যক্রম ও সময়সূচী' : 'Operating Hours'}
//                   </h3>
//                   <div className="text-xs text-slate-600 space-y-1">
//                     <p className="flex justify-between gap-4">
//                       <span>{lang === 'bn' ? 'ডায়াগনস্টিক ল্যাব ও ইমার্জেন্সি:' : 'Diagnostics & Lab:'}</span>
//                       <strong className="text-emerald-700">{lang === 'bn' ? '২৪ ঘণ্টা খোলা (24/7)' : 'Open 24/7'}</strong>
//                     </p>
//                     <p className="flex justify-between gap-4">
//                       <span>{lang === 'bn' ? 'ডাক্তারদের চেম্বার:' : 'Specialist Chambers:'}</span>
//                       <strong className="text-slate-900">08:00 AM - 10:00 PM</strong>
//                     </p>
//                     <p className="flex justify-between gap-4">
//                       <span>{lang === 'bn' ? 'পিনাকল ডেন্টাল কেয়ার:' : 'Pinnacle Dental:'}</span>
//                       <strong className="text-slate-900">09:00 AM - 09:30 PM</strong>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
//                   <Car className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-bold text-slate-900 mb-1">
//                     {lang === 'bn' ? 'পার্কিং ও বিশেষ সুবিধা' : 'Parking & Patient Comfort'}
//                   </h3>
//                   <p className="text-xs text-slate-600 leading-relaxed">
//                     {lang === 'bn'
//                       ? 'বেসমেন্টে ফ্রি সিকিউরড কার পার্কিং, হুইলচেয়ার অ্যাক্সেস, এবং রোগীদের জন্য ডেডিকেটেড লিফট।'
//                       : 'Free secure basement parking, wheelchair ramps, patient stretcher elevators, and comfortable air-conditioned waiting lounges.'}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 pt-2">
//               <a
//                 href="tel:10620"
//                 className="flex-1 py-3 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
//               >
//                 <Phone className="w-3.5 h-3.5" />
//                 <span>{lang === 'bn' ? 'হটলাইন কল: ১০৬২০' : 'Call Hotline: 10620'}</span>
//               </a>

//               <a
//                 href="https://api.whatsapp.com/send?phone=8801711002233"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex-1 py-3 text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
//               >
//                 <MessageSquare className="w-3.5 h-3.5" />
//                 <span>WhatsApp</span>
//               </a>
//             </div>
//           </div>

//           <div className="lg:col-span-7 bg-[#0B1E33] rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative min-h-[380px] flex flex-col justify-between p-6 sm:p-8 text-white">
//             <div className="absolute inset-0 opacity-25 pointer-events-none">
//               <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
//                 <path d="M 0 150 Q 200 180 400 150 T 800 150" stroke="#2DD4BF" strokeWidth="6" />
//                 <path d="M 0 350 Q 300 320 500 360 T 800 350" stroke="#38BDF8" strokeWidth="4" />
//                 <path d="M 250 0 L 250 600" stroke="#2DD4BF" strokeWidth="5" />
//                 <path d="M 550 0 L 550 600" stroke="#2DD4BF" strokeWidth="4" />
//                 <circle cx="400" cy="280" r="120" stroke="#5EEAD4" strokeWidth="2" strokeDasharray="6 6" />
//                 <circle cx="400" cy="280" r="180" stroke="#5EEAD4" strokeWidth="1" strokeDasharray="4 4" />
//               </svg>
//             </div>

//             <div className="relative z-10 flex items-center justify-between">
//               <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs">
//                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                 <span>{lang === 'bn' ? 'পিনাকল হেলথকেয়ার মেইন ক্যাম্পাস' : 'Pinnacle Healthcare Main Campus'}</span>
//               </div>
//               <span className="text-xs font-mono text-teal-300">Dhaka-1205</span>
//             </div>

//             <div className="relative z-10 my-auto text-center py-8">
//               <div className="inline-block relative">
//                 <div className="w-16 h-16 rounded-full bg-[#009688]/40 animate-ping absolute inset-0" />
//                 <div className="w-16 h-16 rounded-full bg-[#009688] flex items-center justify-center text-white shadow-2xl relative z-10 border-2 border-white">
//                   <MapPin className="w-8 h-8" />
//                 </div>
//               </div>
//               <h4 className="text-lg font-extrabold mt-3 text-white">
//                 Pinnacle Healthcare & Diagnostic Center
//               </h4>
//               <p className="text-xs text-teal-200 mt-0.5">
//                 Road 7, Dhanmondi, Dhaka (Next to Rapa Plaza)
//               </p>
//             </div>

//             <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
//               <div className="flex items-center gap-2 text-xs text-slate-300">
//                 <Navigation className="w-4 h-4 text-teal-400" />
//                 <span>{lang === 'bn' ? 'গুগল ম্যাপে দিকনির্দেশনা দেখুন' : 'Get Live Driving Directions'}</span>
//               </div>

//               <a
//                 href="https://maps.google.com/?q=Dhanmondi+Dhaka+Bangladesh"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-1.5 text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
//               >
//                 {lang === 'bn' ? 'গুগল ম্যাপ খুলুন' : 'Open in Google Maps'}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { MapPin, Phone, Clock, Car, Navigation, MessageSquare } from 'lucide-react';

// ==================== ম্যাপ/লোকেশনের ছবি এখানে ইমপোর্ট করুন ====================
// আপনার assets ফোল্ডার থেকে ছবিটি এখানে ইমপোর্ট করুন
import mapImg from '../../assets/location/pl.png'; // <-- আপনার আসল ফাইলের নাম ও পাথ বসান

export default function LocationSection({ lang, onOpenAppointment }) {
  // গুগল ম্যাপের জন্য এনকোড করা লোকেশন
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Plot+%2314%2C+Road+%237%2C+Dhanmondi+(Adjacent+to+Mirpur+Road)%2C+Dhaka-1205%2C+Bangladesh";

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#009688] mb-2 block">
            {lang === 'bn' ? 'আমাদের অবস্থান ও যোগাযোগ' : 'Visit Our Center'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E33] tracking-tight mb-3">
            {lang === 'bn' 
              ? 'সহজ যাতায়াত ও আধুনিক সুবিধাসম্পন্ন ক্লিনিক ক্যাম্পাস' 
              : 'Convenient Location & Premium Patient Facilities'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {lang === 'bn'
              ? 'ঢাকা শহরের প্রাণকেন্দ্রে অবস্থিত। প্রশস্ত পার্কিং, লিফট এবং ২৪ ঘণ্টা সার্বক্ষণিক ল্যাবরেটরি ও ইমার্জেন্সি সাপোর্ট।'
              : 'Located at the heart of Dhaka with dedicated basement parking, wheelchair accessibility, and 24/7 diagnostic facilities.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Information Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#009688] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {lang === 'bn' ? 'ঠিকানা ও লোকেশন' : 'Pinnacle Healthcare Campus'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'bn' 
                      ? 'প্লট #১৪, রোড #৭, ধানমন্ডি (মিরপুর রোড সংলগ্ন), ঢাকা-১২০৫, বাংলাদেশ।'
                      : 'Plot #14, Road #7, Dhanmondi (Adjacent to Mirpur Road), Dhaka-1205, Bangladesh.'}
                  </p>
                  <span className="text-[11px] text-[#009688] font-semibold mt-1 block">
                    {lang === 'bn' ? 'ল্যান্ডমার্ক: রাপা প্লাজার বিপরীতে' : 'Landmark: Opposite to Rapa Plaza'}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {lang === 'bn' ? 'কার্যক্রম ও সময়সূচী' : 'Operating Hours'}
                  </h3>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p className="flex justify-between gap-4">
                      <span>{lang === 'bn' ? 'ডায়াগনস্টিক ল্যাব ও ইমার্জেন্সি:' : 'Diagnostics & Lab:'}</span>
                      <strong className="text-emerald-700">{lang === 'bn' ? '২৪ ঘণ্টা খোলা (24/7)' : 'Open 24/7'}</strong>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>{lang === 'bn' ? 'ডাক্তারদের চেম্বার:' : 'Specialist Chambers:'}</span>
                      <strong className="text-slate-900">08:00 AM - 10:00 PM</strong>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>{lang === 'bn' ? 'পিনাকল ডেন্টাল কেয়ার:' : 'Pinnacle Dental:'}</span>
                      <strong className="text-slate-900">09:00 AM - 09:30 PM</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {lang === 'bn' ? 'পার্কিং ও বিশেষ সুবিধা' : 'Parking & Patient Comfort'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'bn'
                      ? 'বেসমেন্টে ফ্রি সিকিউরড কার পার্কিং, হুইলচেয়ার অ্যাক্সেস, এবং রোগীদের জন্য ডেডিকেটেড লিফট।'
                      : 'Free secure basement parking, wheelchair ramps, patient stretcher elevators, and comfortable air-conditioned waiting lounges.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="tel:10620"
                className="flex-1 py-3 text-xs font-bold text-white bg-[#009688] hover:bg-[#00897b] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'হটলাইন কল: ১০৬২০' : 'Call Hotline: 10620'}</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=8801711002233"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Side: Map Image with Overlay */}
          <div className="lg:col-span-7 bg-[#0B1E33] rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative min-h-[380px] flex flex-col justify-between p-6 sm:p-8 text-white">
            
            {/* ==================== Map Image Background ==================== */}
            <div className="absolute inset-0 z-0">
              <img
                src={mapImg}
                alt="Pinnacle Healthcare Location Map"
                className="w-full h-full object-cover opacity-90"
                onError={(e) => {
                  // ইমেজ লোড না হলে ফলব্যাক
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #0B1E33 0%, #0D2A47 100%)';
                }}
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-[#0B1E33]/40 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Top Bar Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{lang === 'bn' ? 'পিনাকল হেলথকেয়ার মেইন ক্যাম্পাস' : 'Pinnacle Healthcare Main Campus'}</span>
              </div>
              <span className="text-xs font-mono text-teal-300 bg-slate-900/60 px-2 py-1 rounded-md backdrop-blur-sm">
                Dhaka-1205
              </span>
            </div>

            {/* Center Pin Overlay */}
            <div className="relative z-10 my-auto text-center py-8">
              <div className="inline-block relative">
                <div className="w-16 h-16 rounded-full bg-[#009688]/40 animate-ping absolute inset-0" />
                <div className="w-16 h-16 rounded-full bg-[#009688] flex items-center justify-center text-white shadow-2xl relative z-10 border-2 border-white">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-lg font-extrabold mt-3 text-white drop-shadow-md">
                Pinnacle Healthcare & Diagnostic Center
              </h4>
              <p className="text-xs text-teal-200 mt-0.5 drop-shadow-md">
                Road 7, Dhanmondi, Dhaka (Next to Rapa Plaza)
              </p>
            </div>

            {/* Bottom Bar Overlay */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Navigation className="w-4 h-4 text-teal-400" />
                <span>{lang === 'bn' ? 'গুগল ম্যাপে দিকনির্দেশনা দেখুন' : 'Get Live Driving Directions'}</span>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
              >
                {lang === 'bn' ? 'গুগল ম্যাপ খুলুন' : 'Open in Google Maps'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
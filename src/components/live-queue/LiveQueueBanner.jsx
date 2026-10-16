// import React, { useState } from 'react';
// import { DOCTORS_DATA } from '../../data/mockData';

// export default function LiveQueueBanner({
//   lang,
//   onOpenAppointment,
// }) {
//   const [tokenInput, setTokenInput] = useState('');
//   const [tokenStatusResult, setTokenStatusResult] = useState(null);

//   const activeDoctors = DOCTORS_DATA.filter(d => d.status === 'in_consultation' || d.status === 'available');

//   const handleCheckToken = (e) => {
//     e.preventDefault();
//     if (!tokenInput.trim()) return;
//     const num = parseInt(tokenInput.replace(/\D/g, ''), 10) || 20;
//     const serving = 18;
//     const ahead = num > serving ? num - serving : 0;
//     const estWait = ahead * 10;
    
//     if (ahead === 0) {
//       setTokenStatusResult(lang === 'bn' ? `টোকেন #${num} বর্তমানে ডাক্তারের চেম্বারে আছেন বা ডাক পড়েছে!` : `Token #${num} is currently being called into the chamber!`);
//     } else {
//       setTokenStatusResult(lang === 'bn' ? `টোকেন #${num}: আপনার সামনে আছেন ${ahead} জন রোগী। আনুমানিক অপেক্ষা: ${estWait} মিনিট।` : `Token #${num}: ${ahead} patients ahead of you. Estimated waiting time: ~${estWait} minutes.`);
//     }
//   };

//   return (
//     <section className="bg-gradient-to-r from-[#0B1E33] via-[#0E2C44] to-[#0B1E33] text-white py-10 px-4 sm:px-6 border-y border-teal-500/20">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           <div className="max-w-md text-center lg:text-left">
//             <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 uppercase tracking-wider mb-2">
//               <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
//               <span>{lang === 'bn' ? 'লাইভ চেম্বার কিউ ট্র্যাকিং' : 'Live Chamber Queue Tracking'}</span>
//             </div>
//             <h3 className="text-xl sm:text-2xl font-extrabold mb-1">
//               {lang === 'bn' ? 'ঘরে বসেই লাইভ সিরিয়াল পর্যবেক্ষণ করুন' : 'Real-Time Doctor Queue Status'}
//             </h3>
//             <p className="text-xs text-slate-300 leading-relaxed">
//               {lang === 'bn' 
//                 ? 'হাসপাতালে এসে ঘণ্টার পর ঘণ্টা বসে থাকার দিন শেষ। আপনার টোকেন নম্বর কত নম্বরে আছে তা সরাসরি ট্র্যাক করুন।'
//                 : 'Avoid waiting in crowded lobbies. Track your live consultation token and arrive right on schedule.'}
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center justify-center gap-4">
//             {activeDoctors.slice(0, 2).map((doc) => (
//               <div 
//                 key={doc.id}
//                 className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 min-w-[220px]"
//               >
//                 <div className="flex items-center justify-between gap-2 mb-2">
//                   <span className="text-xs font-bold text-teal-300 line-clamp-1">
//                     {lang === 'bn' ? doc.nameBn : doc.name}
//                   </span>
//                   <span className="w-2 h-2 rounded-full bg-emerald-400" />
//                 </div>
                
//                 <div className="flex items-baseline justify-between">
//                   <div>
//                     <span className="text-[10px] text-slate-300 uppercase font-semibold block">
//                       {lang === 'bn' ? 'বর্তমান সিরিয়াল' : 'Serving Now'}
//                     </span>
//                     <span className="text-2xl font-black font-mono text-white">
//                       #{doc.currentToken || 18}
//                     </span>
//                   </div>

//                   <div className="text-right">
//                     <span className="text-[10px] text-slate-300 uppercase font-semibold block">
//                       {lang === 'bn' ? 'মোট সিরিয়াল' : 'Total Booked'}
//                     </span>
//                     <span className="text-sm font-bold font-mono text-teal-300">
//                       {doc.totalTokensToday || 25}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-2 pt-2 border-t border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
//                   <span>{doc.roomNumber}</span>
//                   <span className="text-emerald-300">{lang === 'bn' ? 'চলমান' : 'Live'}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15 w-full lg:w-auto">
//             <span className="text-xs font-bold text-slate-200 block mb-2">
//               {lang === 'bn' ? 'আপনার টোকেন স্ট্যাটাস চেক করুন:' : 'Check Your Token Wait Time:'}
//             </span>
//             <form onSubmit={handleCheckToken} className="flex gap-2">
//               <input
//                 type="text"
//                 value={tokenInput}
//                 onChange={(e) => setTokenInput(e.target.value)}
//                 placeholder="e.g. 23"
//                 className="px-3 py-2 text-xs font-bold bg-white/15 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 w-28"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer shrink-0"
//               >
//                 {lang === 'bn' ? 'যাচাই' : 'Check'}
//               </button>
//             </form>

//             {tokenStatusResult && (
//               <p className="mt-2 text-xs text-teal-300 bg-teal-950/50 p-2 rounded border border-teal-500/30">
//                 {tokenStatusResult}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { DOCTORS_DATA } from '../../data/mockData';
import { 
  Activity, 
  Users, 
  Clock, 
  MapPin, 
  Search,
  Zap,
  CheckCircle2,
  Bell
} from 'lucide-react';

export default function LiveQueueBanner({
  lang,
  onOpenAppointment,
}) {
  const [tokenInput, setTokenInput] = useState('');
  const [tokenStatusResult, setTokenStatusResult] = useState(null);

  const activeDoctors = DOCTORS_DATA.filter(
    (d) => d.status === 'in_consultation' || d.status === 'available'
  );

  const handleCheckToken = (e) => {
    e.preventDefault();
    if (!tokenInput.trim()) return;
    const num = parseInt(tokenInput.replace(/\D/g, ''), 10) || 20;
    const serving = 18;
    const ahead = num > serving ? num - serving : 0;
    const estWait = ahead * 10;

    if (ahead === 0) {
      setTokenStatusResult(
        lang === 'bn'
          ? `টোকেন #${num} বর্তমানে ডাক্তারের চেম্বারে আছেন বা ডাক পড়েছে!`
          : `Token #${num} is currently being called into the chamber!`
      );
    } else {
      setTokenStatusResult(
        lang === 'bn'
          ? `টোকেন #${num}: আপনার সামনে আছেন ${ahead} জন রোগী। আনুমানিক অপেক্ষা: ${estWait} মিনিট।`
          : `Token #${num}: ${ahead} patients ahead of you. Estimated wait: ~${estWait} minutes.`
      );
    }
  };

  return (
    <section className="relative bg-[#0B1E33] text-white py-12 px-4 sm:px-6 overflow-hidden">
      
      {/* ==================== Animated Background Effects ==================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] animate-pulse" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Top and Bottom Borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ==================== Main Grid Layout ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ==================== Left Section: Title & Info ==================== */}
          <div className="lg:col-span-4 text-center lg:text-left">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider mb-4 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span>{lang === 'bn' ? 'লাইভ কিউ ট্র্যাকিং' : 'Live Queue Tracking'}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black mb-3 leading-tight">
              {lang === 'bn' 
                ? 'ঘরে বসেই লাইভ সিরিয়াল দেখুন' 
                : 'Track Live Chamber Queue in Real-Time'}
            </h3>
            
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {lang === 'bn' 
                ? 'হাসপাতালে এসে ঘণ্টার পর ঘণ্টা অপেক্ষা করার দিন শেষ। আপনার টোকেন কত নম্বরে আছে তা এখনই জানুন।'
                : 'Stop waiting in crowded lobbies. Track your live consultation token and arrive exactly when it\'s your turn.'}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                <Zap className="w-3 h-3 text-amber-400" />
                {lang === 'bn' ? 'রিয়েল-টাইম' : 'Real-Time'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                <Bell className="w-3 h-3 text-teal-400" />
                {lang === 'bn' ? 'SMS অ্যালার্ট' : 'SMS Alert'}
              </span>
            </div>
          </div>

          {/* ==================== Middle Section: Doctor Cards ==================== */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeDoctors.slice(0, 2).map((doc, idx) => (
                <div 
                  key={doc.id}
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(20,184,166,0.2)] overflow-hidden"
                >
                  {/* Card Hover Glow */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700" />

                  {/* Doctor Name */}
                  <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/30 to-emerald-500/30 border border-teal-400/40 flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4 text-teal-300" />
                      </div>
                      <span className="text-xs font-bold text-white line-clamp-1">
                        {lang === 'bn' ? doc.nameBn : doc.name}
                      </span>
                    </div>
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                  </div>

                  {/* Token Numbers */}
                  <div className="flex items-baseline justify-between mb-3 relative z-10">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5 tracking-wider">
                        {lang === 'bn' ? 'বর্তমান সিরিয়াল' : 'Now Serving'}
                      </span>
                      <span className="text-3xl font-black font-mono text-white tabular-nums">
                        #{doc.currentToken || 18}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5 tracking-wider">
                        {lang === 'bn' ? 'মোট বুকড' : 'Total Booked'}
                      </span>
                      <span className="text-sm font-bold font-mono text-teal-300 tabular-nums">
                        {doc.totalTokensToday || 25}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between relative z-10">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-teal-400" />
                      {doc.roomNumber}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      {lang === 'bn' ? 'চলমান' : 'Live'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar Indicator */}
            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <Users className="w-3.5 h-3.5 text-teal-400" />
                  {lang === 'bn' ? 'চেম্বার প্রগ্রেস' : 'Chamber Progress'}
                </span>
                <span className="font-mono font-bold text-teal-300">72%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* ==================== Right Section: Token Checker ==================== */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-teal-500/[0.12] to-emerald-500/[0.06] backdrop-blur-md p-5 rounded-2xl border border-teal-400/30 hover:border-teal-400/60 transition-all duration-500 shadow-[0_8px_30px_rgba(20,184,166,0.1)]">
              
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center">
                  <Search className="w-4 h-4 text-teal-300" />
                </div>
                <span className="text-xs font-bold text-white">
                  {lang === 'bn' ? 'টোকেন স্ট্যাটাস চেক' : 'Check Token Status'}
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleCheckToken} className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  placeholder={lang === 'bn' ? 'যেমন: ২৩' : 'e.g. 23'}
                  className="flex-1 px-3 py-2.5 text-xs font-bold bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 focus:bg-white/15 transition-all w-full"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-bold text-slate-900 bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 rounded-lg transition-all duration-300 cursor-pointer shrink-0 transform hover:scale-105 active:scale-95 shadow-md shadow-teal-500/30"
                >
                  {lang === 'bn' ? 'যাচাই' : 'Check'}
                </button>
              </form>

              {/* Result */}
              {tokenStatusResult ? (
                <div className="text-xs text-teal-100 bg-teal-950/60 p-3 rounded-lg border border-teal-500/40 flex items-start gap-2 animate-in fade-in slide-in-from-top-2 duration-500">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{tokenStatusResult}</span>
                </div>
              ) : (
                <div className="text-[11px] text-slate-400 bg-white/5 p-2.5 rounded-lg border border-white/10 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>
                    {lang === 'bn' 
                      ? 'টোকেন নাম্বার দিয়ে আপনার অপেক্ষার সময় জানুন।' 
                      : 'Enter your token number to see your estimated wait time.'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
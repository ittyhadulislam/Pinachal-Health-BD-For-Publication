// import React, { useState } from 'react';
// import PinnacleLogo from '../logo/PinnacleLogo';
// import Navbar from './Navbar';
// import { 
//   Phone, 
//   Calendar, 
//   FileText, 
//   Menu, 
//   X, 
//   Clock, 
//   Sparkles,
//   Mail,
//   Facebook,
//   Youtube,
//   Linkedin,
//   Instagram,
//   Info,
//   Ambulance
// } from 'lucide-react';

// export default function Header({
//   lang,
//   onToggleLang,
//   onOpenAppointment,
//   onOpenReportModal,
//   onOpenAiGuide,
// }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const t = {
//     bookAppointment: lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Book Appointment',
//     checkReport: lang === 'bn' ? 'অনলাইন রিপোর্ট' : 'Online Reports',
//     aiGuide: lang === 'bn' ? 'এআই লক্ষণ গাইড' : 'AI Symptom Guide',
//     navHome: lang === 'bn' ? 'হোম' : 'Home',
//     navServices: lang === 'bn' ? 'সেবা সমূহ' : 'Services',
//     navDental: lang === 'bn' ? 'পিনাকল ডেন্টাল' : 'Pinnacle Dental',
//     navDoctors: lang === 'bn' ? 'ডাক্তারগণ' : 'Doctors',
//     navPackages: lang === 'bn' ? 'হেলথ প্যাকেজ' : 'Health Packages',
//     navLocation: lang === 'bn' ? 'লোকেশন' : 'Location',
//   };

//   const navLinks = [
//     { href: '#home', label: t.navHome },
//     { href: '#services', label: t.navServices },
//     { href: '#dental', label: t.navDental },
//     { href: '#doctors', label: t.navDoctors },
//     { href: '#packages', label: t.navPackages },
//     { href: '#approach', label: lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি' : 'Our Approach' },
//     { href: '#location', label: t.navLocation },
//   ];

//   return (
//     <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 shadow-xs">
//       {/* Top Notification / Hotline Strip */}
//       <div className="bg-[#0B1E33] text-slate-200 text-[11px] sm:text-xs py-2 px-4 sm:px-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
//         <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
//           {/* Left Side: Info from Image */}
//           <div className="flex items-center gap-4 sm:gap-6">
//             <div className="flex items-center gap-1.5">
//               <Clock className="w-3.5 h-3.5 text-sky-400" />
//               <span>Open Daily: 7:00 AM - 11:00 PM</span>
//             </div>
            
//             <a href="mailto:info@gulshancliniccbd.org" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Mail className="w-3.5 h-3.5 text-sky-400" />
//               <span>info@pinnaclehelthcare.org</span>
//             </a>

//             <div className="flex items-center gap-2 text-sky-400">
//               <a href="#" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
//             </div>

//             <a href="tel:0963999111" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Phone className="w-3.5 h-3.5 text-sky-400" />
//               <span className="font-semibold">Hotline: 0963999111</span>
//             </a>

//             <a href="tel:01708800889" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Info className="w-3.5 h-3.5 text-sky-400" />
//               <span className="font-semibold">Test Info: 01708800889</span>
//             </a>

//             <a href="tel:+8801708800888" className="flex items-center gap-1.5 bg-[#0e355c] px-3 py-1 rounded-full border border-sky-800 hover:bg-[#14477a] transition-colors text-sky-300 font-semibold">
//               <Ambulance className="w-3.5 h-3.5" />
//               <span>24/7 Helpline: +8801708800888</span>
//             </a>
//           </div>

//           {/* Right Side: AI Guide & Language */}
//           <div className="flex items-center gap-3 shrink-0 ml-auto">
//             <button
//               onClick={onOpenAiGuide}
//               className="inline-flex items-center gap-1.5 text-[11px] font-medium text-teal-300 hover:text-white bg-teal-900/40 hover:bg-teal-800/60 px-2.5 py-0.5 rounded-full border border-teal-500/30 transition-colors cursor-pointer"
//             >
//               <Sparkles className="w-3 h-3 text-teal-300" />
//               <span>{t.aiGuide}</span>
//             </button>

//             {/* Language Switcher */}
//             <button
//               onClick={onToggleLang}
//               className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-teal-300 hover:text-white transition-colors cursor-pointer"
//               title="Toggle English / বাংলা"
//             >
//               <span className={lang === 'en' ? 'text-teal-300' : 'text-slate-400'}>EN</span>
//               <span className="text-slate-500">/</span>
//               <span className={lang === 'bn' ? 'text-teal-300' : 'text-slate-400'}>বাংলা</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Bar */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-20 gap-4">
//           {/* Logo */}
//           <a href="#home" className="shrink-0 group">
//             <PinnacleLogo size="md" />
//           </a>

//           {/* Desktop Navbar */}
//           <Navbar navLinks={navLinks} />

//           {/* Action CTAs */}
//           <div className="hidden sm:flex items-center gap-3 shrink-0">
//             <button
//               onClick={onOpenReportModal}
//               className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#009688] border border-[#009688]/30 hover:border-[#009688] hover:bg-[#009688]/5 rounded-lg transition-all cursor-pointer whitespace-nowrap"
//             >
//               <FileText className="w-3.5 h-3.5 text-[#009688]" />
//               <span>{t.checkReport}</span>
//             </button>

//             <button
//               onClick={onOpenAppointment}
//               className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#009688] to-[#0d9488] hover:from-[#00897b] hover:to-[#0f766e] rounded-lg shadow-sm hover:shadow-md transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
//             >
//               <Calendar className="w-3.5 h-3.5 text-white" />
//               <span>{t.bookAppointment}</span>
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="flex lg:hidden items-center gap-2">
//             <button
//               onClick={onOpenAppointment}
//               className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-white bg-[#009688] rounded-md"
//             >
//               <Calendar className="w-3.5 h-3.5" />
//             </button>
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="p-2 rounded-lg text-slate-700 hover:text-[#009688] hover:bg-slate-100 transition-colors"
//               aria-label="Toggle Menu"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl animate-in slide-in-from-top-2">
//           <Navbar 
//             navLinks={navLinks} 
//             mobile={true} 
//             onLinkClick={() => setMobileMenuOpen(false)} 
//           />

//           <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 mt-3">
//             <button
//               onClick={() => {
//                 setMobileMenuOpen(false);
//                 onOpenReportModal();
//               }}
//               className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-[#009688] border border-[#009688]/30 rounded-lg bg-teal-50/50"
//             >
//               <FileText className="w-4 h-4" />
//               <span>{t.checkReport}</span>
//             </button>

//             <button
//               onClick={() => {
//                 setMobileMenuOpen(false);
//                 onOpenAppointment();
//               }}
//               className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white bg-[#009688] rounded-lg shadow-sm"
//             >
//               <Calendar className="w-4 h-4" />
//               <span>{t.bookAppointment}</span>
//             </button>

//             <button
//               onClick={() => {
//                 setMobileMenuOpen(false);
//                 onOpenAiGuide();
//               }}
//               className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
//             >
//               <Sparkles className="w-3.5 h-3.5 text-teal-600" />
//               <span>{t.aiGuide}</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


// import React, { useState } from 'react';
// import PinnacleLogo from '../logo/PinnacleLogo';
// import Navbar from './Navbar';
// import { 
//   Phone, 
//   Calendar, 
//   FileText, 
//   Menu, 
//   X, 
//   Clock, 
//   Sparkles,
//   Mail,
//   Facebook,
//   Youtube,
//   Linkedin,
//   Instagram,
//   Info,
//   Ambulance
// } from 'lucide-react';

// export default function Header({
//   lang,
//   onToggleLang,
//   onOpenAppointment,
//   onOpenReportModal,
//   onOpenAiGuide,
// }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const t = {
//     bookAppointment: lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Book Appointment',
//     checkReport: lang === 'bn' ? 'অনলাইন রিপোর্ট' : 'Online Reports',
//     aiGuide: lang === 'bn' ? 'এআই লক্ষণ গাইড' : 'AI Symptom Guide',
//     navHome: lang === 'bn' ? 'হোম' : 'Home',
//     navServices: lang === 'bn' ? 'সেবা সমূহ' : 'Services',
//     navDental: lang === 'bn' ? 'পিনাকল ডেন্টাল' : 'Pinnacle Dental',
//     navDoctors: lang === 'bn' ? 'ডাক্তারগণ' : 'Doctors',
//     navPackages: lang === 'bn' ? 'হেলথ প্যাকেজ' : 'Health Packages',
//     navLocation: lang === 'bn' ? 'লোকেশন' : 'Location',
//   };

//   const navLinks = [
//     { href: '#home', label: t.navHome },
//     { href: '#services', label: t.navServices },
//     { href: '#dental', label: t.navDental },
//     { href: '#doctors', label: t.navDoctors },
//     { href: '#packages', label: t.navPackages },
//     { href: '#approach', label: lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি' : 'Our Approach' },
//     { href: '#location', label: t.navLocation },
//   ];

//   return (
//     <>
//       {/* Top Bar - স্ক্রল করলে উপরে চলে যাবে */}
//       <div className="w-full bg-[#0B1E33] text-slate-200 text-[11px] sm:text-xs py-2 px-4 sm:px-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
//         <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
//           <div className="flex items-center gap-4 sm:gap-6">
//             <div className="flex items-center gap-1.5">
//               <Clock className="w-3.5 h-3.5 text-sky-400" />
//               <span>Open Daily: 7:00 AM - 11:00 PM</span>
//             </div>
            
//             <a href="mailto:info@gulshancliniccbd.org" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Mail className="w-3.5 h-3.5 text-sky-400" />
//               <span>info@gulshancliniccbd.org</span>
//             </a>

//             <div className="flex items-center gap-2 text-sky-400">
//               <a href="#" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
//             </div>

//             <a href="tel:0963999111" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Phone className="w-3.5 h-3.5 text-sky-400" />
//               <span className="font-semibold">Hotline: 0963999111</span>
//             </a>

//             <a href="tel:01708800889" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Info className="w-3.5 h-3.5 text-sky-400" />
//               <span className="font-semibold">Test Info: 01708800889</span>
//             </a>

//             <a href="tel:+8801708800888" className="flex items-center gap-1.5 bg-[#0e355c] px-3 py-1 rounded-full border border-sky-800 hover:bg-[#14477a] transition-colors text-sky-300 font-semibold">
//               <Ambulance className="w-3.5 h-3.5" />
//               <span>24/7 Helpline: +8801708800888</span>
//             </a>
//           </div>

//           <div className="flex items-center gap-3 shrink-0 ml-auto">
//             <button
//               onClick={onOpenAiGuide}
//               className="inline-flex items-center gap-1.5 text-[11px] font-medium text-teal-300 hover:text-white bg-teal-900/40 hover:bg-teal-800/60 px-2.5 py-0.5 rounded-full border border-teal-500/30 transition-colors cursor-pointer"
//             >
//               <Sparkles className="w-3 h-3 text-teal-300" />
//               <span>{t.aiGuide}</span>
//             </button>

//             <button
//               onClick={onToggleLang}
//               className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-teal-300 hover:text-white transition-colors cursor-pointer"
//             >
//               <span className={lang === 'en' ? 'text-teal-300' : 'text-slate-400'}>EN</span>
//               <span className="text-slate-500">/</span>
//               <span className={lang === 'bn' ? 'text-teal-300' : 'text-slate-400'}>বাংলা</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar - স্ক্রল করলে একদম উপরে ফিক্সড (Sticky) হয়ে থাকবে */}
//       <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 shadow-xs">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex items-center justify-between h-20 gap-4">
//             <a href="#home" className="shrink-0 group">
//               <PinnacleLogo size="md" />
//             </a>

//             <Navbar navLinks={navLinks} />

//             <div className="hidden sm:flex items-center gap-3 shrink-0">
//               <button
//                 onClick={onOpenReportModal}
//                 className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#009688] border border-[#009688]/30 hover:border-[#009688] hover:bg-[#009688]/5 rounded-lg transition-all cursor-pointer whitespace-nowrap"
//               >
//                 <FileText className="w-3.5 h-3.5 text-[#009688]" />
//                 <span>{t.checkReport}</span>
//               </button>

//               <button
//                 onClick={onOpenAppointment}
//                 className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#009688] to-[#0d9488] hover:from-[#00897b] hover:to-[#0f766e] rounded-lg shadow-sm hover:shadow-md transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
//               >
//                 <Calendar className="w-3.5 h-3.5 text-white" />
//                 <span>{t.bookAppointment}</span>
//               </button>
//             </div>

//             <div className="flex lg:hidden items-center gap-2">
//               <button
//                 onClick={onOpenAppointment}
//                 className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-white bg-[#009688] rounded-md"
//               >
//                 <Calendar className="w-3.5 h-3.5" />
//               </button>
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="p-2 rounded-lg text-slate-700 hover:text-[#009688] hover:bg-slate-100 transition-colors"
//                 aria-label="Toggle Menu"
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl absolute w-full left-0">
//             <Navbar 
//               navLinks={navLinks} 
//               mobile={true} 
//               onLinkClick={() => setMobileMenuOpen(false)} 
//             />

//             <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 mt-3">
//               <button
//                 onClick={() => { setMobileMenuOpen(false); onOpenReportModal(); }}
//                 className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-[#009688] border border-[#009688]/30 rounded-lg bg-teal-50/50"
//               >
//                 <FileText className="w-4 h-4" />
//                 <span>{t.checkReport}</span>
//               </button>

//               <button
//                 onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
//                 className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white bg-[#009688] rounded-lg shadow-sm"
//               >
//                 <Calendar className="w-4 h-4" />
//                 <span>{t.bookAppointment}</span>
//               </button>

//               <button
//                 onClick={() => { setMobileMenuOpen(false); onOpenAiGuide(); }}
//                 className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
//               >
//                 <Sparkles className="w-3.5 h-3.5 text-teal-600" />
//                 <span>{t.aiGuide}</span>
//               </button>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }




// import React, { useState } from 'react';
// import PinnacleLogo from '../logo/PinnacleLogo';
// import Navbar from './Navbar';
// import { 
//   Phone, 
//   Calendar, 
//   Menu, 
//   X, 
//   Clock, 
//   Sparkles,
//   Mail,
//   Facebook,
//   Youtube,
//   Linkedin,
//   Instagram,
//   Info,
//   Ambulance,
//   LogIn
// } from 'lucide-react';

// export default function Header({
//   lang,
//   onToggleLang,
//   onOpenAppointment,
//   onOpenAiGuide,
// }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const t = {
//     bookAppointment: lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট' : 'Appointment',
//     login: lang === 'bn' ? 'লগইন' : 'Login',
//     aiGuide: lang === 'bn' ? 'এআই লক্ষণ গাইড' : 'AI Symptom Guide',
//     navHome: lang === 'bn' ? 'হোম' : 'Home',
//     navAbout: lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us',
//     navServices: lang === 'bn' ? 'সেবা সমূহ' : 'Services',
//     navDoctors: lang === 'bn' ? 'ডাক্তার তথ্য' : 'Doctor Info',
//     navPackages: lang === 'bn' ? 'হেলথ প্যাকেজ' : 'Health Package',
//     navContact: lang === 'bn' ? 'যোগাযোগ' : 'Contact',
//   };

//   // Updated NavLinks with dropdown flags
//   const navLinks = [
//     { href: '#home', label: t.navHome },
//     { href: '#about', label: t.navAbout, hasDropdown: true },
//     { href: '#services', label: t.navServices, hasDropdown: true },
//     { href: '#doctors', label: t.navDoctors },
//     { href: '#packages', label: t.navPackages },
//     { href: '#contact', label: t.navContact },
//   ];

//   return (
//     <>
//       {/* Top Bar - Scroll korle upore chole jabe */}
//       <div className="w-full bg-[#0B1E33] text-slate-200 text-[11px] sm:text-xs py-2 px-4 sm:px-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
//         <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
//           <div className="flex items-center gap-4 sm:gap-6">
//             <div className="flex items-center gap-1.5">
//               <Clock className="w-3.5 h-3.5 text-sky-400" />
//               <span>Open Daily: 7:00 AM - 11:00 PM</span>
//             </div>
            
//             <a href="mailto:info@pinnaclehelthcsre.org" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Mail className="w-3.5 h-3.5 text-sky-400" />
//               <span>info@pinnaclehelthcsre.org</span>
//             </a>

//             <div className="flex items-center gap-2 text-sky-400">
//               <a href="#" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
//               <a href="#" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
//             </div>

//             <a href="tel:0963999111" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Phone className="w-3.5 h-3.5 text-sky-400" />
//               <span className="font-semibold">Hotline: 0963999111</span>
//             </a>

//             <a href="tel:01708800889" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
//               <Info className="w-3.5 h-3.5 text-sky-400" />
//               <span className="font-semibold">Test Info: 01708800889</span>
//             </a>

//             <a href="tel:+8801708800888" className="flex items-center gap-1.5 bg-[#0e355c] px-3 py-1 rounded-full border border-sky-800 hover:bg-[#14477a] transition-colors text-sky-300 font-semibold">
//               <Ambulance className="w-3.5 h-3.5" />
//               <span>24/7 Helpline: +8801776-735484</span>
//             </a>
//           </div>

//           <div className="flex items-center gap-3 shrink-0 ml-auto">
//             <button
//               onClick={onOpenAiGuide}
//               className="inline-flex items-center gap-1.5 text-[11px] font-medium text-teal-300 hover:text-white bg-teal-900/40 hover:bg-teal-800/60 px-2.5 py-0.5 rounded-full border border-teal-500/30 transition-colors cursor-pointer"
//             >
//               <Sparkles className="w-3 h-3 text-teal-300" />
//               <span>{t.aiGuide}</span>
//             </button>

//             <button
//               onClick={onToggleLang}
//               className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-teal-300 hover:text-white transition-colors cursor-pointer"
//             >
//               <span className={lang === 'en' ? 'text-teal-300' : 'text-slate-400'}>EN</span>
//               <span className="text-slate-500">/</span>
//               <span className={lang === 'bn' ? 'text-teal-300' : 'text-slate-400'}>বাংলা</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar - Scroll korle sticky thakbe */}
//       <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 shadow-xs">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex items-center justify-between h-20 gap-4">
//             <a href="#home" className="shrink-0 group">
//               <PinnacleLogo size="md" />
//             </a>

//             <Navbar navLinks={navLinks} />

//             <div className="hidden sm:flex items-center gap-3 shrink-0">
//               {/* Appointment Button (Replaced Online Reports) */}
//               <button
//                 onClick={onOpenAppointment}
//                 className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#009688] border border-[#009688]/30 hover:border-[#009688] hover:bg-[#009688]/5 rounded-lg transition-all cursor-pointer whitespace-nowrap"
//               >
//                 <Calendar className="w-3.5 h-3.5 text-[#009688]" />
//                 <span>{t.bookAppointment}</span>
//               </button>

//               {/* Login Button (Replaced Appointment) */}
//               <button
//                 onClick={() => console.log('Login clicked')}
//                 className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#009688] to-[#0d9488] hover:from-[#00897b] hover:to-[#0f766e] rounded-lg shadow-sm hover:shadow-md transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
//               >
//                 <LogIn className="w-3.5 h-3.5 text-white" />
//                 <span>{t.login}</span>
//               </button>
//             </div>

//             <div className="flex lg:hidden items-center gap-2">
//               <button
//                 onClick={onOpenAppointment}
//                 className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-white bg-[#009688] rounded-md"
//               >
//                 <Calendar className="w-3.5 h-3.5" />
//               </button>
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="p-2 rounded-lg text-slate-700 hover:text-[#009688] hover:bg-slate-100 transition-colors"
//                 aria-label="Toggle Menu"
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl absolute w-full left-0">
//             <Navbar 
//               navLinks={navLinks} 
//               mobile={true} 
//               onLinkClick={() => setMobileMenuOpen(false)} 
//             />

//             <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 mt-3">
//               <button
//                 onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
//                 className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-[#009688] border border-[#009688]/30 rounded-lg bg-teal-50/50"
//               >
//                 <Calendar className="w-4 h-4" />
//                 <span>{t.bookAppointment}</span>
//               </button>

//               <button
//                 onClick={() => { setMobileMenuOpen(false); console.log('Login clicked'); }}
//                 className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white bg-[#009688] rounded-lg shadow-sm"
//               >
//                 <LogIn className="w-4 h-4" />
//                 <span>{t.login}</span>
//               </button>

//               <button
//                 onClick={() => { setMobileMenuOpen(false); onOpenAiGuide(); }}
//                 className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
//               >
//                 <Sparkles className="w-3.5 h-3.5 text-teal-600" />
//                 <span>{t.aiGuide}</span>
//               </button>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import PinnacleLogo from '../logo/PinnacleLogo';
import Navbar from './Navbar';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  Clock, 
  Sparkles,
  Mail,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Info,
  Ambulance,
  LogIn
} from 'lucide-react';

export default function Header({
  lang,
  onToggleLang,
  onOpenAppointment,
  onOpenAiGuide,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    bookAppointment: lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট' : 'Appointment',
    login: lang === 'bn' ? 'লগইন' : 'Login',
    aiGuide: lang === 'bn' ? 'এআই লক্ষণ গাইড' : 'AI Symptom Guide',
    navHome: lang === 'bn' ? 'হোম' : 'Home',
    navAbout: lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us',
    navServices: lang === 'bn' ? 'সেবা সমূহ' : 'Service',
    navDoctors: lang === 'bn' ? 'ডাক্তার তথ্য' : 'Doctors Info',
    navPackages: lang === 'bn' ? 'হেলথ প্যাকেজ' : 'Health Package',
    navContact: lang === 'bn' ? 'যোগাযোগ' : 'Contact',
  };

  // ==================== Global Smooth Scroll Handler ====================
  // এটি যেকোনো #anchor লিংকে ক্লিক করলে সঠিক সেকশনে স্মুথ স্ক্রল করবে
  useEffect(() => {
    const handleAnchorClick = (e) => {
      // ক্লিক করা এলিমেন্ট থেকে নিকটতম anchor ট্যাগ খুঁজে বের করা
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#home') {
        // #home হলে পেজের একদম উপরে যাবে
        if (href === '#home') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        e.preventDefault();
        
        // Sticky header এর উচ্চতা বাদ দিয়ে স্ক্রল পজিশন ক্যালকুলেট করা
        const headerOffset = 100;
        const elementPosition =
          targetEl.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth',
        });

        // মোবাইল মেনু খোলা থাকলে বন্ধ করে দেওয়া
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // ==================== Nav Links ====================
  const navLinks = [
    { href: '#home', label: t.navHome },
    { 
      href: '#about', 
      label: t.navAbout, 
      hasDropdown: true,
      subLinks: [
        { href: '#story', label: lang === 'bn' ? 'আমাদের গল্প' : 'Our Story' },
        { href: '#mission', label: lang === 'bn' ? 'মিশন ও ভিশন' : 'Mission & Vision' },
        { href: '#facilities', label: lang === 'bn' ? 'সুবিধা ও সরঞ্জাম' : 'Facilities & Equipment' },
        { href: '#quality', label: lang === 'bn' ? 'গুণমান ও নিরাপত্তা' : 'Quality & Safety' },
        { href: '#statistics', label: lang === 'bn' ? 'পরিসংখ্যান' : 'Statistics' },
      ]
    },
    { 
      href: '#services', 
      label: t.navServices, 
      hasDropdown: true,
      subLinks: [
        { href: '#dental', label: lang === 'bn' ? 'ডেন্টাল' : 'Dental' },
        { href: '#general-medicine', label: lang === 'bn' ? 'জেনারেল মেডিসিন' : 'General Medicine' },
        { href: '#physiotherapy', label: lang === 'bn' ? 'ফিজিওথেরাপি' : 'Physiotherapy' },
        { href: '#dermatology', label: lang === 'bn' ? 'চর্ম ও এলার্জি' : 'Dermatology/Skin' },
        { href: '#gynae', label: lang === 'bn' ? 'গাইনী ও প্রসূতি' : 'Gynae & Obstetrics' },
        { href: '#pathology', label: lang === 'bn' ? 'প্যাথলজি/ডায়াগনস্টিক' : 'Pathology/Diagnostic' },
        { href: '#health-checkup', label: lang === 'bn' ? 'হেলথ চেকআপ' : 'Health Checkup' },
        { href: '#pre-medical', label: lang === 'bn' ? 'প্রি-মেডিকেল চেকআপ' : 'Pre-Medical Checkup' },
      ]
    },
    { href: '#doctors', label: t.navDoctors },
    { href: '#packages', label: t.navPackages },
    { href: '#location', label: t.navContact },
  ];

  return (
    <>
      <div className="w-full bg-[#0B1E33] text-slate-200 text-[11px] sm:text-xs py-2 px-4 sm:px-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Open Daily: 7:00 AM - 11:00 PM</span>
            </div>
            
            <a href="mailto:info@pinnaclehelthcsre.org" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>info@pinnaclehelthcsre.org</span>
            </a>

            <div className="flex items-center gap-2 text-sky-400">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            </div>

            <a href="tel:0963999111" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-semibold">Hotline: 0963999111</span>
            </a>

            <a href="tel:01708800889" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
              <Info className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-semibold">Test Info: 01708800889</span>
            </a>

            <a href="tel:+8801708800888" className="flex items-center gap-1.5 bg-[#0e355c] px-3 py-1 rounded-full border border-sky-800 hover:bg-[#14477a] transition-colors text-sky-300 font-semibold">
              <Ambulance className="w-3.5 h-3.5" />
              <span>24/7 Helpline: +8801776-735484</span>
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <button
              onClick={onOpenAiGuide}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-teal-300 hover:text-white bg-teal-900/40 hover:bg-teal-800/60 px-2.5 py-0.5 rounded-full border border-teal-500/30 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-teal-300" />
              <span>{t.aiGuide}</span>
            </button>

            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-teal-300 hover:text-white transition-colors cursor-pointer"
            >
              <span className={lang === 'en' ? 'text-teal-300' : 'text-slate-400'}>EN</span>
              <span className="text-slate-500">/</span>
              <span className={lang === 'bn' ? 'text-teal-300' : 'text-slate-400'}>বাংলা</span>
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            <a href="#home" className="shrink-0 group">
              <PinnacleLogo size="md" />
            </a>

            <Navbar navLinks={navLinks} lang={lang} />

            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenAppointment}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#009688] border border-[#009688]/30 hover:border-[#009688] hover:bg-[#009688]/5 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#009688]" />
                <span>{t.bookAppointment}</span>
              </button>

              <button
                onClick={() => console.log('Login clicked')}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#009688] to-[#0d9488] hover:from-[#00897b] hover:to-[#0f766e] rounded-lg shadow-sm hover:shadow-md transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <LogIn className="w-3.5 h-3.5 text-white" />
                <span>{t.login}</span>
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenAppointment}
                className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-white bg-[#009688] rounded-md"
              >
                <Calendar className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#009688] hover:bg-slate-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl absolute w-full left-0">
            <Navbar 
              navLinks={navLinks} 
              lang={lang}
              mobile={true} 
              onLinkClick={() => setMobileMenuOpen(false)} 
            />

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 mt-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-[#009688] border border-[#009688]/30 rounded-lg bg-teal-50/50"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookAppointment}</span>
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); console.log('Login clicked'); }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white bg-[#009688] rounded-lg shadow-sm"
              >
                <LogIn className="w-4 h-4" />
                <span>{t.login}</span>
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAiGuide(); }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>{t.aiGuide}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
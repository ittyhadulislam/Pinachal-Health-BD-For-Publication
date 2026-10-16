// import React from 'react';
// import { ChevronRight } from 'lucide-react';

// export default function Navbar({ navLinks, mobile = false, onLinkClick }) {
//   if (mobile) {
//     return (
//       <nav className="flex flex-col gap-2">
//         {navLinks.map((link) => (
//           <a
//             key={link.href}
//             href={link.href}
//             onClick={onLinkClick}
//             className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#009688] hover:bg-slate-50 rounded-lg transition-colors"
//           >
//             <span>{link.label}</span>
//             <ChevronRight className="w-4 h-4 text-slate-400" />
//           </a>
//         ))}
//       </nav>
//     );
//   }

//   return (
//     <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-semibold text-slate-700">
//       {navLinks.map((link) => (
//         <a
//           key={link.href}
//           href={link.href}
//           className="hover:text-[#009688] transition-colors whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#009688]"
//         >
//           {link.label}
//         </a>
//       ))}
//     </nav>
//   );
// }


import React, { useState } from 'react';
import { ChevronRight, ChevronDown, ChevronsRight } from 'lucide-react';

export default function Navbar({ navLinks, mobile = false, onLinkClick }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  if (mobile) {
    return (
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <div key={link.href}>
            <div
              onClick={() => {
                if (link.hasDropdown) {
                  toggleDropdown(link.label);
                } else {
                  if (onLinkClick) onLinkClick();
                }
              }}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#009688] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              <a href={link.hasDropdown ? '#' : link.href} className="flex-1">
                {link.label}
              </a>
              {link.hasDropdown ? (
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </div>
            
            {/* Mobile Dropdown Sublinks */}
            {link.hasDropdown && openDropdown === link.label && (
              <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-teal-100 ml-4 mb-2">
                {link.subLinks.map((sub, idx) => (
                  <a
                    key={idx}
                    href={sub.href}
                    onClick={onLinkClick}
                    className="flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-[#009688] hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 last:border-none"
                  >
                    <ChevronsRight className="w-3.5 h-3.5 text-[#009688] mr-2 shrink-0" />
                    <span>{sub.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-semibold text-slate-700">
      {navLinks.map((link) => (
        <div key={link.href} className="group relative flex items-center gap-1 cursor-pointer py-6">
          <a
            href={link.hasDropdown ? '#' : link.href}
            className="hover:text-[#009688] transition-colors whitespace-nowrap flex items-center gap-1 relative"
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#009688] transition-colors" />
            )}
            
            {/* Active/Hover Bottom Line (Like the image's blue line under Home) */}
            <span className="absolute -bottom-[23px] left-0 w-0 h-0.5 bg-[#009688] transition-all group-hover:w-full"></span>
          </a>

          {/* Desktop Dropdown Menu - Matches Image Design */}
          {link.hasDropdown && link.subLinks && (
            <div className="absolute top-[100%] left-0 w-64 bg-white rounded-md shadow-[0_10px_40px_rgb(0,0,0,0.1)] border border-slate-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <ul className="flex flex-col w-full">
                {link.subLinks.map((sub, idx) => (
                  <li key={idx} className="border-b border-slate-100 last:border-none w-full">
                    <a
                      href={sub.href}
                      className="flex items-center px-5 py-3.5 w-full hover:bg-slate-50/80 transition-colors group/item"
                    >
                      <ChevronsRight className="w-4 h-4 text-[#009688] mr-3 shrink-0" />
                      <span className="text-sm font-semibold text-slate-600 group-hover/item:text-[#009688] flex-1">
                        {sub.label}
                      </span>
                      {/* Right arrow like the image on hover */}
                      <ChevronRight className="w-3.5 h-3.5 text-transparent group-hover/item:text-[#009688] transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
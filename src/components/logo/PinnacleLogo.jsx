// import React from 'react';

// export default function PinnacleLogo({
//   className = '',
//   theme = 'light',
//   size = 'md',
//   showSubtitle = true,
// }) {
//   const scale = size === 'sm' ? 'h-9' : size === 'lg' ? 'h-14' : 'h-11';
//   const textColor = theme === 'dark' ? 'text-white' : 'text-[#0B1E33]';
//   const brandTeal = '#009688';
//   const mintCyan = '#5EEAD4';

//   return (
//     <div className={`flex items-center gap-3 select-none ${className}`}>
//       {/* SVG Monogram (Interlocking H and P) */}
//       <svg
//         className={`${scale} w-auto shrink-0`}
//         viewBox="0 0 120 120"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect
//           width="120"
//           height="120"
//           rx="24"
//           fill={theme === 'dark' ? '#0F2642' : '#E6F4F3'}
//         />

//         {/* H - Left Pillar */}
//         <rect
//           x="32"
//           y="24"
//           width="16"
//           height="72"
//           rx="4"
//           fill={brandTeal}
//         />

//         {/* H - Right Pillar */}
//         <rect
//           x="72"
//           y="24"
//           width="16"
//           height="72"
//           rx="4"
//           fill={brandTeal}
//         />

//         {/* H - Crossbar */}
//         <rect
//           x="32"
//           y="52"
//           width="56"
//           height="16"
//           rx="3"
//           fill={brandTeal}
//         />

//         {/* P - Curved Loop */}
//         <path
//           d="M 32 38 Q 92 34 94 62 Q 95 84 56 86 L 56 70 Q 80 69 78 58 Q 76 50 44 50 Z"
//           fill={mintCyan}
//           opacity="0.95"
//         />

//         {/* Accent cross dot */}
//         <circle cx="94" cy="28" r="4" fill={mintCyan} />
//       </svg>

//       {/* Brand Typography */}
//       <div className="flex flex-col justify-center leading-tight">
//         <span
//           className={`font-extrabold tracking-tight font-display ${textColor} ${
//             size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
//           }`}
//           style={{ letterSpacing: '0.02em' }}
//         >
//           <span style={{ color: brandTeal }}>PINNACLE</span> HEALTH CARE
//         </span>
//         {showSubtitle && (
//           <span
//             className={`font-semibold tracking-wide ${
//               size === 'sm' ? 'text-[11px]' : size === 'lg' ? 'text-sm' : 'text-xs'
//             }`}
//             style={{ color: brandTeal }}
//           >
//             পিনাকল হেলথ কেয়ার
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }


import React from 'react';

// ==================== Logo Image Import ====================
import logoImg from '../../assets/logo/lg1.png'; //

export default function PinnacleLogo({
  className = '',
  theme = 'light',
  size = 'md',
  showSubtitle = true,
}) {
  const imgSize = size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-14 w-14' : 'h-11 w-11';
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#0B1E33]';
  const brandTeal = '#009688';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      
      {/* ==================== Logo Image ==================== */}
      <img
        src={logoImg}
        alt="Pinnacle Health Care Logo"
        className={`${imgSize} object-contain shrink-0`}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      {/* ==================== Brand Typography ==================== */}
      <div className="flex flex-col justify-center leading-tight">
        <span
          className={`font-extrabold tracking-tight font-display ${textColor} ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
          }`}
          style={{ letterSpacing: '0.02em' }}
        >
          <span style={{ color: brandTeal }}>PINNACLE</span> HEALTH CARE
        </span>

        {showSubtitle && (
          <span
            className={`font-semibold tracking-wide ${
              size === 'sm' ? 'text-[11px]' : size === 'lg' ? 'text-sm' : 'text-xs'
            }`}
            style={{ color: brandTeal }}
          >
            পিনাকল হেলথ কেয়ার
          </span>
        )}
      </div>
    </div>
  );
}

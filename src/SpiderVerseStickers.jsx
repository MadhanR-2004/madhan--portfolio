// import React from 'react';

// const SpiderVerseStickers = () => {
//   const stickers = [
//     // Name Tag Style Stickers
//     {
//       type: 'name-tag',
//       topText: 'HELLO',
//       subText: 'MY NAME IS',
//       mainText: 'SPIDEY',
//       signature: 'MILES',
//       color: 'red',
//       bgColor: 'bg-red-500',
//       position: { top: '10%', left: '15%' },
//       rotate: '-10deg',
//       font: 'font-Shadows',
//     },
//     {
//       type: 'name-tag',
//       topText: 'HOLD ON',
//       subText: 'LET ME',
//       mainText: 'OVERTHINK THIS',
//       signature: 'MILES',
//       color: 'blue',
//       bgColor: 'bg-blue-500',
//       position: { bottom: '53%', right: '20%' },
//       rotate: '15deg',
//       font: 'font-unbounded',
//     },
//     // Comic Pop Style Stickers
//     {
//       type: 'comic-pop',
//       text: 'LEAP OF FAITH',
//       color: 'cyan',
//       bgColor: 'bg-cyan-500',
//       position: { top: '70%', left: '60%' },
//       rotate: '-5deg',
//       font: 'font-oswald',
//     },
//     {
//       type: 'comic-pop',
//       text: 'SPIDER-SENSE',
//       color: 'pink',
//       bgColor: 'bg-pink-500',
//       position: { bottom: '30%', left: '30%' },
//       rotate: '10deg',
//       font: 'font-Shadows',
//     },
//   ];

//   return (
//     <div className="fixed inset-0 z-10 pointer-events-none">
//       {stickers.map((sticker, index) => (
//         <div
//           key={index}
//           className={`absolute rounded-lg shadow-lg transform ${sticker.font}`}
//           style={{
//             ...sticker.position,
//             transform: `rotate(${sticker.rotate})`,
//             opacity: 0.8,
//           }}
//         >
//           {sticker.type === 'name-tag' ? (
//             // Name Tag Style Sticker
//             <div
//               className={`relative ${sticker.bgColor} text-white font-bold p-6 border-4 border-white`}
//               style={{
//                 backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
//                 backgroundSize: '10px 10px',
//                 width: '300px',
//                 height: '150px',
//               }}
//             >
//               <div className="text-lg md:text-xl tracking-wider font-oswald">{sticker.topText}</div>
//               <div className="text-sm md:text-base italic font-Shadows">{sticker.subText}</div>
//               <div
//                 className="text-3xl md:text-4xl font-bold mt-2"
//                 style={{
//                   color: sticker.color === 'red' ? '#0000FF' : '#FF0000',
//                   WebkitTextStroke: `2px ${sticker.color === 'red' ? '#FF0000' : '#0000FF'}`,
//                 }}
//               >
//                 {sticker.mainText}
//               </div>
//               <div className="absolute bottom-2 right-4 text-sm font-Shadows">{sticker.signature}</div>
//               <div
//                 className="absolute top-2 left-2 w-8 h-8"
//                 style={{
//                   background: `linear-gradient(45deg, transparent, ${sticker.color}40, transparent)`,
//                   borderRadius: '50%',
//                 }}
//               />
//               <div
//                 className="absolute bottom-2 right-2 w-8 h-8"
//                 style={{
//                   background: `linear-gradient(45deg, transparent, ${sticker.color}40, transparent)`,
//                   borderRadius: '50%',
//                 }}
//               />
//             </div>
//           ) : (
//             // Comic Pop Style Sticker
//             <div
//               className={`relative ${sticker.bgColor} text-white font-bold p-4 border-4 border-black`}
//               style={{
//                 backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
//                 backgroundSize: '10px 10px',
//                 width: '250px',
//               }}
//             >
//               <span className="relative z-5 text-2xl md:text-3xl tracking-wider">
//                 {sticker.text}
//               </span>
//               <div
//                 className="absolute inset-0 rounded-lg"
//                 style={{
//                   background: `linear-gradient(45deg, transparent, ${sticker.color}40, transparent)`,
//                   opacity: 0.3,
//                 }}
//               />
//             </div>
//           )}
//         </div>
//       ))}
//       <style>{`
//         .font-unbounded {
//           font-family: 'Unbounded', sans-serif !important;
//         }
//         .font-oswald {
//           font-family: 'Oswald', cursive !important;
//         }
//         .font-Shadows {
//           font-family: 'Shadows Into Light', cursive !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SpiderVerseStickers;

import React from 'react';
import sticker1 from './assets/1.png';
import sticker2 from './assets/2.png';
import sticker3 from './assets/3.png';    
import sticker4 from './assets/4.png';
import sticker5 from './assets/5.png';        
import sticker6 from './assets/6.png';
import sticker7 from './assets/7.png';
import sticker8 from './assets/8.png';
import sticker9 from './assets/9.png';
import sticker10 from './assets/10.png';
import sticker11 from './assets/11.png';
import sticker12 from './assets/121.png';
const SpiderVerseStickers = () => {
  const stickers = [
    {
      id: 'sticker1',
      src: sticker1, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 1',
      position: { top: '3%', left: '15%' },
      rotate: '-10deg',
      size: { width: '120px', height: '120px' }
    },
    {
      id: 'sticker2',
      src: sticker2, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 2',
      position: { bottom: '53%', right: '20%' },
      rotate: '15deg',
      size: { width: '130px', height: '130px' }
    },
    {
      id: 'sticker3',
      src: sticker3, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 3',
      position: { top: '70%', left: '60%' },
      rotate: '-5deg',
      size: { width: '140px', height: '140px' }
    },
    {
      id: 'sticker4',
      src: sticker4, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 4',
      position: { bottom: '30%', left: '30%' },
      rotate: '10deg',
      size: { width: '130px', height: '130px' }
    },
    {
      id: 'sticker5',
      src: sticker5, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 5',
      position: { top: '40%', right: '10%' },
      rotate: '-8deg',
      size: { width: '130px', height: '130px' }
    },
    {
      id: 'sticker6',
      src: sticker6, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 6',
      position: { bottom: '18%', left: '15%' },
      rotate: '12deg',
      size: { width: '130px', height: '130px' }
    },
     {
      id: 'sticker7',
      src: sticker7, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 7',
      position: { top: '25%', left: '5%' },
      rotate: '20deg',
      size: { width: '115px', height: '115px' }
    },
    {
      id: 'sticker8',
      src: sticker8, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 8',
      position: { bottom: '65%', right: '5%' },
      rotate: '-18deg',
      size: { width: '105px', height: '125px' }
    },
    {
      id: 'sticker9',
      src: sticker9, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 9',
      position: { top: '55%', left: '80%' },
      rotate: '8deg',
      size: { width: '120px', height: '100px' }
    },
    {
      id: 'sticker10',
      src: sticker10, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 10',
      position: { bottom: '45%', left: '10%' },
      rotate: '-25deg',
      size: { width: '90px', height: '110px' }
    },
     {
      id: 'sticker11',
      src: sticker11, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 11',
      position: { top: '15%', right: '25%' },
      rotate: '14deg',
      size: { width: '135px', height: '130px' }
    },
     {
      id: 'sticker12',
      src: sticker12, // Replace with your actual PNG path
      alt: 'Spider-Man Sticker 11',
      position: { top: '1%', right: '10%' },
      rotate: '14deg',
      size: { width: '120px', height: '120px' }
    }
  ];

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {stickers.map((sticker) => (
        <div
          key={sticker.id}
          className="absolute transition-transform duration-300 hover:scale-110"
          style={{
            ...sticker.position,
            transform: `rotate(${sticker.rotate})`,
            opacity: 0.9,
          }}
        >
          <img
            src={sticker.src}
            alt={sticker.alt}
            className="drop-shadow-lg"
            style={{
              width: sticker.size.width,
              height: sticker.size.height,
              objectFit: 'contain',
              filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))',
            }}
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = 'none';
            }}
          />
        </div>
      ))}
      
      {/* Optional: Add some animated floating effect */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
          50% { transform: translateY(-10px) rotate(var(--rotation)); }
        }
        
        .sticker-float:nth-child(odd) {
          animation: float 6s ease-in-out infinite;
        }
        
        .sticker-float:nth-child(even) {
          animation: float 8s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  );
};

export default SpiderVerseStickers;

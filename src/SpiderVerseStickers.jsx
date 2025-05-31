import React from 'react';

const SpiderVerseStickers = () => {
  const stickers = [
    // Name Tag Style Stickers
    {
      type: 'name-tag',
      topText: 'HELLO',
      subText: 'MY NAME IS',
      mainText: 'SPIDEY',
      signature: 'MILES',
      color: 'red',
      bgColor: 'bg-red-500',
      position: { top: '10%', left: '15%' },
      rotate: '-10deg',
      font: 'font-Shadows',
    },
    {
      type: 'name-tag',
      topText: 'HOLD ON',
      subText: 'LET ME',
      mainText: 'OVERTHINK THIS',
      signature: 'MILES',
      color: 'blue',
      bgColor: 'bg-blue-500',
      position: { bottom: '53%', right: '20%' },
      rotate: '15deg',
      font: 'font-unbounded',
    },
    // Comic Pop Style Stickers
    {
      type: 'comic-pop',
      text: 'LEAP OF FAITH',
      color: 'cyan',
      bgColor: 'bg-cyan-500',
      position: { top: '70%', left: '60%' },
      rotate: '-5deg',
      font: 'font-oswald',
    },
    {
      type: 'comic-pop',
      text: 'SPIDER-SENSE',
      color: 'pink',
      bgColor: 'bg-pink-500',
      position: { bottom: '30%', left: '30%' },
      rotate: '10deg',
      font: 'font-Shadows',
    },
  ];

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`absolute rounded-lg shadow-lg transform ${sticker.font}`}
          style={{
            ...sticker.position,
            transform: `rotate(${sticker.rotate})`,
            opacity: 0.8,
          }}
        >
          {sticker.type === 'name-tag' ? (
            // Name Tag Style Sticker
            <div
              className={`relative ${sticker.bgColor} text-white font-bold p-6 border-4 border-white`}
              style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '10px 10px',
                width: '300px',
                height: '150px',
              }}
            >
              <div className="text-lg md:text-xl tracking-wider font-oswald">{sticker.topText}</div>
              <div className="text-sm md:text-base italic font-Shadows">{sticker.subText}</div>
              <div
                className="text-3xl md:text-4xl font-bold mt-2"
                style={{
                  color: sticker.color === 'red' ? '#0000FF' : '#FF0000',
                  WebkitTextStroke: `2px ${sticker.color === 'red' ? '#FF0000' : '#0000FF'}`,
                }}
              >
                {sticker.mainText}
              </div>
              <div className="absolute bottom-2 right-4 text-sm font-Shadows">{sticker.signature}</div>
              <div
                className="absolute top-2 left-2 w-8 h-8"
                style={{
                  background: `linear-gradient(45deg, transparent, ${sticker.color}40, transparent)`,
                  borderRadius: '50%',
                }}
              />
              <div
                className="absolute bottom-2 right-2 w-8 h-8"
                style={{
                  background: `linear-gradient(45deg, transparent, ${sticker.color}40, transparent)`,
                  borderRadius: '50%',
                }}
              />
            </div>
          ) : (
            // Comic Pop Style Sticker
            <div
              className={`relative ${sticker.bgColor} text-white font-bold p-4 border-4 border-black`}
              style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '10px 10px',
                width: '250px',
              }}
            >
              <span className="relative z-5 text-2xl md:text-3xl tracking-wider">
                {sticker.text}
              </span>
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: `linear-gradient(45deg, transparent, ${sticker.color}40, transparent)`,
                  opacity: 0.3,
                }}
              />
            </div>
          )}
        </div>
      ))}
      <style>{`
        .font-unbounded {
          font-family: 'Unbounded', sans-serif !important;
        }
        .font-oswald {
          font-family: 'Oswald', cursive !important;
        }
        .font-Shadows {
          font-family: 'Shadows Into Light', cursive !important;
        }
      `}</style>
    </div>
  );
};

export default SpiderVerseStickers;

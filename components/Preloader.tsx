'use client';

export default function Preloader() {
  return (
    <div id="preloader" className="h-full w-full fixed z-50 overflow-hidden bg-white">
      <div className="center h-screen flex justify-center items-center">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="wave w-[5px] h-[70px] bg-black mx-[10px] rounded-[20px]"
            style={{
              animation: 'wave 1s linear infinite',
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes wave {
          0% { transform: scale(0); }
          50% { transform: scale(1); }
          100% { transform: scale(0); }
        }
        .wave {
          animation: wave 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
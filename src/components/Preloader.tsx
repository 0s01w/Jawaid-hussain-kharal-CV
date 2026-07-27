import React, { useEffect, useState } from 'react';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 10;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-700 animate-pulse blur-lg opacity-60"></div>
        <div className="relative w-full h-full bg-slate-900 border border-amber-500/40 rounded-2xl flex items-center justify-center text-amber-400 font-serif-display text-2xl font-bold shadow-2xl">
          JK
        </div>
      </div>

      <h2 className="text-xl font-bold text-white font-serif-display tracking-wide mb-1">
        Jawaid Hussain Kharal
      </h2>
      <p className="text-xs text-amber-400 uppercase tracking-widest font-semibold mb-6">
        Executive Textile Portfolio
      </p>

      <div className="w-48 h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent background scrolling while loading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let current = 0;
    let isWindowLoaded = document.readyState === "complete";

    const onWindowLoad = () => {
      isWindowLoaded = true;
    };

    if (!isWindowLoaded) {
      window.addEventListener("load", onWindowLoad);
    }

    // Smooth simulated progression tied to actual readiness
    const interval = setInterval(() => {
      // Rapid yet smooth progression towards 90%, then wait for readiness before hitting 100%
      if (current < 90) {
        const step = Math.max(2, Math.floor((95 - current) / 6) + Math.floor(Math.random() * 4));
        current = Math.min(90, current + step);
      } else if (isWindowLoaded || current >= 90) {
        current = Math.min(100, current + 4);
      }

      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        window.removeEventListener("load", onWindowLoad);
        setTimeout(() => {
          document.body.style.overflow = originalOverflow;
          onComplete();
        }, 220);
      }
    }, 32);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", onWindowLoad);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  // Circular progress calculations (radius = 44)
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      key="brand-loading-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: "blur(10px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#141316] select-none cursor-wait overflow-hidden"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Ambient Crimson Glow in center */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-[#ea0044]/12 blur-[100px] pointer-events-none" />

      {/* Main Spinner & Progress Unit */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Circular Indicator with Dual-Ring Styling */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Subtle spinning outer dashed accent ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_12s_linear_infinite]" />

          {/* SVG Progress Circle */}
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
            {/* Background Track */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="rgba(255, 255, 255, 0.07)"
              strokeWidth="3.5"
              fill="none"
            />
            {/* Active Crimson Progress Arc */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#ea0044"
              strokeWidth="3.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none"
              style={{
                filter: "drop-shadow(0 0 6px rgba(234, 0, 68, 0.5))",
                transition: "stroke-dashoffset 80ms ease-out",
              }}
            />
          </svg>

          {/* Center Monogram / Percentage Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-['Space_Grotesk'] font-bold text-2xl text-white tracking-tight">
              {progress}
              <span className="text-xs text-[#ea0044] font-semibold ml-0.5">%</span>
            </span>
          </div>
        </div>

        {/* Brand Information & Status Label */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-white">
              Yihenew Animut
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea0044] animate-pulse" />
          </div>
          <span className="text-[11px] font-mono tracking-wider text-[#828282] uppercase mt-1">
            Software Engineer • Full-Stack & AI
          </span>

          {/* Slim progress bar track */}
          <div className="w-36 h-[2px] bg-white/[0.08] rounded-full overflow-hidden mt-3.5">
            <div
              className="h-full bg-gradient-to-r from-[#ea0044] via-[#ff4d79] to-[#ea0044] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

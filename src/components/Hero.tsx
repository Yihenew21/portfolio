import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HERO_DATA } from "../data/portfolioData";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [avatarOffset, setAvatarOffset] = useState({ x: 0, y: 0, rotate: 0 });
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Physics-based spring smoothing synchronized with monitor refresh rates (60Hz, 120Hz ProMotion, 144Hz+)
  // Eliminates discrete scroll-delta stepping and prevents jitter during fast scroll interactions
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 34,
    mass: 0.12,
    restDelta: 0.0001
  });

  // Calibrated, refined parallax displacement amplitudes for seamless depth without screen stutter
  const bgGlowY = useTransform(smoothScrollYProgress, [0, 1], [0, 18]);
  const textY = useTransform(smoothScrollYProgress, [0, 1], [0, 10]);

  const handleAvatarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setAvatarOffset({
      x: x * 10,
      y: y * 8,
      rotate: x * 2.5
    });
  };

  const handleAvatarMouseEnter = () => {
    setIsAvatarHovered(true);
  };

  const handleAvatarMouseLeave = () => {
    setIsAvatarHovered(false);
    setAvatarOffset({ x: 0, y: 0, rotate: 0 });
  };

  // Partner brands & organizations array from resume for the infinite looping marquee
  const brandLogos = [
    {
      id: "telsem",
      render: (
        <div className="flex items-center gap-2 group/logo opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-5 h-5 rounded-md bg-[#ea0044] text-white font-black text-[10px] flex items-center justify-center tracking-tighter">
            TT
          </div>
          <span className="font-['Space_Grotesk'] font-bold text-xs sm:text-sm tracking-wider uppercase text-white/90">
            TELSEM TECH
          </span>
        </div>
      )
    },
    {
      id: "lawbridge",
      render: (
        <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity font-['Space_Grotesk'] font-extrabold text-xs sm:text-sm tracking-wider uppercase select-none text-white/90">
          <span>LAWBRIDGE</span>
          <span className="text-[10px] sm:text-xs text-[#ea0044]">✦</span>
          <span>ETHIOPIA</span>
        </div>
      )
    },
    {
      id: "amc",
      render: (
        <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity select-none text-white/90">
          <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 bg-white text-black font-black text-[10px] rounded-xs flex items-center justify-center tracking-tighter">
            AMC
          </div>
          <div className="leading-tight text-left">
            <span className="text-xs font-bold tracking-tight block">Amhara Media</span>
            <span className="text-[7.5px] uppercase tracking-wider text-white/50 block font-semibold">Corporation</span>
          </div>
        </div>
      )
    },
    {
      id: "jdtrading",
      render: (
        <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity font-['Space_Grotesk'] font-bold text-xs sm:text-sm tracking-widest uppercase select-none text-white/90">
          <span className="text-[#ea0044] font-black">JD</span>
          <span>TRADING</span>
        </div>
      )
    },
    {
      id: "efuyegela",
      render: (
        <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity select-none text-white/90">
          <div className="w-2 h-2 rounded-full bg-[#ea0044]" />
          <span className="font-['Space_Grotesk'] font-bold text-xs sm:text-sm tracking-wider uppercase">
            EFUYEGELA TECH
          </span>
        </div>
      )
    },
    {
      id: "muqecha",
      render: (
        <div className="font-['Space_Grotesk'] font-bold text-xs sm:text-sm tracking-[0.2em] text-white/80 hover:text-white uppercase select-none transition-opacity">
          MUQECHA STUDIOS
        </div>
      )
    },
    {
      id: "dbu",
      render: (
        <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity font-mono text-xs text-white/70">
          <span className="text-[#ea0044] font-bold">DBU</span>
          <span>SOFTWARE ENG</span>
        </div>
      )
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:min-h-0 bg-[#0e0d11] text-[#fafafa] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-20 pb-4 sm:pb-6 lg:pb-6 px-3 sm:px-6 md:px-8 overflow-x-hidden select-none"
    >
      {/* Subtle ambient background glow */}
      <motion.div
        style={{ y: bgGlowY, willChange: "transform" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] md:w-[720px] h-[300px] sm:h-[400px] bg-[#ea0044]/[0.045] blur-[120px] sm:blur-[150px] rounded-full pointer-events-none transform-gpu"
      />

      {/* Main Central Typography & 3D Character Stage */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-7xl mx-auto my-auto z-10 px-2 sm:px-6 py-2 sm:py-3 lg:py-0">
        {/* Massive Headline Stack */}
        <motion.div
          style={{ y: textY, willChange: "transform" }}
          className="relative w-full flex flex-col items-center justify-center transform-gpu"
        >
          {/* Line 1: THINK in pure white */}
          <h1 className="font-['Space_Grotesk'] font-bold text-white tracking-[-0.035em] text-[11.5vw] xs:text-[12.5vw] sm:text-[13vw] md:text-[105px] lg:text-[130px] xl:text-[155px] 2xl:text-[175px] leading-[0.85] sm:leading-[0.82] text-center select-none drop-shadow-sm">
            THINK
          </h1>

          {/* Line 2: CREATIVELY in vivid pink/crimson */}
          <h2 className="font-['Space_Grotesk'] font-bold text-[#ea0044] tracking-[-0.035em] text-[11.5vw] xs:text-[12.5vw] sm:text-[13vw] md:text-[105px] lg:text-[130px] xl:text-[155px] 2xl:text-[175px] leading-[0.85] sm:leading-[0.82] text-center select-none drop-shadow-md">
            CREATIVELY
          </h2>

          {/* 3D Character Head centered over the words, positioned lower so THINK is uncovered */}
          <div
            className="absolute top-1/2 left-1/2 z-20 pointer-events-auto"
            style={{ transform: "translate(-50%, -22%)" }}
          >
            <motion.div
              animate={{
                x: avatarOffset.x,
                y: avatarOffset.y,
                rotateZ: avatarOffset.rotate,
                scale: isAvatarHovered ? 1.025 : 1
              }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              onMouseMove={handleAvatarMouseMove}
              onMouseEnter={handleAvatarMouseEnter}
              onMouseLeave={handleAvatarMouseLeave}
              className="w-[155px] xs:w-[175px] sm:w-[230px] md:w-[320px] lg:w-[370px] xl:w-[420px] 2xl:w-[450px] aspect-square select-none cursor-pointer"
            >
              <img
                src="/images/hero-art.webp"
                alt="Yihenew Animut 3D Visual Character"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] select-none pointer-events-none transition-transform duration-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://framerusercontent.com/images/GjbyNUP53yYs1eg4S93wfo7TzTI.webp";
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Flanking Content Row: Subtitle on Left, CTA Button on Right (Framing the Chin) */}
        {/* On mobile, mt clears the avatar chin completely so elements never collide or overlap */}
        <div className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3.5 sm:gap-4 md:gap-6 mt-[78px] xs:mt-[88px] sm:mt-[112px] md:mt-5 lg:mt-4 px-3 sm:px-6 md:px-8 z-30">
          {/* Left: Subtitle text */}
          <div className="text-center md:text-left max-w-[300px] lg:max-w-[320px]">
            <p className="text-xs sm:text-sm md:text-base text-[#9e9ea7] font-normal leading-relaxed">
              Software Engineer building scalable full-stack web applications, AI systems, and data solutions.
            </p>
          </div>

          {/* Right: Book a call with me Button */}
          <div className="text-center md:text-right">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#ea0044] hover:bg-[#ff1758] text-white font-semibold text-xs sm:text-sm md:text-base tracking-tight transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(234,0,68,0.65)] hover:shadow-[0_0_35px_rgba(234,0,68,0.9)] cursor-pointer whitespace-nowrap"
            >
              <span>Book a call with me</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.4}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Bar: Social Proof on Left, Infinite Logo Marquee on Right */}
      <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-6 pt-2.5 sm:pt-4 pb-2 sm:pb-3 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-4 md:gap-6 px-2 sm:px-6 z-20 shrink-0">
        {/* Social Proof: 4 Avatars + 5 Red Stars + 99+ Happy clients */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="flex -space-x-2 overflow-hidden">
            {HERO_DATA.avatars.map((av, idx) => (
              <div
                key={idx}
                className="inline-block h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full ring-2 ring-[#0e0d11] overflow-hidden bg-[#2b2b2b]"
              >
                <img
                  src={av}
                  alt={`Client ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://framerusercontent.com/images/ARmQOa71EvidN3oYWq9jWzn9OE.jpg";
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-0.5 text-[#ea0044]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#ea0044] text-[#ea0044]"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[11px] sm:text-xs md:text-sm font-medium text-white/90 whitespace-nowrap">
              {HERO_DATA.clientCount}
            </span>
          </div>
        </div>

        {/* Separator on desktop */}
        <div className="hidden md:block h-5 w-px bg-white/[0.1] shrink-0" />

        {/* Continuous Seamless Infinite Logo Marquee with Edge Fade Masks */}
        <div className="relative flex-1 w-full overflow-hidden flex items-center h-7 sm:h-8 md:h-9">
          {/* Left edge fade-out mask */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#0e0d11] to-transparent z-10 pointer-events-none" />

          {/* Right edge fade-out mask */}
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#0e0d11] to-transparent z-10 pointer-events-none" />

          {/* Infinite Marquee Track */}
          <div className="flex animate-marquee select-none items-center">
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <div className="px-5 sm:px-7">{brand.render}</div>
                {/* Red Pulse Dot Divider between items */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#ea0044] shadow-[0_0_8px_1px_rgba(234,0,68,0.7)] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

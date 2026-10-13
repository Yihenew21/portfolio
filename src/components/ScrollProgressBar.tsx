import React, { useState, useEffect } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollPx = window.scrollY;
      const winHeightPx =
        document.documentElement.scrollHeight - window.innerHeight;

      if (winHeightPx <= 0) {
        setScrollProgress(0);
        return;
      }

      const scrolled = Math.min(100, Math.max(0, (scrollPx / winHeightPx) * 100));
      setScrollProgress(scrolled);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none"
      aria-hidden="true"
    >
      {/* Background track (subtle translucent border line) */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Animated active progress bar */}
      <div
        className="h-full bg-gradient-to-r from-[#ea0044] via-[#ff2b6d] to-[#ea0044] shadow-[0_0_8px_rgba(234,0,68,0.7)] transition-transform duration-75 ease-out origin-left will-change-transform"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
        }}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";

interface FloatingContactPillProps {
  onOpenContact: () => void;
}

export function FloatingContactPill({
  onOpenContact
}: FloatingContactPillProps) {
  const [isVisibleOnMobile, setIsVisibleOnMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On mobile, show after scrolling past the Hero section (200px) so the bottom marquee and proof remain unobstructed
      setIsVisibleOnMobile(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick contact"
      className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 sm:gap-3.5 px-3 sm:px-4 py-1.5 sm:py-2.5 w-max max-w-[calc(100vw-24px)] rounded-full bg-white/[0.06] hover:bg-white/[0.10] backdrop-blur-xl backdrop-saturate-150 border border-white/20 hover:border-white/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_12px_36px_rgba(0,0,0,0.55)] transition-all duration-300 ${
        isVisibleOnMobile
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
      }`}
    >
      {/* Text Info */}
      <button
        onClick={onOpenContact}
        className="flex flex-col text-left cursor-pointer focus:outline-none whitespace-nowrap shrink-0 pr-0.5"
      >
        <span className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-tight whitespace-nowrap drop-shadow-sm">
          Speak to me
        </span>
        <span className="text-[10.5px] sm:text-[11px] text-[#b0b0b8] leading-tight whitespace-nowrap">
          Email or send a message
        </span>
      </button>

      {/* Two Action Buttons */}
      <div className="flex items-center gap-1.5 pl-2 sm:pl-2.5 border-l border-white/20 shrink-0">
        {/* Email button */}
        <a
          href="mailto:birukanimut1234@gmail.com"
          aria-label="Send email"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-white/90 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md shrink-0"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>

        {/* Contact Modal button */}
        <button
          onClick={onOpenContact}
          aria-label="Make Contact"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ea0044]/90 hover:bg-[#ea0044] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-[#ea0044]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_4px_14px_rgba(234,0,68,0.4)] cursor-pointer shrink-0"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}

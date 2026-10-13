import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { StarIcon } from "./Icons";
import { TESTIMONIALS_DATA, Testimonial } from "../data/portfolioData";

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const avatars = [
    "/images/avatar-1.jpg",
    "/images/avatar-2.jpg",
    "/images/avatar-3.jpg",
    "/images/avatar-4.jpg"
  ];

  // Duplicate items to ensure seamless infinite loop
  const duplicatedTestimonials = [
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA
  ];

  const handleManualScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 overflow-hidden relative bg-[#121115]">
      {/* Background Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ea0044]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 mb-10 sm:mb-14">
        {/* Header with Title and Proof Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest text-[#ea0044] font-semibold mb-2">
              Trusted Engineering Partner
            </span>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fafafa] tracking-tight leading-[1.1] max-w-xl">
              Hear what <span className="text-[#ea0044] italic">colleagues & clients</span> have to say.
            </h2>
          </div>

          {/* Top-right proof badge & marquee control */}
          <div className="flex flex-col items-start md:items-end gap-3 self-start md:self-end">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-[#141316] overflow-hidden bg-[#2b2b2b]"
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

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3 h-3 text-[#ea0044] fill-[#ea0044]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-white/90 mt-0.5">
                  Verified Client Reviews
                </span>
              </div>
            </div>

            {/* Scrolling Controls */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] font-mono text-[#828282] hidden sm:inline">
                {isPaused ? "Paused" : "Auto-scrolling right to left"}
              </span>
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-[11px] font-mono border border-white/10 transition-colors cursor-pointer"
              >
                {isPaused ? "▶ Resume" : "⏸ Pause"}
              </button>
              <button
                type="button"
                onClick={() => handleManualScroll("left")}
                aria-label="Scroll left"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center text-xs border border-white/10 transition-colors cursor-pointer"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => handleManualScroll("right")}
                aria-label="Scroll right"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center text-xs border border-white/10 transition-colors cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line Testimonial Marquee Track (Right to Left) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#121115] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#121115] to-transparent z-20 pointer-events-none" />

        {/* Scrolling Strip */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div
            className="flex gap-6 shrink-0 py-2 animate-marquee"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              animationDuration: "38s"
            }}
          >
            {duplicatedTestimonials.map((item, idx) => (
              <TestimonialCard key={`${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Accent Line */}
      <div className="max-w-6xl mx-auto px-4 mt-6 flex items-center justify-between text-xs text-[#666] font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ea0044] animate-pulse" />
          Continuous Right-to-Left Ticker
        </span>
        <span>Hover any card to pause &amp; read</span>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="group w-[82vw] max-w-[360px] sm:w-[380px] shrink-0 flex flex-col justify-between p-5 sm:p-7 rounded-3xl bg-[#18171d] hover:bg-[#1e1d24] border border-white/[0.08] hover:border-[#ea0044]/50 shadow-xl transition-all duration-300 hover:-translate-y-1 select-none">
      <div>
        {/* Top row: Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-3.5 h-3.5 text-[#ea0044] fill-[#ea0044]" />
            ))}
          </div>
          <span className="text-2xl font-serif text-[#ea0044]/60 leading-none group-hover:text-[#ea0044] transition-colors">
            “
          </span>
        </div>

        {/* Quote text */}
        <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed mb-6 font-normal group-hover:text-white transition-colors">
          "{item.quote}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-white/[0.06] group-hover:border-white/15 transition-colors">
        <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-[#ea0044]/60 shrink-0 bg-[#25242b] transition-all">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://framerusercontent.com/images/3IIKOQ9VkCZyf0KlL2N5yBg1cQ.jpg";
            }}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#ea0044] transition-colors">
            {item.name}
          </span>
          <span className="text-xs text-[#828282]">
            {item.role} • <span className="text-white/70">{item.company}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

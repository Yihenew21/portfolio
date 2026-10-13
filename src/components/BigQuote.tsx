import React from "react";
import { BIG_QUOTE } from "../data/portfolioData";

export function BigQuote() {
  return (
    <section className="py-12 sm:py-16 lg:py-18 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        {/* Quote Content */}
        <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-normal text-[#d4d4d8] leading-relaxed tracking-[-0.01em]">
          “{BIG_QUOTE.quote}”
        </blockquote>

        {/* Client Details */}
        <div className="flex items-center gap-3.5 mt-6 sm:mt-7">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-1 ring-white/15 shrink-0 bg-[#ea0044] flex items-center justify-center font-['Space_Grotesk'] font-bold text-xs text-white">
            TT
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug">
              {BIG_QUOTE.name}
            </span>
            <span className="text-xs sm:text-[13px] text-[#8e8e93] leading-snug font-normal">
              {BIG_QUOTE.role}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

interface CtaBannerProps {
  onOpenContact: () => void;
}

export function CtaBanner({ onOpenContact }: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20 px-4 max-w-5xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-b from-[#1f1e24] to-[#17161b] border border-white/[0.1] p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ea0044]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#828282] font-semibold mb-3">
            Still not sure?
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Let's discuss your system & goals.
          </h2>
          <p className="text-sm sm:text-base text-[#b8b8b8] leading-relaxed mb-8">
            Whether you are building a modern web platform, architecting an AI/RAG pipeline, or looking for an engineering leader, let’s build something reliable and scalable together.
          </p>

          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full bg-[#f0f0f0] hover:bg-white text-[#141316] font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-white/5 cursor-pointer flex items-center gap-2 group"
          >
            <span>Get in Touch</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

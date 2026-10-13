import React, { useState } from "react";
import { FAQS_DATA } from "../data/portfolioData";

interface FaqSectionProps {
  onOpenContact: () => void;
}

export function FaqSection({ onOpenContact }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: FAQs */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-[#fafafa] tracking-tight">
            FAQs
          </h2>

          <div className="flex flex-col gap-3">
            {FAQS_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#1b1a1f] border-white/20 shadow-lg shadow-black/40"
                      : "bg-[#18171d] border-white/[0.06] hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-5">
                      <span className="text-xs font-mono font-medium text-[#ea0044]">
                        {item.number}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {item.question}
                      </span>
                    </div>

                    {/* Animated Plus / Minus icon */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isOpen
                          ? "bg-white text-[#141316] border-white rotate-45"
                          : "bg-white/5 text-white/70 border-white/10"
                      }`}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#b8b8b8] leading-relaxed border-t border-white/[0.04]">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Pink Discovery Call Card as seen in video at 00:30-00:36 */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="rounded-3xl bg-[#ea0044] p-8 sm:p-10 text-white shadow-2xl shadow-[#ea0044]/30 flex flex-col justify-between min-h-[420px]">
            <div>
              {/* Monogram Avatar */}
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/40 shadow-md mb-6 bg-black/60 backdrop-blur-sm flex items-center justify-center font-['Space_Grotesk'] font-bold text-base text-white">
                YA
              </div>

              {/* Title & Copy */}
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight mb-4 leading-snug">
                Have questions?
                <br />
                Let's discuss systems & roles.
              </h3>

              <p className="text-sm text-white/90 leading-relaxed font-normal mb-8">
                Whether you're looking for a team lead, full-stack engineer, or AI/RAG specialist, I'm ready to build impactful, reliable software.
              </p>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/20">
              <button
                onClick={onOpenContact}
                className="px-5 py-3 rounded-full bg-[#141316] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#ea0044]"
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
                <span>Contact Me</span>
              </button>

              <a
                href="mailto:birukanimut1234@gmail.com"
                className="px-4 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1"
              >
                <span>Email Me</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

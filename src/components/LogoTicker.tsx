import React from "react";

export function LogoTicker() {
  const brands = [
    { name: "TELSEM TECH", tag: "Tech Lead" },
    { name: "LAWBRIDGE ETHIOPIA", tag: "Co-Founder" },
    { name: "AMHARA MEDIA CORP", tag: "Recruitment Portal" },
    { name: "JD TRADING", tag: "Web Platform" },
    { name: "EFUYEGELA TECH", tag: "Interactive Web" },
    { name: "MUQECHA STUDIOS", tag: "Gaming Showcase" },
    { name: "DBU ENGINEERING", tag: "B.Sc. 3.97 GPA" }
  ];

  return (
    <div className="relative w-full py-8 overflow-hidden bg-[#141316]">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#141316] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#141316] to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex animate-marquee select-none items-center">
        {[...brands, ...brands, ...brands].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 sm:px-12 shrink-0 group transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea0044] group-hover:scale-125 transition-transform" />
            <span className="font-['Space_Grotesk'] text-sm sm:text-base font-bold tracking-widest text-white/90">
              {item.name}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#828282] px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

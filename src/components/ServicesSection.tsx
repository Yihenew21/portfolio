import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SERVICES_DATA, TOOLS_DATA, ToolItem, ServiceItem, ToolCategoryGroup } from "../data/portfolioData";
import { ToolIcon } from "./Icons";
import { TechStackModal } from "./TechStackModal";

// Tilt angles for the incoming cards as requested
const CARD_TILTS = [0, -3.5, 3.2, -2.8, 2.5];

export function ServicesSection() {
  const [activeTool, setActiveTool] = useState<ToolItem>(TOOLS_DATA[0]);
  const [toolFilter, setToolFilter] = useState<"all" | "frontend" | "backend" | "aiml" | "devops">("all");
  const [isMatrixOpen, setIsMatrixOpen] = useState<boolean>(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "fullstack":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "ai_rag":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "backend":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case "data_ml":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "leadership":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  const displayedTools = TOOLS_DATA.filter((tool) => {
    if (toolFilter === "all") return true;
    if (toolFilter === "backend") return tool.categoryGroup === "backend" || tool.categoryGroup === "database";
    return tool.categoryGroup === toolFilter;
  });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-14 sm:py-20 lg:py-24 px-4 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-start z-30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea0044]/10 border border-[#ea0044]/20 text-[#ea0044] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea0044] animate-pulse" />
            Engineering Capabilities
          </div>

          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-6">
            What I help you to{" "}
            <span className="text-[#ea0044]">Shape...</span>
          </h2>

          <p className="text-sm text-[#b8b8b8] leading-relaxed mb-8 max-w-md">
            From modern responsive client architectures and RAG pipelines to high-concurrency database backends and team leadership.
          </p>

          {/* Tools That I Use - Professional & Elegant Technical Stack Showcase */}
          <div className="flex flex-col items-start w-full">
            {/* Header with Title and Architecture Matrix Action */}
            <div className="flex items-center justify-between w-full mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-white font-semibold">
                  Tools that I use
                </span>
                <span className="text-[10px] font-mono text-[#828282] px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.06]">
                  {TOOLS_DATA.length} Techs
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsMatrixOpen(true)}
                className="text-[11px] text-[#ea0044] hover:text-[#ff3366] font-medium flex items-center gap-1 transition-colors cursor-pointer group"
                aria-label="View Full Architecture Matrix"
              >
                <span>Full Matrix</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="w-full flex items-center gap-1 p-1 bg-[#141318] border border-white/[0.06] rounded-xl mb-3 overflow-x-auto scrollbar-none">
              {(
                [
                  { id: "all", label: "All" },
                  { id: "frontend", label: "Frontend" },
                  { id: "backend", label: "Backend/DB" },
                  { id: "aiml", label: "AI & ML" },
                  { id: "devops", label: "DevOps" }
                ] as const
              ).map((tab) => {
                const isActive = toolFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setToolFilter(tab.id)}
                    className={`flex-1 min-w-fit py-1.5 px-2 sm:px-2.5 text-[10px] sm:text-[11px] font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap text-center ${
                      isActive
                        ? "bg-[#ea0044] text-white shadow-sm font-semibold"
                        : "text-[#828282] hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Grid of Precision Branded Tool Tiles */}
            <div className="grid grid-cols-4 gap-2 p-2.5 rounded-2xl bg-[#16151c]/90 border border-white/[0.08] w-full shadow-xl">
              {displayedTools.map((tool) => {
                const isSelected = activeTool.name === tool.name;
                return (
                  <button
                    key={tool.name}
                    type="button"
                    onClick={() => setActiveTool(tool)}
                    onMouseEnter={() => setActiveTool(tool)}
                    aria-label={`Select ${tool.name}`}
                    style={{
                      borderColor: isSelected ? tool.brandColor : undefined,
                      boxShadow: isSelected
                        ? `0 0 16px ${tool.brandColor}35`
                        : undefined
                    }}
                    className={`group relative flex flex-col items-center justify-center p-2.5 rounded-xl transition-all duration-200 cursor-pointer overflow-hidden border ${
                      isSelected
                        ? "bg-white/[0.12] scale-[1.03]"
                        : "bg-white/[0.025] hover:bg-white/[0.07] border-white/[0.06] hover:border-white/20 active:scale-95"
                    }`}
                  >
                    {/* Brand glow behind icon */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 blur-md pointer-events-none ${
                        isSelected ? "opacity-25" : "opacity-0 group-hover:opacity-15"
                      }`}
                      style={{ backgroundColor: tool.brandColor }}
                    />

                    <ToolIcon
                      name={tool.key}
                      className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110 mb-1.5"
                    />

                    <span className="text-[10px] sm:text-[11px] font-medium text-white/80 group-hover:text-white truncate max-w-full leading-tight">
                      {tool.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Stable, High-End Specs Inspector Panel */}
            <div className="mt-3.5 w-full p-4 sm:p-5 rounded-2xl bg-[#17161e] border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300">
              {/* Top accent line matching tool's brand color */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-colors duration-300"
                style={{ backgroundColor: activeTool.brandColor }}
              />

              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center border border-white/10 shrink-0"
                    style={{ backgroundColor: `${activeTool.brandColor}15` }}
                  >
                    <ToolIcon name={activeTool.key} className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white leading-tight">
                        {activeTool.name}
                      </span>
                      <span className="text-[11px] text-[#828282] font-mono">
                        · {activeTool.experience}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#a0a0a0] font-mono">
                      {activeTool.category}
                    </span>
                  </div>
                </div>

                <span
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0"
                  style={{
                    backgroundColor: `${activeTool.brandColor}20`,
                    color: activeTool.brandColor,
                    border: `1px solid ${activeTool.brandColor}40`
                  }}
                >
                  {activeTool.level}
                </span>
              </div>

              {/* Real Project Deployment Context */}
              <div className="flex items-center gap-1.5 text-[11px] mb-2 text-[#9e9e9e]">
                <span className="text-[#828282]">Production:</span>
                <span className="text-white font-medium truncate">
                  {activeTool.projectContext}
                </span>
              </div>

              {/* Tool Architecture Description */}
              <p className="text-xs text-[#b8b8b8] leading-relaxed mb-3">
                {activeTool.description}
              </p>

              {/* Key Capabilities Unboxed Tags */}
              <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {activeTool.keyCapabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.05] text-[#cfcfcf]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsMatrixOpen(true)}
                  className="text-[10px] text-[#ea0044] hover:underline font-medium shrink-0 whitespace-nowrap"
                >
                  Deep Specs →
                </button>
              </div>
            </div>

            {/* Quick Action: Open Full Architecture Stack */}
            <button
              type="button"
              onClick={() => setIsMatrixOpen(true)}
              className="mt-3 w-full py-2.5 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/20 text-xs font-medium text-white/80 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer group"
            >
              <svg className="w-3.5 h-3.5 text-[#ea0044]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Explore Complete Architecture Stack ({TOOLS_DATA.length} Tools)</span>
            </button>

            {/* Card Stack Quick Navigator */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] w-full hidden lg:flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-[#828282]">
                <span className="font-semibold uppercase tracking-wider">
                  Services Stack
                </span>
                <span className="font-mono text-[#ea0044]">
                  0{activeCardIndex + 1} / 0{SERVICES_DATA.length}
                </span>
              </div>
              <div className="flex gap-1.5">
                {SERVICES_DATA.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveCardIndex(idx);
                      const el = document.getElementById(`service-card-${idx}`);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeCardIndex === idx
                        ? "w-8 bg-[#ea0044]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Jump to ${s.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Cards flipping/overlapping on scroll */}
        <div className="lg:col-span-7 relative flex flex-col gap-8 lg:gap-12 pb-24">
          <div className="lg:hidden text-xs text-[#828282] uppercase tracking-wider font-semibold mb-2">
            Scroll down to flip & overlap cards ↓
          </div>

          {SERVICES_DATA.map((service, index) => {
            const tilt = CARD_TILTS[index % CARD_TILTS.length];
            const isTop = activeCardIndex === index;

            return (
              <ServiceStackCard
                key={service.id}
                service={service}
                index={index}
                total={SERVICES_DATA.length}
                tilt={tilt}
                isTop={isTop}
                onInView={() => setActiveCardIndex(index)}
                getIcon={getServiceIcon}
              />
            );
          })}
        </div>
      </div>

      {/* Tech Stack Full Matrix Modal */}
      <TechStackModal
        isOpen={isMatrixOpen}
        onClose={() => setIsMatrixOpen(false)}
        initialSelectedTool={activeTool}
      />
    </section>
  );
}

interface ServiceStackCardProps {
  service: ServiceItem;
  index: number;
  total: number;
  tilt: number;
  isTop: boolean;
  onInView: () => void;
  getIcon: (id: string) => React.ReactNode;
}

function ServiceStackCard({
  service,
  index,
  total,
  tilt,
  isTop,
  onInView,
  getIcon
}: ServiceStackCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll driven transforms for the card coming from bottom with tilt and overlapping
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 25%"]
  });

  // Alternating card themes: Even indices are dark obsidian, Odd indices are full signature crimson/red
  const isRed = index % 2 === 1;

  // Comes from the bottom with tilted angle and settles cleanly into the stack
  const initialRotate = tilt * 1.2;
  const rotate = useTransform(scrollYProgress, [0, 0.75, 1], [initialRotate, tilt * 0.4, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.5, 0.9, 1]);

  return (
    <motion.div
      ref={cardRef}
      id={`service-card-${index}`}
      onViewportEnter={onInView}
      viewport={{ amount: 0.4 }}
      style={{
        rotate,
        y,
        scale,
        opacity,
        zIndex: 10 + index,
        top: `calc(6.5rem + ${index * 12}px)`
      }}
      className="lg:sticky transition-all duration-300"
    >
      <div
        className={`group relative p-7 sm:p-9 rounded-3xl transition-all duration-300 overflow-hidden cursor-pointer ${
          isRed
            ? isTop
              ? "bg-[#ea0044] text-white border border-white/40 shadow-[0_25px_60px_rgba(234,0,68,0.55)] ring-2 ring-white/30"
              : "bg-[#ea0044] text-white border border-white/20 shadow-[0_20px_50px_rgba(234,0,68,0.4)] hover:border-white/40"
            : isTop
              ? "bg-[#1f1e25] text-white border border-[#ea0044]/50 shadow-2xl shadow-black/80 ring-1 ring-[#ea0044]/30"
              : "bg-[#18171d] text-[#fafafa] border border-white/[0.1] shadow-2xl shadow-black/60 hover:border-white/25"
        }`}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className={`absolute top-0 right-0 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 ${
            isRed
              ? "w-80 h-80 bg-white/10 opacity-70 group-hover:opacity-100"
              : `w-64 h-64 bg-[#ea0044]/10 ${isTop ? "opacity-100" : "opacity-30 group-hover:opacity-70"}`
          }`}
        />

        {/* Stack Layer Header Info */}
        <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isRed
                  ? "bg-white text-[#ea0044] shadow-md shadow-black/20 group-hover:scale-105"
                  : isTop
                    ? "bg-[#ea0044] text-white shadow-lg shadow-[#ea0044]/40"
                    : "bg-white/5 text-[#ea0044] border border-white/10 group-hover:bg-[#ea0044] group-hover:text-white"
              }`}
            >
              {getIcon(service.id)}
            </div>
            <div className="flex flex-col">
              <span
                className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                  isRed ? "text-white/80" : "text-[#ea0044]"
                }`}
              >
                Service 0{index + 1}
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold tracking-tight text-white">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Stack Position Watermark Badge */}
          <div className="flex items-center gap-2">
            <span
              className={`font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold select-none ${
                isRed ? "text-white/25" : "text-white/10"
              }`}
            >
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-sm sm:text-base leading-relaxed mb-6 font-normal relative z-10 ${
            isRed ? "text-white/95" : "text-[#b8b8b8]"
          }`}
        >
          {service.description}
        </p>

        {/* Tags */}
        <div
          className={`flex flex-wrap gap-2 pt-2 relative z-10 border-t ${
            isRed ? "border-white/20" : "border-white/[0.06]"
          }`}
        >
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                isRed
                  ? "bg-white/15 text-white border border-white/25 hover:bg-white/25"
                  : isTop
                    ? "bg-white/10 text-white border border-white/15"
                    : "bg-white/5 text-[#a0a0a0] border border-white/10 group-hover:border-white/20 group-hover:text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom subtle indicator */}
        <div
          className={`mt-6 pt-3 flex items-center justify-between text-[11px] font-mono border-t ${
            isRed ? "border-white/20 text-white/75" : "border-white/[0.06] text-[#666]"
          }`}
        >
          <span>Card {index + 1} of {total}</span>
          <span className={`flex items-center gap-1 ${isRed ? "text-white font-medium" : "text-[#ea0044]"}`}>
            <span>{index < total - 1 ? "Scroll down for next card" : "End of services"}</span>
            {index < total - 1 && <span>↓</span>}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TOOLS_DATA, ToolItem, ToolCategoryGroup } from "../data/portfolioData";
import { ToolIcon } from "./Icons";

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedTool?: ToolItem | null;
}

const CATEGORY_FILTERS: { label: string; group: ToolCategoryGroup | "all" }[] = [
  { label: "All Technologies", group: "all" },
  { label: "Frontend & UI", group: "frontend" },
  { label: "Backend Systems", group: "backend" },
  { label: "AI & Machine Learning", group: "aiml" },
  { label: "Databases & Storage", group: "database" },
  { label: "DevOps & Cloud", group: "devops" }
];

export function TechStackModal({ isOpen, onClose, initialSelectedTool }: TechStackModalProps) {
  const [selectedGroup, setSelectedGroup] = useState<ToolCategoryGroup | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDetailTool, setActiveDetailTool] = useState<ToolItem | null>(initialSelectedTool || null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (initialSelectedTool) {
      setActiveDetailTool(initialSelectedTool);
    }
  }, [initialSelectedTool]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const filteredTools = TOOLS_DATA.filter((tool) => {
    const matchesGroup = selectedGroup === "all" || tool.categoryGroup === selectedGroup;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesGroup;

    const matchesSearch =
      tool.name.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.projectContext.toLowerCase().includes(query) ||
      tool.keyCapabilities.some((c) => c.toLowerCase().includes(query));

    return matchesGroup && matchesSearch;
  });

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="tech-stack-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.05 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl bg-[#141318] border border-white/10 shadow-2xl overflow-hidden z-10 my-auto text-left"
          >
            {/* Top Header Bar */}
            <div className="p-6 sm:p-8 border-b border-white/[0.08] bg-[#17161d] relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ea0044] animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#828282]">
                      Yihenew Animut Mulu · Technical Matrix
                    </span>
                  </div>
                  <h3 id="tech-stack-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Tools & Architectural Stack
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a0a0a0] mt-1 max-w-xl">
                    Comprehensive breakdown of the production languages, frameworks, databases, and AI systems deployed across client platforms.
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="self-end sm:self-start w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search & Category Filter Controls */}
              <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tool, framework, capability, or project..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/35 text-xs sm:text-sm focus:outline-none focus:border-[#ea0044] focus:ring-1 focus:ring-[#ea0044] transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/40 hover:text-white"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Segmented Category Filter */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  {CATEGORY_FILTERS.map((cat) => {
                    const isActive = selectedGroup === cat.group;
                    return (
                      <button
                        key={cat.group}
                        type="button"
                        onClick={() => setSelectedGroup(cat.group)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#ea0044] text-white shadow-md shadow-[#ea0044]/30"
                            : "bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white border border-white/[0.06]"
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Body - Tools Grid */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4">
              {filteredTools.length === 0 ? (
                <div className="text-center py-16 text-[#828282]">
                  <p className="text-sm">No tools found matching &quot;{searchQuery}&quot;.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedGroup("all");
                    }}
                    className="mt-3 text-xs text-[#ea0044] hover:underline"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredTools.map((tool) => {
                    const isSelected = activeDetailTool?.name === tool.name;
                    return (
                      <div
                        key={tool.name}
                        onClick={() => setActiveDetailTool(tool)}
                        className={`group relative p-5 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                          isSelected
                            ? "bg-[#1d1b24] border-white/20 shadow-xl"
                            : "bg-[#18171d]/90 hover:bg-[#1d1c23] border-white/[0.07] hover:border-white/15 hover:-translate-y-0.5"
                        }`}
                      >
                        {/* Top decorative brand color strip */}
                        <div
                          className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: tool.brandColor }}
                        />

                        <div>
                          {/* Card Top: Icon & Role Badge */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 shrink-0"
                                style={{ backgroundColor: `${tool.brandColor}15` }}
                              >
                                <ToolIcon name={tool.key} className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-base font-bold text-white leading-tight">
                                  {tool.name}
                                </h4>
                                <span className="text-[11px] text-[#828282] font-mono">
                                  {tool.category}
                                </span>
                              </div>
                            </div>

                            <span
                              className="px-2 py-0.5 rounded-md text-[10px] font-semibold shrink-0"
                              style={{
                                backgroundColor: `${tool.brandColor}20`,
                                color: tool.brandColor,
                                border: `1px solid ${tool.brandColor}40`
                              }}
                            >
                              {tool.level}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-[#b8b8b8] leading-relaxed mb-4">
                            {tool.description}
                          </p>
                        </div>

                        {/* Card Bottom: Project context & capabilities */}
                        <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-[#828282]">Production Impact:</span>
                            <span className="text-white font-medium truncate max-w-[180px] text-right">
                              {tool.projectContext}
                            </span>
                          </div>

                          {/* Key Capabilities Pills / Tags */}
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {tool.keyCapabilities.slice(0, 3).map((cap) => (
                              <span
                                key={cap}
                                className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.05] text-[#d0d0d0]"
                              >
                                {cap}
                              </span>
                            ))}
                            {tool.keyCapabilities.length > 3 && (
                              <span className="text-[10px] px-1.5 py-0.5 text-[#828282]">
                                +{tool.keyCapabilities.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-[#16151c] flex items-center justify-between text-xs text-[#828282]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">
                  Showing {filteredTools.length} of {TOOLS_DATA.length} Tools
                </span>
                <span>·</span>
                <span className="hidden sm:inline">All frameworks verified in production environments</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
              >
                Close Matrix
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Project, PROJECTS_DATA } from "../data/portfolioData";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onSelectProject,
  onOpenContact
}: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject =
    PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject =
    PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <motion.div
      key="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10"
    >
      <motion.div
        key={`project-modal-card-${project.id}`}
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 350, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl mx-auto my-4 sm:my-8 bg-[#18171d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
      >
        {/* Sticky Header with Close and Title */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#18171d]/90 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#ea0044] font-semibold">
              Case Study
            </span>
            <span className="text-sm font-bold text-white">/ {project.title}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Main Cover Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#222127]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-10 md:p-12 flex flex-col gap-10">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-8 border-b border-white/[0.08] text-xs">
            <div>
              <span className="text-[#828282] uppercase tracking-wider block mb-1">
                Client
              </span>
              <span className="text-white font-semibold">{project.client}</span>
            </div>
            <div>
              <span className="text-[#828282] uppercase tracking-wider block mb-1">
                Year
              </span>
              <span className="text-white font-semibold">{project.year}</span>
            </div>
            <div>
              <span className="text-[#828282] uppercase tracking-wider block mb-1">
                Category
              </span>
              <span className="text-white font-semibold">{project.category}</span>
            </div>
            <div>
              <span className="text-[#828282] uppercase tracking-wider block mb-1">
                Scope
              </span>
              <span className="text-white font-semibold">
                {project.deliverables.slice(0, 2).join(", ")}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
                Project Overview
              </h3>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea0044] hover:bg-[#ff1f5e] text-white text-xs font-semibold shadow-lg shadow-[#ea0044]/30 transition-all self-start sm:self-auto"
                >
                  <span>Visit Live Platform / Code</span>
                  <span className="text-xs">↗</span>
                </a>
              )}
            </div>
            <p className="text-sm sm:text-base text-[#b8b8b8] leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* Scope of Work Deliverables */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#ea0044]">
              Core Deliverables & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Concept */}
          {project.brandConcept && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">
                System Architecture & Technical Solution
              </h4>
              <p className="text-sm sm:text-base text-[#b8b8b8] leading-relaxed">
                {project.brandConcept}
              </p>
            </div>
          )}

          {/* Technical Implementation */}
          {project.sketchingNotes && (
            <div>
              <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">
                Tech Stack & Execution
              </h4>
              <p className="text-sm sm:text-base text-[#b8b8b8] leading-relaxed">
                {project.sketchingNotes}
              </p>
            </div>
          )}

          {/* Additional Gallery Images */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="flex flex-col gap-4 pt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#828282]">
                Visual System Gallery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.slice(1).map((imgUrl, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#222127] border border-white/[0.08]"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} detail ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA & Navigation */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-3 rounded-full bg-[#f0f0f0] text-[#141316] font-semibold text-sm hover:bg-white transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Start a project like this →
            </button>

            <div className="flex items-center gap-4 text-xs font-medium text-[#828282]">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                ← {prevProject.title}
              </button>
              <span>·</span>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                {nextProject.title} →
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

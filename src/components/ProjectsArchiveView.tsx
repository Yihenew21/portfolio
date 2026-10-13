import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Project, PROJECTS_DATA } from "../data/portfolioData";
import { ArrowUpRight, StarIcon } from "./Icons";
import { LogoTicker } from "./LogoTicker";

interface ProjectsArchiveViewProps {
  onSelectProject: (project: Project) => void;
  onBackToHome: () => void;
  onOpenContact: () => void;
  isModalOpen?: boolean;
}

const archiveVariants: Variants = {
  initial: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  modalExit: {
    opacity: 0,
    y: -24,
    scale: 0.98,
    filter: "blur(6px)",
    pointerEvents: "none",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -32,
    scale: 0.985,
    filter: "blur(6px)",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ProjectsArchiveView({
  onSelectProject,
  onBackToHome,
  onOpenContact,
  isModalOpen = false,
}: ProjectsArchiveViewProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const avatars = [
    "/images/avatar-1.jpg",
    "/images/avatar-2.jpg",
    "/images/avatar-3.jpg",
    "/images/avatar-4.jpg"
  ];

  return (
    <motion.div
      variants={archiveVariants}
      initial="initial"
      animate={isModalOpen ? "modalExit" : "animate"}
      exit="exit"
      className="pt-28 pb-20 px-4 max-w-6xl mx-auto min-h-screen"
    >
      {/* Header as in video at 00:44 */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-4">
          Engineered Systems <span className="text-[#ea0044]">Built</span> for Scale
        </h1>
        <p className="text-sm sm:text-base text-[#b8b8b8] leading-relaxed">
          Production-grade full-stack web platforms, Retrieval-Augmented Generation (RAG) pipelines, and machine learning models engineered for real-world impact.
        </p>
      </div>

      {/* 2x2 Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#1b1a1f] border border-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-pointer shadow-xl"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#24232a]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Pink "View Project" Pill on Hover as seen in video at 00:46 */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ea0044] text-white text-xs sm:text-sm font-semibold shadow-2xl shadow-[#ea0044]/50 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                  {project.title}
                </h3>
                <span className="text-xs text-[#828282]">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs text-[#828282] group-hover:text-white transition-colors">
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trusted by Many Ticker as in video at 00:48 */}
      <div className="mb-14">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-sm font-medium text-white/90">
            Trusted by many
          </span>
        </div>
        <LogoTicker />
      </div>

      {/* Pink Discovery Call Banner as in video at 00:49 - 00:51 */}
      <div className="rounded-3xl bg-[#ea0044] p-8 sm:p-14 text-center text-white shadow-2xl shadow-[#ea0044]/30 flex flex-col items-center">
        {/* Client Avatars + Stars */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="flex -space-x-2 overflow-hidden">
            {avatars.map((av, idx) => (
              <div
                key={idx}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-[#ea0044] overflow-hidden bg-black"
              >
                <img
                  src={av}
                  alt={`Client ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-3 h-3 text-white fill-white" />
            ))}
            <span className="text-xs font-semibold ml-1">Open to Remote & Global Roles</span>
          </div>
        </div>

        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight mb-3">
          Interested in collaborating?
          <br />
          Let's build scalable systems.
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-full bg-[#141316] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 cursor-pointer"
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
            <span>Contact Yihenew</span>
          </button>

          <a
            href="mailto:birukanimut1234@gmail.com"
            className="text-xs sm:text-sm text-white/90 hover:text-white underline py-2"
          >
            Email directly ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import { ArrowUpRight } from "./Icons";
import { Project, PROJECTS_DATA } from "../data/portfolioData";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export function ProjectsSection({
  onSelectProject,
  onViewAllProjects
}: ProjectsSectionProps) {
  return (
    <section id="work" className="py-14 sm:py-20 lg:py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10 sm:mb-14">
        <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold text-[#fafafa] tracking-tight">
          Latest <span className="text-[#ea0044]">Projects</span>
        </h2>
      </div>

      {/* 2x2 Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#1b1a1f] border border-white/[0.08] hover:border-white/20 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/60"
          >
            {/* Image Container with smooth hover zoom */}
            <div className="relative aspect-[16/11] overflow-hidden bg-[#24232a]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  if (project.gallery && project.gallery[0]) {
                    (e.target as HTMLImageElement).src = project.gallery[0];
                  }
                }}
              />

              {/* Floating Pink "View Project" Pill on Hover as seen in video */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ea0044] text-white text-xs sm:text-sm font-semibold shadow-2xl shadow-[#ea0044]/50 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Info Footer */}
            <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#828282] font-normal mt-1">
                  {project.category}
                </p>
              </div>

              {/* Minimalist View Project link */}
              <div className="flex items-center gap-1 text-xs text-[#828282] group-hover:text-white transition-colors">
                <span className="hidden sm:inline">View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "View all my projects" Link */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <button
          onClick={onViewAllProjects}
          className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#b8b8b8] hover:text-white transition-colors cursor-pointer py-2.5 px-6 rounded-full border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.05]"
        >
          <span>View all my projects</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}

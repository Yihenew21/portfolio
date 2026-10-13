import React, { useState } from "react";
import { motion } from "framer-motion";
import { LinkedInIcon, GitHubIcon, TelegramIcon } from "./Icons";
import { WORK_HISTORY } from "../data/portfolioData";
import { generateResumePdf } from "../utils/generateResumePdf";

export function AboutSection() {
  const [isSplit, setIsSplit] = useState(false);
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [downloadState, setDownloadState] = useState<"idle" | "generating" | "success">("idle");

  const handleDownloadResume = () => {
    if (downloadState === "generating") return;
    setDownloadState("generating");
    try {
      setTimeout(() => {
        generateResumePdf();
        setDownloadState("success");
        setTimeout(() => setDownloadState("idle"), 3500);
      }, 350);
    } catch (err) {
      console.error("Failed to generate resume PDF:", err);
      setDownloadState("idle");
    }
  };

  const displayedHistory = showAllHistory ? WORK_HISTORY : WORK_HISTORY.slice(0, 3);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-14 sm:py-20 lg:py-24 px-4 max-w-6xl mx-auto"
    >
      {/* Top Headline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 sm:mb-14"
      >
        <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
          <span className="block text-white">Engineering systems</span>
          <span className="block text-[#ea0044]">that scale & deliver.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Portrait & Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[#ea0044]/30 via-[#1b1a1f] to-[#141316] border border-white/[0.08] aspect-[4/5] w-full shadow-2xl flex items-center justify-center">
            {/* Background Red Studio Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />
            
            {/* Sleek Visual Portrait / Engineer Monogram Avatar */}
            <div className="relative z-0 w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#1e1c24] to-[#121115]">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#ea0044] to-[#ff4d79] p-0.5 shadow-2xl shadow-[#ea0044]/30 flex items-center justify-center mb-6">
                <div className="w-full h-full bg-[#17161b] rounded-[22px] flex items-center justify-center">
                  <span className="font-['Space_Grotesk'] font-bold text-4xl text-white tracking-tight">
                    YA
                  </span>
                </div>
              </div>
              <div className="text-center z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new roles
                </span>
                <p className="text-xs text-[#828282] mt-3 font-mono">
                  Software Engineer • Full-Stack Developer • Machine Learning
                </p>
                <p className="text-[11px] text-[#666] font-mono mt-0.5">
                  Addis Ababa, Ethiopia (GMT+3)
                </p>
              </div>
            </div>

            {/* Social Icons floating bottom-right */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              <a
                href="https://t.me/Imbiruk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram (@Imbiruk)"
                title="Telegram: @Imbiruk"
                className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-[#ea0044] hover:border-[#ea0044] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#ea0044]/40 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Yihenew21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-[#ea0044] hover:border-[#ea0044] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#ea0044]/40 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/yihenew-animut/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-[#ea0044] hover:border-[#ea0044] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#ea0044]/40 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:birukanimut1234@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-[#ea0044] hover:border-[#ea0044] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#ea0044]/40 flex items-center justify-center transition-all duration-300 ease-out"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Under photo name and role */}
          <div className="pt-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Yihenew Animut Mulu
            </h3>
            <p className="text-xs sm:text-sm text-[#828282] mt-0.5">
              Software Engineer | Full-Stack Developer | Machine Learning
            </p>
          </div>

          {/* Download Resume Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleDownloadResume}
              disabled={downloadState === "generating"}
              className="group relative w-full flex items-center justify-between p-4 rounded-2xl bg-[#1c1a22] hover:bg-[#23202b] border border-[#ea0044]/30 hover:border-[#ea0044] transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#ea0044]/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
              aria-label="Download Resume in PDF format"
            >
              {/* Subtle ambient gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ea0044]/10 via-transparent to-[#ea0044]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ea0044]/15 border border-[#ea0044]/30 text-[#ea0044] group-hover:bg-[#ea0044] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-sm">
                  {downloadState === "generating" ? (
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : downloadState === "success" ? (
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-[#ea0044] transition-colors">
                      {downloadState === "generating"
                        ? "Generating PDF..."
                        : downloadState === "success"
                        ? "Resume Downloaded!"
                        : "Download Resume"}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#ea0044]/20 text-[#ea0044] border border-[#ea0044]/30">
                      PDF
                    </span>
                  </div>
                  <p className="text-[11px] text-[#888] font-mono mt-0.5">
                    {downloadState === "success" ? "Ready in your downloads folder" : "Full 2-Page CV • ATS-Formatted"}
                  </p>
                </div>
              </div>

              <div className="relative z-10 shrink-0">
                <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#ea0044] group-hover:text-white text-[#b8b8b8] flex items-center justify-center transition-all">
                  <svg className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Bio paragraphs, Signature, and Work History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-5 text-sm sm:text-base text-[#b8b8b8] leading-relaxed">
            <p>
              I am a Software Engineer experienced in building scalable full-stack web applications, AI-powered systems, and data-driven solutions. Experienced in developing Retrieval-Augmented Generation (RAG) applications, machine learning solutions, and high-performance web platforms.
            </p>
            <p>
              Currently, I lead a cross-functional team of 10 engineers at <span className="text-white font-medium">Telsem Tech</span>, architecting multi-tenant portal solutions and pharmacy inventory systems using Next.js, React, Node.js, and PostgreSQL — increasing our sprint delivery velocity by 20%.
            </p>
            <p>
              As co-founder of <span className="text-white font-medium">Lawbridge Ethiopia</span>, I engineered an automated legal RAG pipeline with the Gemini API and Google Firestore vector storage to make Ethiopian law accessible to students, attorneys, and citizens.
            </p>
            <p>
              I hold a Bachelor of Science in Software Engineering from <span className="text-white font-medium">Debre Berhan University</span> with a <span className="text-white font-semibold">3.97 / 4.0 GPA</span>, grounded in rigorous computer science principles, scalable architectures, and machine learning.
            </p>

            {/* Handwritten Signature & Resume Quick Action */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 200 60"
                  className="h-12 w-auto text-[#ea0044] stroke-current fill-none stroke-[2.5]"
                >
                  <path
                    d="M12 42 C 28 12, 35 15, 45 35 C 55 50, 65 15, 75 22 C 85 30, 95 48, 110 32 C 120 20, 135 18, 150 28 C 162 36, 175 42, 190 32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-mono text-[#828282] uppercase tracking-wider">
                  Yihenew Animut
                </span>
              </div>

              <button
                type="button"
                onClick={handleDownloadResume}
                disabled={downloadState === "generating"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#ea0044]/15 hover:bg-[#ea0044] text-[#ea0044] hover:text-white border border-[#ea0044]/40 hover:border-[#ea0044] transition-all duration-200 cursor-pointer shadow-md hover:shadow-[#ea0044]/30"
                aria-label="Download Resume PDF"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{downloadState === "generating" ? "Generating..." : downloadState === "success" ? "Downloaded!" : "Download Resume PDF"}</span>
                <span className="text-[10px] font-mono">↓</span>
              </button>
            </div>
          </div>

          {/* Work History Section: Chunked Deck vs Split Vertical View */}
          <div className="pt-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-white">Experience & Education</h4>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-white/5 border border-white/10 text-[#a0a0a0]">
                  {WORK_HISTORY.length} Milestones
                </span>
              </div>

              {/* View Mode Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSplit(!isSplit)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#ea0044]/15 hover:bg-[#ea0044] text-[#ea0044] hover:text-white border border-[#ea0044]/30 transition-all cursor-pointer shadow-sm"
              >
                <span>{isSplit ? "⤺ Chunk Together" : "⚡ Split Cards Vertically"}</span>
                <span className="text-[10px]">{isSplit ? "↑" : "↓"}</span>
              </button>
            </div>

            {/* Visual Guide Banner */}
            <div
              onClick={() => setIsSplit(!isSplit)}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-2 text-xs text-[#b8b8b8]">
                <span className="w-2 h-2 rounded-full bg-[#ea0044] animate-pulse" />
                <span>
                  {isSplit
                    ? "Currently split into vertical chronological order"
                    : "Cards are chunked together. Click to split into full vertical timeline"}
                </span>
              </div>
              <span className="text-xs font-mono text-[#ea0044] group-hover:translate-x-1 transition-transform">
                {isSplit ? "Collapse deck ↑" : "Split deck ↓"}
              </span>
            </div>

            {/* The Cards: Either Chunked Deck or Split Vertical */}
            {!isSplit ? (
              /* CHUNKED DECK VIEW (Cards stacked with peek guides underneath) */
              <div
                onClick={() => setIsSplit(true)}
                className="relative cursor-pointer pt-2 pb-14 group select-none"
              >
                {/* Visual Peek Card Layer 3 (Deepest) */}
                <div
                  className="absolute inset-x-6 top-10 h-32 rounded-2xl bg-[#141318] border border-white/[0.05] shadow-lg pointer-events-none transform translate-y-6 scale-[0.92] opacity-50 flex items-end justify-between px-6 pb-2"
                >
                  <span className="text-[10px] font-mono text-[#666]">
                    05 • {WORK_HISTORY[4]?.company}
                  </span>
                  <span className="text-[10px] font-mono text-[#666]">
                    {WORK_HISTORY[4]?.period}
                  </span>
                </div>

                {/* Visual Peek Card Layer 2 */}
                <div
                  className="absolute inset-x-4 top-6 h-36 rounded-2xl bg-[#17161c] border border-white/[0.08] shadow-xl pointer-events-none transform translate-y-4 scale-[0.96] opacity-75 flex items-end justify-between px-6 pb-2"
                >
                  <span className="text-[10px] font-mono text-[#828282]">
                    03 • {WORK_HISTORY[2]?.company} &amp; {WORK_HISTORY[3]?.company}
                  </span>
                  <span className="text-[10px] font-mono text-[#828282]">
                    Peeking Behind
                  </span>
                </div>

                {/* Visual Peek Card Layer 1 (Just below top) */}
                <div
                  className="absolute inset-x-2 top-3 h-40 rounded-2xl bg-[#1a1920] border border-white/10 shadow-2xl pointer-events-none transform translate-y-2 scale-[0.98] opacity-90 flex items-end justify-between px-6 pb-2"
                >
                  <span className="text-[11px] font-mono text-[#a0a0a0]">
                    02 • {WORK_HISTORY[1]?.company}
                  </span>
                  <span className="text-[10px] font-mono text-[#ea0044]">
                    Tap to unfold all 5
                  </span>
                </div>

                {/* Top Interactive Front Card (Card 0) */}
                <div className="relative z-10 p-5 sm:p-6 rounded-2xl bg-[#201f26] border border-[#ea0044]/40 shadow-2xl shadow-black/80 group-hover:border-[#ea0044] transition-all group-hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-bold text-white">
                        {WORK_HISTORY[0].company}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#ea0044]/20 text-[#ea0044] border border-[#ea0044]/40">
                        {WORK_HISTORY[0].status}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#b8b8b8]">
                      {WORK_HISTORY[0].period}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-[#ea0044] block mb-2">
                    {WORK_HISTORY[0].role}
                  </span>

                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed mb-4">
                    {WORK_HISTORY[0].description}
                  </p>

                  {/* Guides indicating other cards underneath */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#828282]">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[#ea0044] font-semibold">
                        Card 1 of 5
                      </span>
                      <span>• 4 more records stacked underneath</span>
                    </div>
                    <span className="text-[#ea0044] font-semibold group-hover:underline flex items-center gap-1">
                      <span>Click to split vertically</span>
                      <span>↓</span>
                    </span>
                  </div>
                </div>

                {/* Mini Peek Tabs Guide */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 justify-center">
                  {WORK_HISTORY.map((item, i) => (
                    <span
                      key={item.company}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all ${
                        i === 0
                          ? "bg-[#ea0044]/20 text-white border border-[#ea0044]/40"
                          : "bg-white/[0.03] text-[#777] border border-white/5"
                      }`}
                    >
                      {i + 1}. {item.company}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              /* SPLITTED & ORDERED VERTICALLY VIEW */
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative flex flex-col gap-4 pl-4 sm:pl-6 border-l-2 border-[#ea0044]/30 my-2"
              >
                {WORK_HISTORY.map((item, idx) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="relative flex flex-col p-4 sm:p-5 rounded-2xl bg-[#18171d] border border-white/[0.08] hover:border-white/20 transition-all hover:bg-[#1c1b22] group"
                  >
                    {/* Glowing Rail Node Dot */}
                    <div className="absolute -left-[23px] sm:-left-[31px] top-6 w-3 h-3 rounded-full bg-[#ea0044] ring-4 ring-[#141316] shadow-md shadow-[#ea0044]" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#ea0044] transition-colors">
                          {item.company}
                        </span>
                        {item.status === "Active" ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#ea0044]/15 text-[#ea0044] border border-[#ea0044]/30">
                            Active
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-[#888] border border-white/10">
                            {item.status}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-[#b8b8b8] whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    <span className="text-xs font-medium text-[#ea0044] mb-2">
                      {item.role}
                    </span>

                    <p className="text-xs text-[#b0b0b0] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}

                {/* Button to Chunk Back Together */}
                <div className="flex justify-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSplit(false)}
                    className="px-5 py-2 rounded-full text-xs font-semibold bg-[#222127] text-white hover:bg-[#ea0044] transition-all cursor-pointer border border-white/10 shadow-lg flex items-center gap-1.5"
                  >
                    <span>⤺ Chunk Cards Back Together</span>
                    <span>↑</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

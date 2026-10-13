import React, { useState, useEffect } from "react";
import { LinkedInIcon, GitHubIcon, TelegramIcon } from "./Icons";

interface FooterProps {
  onOpenContact: () => void;
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
}

export function Footer({
  onOpenContact,
  onNavigateHome,
  onNavigateProjects
}: FooterProps) {
  const words = ["build", "engineer", "scale", "create"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [words.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText("birukanimut1234@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleNavClick = (sectionId: string) => {
    onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer
      id="contact"
      className="relative pt-14 sm:pt-20 pb-10 px-4 overflow-hidden bg-[#100f13]"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Animated Rotating Headline */}
        <div className="flex flex-col items-start max-w-3xl">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight flex flex-wrap items-center gap-x-3.5 gap-y-1">
            <span>Let’s</span>
            <span className="relative inline-flex overflow-hidden h-[1.25em] align-middle items-center px-1 text-[#ea0044]">
              <span
                key={words[currentWordIndex]}
                className="inline-block animate-in fade-in slide-in-from-bottom-3 duration-300 transition-all font-bold"
              >
                {words[currentWordIndex]}
              </span>
            </span>
            <span>scalable software together.</span>
          </h2>
        </div>

        {/* Contact Rows & Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-white/[0.08]">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#828282] font-semibold">
              Email
            </span>
            <button
              onClick={copyEmail}
              className="text-left text-sm sm:text-base text-white hover:text-[#ea0044] transition-colors flex items-center gap-2 group cursor-pointer"
              title="Click to copy email address"
              aria-label="Copy email address"
            >
              <span className="truncate">birukanimut1234@gmail.com</span>
              <span className="inline-flex items-center gap-1 text-xs text-[#828282] group-hover:text-white shrink-0 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] group-hover:border-[#ea0044]/40 group-hover:bg-[#ea0044]/10 transition-all duration-200">
                {copiedEmail ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400 font-medium text-[11px]">Copied</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-[#a0a0a0] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span className="text-[11px] text-[#828282] group-hover:text-white transition-colors">Copy</span>
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#828282] font-semibold">
              Contact & Phone
            </span>
            <button
              onClick={onOpenContact}
              className="text-left text-sm sm:text-base text-white hover:text-[#ea0044] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>+251 91 306 5038</span>
              <span className="text-xs">↗</span>
            </button>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#828282] font-semibold">
              Social Links
            </span>
            <div className="flex items-center gap-3 text-white/80">
              <a
                href="https://t.me/Imbiruk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram (@Imbiruk)"
                title="Telegram: @Imbiruk"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ea0044] hover:text-white flex items-center justify-center transition-all"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Yihenew21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ea0044] hover:text-white flex items-center justify-center transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/yihenew-animut/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ea0044] hover:text-white flex items-center justify-center transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:birukanimut1234@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ea0044] hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#828282] font-semibold">
              Quick Links
            </span>
            <div className="flex items-center gap-4 text-sm text-[#b8b8b8]">
              <button
                onClick={() => handleNavClick("work")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
            </div>
          </div>
        </div>

        {/* Large Decorative Signature */}
        <div className="select-none pointer-events-none w-full text-center overflow-hidden pt-4 pb-2">
          <span className="font-['Space_Grotesk'] font-bold text-5xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-tighter text-[#ea0044] uppercase leading-none block">
            YIHENEW ANIMUT
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-white/[0.06] text-xs text-[#828282]">
          <span>© 2026 Yihenew Animut Mulu. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

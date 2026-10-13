import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Web Application",
    timeline: "2-4 weeks",
    budget: "$3,000 - $5,000",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <motion.div
      key="contact-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-drawer-title"
    >
      <motion.div
        key="contact-modal-dialog"
        initial={{ x: "100%", opacity: 0.6 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 340, damping: 34 }}
        className="relative w-full max-w-full sm:max-w-lg md:max-w-xl h-full h-[100dvh] bg-[#16151a] border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.85)] flex flex-col z-50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#16151a]/95 backdrop-blur-md px-5 sm:px-7 py-4 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#ea0044] font-semibold">
                Make Contact
              </span>
            </div>
            <h3
              id="contact-drawer-title"
              className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white tracking-tight leading-tight"
            >
              Let's build together
            </h3>
          </div>

          {/* Close Button */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[11px] text-[#71717a] font-mono border border-white/10 px-1.5 py-0.5 rounded">
              Esc
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-90 duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-6 space-y-6">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center my-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-5 text-3xl shadow-lg shadow-emerald-500/10">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">
                Message Sent!
              </h3>
              <p className="text-sm text-[#b8b8b8] max-w-sm mb-6 leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name || "there"}</span>. Yihenew has received your project details and will reply to <span className="text-white font-medium">{formData.email}</span> promptly.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <a
                  href="mailto:birukanimut1234@gmail.com"
                  className="w-full text-center px-5 py-3 rounded-full bg-[#f0f0f0] text-[#141316] text-xs font-semibold hover:bg-white transition-colors shadow-md"
                >
                  Send direct email instead →
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full px-4 py-3 rounded-full bg-white/5 text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer border border-white/10"
                >
                  Close panel
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Profile Identity Bar */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#ea0044]/60 bg-gradient-to-tr from-[#ea0044] to-[#ff5983] shrink-0 flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-white">YA</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-white truncate">
                      Yihenew Animut Mulu
                    </span>
                    <span className="text-xs text-[#a0a0aa] truncate">
                      Full-Stack &amp; AI Systems Engineer
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Intro */}
              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed">
                Tell me about your system requirements, architecture goals, or timeline. You can also reach me directly at <a href="mailto:birukanimut1234@gmail.com" className="text-[#ea0044] hover:underline font-medium">birukanimut1234@gmail.com</a>.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-[#b8b8b8] mb-1.5">
                      Your Name <span className="text-[#ea0044]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#ea0044] focus:ring-1 focus:ring-[#ea0044]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#b8b8b8] mb-1.5">
                      Your Email <span className="text-[#ea0044]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#ea0044] focus:ring-1 focus:ring-[#ea0044]/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-[#b8b8b8] mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#201f25] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#ea0044] focus:ring-1 focus:ring-[#ea0044]/50 transition-all"
                    >
                      <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                      <option value="AI & RAG Pipeline">AI &amp; RAG Pipeline</option>
                      <option value="Backend & Database Architecture">Backend &amp; DB Architecture</option>
                      <option value="Machine Learning & Analytics">Machine Learning &amp; Analytics</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#b8b8b8] mb-1.5">
                      Estimated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#201f25] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#ea0044] focus:ring-1 focus:ring-[#ea0044]/50 transition-all"
                    >
                      <option value="Immediate / Active Role">Immediate / Active Role</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="Long-term / Full-time">Full-time Opportunity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b8b8b8] mb-1.5">
                    Project / Opportunity Details <span className="text-[#ea0044]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me a bit about your tech stack, scope, goals, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#ea0044] focus:ring-1 focus:ring-[#ea0044]/50 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-[#ea0044] hover:bg-[#ff1f5e] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-95 shadow-lg shadow-[#ea0044]/30 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Direct Reach Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#71717a] font-semibold block mb-3">
                  Direct Contacts
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href="mailto:birukanimut1234@gmail.com"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all text-xs text-[#a1a1aa] hover:text-white"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#ea0044]/15 text-[#ea0044] flex items-center justify-center shrink-0">
                      ✉
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-white font-medium text-[11px] leading-tight">Email</span>
                      <span className="truncate text-[10px] text-[#71717a]">birukanimut1234@gmail.com</span>
                    </div>
                  </a>

                  <a
                    href="tel:+251913065038"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all text-xs text-[#a1a1aa] hover:text-white"
                  >
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      📞
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-white font-medium text-[11px] leading-tight">Phone / Telegram</span>
                      <span className="truncate text-[10px] text-[#71717a]">+251 91 306 5038</span>
                    </div>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

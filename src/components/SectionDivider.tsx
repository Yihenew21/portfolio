import React from "react";
import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  variant?: "default" | "accent" | "minimal";
  withNode?: boolean;
}

export function SectionDivider({
  className = "",
  variant = "default",
  withNode = false
}: SectionDividerProps) {
  return (
    <div
      className={`relative w-full max-w-5xl mx-auto px-6 overflow-hidden pointer-events-none select-none py-1 sm:py-2 ${className}`}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center h-4 w-full">
        {/* Soft Background Ambient Glow Flare (Deep blur) */}
        <div
          className={`absolute inset-x-16 sm:inset-x-32 h-3 rounded-full blur-lg pointer-events-none transition-opacity duration-700 ${
            variant === "accent"
              ? "bg-[#ea0044]/15 opacity-70"
              : "bg-gradient-to-r from-transparent via-[#ea0044]/10 to-transparent opacity-50"
          }`}
        />

        {/* Base Static Hairline with Smooth Edge Taper */}
        <motion.div
          initial={{ scaleX: 0.2, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent overflow-hidden"
        >
          {/* Subtle traveling shimmer accent */}
          <div
            className="absolute top-0 left-0 w-1/4 h-full animate-divider-shimmer"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(234, 0, 68, 0.3) 40%, rgba(255, 255, 255, 0.7) 50%, rgba(234, 0, 68, 0.3) 60%, transparent 100%)",
              boxShadow: "0 0 8px rgba(234, 0, 68, 0.5)"
            }}
          />
        </motion.div>

        {/* Optional Center Illuminated Micro-Dot */}
        {withNode && (
          <div className="absolute flex items-center justify-center z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ea0044] shadow-[0_0_8px_rgba(234,0,68,0.9)] ring-2 ring-[#141316]" />
          </div>
        )}
      </div>
    </div>
  );
}

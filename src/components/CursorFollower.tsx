import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth, responsive spring physics matching monitor refresh rate
  const springConfig = { damping: 30, stiffness: 480, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch-only / coarse pointer
    const mediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    if (mediaQuery.matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Place the red circle distinctly lower with comfortable clearance from the cursor tip
      mouseX.set(e.clientX);
      mouseY.set(e.clientY + 28);

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  // Do not render on touch-only devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isPressed ? 0.8 : 1,
        opacity: isVisible ? 0.95 : 0,
      }}
      transition={{
        scale: { type: "spring", stiffness: 500, damping: 25 },
        opacity: { duration: 0.15 },
      }}
    >
      {/* Outer ambient subtle glow */}
      <div className="relative flex items-center justify-center">
        <span
          className="absolute -inset-1 rounded-full bg-[#ea0044]/30 blur-[3px]"
        />

        {/* Small Red Circle element with consistent size that does not expand on elements */}
        <span
          className="relative block w-3 h-3 rounded-full bg-[#ea0044] ring-1 ring-white/25 shadow-[0_0_10px_2px_rgba(234,0,68,0.7)]"
          style={{
            backgroundColor: "#ea0044",
          }}
        />
      </div>
    </motion.div>
  );
}

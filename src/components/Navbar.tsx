import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenContact: () => void;
  onNavigateProjects: () => void;
  onNavigateHome: () => void;
  currentView: "home" | "projects";
}

export function Navbar({
  onOpenContact,
  onNavigateProjects,
  onNavigateHome,
  currentView
}: NavbarProps) {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLargeNavHovered, setIsLargeNavHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const navContainerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      // When near top of page, show expanded nav
      if (currentScrollY <= 40) {
        setIsScrolledDown(false);
      } else if (currentScrollY > lastScrollY + 6 && currentScrollY > 60) {
        // User scrolling DOWN -> show compact navbar with hamburger
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY - 6) {
        // User scrolling UP -> show expanded navbar with full texts
        setIsScrolledDown(false);
      }

      lastScrollY = Math.max(0, currentScrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCompact = isScrolledDown || !isLargeScreen;
  const showFullNav = !isCompact || (isLargeScreen && isLargeNavHovered);

  // Close dropdown if full navbar becomes visible
  useEffect(() => {
    if (showFullNav) {
      setMobileMenuOpen(false);
    }
  }, [showFullNav]);

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Clean up hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleIconMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (isLargeScreen) {
      setIsLargeNavHovered(true);
    } else {
      setMobileMenuOpen(true);
    }
  };

  const handleNavContainerMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleNavContainerMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsLargeNavHovered(false);
      setMobileMenuOpen(false);
    }, 240);
  };

  const handleIconClick = () => {
    if (isLargeScreen) {
      setIsLargeNavHovered((prev) => !prev);
    } else {
      setMobileMenuOpen((prev) => !prev);
    }
  };

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setIsLargeNavHovered(false);
    if (currentView !== "home") {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-3.5 pb-2 pointer-events-none">
      <motion.div
        ref={navContainerRef}
        layout
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        onMouseEnter={handleNavContainerMouseEnter}
        onMouseLeave={handleNavContainerMouseLeave}
        className="pointer-events-auto relative flex items-center justify-between gap-5 sm:gap-8 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/[0.12] bg-[#18171b]/80 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05]"
      >
        {/* Left: Brand Identity (Avatar with red background + Yihenew A.) */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 border border-[#ea0044]/60 bg-gradient-to-tr from-[#ea0044] to-[#ff4d79] ring-1 ring-white/10 shadow-sm flex items-center justify-center">
            <span className="font-['Space_Grotesk'] font-bold text-xs sm:text-sm text-white select-none">
              YA
            </span>
          </div>
          <span className="font-['Space_Grotesk'] font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-neutral-200 transition-colors select-none whitespace-nowrap">
            Yihenew A.
          </span>
        </button>

        {/* Right side: Dynamic based on hover / scroll state */}
        <AnimatePresence mode="wait" initial={false}>
          {!showFullNav ? (
            /* Compact hamburger menu icon: hovers to full on large screen, hovers to responsive nav on small screen */
            <motion.div
              key="compact-nav"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.18 }}
              className="flex items-center ml-2"
            >
              <button
                onClick={handleIconClick}
                onMouseEnter={handleIconMouseEnter}
                aria-label="Toggle navigation menu"
                className="p-1.5 -mr-1 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center focus:outline-none group"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-5 h-5 text-white transition-all duration-200 group-hover:text-[#ea0044] group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-white transition-all duration-200 group-hover:text-[#ea0044] group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </svg>
                )}
              </button>
            </motion.div>
          ) : (
            /* Full navigation with Work, Services, and Contact button */
            <motion.div
              key="full-nav"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-4 sm:gap-6 ml-2"
            >
              <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-[#c4c4c4]">
                <button
                  onClick={() => {
                    if (currentView === "projects") {
                      onNavigateHome();
                    } else {
                      handleNavClick("work");
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Work
                </button>
                <button
                  onClick={() => handleNavClick("services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </nav>

              {/* Glowing pink pill Contact button */}
              <button
                onClick={() => {
                  setIsLargeNavHovered(false);
                  onOpenContact();
                }}
                className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#ea0044] hover:bg-[#ff1f5e] rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_18px_rgba(234,0,68,0.55)] cursor-pointer whitespace-nowrap"
              >
                Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dropdown Menu when hamburger is hovered/clicked on small screen */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              onMouseEnter={handleNavContainerMouseEnter}
              onMouseLeave={handleNavContainerMouseLeave}
              className="pointer-events-auto absolute top-full mt-3 right-0 w-48 bg-[#18171b]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-2.5 shadow-2xl shadow-black/80 flex flex-col gap-1 z-50"
            >
              <button
                onClick={() => handleNavClick("work")}
                className="w-full text-left py-2 px-3 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              >
                Work
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="w-full text-left py-2 px-3 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              >
                Services
              </button>
              <div className="pt-1 mt-1 border-t border-white/[0.08]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-2 rounded-full bg-[#ea0044] hover:bg-[#ff1f5e] text-white text-xs font-semibold text-center cursor-pointer shadow-[0_0_12px_rgba(234,0,68,0.5)] transition-all"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

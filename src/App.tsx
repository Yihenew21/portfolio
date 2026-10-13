/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { BackToTop } from "./components/BackToTop";
import { FloatingContactPill } from "./components/FloatingContactPill";
import { ContactModal } from "./components/ContactModal";
import { Hero } from "./components/Hero";
import { LogoTicker } from "./components/LogoTicker";
import { ProjectsSection } from "./components/ProjectsSection";
import { BigQuote } from "./components/BigQuote";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { ProjectDetailModal } from "./components/ProjectDetailModal";
import { ProjectsArchiveView } from "./components/ProjectsArchiveView";
import { SectionDivider } from "./components/SectionDivider";
import { CursorFollower } from "./components/CursorFollower";
import { LoadingScreen } from "./components/LoadingScreen";
import { Project } from "./data/portfolioData";

const homeContainerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
  modalExit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    filter: "blur(6px)",
    pointerEvents: "none",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: -36,
    scale: 0.985,
    filter: "blur(6px)",
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const sectionExitVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
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
    scale: 0.985,
    filter: "blur(6px)",
    transition: {
      duration: 0.38,
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<"home" | "projects">("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.includes("/projects") || hash === "#projects") {
        setCurrentView("projects");
      } else {
        setCurrentView("home");
      }
    };
    handlePopState();
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToHome = () => {
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToProjects = () => {
    setCurrentView("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#141316] text-[#fafafa] flex flex-col selection:bg-[#ea0044] selection:text-white relative">
      {/* 0. Initial Brand Loading Screen & Progress Indicator */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Red Cursor Follower */}
      <CursorFollower />

      {/* 1. Scroll Position Progress Bar */}
      <ScrollProgressBar />

      {/* 2. Global Navigation Capsule with Contact Pill Button */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onNavigateHome={navigateToHome}
        onNavigateProjects={navigateToProjects}
        currentView={currentView}
      />

      {/* 3. Main Content View */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentView === "projects" ? (
            <ProjectsArchiveView
              key="projects-archive-view"
              onSelectProject={(project) => setSelectedProject(project)}
              onBackToHome={navigateToHome}
              onOpenContact={() => setIsContactOpen(true)}
              isModalOpen={selectedProject !== null}
            />
          ) : (
            <motion.div
              key="home-page-view"
              variants={homeContainerVariants}
              initial="initial"
              animate={selectedProject ? "modalExit" : "animate"}
              exit="exit"
              className="flex flex-col w-full"
            >
              {/* Hero Section */}
              <motion.div variants={sectionExitVariants}>
                <Hero onOpenContact={() => setIsContactOpen(true)} />
              </motion.div>

              {/* Animated Divider */}
              <motion.div variants={sectionExitVariants}>
                <SectionDivider variant="default" />
              </motion.div>

              {/* Latest Projects Bento Grid */}
              <motion.div variants={sectionExitVariants}>
                <ProjectsSection
                  onSelectProject={(project) => setSelectedProject(project)}
                  onViewAllProjects={navigateToProjects}
                />
              </motion.div>

              {/* Animated Divider */}
              <motion.div variants={sectionExitVariants}>
                <SectionDivider variant="accent" />
              </motion.div>

              {/* Big Quote Testimonial */}
              <motion.div variants={sectionExitVariants}>
                <BigQuote />
              </motion.div>

              {/* Animated Divider */}
              <motion.div variants={sectionExitVariants}>
                <SectionDivider variant="default" />
              </motion.div>

              {/* Services with Active Pink Cards & Tools Stack */}
              <motion.div variants={sectionExitVariants}>
                <ServicesSection />
              </motion.div>

              {/* Animated Divider */}
              <motion.div variants={sectionExitVariants}>
                <SectionDivider variant="accent" />
              </motion.div>

              {/* About Story & Signature & Work History */}
              <motion.div variants={sectionExitVariants}>
                <AboutSection />
              </motion.div>

              {/* Animated Divider */}
              <motion.div variants={sectionExitVariants}>
                <SectionDivider variant="default" />
              </motion.div>

              {/* Testimonials with Pink Hover Cards */}
              <motion.div variants={sectionExitVariants}>
                <TestimonialsSection />
              </motion.div>

              {/* Animated Divider */}
              <motion.div variants={sectionExitVariants}>
                <SectionDivider variant="default" />
              </motion.div>

              {/* FAQs & Contact Discussion Card */}
              <motion.div variants={sectionExitVariants}>
                <FaqSection onOpenContact={() => setIsContactOpen(true)} />
              </motion.div>

              {/* Animated Divider before Footer */}
              <motion.div variants={sectionExitVariants}>
                <SectionDivider variant="accent" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. Footer with Animated Words & Pink MR. RUCHIT */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onNavigateHome={navigateToHome}
        onNavigateProjects={navigateToProjects}
      />

      {/* 5. Floating Bottom Pill: "Speak to me / Email or send a message" */}
      <FloatingContactPill
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 6. Floating Back to Top Button */}
      <BackToTop />

      {/* 7. Contact Modal (designed with the centered rounded-3xl modal layout) */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* 8. Rich Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenContact={() => {
              setSelectedProject(null);
              setIsContactOpen(true);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

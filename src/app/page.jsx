"use client";

import { useState } from "react";
import Navigation from "@/nav/Nav.jsx";
import AnimatedBackground from "@/background/Background.jsx";
import HeroSection from "@/sections/Hero.jsx";
import AboutSection from "@/sections/About.jsx";
import ProjectsSection from "@/sections/Projects.jsx";
import ContactSection from "@/sections/Contact.jsx";
import { Footer } from "@/sections/Footer.jsx";
import { useScrollToSection } from "@/hooks/UseScrollToSection.jsx";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, scrollToSection, registerSection } =
    useScrollToSection();

  // Enhanced scroll function that also closes mobile menu
  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation - Pass the enhanced scroll function and activeSection */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={handleScrollToSection}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection
          id="home"
          ref={(el) => registerSection("home", el)}
          scrollToSection={handleScrollToSection}
        />
        <AboutSection
          id="about"
          scrollToSection={handleScrollToSection}
          ref={(el) => registerSection("about", el)}
        />
        <ProjectsSection
          id="projects"
          ref={(el) => registerSection("projects", el)}
        />
        <ContactSection
          id="contact"
          ref={(el) => registerSection("contact", el)}
        />
        <Footer id="footer" ref={(el) => registerSection("about", el)} />
      </main>
    </div>
  );
}

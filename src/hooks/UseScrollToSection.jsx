import { useState, useCallback, useRef } from "react";

export const useScrollToSection = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  const registerSection = useCallback((sectionId, element) => {
    if (element) {
      sectionRefs.current[sectionId] = element;
    }
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  }, []);

  return { activeSection, scrollToSection, registerSection };
};

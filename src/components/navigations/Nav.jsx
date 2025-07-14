import React from "react";
import HamburgerMenu from "./Hamburger.jsx";

const Navigation = ({ activeSection, scrollToSection, isOpen, setIsOpen }) => {
  const navItems = ["home", "about", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            JN
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-red-400 cursor-pointer ${
                  activeSection === section ? "text-red-400" : "text-gray-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-red-400 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

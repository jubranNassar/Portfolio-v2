import { forwardRef } from "react";
import { Icons } from "@/components/Icons/Icons.jsx";
import Button from "@/ui/Button.jsx";
import SocialLinks from "@/ui/SocialLinks.jsx";

const HeroSection = forwardRef(({ id, scrollToSection }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-300 to-red-500 bg-clip-text text-transparent animate-pulse">
            Jubran Nassar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Solutions Engineer II at Spacelift
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            I help teams build robust cloud infrastructure and streamline their
            deployment processes using Infrastructure as Code. Passionate about
            DevOps, cloud technologies, and automation solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollToSection("projects")}
            className="rounded-full"
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToSection("contact")}
            className="rounded-full"
          >
            Get In Touch
          </Button>
        </div>

        <SocialLinks />

        <button
          onClick={() => scrollToSection("about")}
          className="mt-16 animate-bounce mx-auto flex items-center justify-center text-red-400 hover:text-red-300 transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <Icons.ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
});

export default HeroSection;

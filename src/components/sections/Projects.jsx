import { forwardRef } from "react";
import SectionHeader from "@/ui/SectionHeader.jsx";
import ProjectCard from "@/ui/ProjectCard.jsx";
import { projectsData } from "@/data/ProjectsData.jsx";

const ProjectsSection = forwardRef(({ id }, ref) => {
  return (
    <section id={id} ref={ref} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="Here are some of my recent projects that showcase my skills in cloud infrastructure, DevOps, and full-stack development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;

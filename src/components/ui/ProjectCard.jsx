import React from "react";
import { Icons } from "@/components/Icons/Icons.jsx";
import Card from "./Card.jsx";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden" hover>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            className="flex items-center text-gray-400 hover:text-red-400 transition-colors"
          >
            <Icons.Github size={16} className="mr-2" />
            Code
          </a>
          <a
            href={project.demo}
            className="flex items-center text-gray-400 hover:text-red-400 transition-colors"
          >
            <Icons.ExternalLink size={16} className="mr-2" />
            Demo
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

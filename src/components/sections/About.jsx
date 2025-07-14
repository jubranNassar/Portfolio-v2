import { forwardRef } from "react";
import { Icons } from "@/components/Icons/Icons.jsx";
import { skillsData } from "@/data/SkillsData.jsx";

const AboutSection = forwardRef(({ id }, ref) => {
  return (
    <section id={id} ref={ref} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a Solutions Engineer II at Spacelift, passionate about cloud
            infrastructure, DevOps practices, and helping teams scale their
            operations efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900">
              <div className="flex items-center mb-4">
                <Icons.Briefcase className="text-red-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Professional Role</h3>
              </div>
              <p className="text-gray-300">
                As a Solutions Engineer II at Spacelift, I work with teams to
                implement Infrastructure as Code best practices, optimize cloud
                workflows, and solve complex deployment challenges using tools
                like Terraform and OpenTofu.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900">
              <div className="flex items-center mb-4">
                <Icons.Code className="text-red-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">What I Do</h3>
              </div>
              <p className="text-gray-300">
                I specialize in cloud infrastructure automation, CI/CD pipeline
                optimization, and full-stack development. My focus is on
                creating scalable, maintainable solutions that empower
                development teams.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillsData.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-red-900 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <IconComponent
                        className={`w-10 h-10 ${skill.color}`}
                        size={40}
                      />
                    </div>
                    <h4 className="font-semibold text-white text-sm">
                      {skill.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;

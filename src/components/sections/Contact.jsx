import { forwardRef } from "react";
import { Icons } from "@/components/Icons/Icons.jsx";

const ContactSection = forwardRef(({ id }, ref) => {
  return (
    <section id={id} ref={ref} className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always excited to discuss cloud infrastructure projects, DevOps
            challenges, or collaborate on innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900">
              <div className="flex items-center mb-4">
                <Icons.Mail className="text-red-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-300">jubran.nassar13@gmail.com</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900">
              <div className="flex items-center mb-4">
                <Icons.MessageCircle className="text-red-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Let's Connect</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Whether you need help with cloud infrastructure, want to discuss
                DevOps best practices, or have a project in mind, I'd love to
                hear from you.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jubranNassar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Icons.Github size={20} className="mr-2" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jubran-nassar-790886199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Icons.Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-300 mb-6">
                  Ready to optimize your cloud infrastructure or discuss a
                  project? I'd love to hear from you!
                </p>
                <a
                  href="mailto:jubran.nassar13@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Icons.Mail size={20} className="mr-2" />
                  Send Email
                </a>
              </div>

              <div className="pt-4 border-t border-red-900">
                <h4 className="text-lg font-medium mb-3">
                  What I can help with:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Infrastructure as Code (Terraform/OpenTofu)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Cloud Architecture & Migration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    DevOps Pipeline Optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Full-Stack Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;

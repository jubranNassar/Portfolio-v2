import React from "react";
import { Icons } from "@/components/Icons/Icons.jsx";

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      href: "https://github.com/jubranNassar",
      icon: Icons.Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/jubran-nassar-790886199",
      icon: Icons.Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:jubran.nassar13@gmail.com",
      icon: Icons.Gmail,
      label: "Email",
    },
  ];

  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
          rel={link.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
          className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
          aria-label={link.label}
        >
          <link.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

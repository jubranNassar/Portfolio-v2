import React from "react";

const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;

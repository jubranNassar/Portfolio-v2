import React from "react";

const Card = ({
  children,
  className = "",
  hover = false,
  variant = "default",
}) => {
  const baseStyles =
    "bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-red-900";
  const hoverStyles = hover
    ? "hover:border-red-500 transition-all duration-300 transform hover:scale-105"
    : "";

  const variants = {
    default: "p-6",
    compact: "p-4",
    large: "p-8",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

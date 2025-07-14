import React from "react";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white",
    secondary: "border-2 border-red-500 hover:bg-red-500 text-white",
    ghost: "text-gray-400 hover:text-red-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import { useState } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clienY });
  };
  return { mousePosition, onMouseMove };
};

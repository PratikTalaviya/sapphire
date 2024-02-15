import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    const handleMouseHover = () => {
      document.querySelectorAll("a, button, input,textarea, .leaflet-marker-icon, .menu").forEach((element) => {
        element.addEventListener("mouseenter", () => setIsHovering(true));
        element.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    handleMouseHover();

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button, input, textarea, .leaflet-marker-icon, .menu").forEach((element) => {
        element.removeEventListener("mouseenter", () => setIsHovering(true));
        element.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
      style={{ top: cursorPosition.y, left: cursorPosition.x }}
    ></div>
  );
};

export default CustomCursor;

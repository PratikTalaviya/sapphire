import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleWindowLeave = () => {
      setIsVisible(false);
    };

    const handleWindowEnter = () => {
      setIsVisible(true);
    };

    const handleClick = () => {
      setIsClicked(true);
    };

    const handleReleaseClick = () => {
      setIsClicked(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleWindowLeave);
    window.addEventListener("mouseover", handleWindowEnter);
    document.body.addEventListener("mousedown", handleClick);
    document.body.addEventListener("mouseup", handleReleaseClick);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleWindowLeave);
      window.removeEventListener("mouseover", handleWindowEnter);
      document.body.removeEventListener("mousedown", handleClick);
      document.body.removeEventListener("mouseup", handleReleaseClick);
    };
  }, []);

  useEffect(() => {
    const handleMouseHover = (e) => {
      let target = e.target;
      let isHovered = false;
      // Event Delegation Approach: To handle hover effects dynamically for both existing and newly rendered elements, we use event delegation. Event delegation involves attaching an event listener to a parent element and utilizing event bubbling to handle events for its descendants.
      // use to ensure that the hover effect works for nested elements while still dynamically handling hover effects for newly rendered elements
      while (target) {
        if (target.matches("a, button, input, textarea, .leaflet-marker-shadow, .hamburger-menu")) {
          isHovered = true;
          break;
        }
        target = target.parentElement;
      }

      setIsHovering(isHovered);
    };

    document.body.addEventListener("mouseover", handleMouseHover);

    return () => {
      document.body.removeEventListener("mouseover", handleMouseHover);
    };
  }, []);

  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  };

  if (isTouchDevice()) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isClicked ? "clicked" : ""} ${isHovering ? "hover" : ""}`}
      style={{
        top: cursorPosition.y,
        left: cursorPosition.x,
        visibility: isVisible ? "visible" : "hidden",
      }}
    ></div>
  );
};

export default CustomCursor;

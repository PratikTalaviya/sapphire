import React, { useState } from "react";
import "./HoverUnderline.css";

const HoverUnderline = ({ text, className, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      className={`hover-underline ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={link}
      target="_self"
      rel="noreferrer"
    >
      {text}
      <div className={`underline ${isHovered ? "visible" : ""}`}></div>
    </a>
  );
};

export default HoverUnderline;

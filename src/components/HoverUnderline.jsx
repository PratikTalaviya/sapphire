import React from "react";
import "./HoverUnderline.css";

const HoverUnderline = ({ text, className, link }) => {
  return (
    <a className={`hover-underline ${className}`} href={link} target="_self" rel="noreferrer">
      {text}
      <div className={"underline"}></div>
    </a>
  );
};

export default HoverUnderline;

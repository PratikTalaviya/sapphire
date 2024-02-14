import React, { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects - Sapphire Consultants";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return <h1>Projects Sections</h1>;
}

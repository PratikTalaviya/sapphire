import React, { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "About - Sapphire Consultants";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return <h1>About-Us Sections</h1>;
}

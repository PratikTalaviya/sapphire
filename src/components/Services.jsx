import React, { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "Services - Sapphire Consultants";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return <h1>Services Sections</h1>;
}

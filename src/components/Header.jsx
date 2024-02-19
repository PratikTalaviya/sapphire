// import React, { useState, useEffect } from "react";
// import Menu from "./Menu";
// import "./Header.css";
// import { Link } from "react-router-dom";
// import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showScrollButton, setShowScrollButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const viewportHeight = window.innerHeight;
//       const triggerScrollHeight = viewportHeight * 0.7;

//       setIsScrolled(scrollPosition > 0);
//       setShowScrollButton(scrollPosition > triggerScrollHeight);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <header className={`header-container ${isScrolled ? "scrolled" : ""}`}>
//       <Link to="/" className="text">
//         <div className="logo-container">
//           <div className="logo"></div>
//           <h2 className="website-name">Sapphire Consultants</h2>
//         </div>
//       </Link>
//       <Menu />
//       {showScrollButton && (
//         <button className="scroll-to-top" onClick={scrollToTop}>
//           <MdOutlineKeyboardDoubleArrowUp />
//         </button>
//       )}
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import logo from "../images/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercentage);
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className={`header-container ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="text">
        <div className="logo-container">
          <img src={logo} alt="logo" className={`logo ${isScrolled ? "scrolled-logo" : ""}`} />
          <h1 className={`website-name ${isScrolled ? "scrolled-title" : ""}`}>Sapphire Consultants</h1>
        </div>
      </Link>
      <Menu />
      {scrollProgress > 10 && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          {/* <svg className="progress-circle" viewBox="0 0 30 30"> */}
          {/* <path
              className="circle"
              strokeDasharray={`${scrollProgress}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            /> */}
          <MdOutlineKeyboardDoubleArrowUp />
          {/* </svg> */}
        </button>
      )}
    </header>
  );
}

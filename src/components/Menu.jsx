// Menu.js
import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger-menu ${isOpen ? "active" : ""}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`menu-drawer ${isOpen ? "open" : ""}`}>
        <div className="list-items-container">
          <ul>
            <li onClick={closeMenu}>
              <Link to="/" className="list-item">
                Home
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/services" className="list-item">
                Services
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/projects" className="list-item">
                Projects
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/aboutus" className="list-item">
                About Us
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/contact" className="list-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

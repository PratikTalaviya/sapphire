import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Underline from "./Underline";
import SocialMedia from "./SocialMedia";
import Copywrite from "./Copywrite";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    "https://plus.unsplash.com/premium_photo-1661902184762-49c2c8ebb787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
  ); // Default image source

  const handleImageChange = (index) => {
    const imageArray = [
      "https://media.istockphoto.com/id/1176175923/photo/octagonal-tower-of-the-kau-ban-mosque-on-the-grounds-of-the-taj-mahal-agra-india.webp?s=170667a&w=0&k=20&c=Ph3BbWu1QOfMy-xGo8CE1PG9h4OJMw5BhTw4AMxFtaM=",
      "https://plus.unsplash.com/premium_photo-1661904509551-6570836702e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1566577529803-7aced417384b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1632641140764-f5a14af95be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1655106606799-01e0100e9b94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    ];
    setImageSrc(imageArray[index]);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
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
        <div className="menu-organizer">
          <div className="menu-links-container">
            <ul>
              <li
                onClick={() => {
                  closeMenu();
                  handleImageChange(0);
                }}
                onMouseEnter={() => handleImageChange(0)}
              >
                <Link to="/" className="list-item">
                  <Underline text="Home" thickness="0.2rem" />
                </Link>
              </li>
              <li
                onClick={() => {
                  closeMenu();
                  handleImageChange(1);
                }}
                onMouseEnter={() => handleImageChange(1)}
              >
                <Link to="/services" className="list-item">
                  <Underline text="Services" thickness="0.2rem" />
                </Link>
              </li>
              <li
                onClick={() => {
                  closeMenu();
                  handleImageChange(2);
                }}
                onMouseEnter={() => handleImageChange(2)}
              >
                <Link to="/projects" className="list-item">
                  <Underline text="Projects" thickness="0.2rem" />
                </Link>
              </li>
              <li
                onClick={() => {
                  closeMenu();
                  handleImageChange(3);
                }}
                onMouseEnter={() => handleImageChange(3)}
              >
                <Link to="/aboutus" className="list-item">
                  <Underline text="About Us" thickness="0.2rem" />
                </Link>
              </li>
              <li
                onClick={() => {
                  closeMenu();
                  handleImageChange(4);
                }}
                onMouseEnter={() => handleImageChange(4)}
              >
                <Link to="/contact" className="list-item">
                  <Underline text="Contact" thickness="0.2rem" />
                </Link>
              </li>
            </ul>

            <SocialMedia className="header-socialmedia" />
          </div>
          <div className="image-section">
            {/* Display the image with dynamic src */}
            <img src={imageSrc} alt="menu" />
          </div>
        </div>
        <div className="display">
          <div className="copywrite-container">
            <div className="copywrite-resizer">
              <Copywrite content="© 2024 Sapphire Consultants" devloper="" link="" />
            </div>
            <div className="copywrite-resizer devloper-align">
              <Copywrite
                content="Designed and Developed by "
                devloper="Pratik Talaviya"
                link="https://www.linkedin.com/in/pratik-talaviya-a44828251/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

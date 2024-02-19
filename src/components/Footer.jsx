import React from "react";
import Copywrite from "./Copywrite";
import "./Footer.css";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import HoverUnderline from "./HoverUnderline";
import Underline from "./Underline";

export default function Footer() {
  return (
    <footer>
      <div className="background-footer">
        <div className="main-footer-container">
          <div className="footer-container">
            <div className="links-container">
              <ul className="links-items">
                <li>
                  <Link to="/services" className="footer-links">
                    <Underline text="Services" />
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="footer-links">
                    <Underline text="Projects" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-links">
                    <Underline text="Contact" />
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="footer-links">
                    <Underline text="About" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="logo-container-footer">
              <Link to="/">
                <img src={logo} alt="logo" className="logo-footer" />
              </Link>
            </div>
            <div className="contact-info-footer">
              <div>
                <HoverUnderline text="+91 9898928282" className="contact-info" link="tel:+919662549548" />
              </div>
              <div>
                <HoverUnderline
                  text="sapphire.contact@gmail.com"
                  className="contact-info"
                  link="mailto:sapphire.contact@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className="copywrite-container">
            <div className="copywrite-resizer">
              <Copywrite content="© 2024 Sapphire Consultants" devloper="" link="" />
            </div>
            <div className="copywrite-resizer align-center social-position">
              <SocialMedia />
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
    </footer>
  );
}

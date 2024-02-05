import React from "react";
import Copywrite from "./Copywrite";
import "./Footer.css";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="main-footer-container">
        <div className="footer-container">
          <div className="links-container">
            <ul className="links-items">
              {/* <li>
              <Link to="/" className="footer-links">
                Home
              </Link>
            </li> */}
              <li>
                <Link to="/services" className="footer-links">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-links">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="footer-links">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-links">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo-container-footer">
            <Link to="/">
              <div className="logo-footer"></div>
            </Link>
          </div>
          <div className="social-links-footer">
            <SocialMedia />
          </div>
        </div>
        <div className="copywrite-container">
          <Copywrite content="© 2024 Sapphire Consultants" devloper="" link="" />
          <Copywrite
            content="Designed and Developed by "
            devloper="Pratik Talaviya"
            link="https://www.linkedin.com/in/pratik-talaviya-a44828251/"
          />
        </div>
      </div>
    </footer>
  );
}

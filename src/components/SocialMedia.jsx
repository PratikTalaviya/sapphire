import React from "react";
import { FaBehance } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import "./SocialMedia.css";

export default function SocialMedia(props) {
  return (
    <div className={`social-links-container ${props.className}`}>
      <a href="https://www.linkedin.com/company/google/?originalSubdomain=in">
        <FaLinkedinIn className="icons" />
      </a>
      <a href="https://www.instagram.com/Instagram/">
        <FaInstagram className="icons" />
      </a>
      <a href="https://www.behance.net/">
        <FaFacebookF className="icons" />
      </a>
      <a href="https://www.behance.net/">
        <FaBehance className="icons" />
      </a>
      <a href="https://twitter.com/home">
        <FaXTwitter className="icons" />
      </a>
    </div>
  );
}

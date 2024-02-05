import React from "react";
import { FaBehance } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div className="social-links-container">
      <FaLinkedinIn className="icons" />
      <FaInstagram className="icons" />
      <FaBehance className="icons" />
      <FaXTwitter className="icons" />
      <FaFacebookF className="icons" />
    </div>
  );
}

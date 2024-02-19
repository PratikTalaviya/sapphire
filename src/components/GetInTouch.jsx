import React from "react";
import "./GetInTouch.css";
import image from "../images/getInTouch.svg";
import Button from "./Button";

export default function GetInTouch() {
  return (
    <div className="get-in-touch-container">
      <div>
        <img className="get-in-touch-image" src={image} alt="get-in-touch" />
      </div>
      <div>
        <h1 className="title">Together, let's make magic with architecture.</h1>
        <p className="paragraph">Turning visions into masterpieces, starting anew or enhancing existing ones.</p>
        <Button name="Get In Touch" path="/contact" />
      </div>
    </div>
  );
}

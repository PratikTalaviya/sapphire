import React from "react";
import "./GetInTouch.css";
import image from "../images/getInTouch.svg";
import Button from "./Button";

export default function GetInTouch() {
  return (
    <div className="get-in-touch-container">
      {/* <div>
        <img className="get-in-touch-image" src={image} alt="get-in-touch" />
      </div> */}
      <div className="flex align-center justify-center flex-col gap-[2rem]">
        <h1 className="text-[3rem] font-medium leading-[3.8rem] text-center">
          Together, let's make magic with architecture.
        </h1>
        <p className="text-center text-[1.1rem]">
          Turning visions into masterpieces, starting anew or enhancing existing ones.
        </p>
        <Button name="Get In Touch" path="/contact" />
      </div>
    </div>
  );
}

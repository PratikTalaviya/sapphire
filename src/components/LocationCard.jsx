import React from "react";
import HoverUnderline from "./HoverUnderline";
import "./LocationCard.css";

export default function LocationCard(props) {
  return (
    <div className="location">
      <div className={`location-img ${props.location}`}>
        <h2>{props.location}</h2>
        <h2>Studio</h2>
      </div>
      <div className="address-container">
        <p className="address">
          {props.address.block} <br />
          {props.address.area}
          <br /> {props.address.city}
          <br /> {props.address.pincode}
        </p>
        <div className="address-links">
          <div>
            <HoverUnderline text="Get Direction" className="custom-class" link={props.mapLink} />
          </div>
          <div>
            <HoverUnderline text="+91 9898928282" className="custom-class" link="tel:+919662549548" />
          </div>

          <div>
            <HoverUnderline
              text="sapphire.contact@gmail.com"
              className="custom-class"
              link="mailto:sapphire.contact@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

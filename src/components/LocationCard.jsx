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
            <HoverUnderline
              text="Get Direction"
              className="custom-class"
              // link="https://www.google.com/maps/place/A%2F485,+Tirupati+Society,+Punagam,+Varachha,+Surat,+Gujarat+394530/@21.21486,72.8902751,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04f7b806fc441:0x6102e6e74ac70b07!8m2!3d21.21486!4d72.89285!16s%2Fg%2F11hfk0wf5_?entry=ttu"
              link={props.mapLink}
            />
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

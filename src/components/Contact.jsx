import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import HoverUnderline from "./HoverUnderline";
import LocationCard from "./LocationCard";
import MapWithMarkers from "./MapWithMarkers";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Sapphire Consultants";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const locationArr = [
    {
      city: "surat",
      address: {
        block: "Bridge House, Second Floor",
        area: "4 Borough High Street",
        city: "Sounthwark",
        pincode: "London, SE1 9QQ",
      },
      link: "https://maps.app.goo.gl/vD1G8e3TXH8ydj1r8",
    },
    {
      city: "pune",
      address: {
        block: "Bridge House, Second Floor",
        area: "4 Borough High Street",
        city: "Sounthwark",
        pincode: "London, SE1 9QQ",
      },
      link: "https://maps.app.goo.gl/XUr3Z4GNjAEvMqBk7",
    },
    {
      city: "rajkot",
      address: {
        block: "Bridge House, Second Floor",
        area: "4 Borough High Street",
        city: "Sounthwark",
        pincode: "London, SE1 9QQ",
      },
      link: "https://maps.app.goo.gl/n52KqJwBGqtTtiTE6",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="contact-container clickable hoverable">
          <div className="contact-content-1">
            <h1 className="title">Designing Beyond Boundaries -Let's Create Your Legacy!</h1>
            <p className="paragraph">
              Your project is unique, and so are our solutions. Let's turn your vision into reality together. Fill out
              the contact form to begin crafting a space that exceeds your expectations.
            </p>
            <HoverUnderline text="+91 9898928282" className="sub-title" link="tel:+919662549548" />
            <br />
            <HoverUnderline
              text="sapphire.contact@gmail.com"
              className="sub-title"
              link="mailto:sapphire.contact@gmail.com"
            />
          </div>
          <div className="contact-content">
            <ContactForm />
          </div>
        </div>
        <div className="location-section">
          <h1 className="title">Our Locations</h1>
          <div className="location-container">
            {locationArr.map((card, index) => (
              <LocationCard key={index} location={card.city} address={card.address} mapLink={card.link} />
            ))}
          </div>
        </div>
      </div>
      <div className="map-container">
        <MapWithMarkers />
      </div>
    </>
  );
}

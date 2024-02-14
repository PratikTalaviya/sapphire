import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import HoverUnderline from "./HoverUnderline";
import LocationCard from "./LocationCard";
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
        <div className="contact-container">
          <div className="contact-content-1">
            <h1 className="title">Designing Beyond Boundaries -Let's Create Your Legacy!</h1>
            <p>
              Your project is unique, and so are our solutions. Let's turn your vision into reality together. Fill out
              the contact form to begin crafting a space that exceeds your expectations.
            </p>
            {/* <h3>Call us:</h3> */}
            {/* <h3>+91 9898928282</h3>
            <h3>sapphire.contact@gmail.com</h3> */}
            <HoverUnderline text="+91 9898928282" className="custom-class" link="tel:+919662549548" />
            <br />
            <HoverUnderline
              text="sapphire.contact@gmail.com"
              className="custom-class"
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
              <LocationCard
                key={locationArr[index].id}
                location={locationArr[index].city}
                address={locationArr[index].address}
                mapLink={locationArr[index].link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          className="direction"
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.46410266354658!2d72.89261627601073!3d21.214963651561902!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3be04f7b80f15fa3%3A0x8090ffdb54f6d9c3!2sA-486%2C%20Tirupati%20Society%2C%20Shiv%20Darshan%20Society%2C%20Yoginagar%20Society%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1704990560622!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

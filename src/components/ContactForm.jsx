import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phonenumberError, setPhonenumberError] = useState("");
  // const [messageError, setMessageError] = useState("");

  const handleFocus = (e) => {
    e.target.parentNode.classList.add("active");
  };

  const handleBlur = (e) => {
    const { value, id } = e.target;
    if (!value) {
      e.target.parentNode.classList.remove("active");
      switch (id) {
        case "firstname":
          setNameError("Name is required");
          break;
        case "email":
          setEmailError("Email is required");
          break;
        case "phonenumber":
          setPhonenumberError("Phone number is required");
          break;
        default:
          break;
      }
    } else {
      switch (id) {
        case "email":
          if (!isValidEmail(value)) {
            setEmailError("Invalid email address");
          } else {
            setEmailError("");
          }
          break;
        case "phonenumber":
          if (!isValidPhoneNumber(value)) {
            setPhonenumberError("Invalid phone number");
          } else {
            setPhonenumberError("");
          }
          break;
        default:
          break;
      }
    }
  };

  const handleChange = (e) => {
    const { value, id } = e.target;
    switch (id) {
      case "firstname":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phonenumber":
        setPhonenumber(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const serviceId = "service_id2zigw";
  const userId = "yMtZiAb1FcF-gkwey";

  const responseEmail = () => {
    const templateId = "template_40dg90k";
    const data = {
      to_name: `${name}`,
      to_email: email,
      subject: `Thanks ${name} for Contacting Sapphire Consultants`,
    };
    emailjs
      .send(serviceId, templateId, data, userId)
      .then((response) => {
        console.log("Response Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending Response email:", error);
        toast.error("Oops! Something went wrong. Please try again later.");
      });
  };

  const sendEmail = () => {
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phonenumber) {
      setPhonenumberError("Phone number is required");
      isValid = false;
    } else {
      setPhonenumberError("");
    }

    if (isValid) {
      const templateId = "template_ry0z76p";
      const data = {
        from_name: `${name}`,
        to_email: "pratiktalaviya07@gmail.com",
        subject: "Contact Us Form Submission",
        message: `${message}\n\nContact Details:\nEmail: ${email}\nPhone Number: ${phonenumber}`,
      };

      emailjs
        .send(serviceId, templateId, data, userId)
        .then((response) => {
          console.log("Email sent successfully:", response);
          toast.success("Thank you for contacting us!");
          responseEmail();
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error("Oops! Something went wrong. Please try again later.");
        });

      // Optionally, reset the form fields or show a success message
      setName("");
      setEmail("");
      setPhonenumber("");
      setMessage("");
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  const isValidEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for validating phone number format
    const phoneNumberRegex = /^\d{10}$/; // Assuming a 10-digit phone number format
    return phoneNumberRegex.test(phoneNumber);
  };

  return (
    <form className="form-container">
      <div className={`form-group ${name ? "active" : ""}`}>
        <label className="form-label">Name</label>
        <input
          className="form-input"
          type="text"
          id="firstname"
          value={name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        {nameError && <div className="error-message">{nameError}</div>}
      </div>

      <div className={`form-group ${email ? "active" : ""}`}>
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>

      <div className={`form-group ${phonenumber ? "active" : ""}`}>
        <label className="form-label">Phone</label>
        <input
          className="form-input"
          type="tel"
          id="phonenumber"
          value={phonenumber}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        {phonenumberError && <div className="error-message">{phonenumberError}</div>}
      </div>

      <div className={`form-group ${message ? "active" : ""}`}>
        <label className="form-label">Message</label>
        <textarea
          className="form-input"
          id="message"
          value={message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          // required
        ></textarea>
      </div>

      <br />
      <button type="button" className="btn" onClick={sendEmail}>
        Send Message
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        bodyClassName="custom-toast-body"
      />
    </form>
  );
}

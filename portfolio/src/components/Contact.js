import React from "react";
import Navbar from "./NavBar";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="top-container">
        <h2>CONTACT</h2>
        <span>CONNECT</span>
      </div>
      <div className="hire-me">
        <form
          className="form-container"
          method="POST"
          action="https://formspree.io/alerodriguezlarosa@gmail.com"
        >
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name" size="50" />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" size="50" />
          </div>
          <div className="form-input">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" cols="53"></textarea>
          </div>
          <div className="form-button">
            <button className="btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="navigation">
        <Navbar />
      </div>
    </div>
  );
};

export default Contact;

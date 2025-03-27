import React from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaDribbble, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Let’s discuss your Project</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>

        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <p className="label">Address:</p>
              <p>New Mexico 31134</p>
            </div>
          </div>
          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <p className="label">My Email:</p>
              <p>mymail@mail.com</p>
            </div>
          </div>
          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <p className="label">Call Me Now:</p>
              <p>00-1234 00000</p>
            </div>
          </div>
        </div>

        <div className="social-iconss">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaDribbble /></a>
          <a href="#"><FaBehance /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      <div className="contact-right">
      <p>There are many variations of passages of  avalilable,<br />But majority have suffered alte</p>
        <form>
           
          {/* <label>Name*</label> */}
          <input type="text" placeholder="Name*" required />

          {/* <label>Email*</label> */}
          <input type="email" placeholder="Email*" required />

          {/* <label>Location</label> */}
          <input type="text" placeholder="Location*" />

          <div className="row">
            <div className="budget">
              {/* <label>Budget*</label> */}
              <input  type="text" placeholder="Budget*" />
            </div>
            <div>
              {/* <label>Subject*</label> */}
              <input type="text" placeholder="Subject*" />
            </div>
          </div>

          {/* <label>Message*</label> */}
          <input placeholder="Message*"></input>

          <button type="submit">
            Submit <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

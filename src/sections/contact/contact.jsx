import React from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaDribbble, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Let's Build Something Awesome Together</h2>
        <p>
        Whether it’s a web platform, smart device, or an autonomous robot — I’d love to hear about your project and see how I can help bring it to life.
        </p>

        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <p className="label">Address:</p>
              <p>Kottakkal,kerala,india</p>
            </div>
          </div>
          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <p className="label">My Email:</p>
              <p>mohamedsafvanvp@gmail.com</p>
            </div>
          </div>
          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <p className="label">Call Me Now:</p>
              <p>+91 8086945415</p>
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

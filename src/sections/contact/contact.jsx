import React, { useState } from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaDribbble, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";




const ContactForm = () => {
  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [location, setLocation] = useState('');
const [budget, setBudget] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name,
    email,
    location,
    budget,
    subject,
    message,
  };

  console.log("🚀 Sending form data to backend:", formData);

  try {
    const response = await fetch('https://eylocoin.site/portfoilo/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
 

    console.log("✅ Fetch response received:", response);

    // const result = await response.json();
    // console.log("📦 Parsed result:", result);

    // if (result.success) {
    //   alert("Message sent successfully!");
    // } else {
    //   alert("Something went wrong.");
    // }
  } catch (err) {
    console.error("❌ Fetch error:", err);
    alert("Error sending message: " + err.message);
  }
};


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
        <form onSubmit={handleSubmit}>
           
          {/* <label>Name*</label> */}
          <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} required />

          {/* <label>Email*</label> */}
          <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />

          {/* <label>Location</label> */}
          <input type="text" placeholder="Location*" value={location} onChange={(e) => setLocation(e.target.value)} />

          <div className="row">
            <div className="budget">
              {/* <label>Budget*</label> */}
              <input type="text" placeholder="Budget*" value={budget} onChange={(e) => setBudget(e.target.value)} />
            </div>
            <div>
              {/* <label>Subject*</label> */}
              <input type="text" placeholder="Subject*" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
          </div>

          {/* <label>Message*</label> */}
          <input placeholder="Message*" value={message} onChange={(e) => setMessage(e.target.value)} />

          <button type="submit">
            Submit <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

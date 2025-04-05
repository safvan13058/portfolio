import React from "react";
import "./banner.css"; // Import the CSS file

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2>Have an Idea for a Web or IoT Project?</h2>
        <p>
        I turn ideas into functional apps and smart, connected experiences — combining web development with real-world IoT solutions.
        </p>
        <a href="#contact" className="btn-primary">
          Let's work Together →
        </a>
      </div>
    </section>
  );
};

export default Banner;

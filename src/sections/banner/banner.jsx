import React from "react";
import "./banner.css"; // Import the CSS file

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2>Do you have a Project Idea?</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration.
        </p>
        <a href="#contact" className="btn-primary">
          Let's work Together →
        </a>
      </div>
    </section>
  );
};

export default Banner;

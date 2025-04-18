import React from "react";
import "./hero.css";
// import profileImg from "../../images/image1.avif"; // Replace with actual image path
import profileImg from "../../images/image1.jpg"; // Replace with actual image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Side: Text */}
        <div className="hero-text">
          <h1>
            Hello, I’m <br /> <span>Mohamed Safvan Vp</span>
          </h1>
          <p>
          I’m a <strong>Full Stack Developer and IoT </strong>  crafting smart web applications and intelligent hardware systems.
          Passionate about building seamless digital experiences and robotics solutions that make a difference
          </p>
          <button className="hero-button">Say Hello!</button>
        </div>
        {/* Stats Section */}
      <div className="hero-stats">
        <div className="stat">
          <h2>15 Y.</h2>
          <p>Experience</p>
        </div>
        <div className="stat">
          <h2>250+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h2>58</h2>
          <p>Happy Clients</p>
        </div>
      </div>
       
      </div>
       {/* Right Side: Image */}
       <div className="hero-image">
          <img src={profileImg} alt="Brooklyn Gilbert" />
        </div>

      
    </section>
  );
};

export default Hero;

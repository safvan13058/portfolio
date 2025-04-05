import React from "react";
import "./service.css";

const WhatIDo = () => {
  return (
    <section className="what-i-do">
      <div className="text-content">
        <h2>What I do?</h2>
        <p>
        I bring ideas to life by blending software engineering with hardware innovation. From crafting dynamic web applications to building intelligent robotic systems, I design with purpose and precision.
        </p>
        <button className="btn">Say Hello!</button>
      </div>

      <div className="cards">
        <div className="what-card">
          <h3>Full Stack Development</h3>
          <p>
          Build scalable web applications with clean UI/UX, robust APIs, and efficient backend systems—from concept to cloud deployment.
          </p>
        </div>

        <div className="what-card">
          <h3>Embedded Systems & IoT</h3>
          <p>
          Design and develop smart devices using microcontrollers, sensors, and wireless communication to solve real-world problems.
          </p>
        </div>

        <div className="what-card">
          <h3>Robotics & Automation</h3>
          <p>
          Create autonomous or semi-autonomous systems by integrating control logic, hardware prototyping, and machine intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

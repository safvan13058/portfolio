import React from "react";
import "./service.css";

const WhatIDo = () => {
  return (
    <section className="what-i-do">
      <div className="text-content">
        <h2>What I do?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci.
        </p>
        <button className="btn">Say Hello!</button>
      </div>

      <div className="cards">
        <div className="what-card">
          <h3>User Experience (UX)</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci.
          </p>
        </div>

        <div className="what-card">
          <h3>User Interface (UI)</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci.
          </p>
        </div>

        <div className="what-card">
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

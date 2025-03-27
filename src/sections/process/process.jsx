import React from "react";
import "./process.css";
import { FaRegCalendarAlt, FaChartBar, FaPencilAlt, FaLaptopCode } from "react-icons/fa";

const WorkProcess = () => {
  const processSteps = [
    { id: 1, title: "Research", icon: <FaRegCalendarAlt /> },
    { id: 2, title: "Analyze", icon: <FaChartBar /> },
    { id: 3, title: "Design", icon: <FaPencilAlt /> },
    { id: 4, title: "Launch", icon: <FaLaptopCode /> }
  ];

  return (
    <div className="work-process">
      <div className="work-text">
        <h2>Work Process</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
        </p>
      </div>
      <div className="work-cards">
        {processSteps.map((step, index) => (
          <div key={step.id} className="work-card">
            <div className="icons">{step.icon}</div>
            <h4>{step.id}. {step.title}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;

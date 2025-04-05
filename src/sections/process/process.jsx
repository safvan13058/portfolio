import React from "react";
import "./process.css";
import { FaRegCalendarAlt, FaChartBar, FaPencilAlt, FaLaptopCode } from "react-icons/fa";

const WorkProcess = () => {
  const processSteps = [
    { id: 1, title: "Discover", icon: <FaRegCalendarAlt />,content:"Understand the problem, define project goals, and gather requirements—whether it's a web platform, IoT device, or both"},
    { id: 2, title: "Plan & Architect", icon: <FaChartBar />,content:"Design the system architecture, tech stack, and data flow for optimal performance and scalability." },
    { id: 3, title: "Build", icon: <FaPencilAlt />,content:"Code the frontend/backend for web apps and develop embedded systems or smart devices using microcontrollers." },
    { id: 4, title: "Deploy & Iterate", icon: <FaLaptopCode />,content: "Launch, monitor, and refine the product using feedback and real-time data from devices or users."}
  ];

  return (
    <div className="work-process">
      <div className="work-text">
        <h2>Work Process</h2>
        <p>
        From idea to deployment, I follow a practical and agile workflow that brings both digital and physical projects to life.
        </p>
      </div>
      <div className="work-cards">
        {processSteps.map((step, index) => (
          <div key={step.id} className="work-card">
            <div className="icons">{step.icon}</div>
            <h4>{step.id}. {step.title}</h4>
            <p>{step.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;

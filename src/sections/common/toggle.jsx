import React from "react";
import "./toggle.css";

const Toggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`toggle-container ${darkMode ? "dark" : "light"}`} onClick={toggleDarkMode}>
      <div className="toggle-button">
        {darkMode ? "🌙" : "☀️"}
      </div>
      <span className="toggle-label">{darkMode ? "LIGHT" : "DARK"}</span>
    </div>
  );
};

export default Toggle;

import React, { useEffect, useState } from "react";  
import Navbar from "./sections/nav/nav";  
import "./App.css";  
import Hero from "./sections/hero/hero";  
import "../src/sections/common/colour.css";  
import About from "./sections/about/about";  
import WorkProcess from "./sections/process/process";  
import Portfolio from "./sections/portfolio/portfolio";  
import Banner from "./sections/banner/banner";  
import WhatIDo from "./sections/service/service";  
import ContactForm from "./sections/contact/contact";  
import Footer from "./sections/footer/footer";  
import phoneimg from './images/rotation.gif';  

const App = () => {  
  const [showAlert, setShowAlert] = useState(false);  
  const [errorMessage, setErrorMessage] = useState("");  

  useEffect(() => {  
    const handleOrientation = () => {  
      if (window.innerHeight > window.innerWidth && !localStorage.getItem("orientationAlertShown")) {  
        setShowAlert(true);  
        localStorage.setItem("orientationAlertShown", "true");  
      }  
    };  

    window.addEventListener("resize", handleOrientation);  
    handleOrientation();  

    return () => window.removeEventListener("resize", handleOrientation);  
  }, []);  

  useEffect(() => {  
    const setThemeColor = (color) => {  
      const metaThemeColor = document.querySelector("meta[name=theme-color]");  
      if (metaThemeColor) {  
        metaThemeColor.setAttribute("content", color);  
      }  
    };  
    setThemeColor("#F4F4F4"); // Set to your background color  
  }, []);  

  // 🔄 Function to rotate the screen (only works on supported devices)
  const handleRotate = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // For Safari
        await document.documentElement.webkitRequestFullscreen();
      }
  
      if (window.screen.orientation && window.screen.orientation.lock) {
        await window.screen.orientation.lock("landscape");
      } else {
        setErrorMessage("Your browser does not support auto-rotation. Please rotate manually.");
      }
    } catch (error) {
      setErrorMessage("Rotation is not supported on this device. Please rotate manually.");
    }
  };
   

  return (  
    <>  
      {showAlert && (  
        <div className="orientation-alert">  
          <p>Please rotate your device to landscape mode for the best experience.</p>  
          <img src={phoneimg} alt="Rotate your device" style={{ width: "100px", height: "auto" }} />  
          <div className="btn-grp">
         
          <button onClick={() => setShowAlert(false)}>OK</button>  
          <button onClick={handleRotate}>🔄 Rotate</button>  </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}  
        </div>  
      )}  

      <Navbar />  
      <div id="home" className="section"><Hero /></div>  
      <div id="about" className="section"><About /></div>  
      <div id="process" className="section"><WorkProcess /></div>  
      <div id="portfolio" className="section"><Portfolio /></div>  
      <div id="banner" className="sectionbanner"><Banner /></div>  
      <div id="services" className="section"><WhatIDo /></div>  
      <div id="contact" className="section"><ContactForm /></div>  
      <div id="footer" className="footer"><Footer /></div>  
    </>  
  );  
};  

export default App;

import React, { useEffect } from "react";
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

const App = () => {
  useEffect(() => {
    const handleOrientation = () => {
      if (window.innerHeight > window.innerWidth) {
        alert("Please rotate your device to landscape mode for the best experience.");
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
  return (
    <>
      <Navbar />
      <div id="home" className="section"> <Hero/></div>
      <div id="about" className="section"><About/></div>
      <div id="process" className="section"> <WorkProcess/> </div>
      <div id="portfolio" className="section"> <Portfolio/> </div>
      <div id="banner" className="sectionbanner"> <Banner/> </div>
      <div id="services" className="section"> <WhatIDo/> </div>
      <div id="contact" className="section"> <ContactForm/> </div>
      <div id="footer" className="footer"> <Footer/> </div>
    </>
  );
};

export default App;

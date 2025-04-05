import React from "react";
import "./about.css";
// import img from "../../images/image1.avif"
import img from "../../images/image2.jpg"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-card">
                    {/* Profile Image */}
                    <div className="profile">
                        <img src={img} alt="Profile" />
                        {/* Social Icons */}
                        <div className="social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaBehance /></a>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="about-text">
                        <h2>Full Stack Developer with a Passion for IoT</h2>
                        <p>
                        I build smart, scalable solutions—from full-featured web apps to embedded systems. My mission is to create seamless digital experiences and intelligent devices that solve real-world problems.
                        </p>
                        <p>
                        With a strong background in both software and hardware, I bridge the gap between web technologies and robotics to bring innovative ideas to life
                        </p>

                        {/* Buttons */}
                        <div className="buttons">
                            <a href="#portfolio" className="btn primary">My Project</a>
                            <a href="#" className="btn secondary">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

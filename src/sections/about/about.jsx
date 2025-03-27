import React from "react";
import "./about.css";
import img from "../../images/image1.avif"
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
                        <h2>I am a Professional User Experience Designer</h2>
                        <p>
                            I design and develop services for customers specializing
                            in creating stylish, modern websites, web services, and
                            online stores. My passion is to design digital user
                            experiences.
                        </p>
                        <p>
                            I design and develop services for customers specializing
                            in creating stylish, modern websites, and web services.
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

import React from "react";
import "./HeroSection.css";
import profilePicCartoon from "../assets/cartoon-man-2.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        
        <div className="hero-left">
          <h3 className="gamer-text">
            <span className="hero-left-title"></span>HELLO
          </h3>
          <h2 className="gamer-text">
            i'm <span className="highlight">Rajat Agrawal</span>
          </h2>
          <p className="description">
            I am a passionate software developer currently pursuing Computer
            Science and Engineering. I enjoy building web apps and solving
            real-world problems using technology.
          </p>
          <button className="view-more-btn">
            View More <span className="arrow">→</span>
          </button>
        </div>

        <div className="hero-right">
          <img
            src={profilePicCartoon}
            alt="Rajat Agrawal"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

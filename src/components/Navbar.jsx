import React, { useState } from "react";
import profilePic from "../assets/profile.jpg";
import "./Navbar.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
  FaHome,
  FaStar,
  FaBriefcase,
  FaFileAlt,
  FaUserFriends,
  FaTags,
  FaBlog,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Add state to track active link

  const links = [
    { name: "Home", icon: <FaHome /> },
    { name: "Features", icon: <FaStar /> },
    { name: "Portfolio", icon: <FaBriefcase /> },
    { name: "Resume", icon: <FaFileAlt /> },
    { name: "Company", icon: <FaUserFriends /> },
    { name: "Pricing", icon: <FaTags /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name.toLowerCase()); // Update active link when clicked
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Profile Section */}
        <div className="profile">
          <img src={profilePic} alt="Profile" />
          <h2>Mark Zuckerberg</h2>
        </div>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          <nav className="nav-links">
            {links.map((link, index) => (
              <a
                href={`#${link.name.toLowerCase()}`}
                key={index}
                className={`nav-item ${
                  activeLink === link.name.toLowerCase() ? "active" : ""
                }`} // Apply active class conditionally
                onClick={() => handleLinkClick(link.name)} // Handle link click
              >
                <span className="icon">{link.icon}</span>
                <span className="text">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Divider and Social Section */}
          <hr className="divider" />
          <p className="find-text">Find with me</p>

          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

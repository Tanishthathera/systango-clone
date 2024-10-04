// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1025);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1025);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/images/T2_logo.png" alt="Logo" />
        </Link>
      </div>
      {/* Sidebar Toggle Icon */}
      {isMobileView && (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          &#9776;
        </button>
      )}
      {/* Navigation Links */}
      <nav className={`nav-links ${isMobileView ? "hide-links" : ""}`}>
        <ul>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/industries">Industries</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <button
        className={`nav-links ${
          isMobileView ? "hide-links" : "contact-button"
        }`}
      >
        <Link to="/contact">Contact Us</Link>
      </button>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;

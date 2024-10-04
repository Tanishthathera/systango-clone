// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>

      <div className="logo">
        <Link to="/" onClick={toggleSidebar}>
          <img src="/images/T2_logo.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/services" onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/industries" onClick={toggleSidebar}>
              Industries
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={toggleSidebar}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleSidebar}>
              Blog
            </Link>
          </li>
          <button className="contact-button">
            <Link to="/contact">Contact Us</Link>{" "}
          </button>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

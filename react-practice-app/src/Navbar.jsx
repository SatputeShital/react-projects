import React, { useState } from "react";
import "./Navbar.css"; // Add your custom styling here

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li 
          className="nav-item dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="nav-link dropdown-toggle">Services</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#web-dev" className="dropdown-item">Web Development</a></li>
              <li><a href="#design" className="dropdown-item">Design</a></li>
              <li><a href="#seo" className="dropdown-item">SEO</a></li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

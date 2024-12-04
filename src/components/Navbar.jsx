import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div>Ritika Chajjed</div>
      <div className="nav-links ck">
        <Link to="/">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/newsletter">Newsletter</Link>
      </div>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

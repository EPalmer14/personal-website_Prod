// src/components/Navbar.js
import { NavLink } from "react-router-dom";
import logo from "/src/assets/Logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
      <NavLink className="navbar-brand" id="brand" to="/">
        <img src={logo} alt="logo" height="100" width="auto" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/about">
              About Me
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

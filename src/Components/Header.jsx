import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="hero-section">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-box"><img src="https://weeho12-u21m.vercel.app/assets/weeho-logo-DKyBzIFi.png" alt="Weeho Logo" /></span>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Book An Event</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        <div className="nav-buttons">
          <button className="btn login-btn">Join as a Performer</button>
          <button className="btn signup-btn">Book an event</button>
        </div>
      </header>

      {/* Centered Heading */}
      <h1 className="main-heading">Your Dream Event Organize Online.</h1>
    </div>
  );
}

export default Header;

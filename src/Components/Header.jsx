import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero-section">
      <header className="navbar">
        <div className="logo">
          <span className="logo-box">
            <img
              src="https://weeho12-u21m.vercel.app/assets/weeho-logo-DKyBzIFi.png"
              alt="Weeho Logo"
            />
          </span>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Book An Event</a>
          <a href="#">Our Team</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="btn login-btn" onClick={() => window.open("https://forms.gle/81fXY1koiUhsJnng7", "_blank")}>Join As A Performer</button>
          <button className="btn signup-btn" onClick={() => window.open("https://forms.gle/JqDMVxuxpYvHq34V8", "_blank")}>Book An Event</button>
        </div>
      </header>

      {/* Hero Content */}
      <h1 className="main-heading">
        Book Music & Comedy Events
        <br />
        <span>anywhere in New York.</span>
      </h1>
      <button className="explore-btn">Search Events Near Me</button>
    </div>
  );
}

export default Header;

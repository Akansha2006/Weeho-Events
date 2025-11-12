import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="hero-section">
      <Navbar />

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

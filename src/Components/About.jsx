import React from "react";
import "./About.css";

function About() {
  return (
    <div className="quote-section">
      <div className="image-box">
        <img
          src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
          alt="Event img"
        />
      </div>

      <div className="quote-content">
        <h2 className="about-heading">About Us</h2>
        <p className="quote-text">
          “WeeHo – Euphoric Moments is an inclusive and dynamic online platform that celebrates and promotes artistic talent across diverse forms. It provides a digital stage for emerging and passionate artists to perform, connect, and grow.

Believing that every art form deserves recognition, WeeHo creates opportunities for creators to shine beyond boundaries. It supports collaboration, creative expression, and appreciation for authentic talent — empowering artists to gain digital visibility and confidence.

”
        </p>

        <p className="author">– Nita M Ambani</p>
        <p className="designation">Founder & Chairperson</p>

        <button className="watch-btn">View More</button>
      </div>
    </div>
  );
}

export default About;

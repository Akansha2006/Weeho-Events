import React from "react";
import "./PopularEvent.css";
import about from "../assets/about img.jpg";

export default function PopularEvent() {
  return (
    <div className="pe-page">
      

      {/* Event Section */}
      <main className="pe-container">
        <section className="pe-row">
          <div className="pe-image-wrap">
            <img className="pe-image" src={about} alt="Loachella, NYC" />
          </div>

          <div className="pe-details">
            {/* <div className="pe-badge">Paid</div> */}
            <h2 className="pe-event-title">About Weeho</h2>
            <p className="pe-desc">
              WeeHo – Euphoric Moments is an inclusive and dynamic online platform that celebrates and promotes artistic talent across diverse forms. It provides a digital stage for emerging and passionate artists to perform, connect, and grow.

Believing that every art form deserves recognition, WeeHo creates opportunities for creators to shine beyond boundaries. It supports collaboration, creative expression, and appreciation for authentic talent — empowering artists to gain digital visibility and confidence.

More than a platform, WeeHo is a movement that nurtures creativity, community, and confidence — giving every artist their own euphoric moment.
            </p>
            {/* <a className="pe-link" href="#">
              See Event Details
            </a> */}
          </div>
        </section>
      </main>
    </div>
  );
}

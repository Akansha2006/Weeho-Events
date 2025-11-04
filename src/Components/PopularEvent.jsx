import React from "react";
import "./PopularEvent.css";

export default function PopularEvent() {
  const image =
    "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80";

  return (
    <div className="pe-page">
      

      {/* Event Section */}
      <main className="pe-container">
        <section className="pe-row">
          <div className="pe-image-wrap">
            <img className="pe-image" src={image} alt="Loachella, NYC" />
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

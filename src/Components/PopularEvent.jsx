import React from "react";
import "./PopularEvent.css";
import about from "../assets/about img.jpg";


import { useNavigate } from "react-router-dom";

export default function PopularEvent() {
  const navigate = useNavigate();

  return (
    <div className="pe-page">
      <main className="pe-container">
        <section className="pe-row">
          <div className="pe-image-wrap">
            <img className="pe-image" src={about} alt="Loachella, NYC" />
          </div>

          <div className="pe-details">
            <h2 className="pe-event-title">About Weeho</h2>
            <p className="pe-desc">
              WeeHo – Euphoric Moments is an inclusive and dynamic online
              platform that celebrates and promotes artistic talent across
              diverse forms. It provides a digital stage for emerging and
              passionate artists to perform, connect, and grow.
              <br /><br />
              Believing that every art form deserves recognition, WeeHo creates
              opportunities for creators to shine beyond boundaries. It supports
              collaboration, creative expression, and appreciation for authentic
              talent — empowering artists to gain digital visibility and
              confidence.
              <br /><br />
              More than a platform, WeeHo is a movement that nurtures creativity,
              community, and confidence — giving every artist their own euphoric
              moment.
            </p>
            <button
  className="pe-link"
  onClick={() => {
    navigate("/weeho-details");
    window.scrollTo(0, 0); // scrolls to top after navigation
  }}
>
  See More
</button>

          </div>
        </section>
      </main>
    </div>
  );
}

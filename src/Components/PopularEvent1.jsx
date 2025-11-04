import React from "react";
import "./PopularEvent1.css";

export default function PopularEvent1() {
  const image =
    "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

  return (
    <div className="per-page">
      
      

      {/* Event Section */}
      <main className="per-container">
        <section className="per-row image-right">
          <div className="per-details">
            {/* <div className="per-badge">Free</div> */}
            <h2 className="per-event-title">Our Vision</h2>
            <p className="per-desc">
             To create an accessible and supportive platform where creativity thrives, talent is celebrated, and artistic expression is encouraged without boundaries.
            </p>
            {/* <a className="per-link" href="#">
              See Event Details
            </a> */}
          </div>

          <div className="per-image-wrap">
            <img className="per-image" src={image} alt="Electric Dreams" />
          </div>
        </section>
      </main>
    </div>
  );
}

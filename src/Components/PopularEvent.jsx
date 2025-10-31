import React from "react";
import "./PopularEvent.css";


export default function PopularEvent() {
  const image =
    "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80";

  return (
    <div className="pe-page">
      <header className="pe-hero">
        <h1 className="pe-title">Popular Events</h1>
        <p className="pe-subtitle">
          Here are some of the most popular events in New <br /> York City curated by professionals.
        </p>
      </header>

      <main className="pe-container">
        <section className="pe-row">
          <div className="pe-image-wrap">
            <img className="pe-image" src={image} alt="Loachella, NYC" />
          </div>

          <div className="pe-details">
            <div className="pe-badge">Paid</div>
            <h2 className="pe-event-title">Loachella, NYC</h2>
            <p className="pe-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a className="pe-link" href="#">
              See Event Details
            </a>
          </div>
        </section>
      </main>
    </div>






  );
}
import React from "react";
import "./PopularEvent1.css";

export default function PopularEvent1() {
  const image =
    "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

  return (
    <div className="event-page">
      <main className="event-container">
        <section className="event-row image-right">
          <div className="event-details">
            <div className="event-badge">Paid</div>
            <h2 className="event-name">Loachella, NYC</h2>
            <p className="event-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <a className="event-link" href="#">
              See Event Details
            </a>
          </div>

          <div className="event-image-wrap">
            <img className="event-image" src={image} alt="Loachella, NYC" />
          </div>
        </section>
      </main>
    </div>
  );
}

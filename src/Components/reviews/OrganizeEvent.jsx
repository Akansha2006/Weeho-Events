import React from "react";
import "./OrganizeEvent.css";



export default function OrganizeEvent() {
  return (
    <section className="oe-section">
      <div className="oe-card">
        <h2 className="oe-heading">Organize an Event</h2>

        <form className="oe-form" onSubmit={(e) => e.preventDefault()}>
          <div className="oe-column-left">
            <label className="oe-label">
              Your Name
              <input className="oe-input" type="text" placeholder="E.g. John Doe" />
            </label>

            <label className="oe-label">
              Your Email Address
              <input className="oe-input" type="email" placeholder="E.g. john@mail.com" />
            </label>

            <button className="oe-submit" type="submit">SUBMIT</button>
          </div>

          <div className="oe-column-right">
            <label className="oe-label oe-label-message">
              Your Message
              <textarea className="oe-textarea" rows="6" placeholder="E.g. Details about your event" />
            </label>
          </div>
        </form>

        <div className="oe-dots" aria-hidden>
          {/* decorative dotted square bottom-right */}
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
import React from "react";
import "./PopularEvent2.css";
import mission from "../assets/mission img.jpg";

export default function PopularEvent2() {
  
  return (
    <div className="event-page">
      

      {/* Event Section */}
      <main className="event-container">
        <section className="event-row">
          <div className="event-image-wrap">
            <img className="event-image" src={mission} alt="Loachella, NYC" />
          </div>

          <div className="event-details">
            {/* <div className="event-badge">Paid</div> */}
            <h2 className="event-event-title">Our Mission</h2>
            <p className="event-desc">
              To provide an open, flexible and inclusive space for budding and passionate artists to perform. 
	To support digital recognition and growth for young talents. 
	To promote collaboration and cross-learning among artists and institutions. 
To foster a culture of appreciation for diverse and authentic art forms. 

            </p>
            {/* <a className="event-link" href="#">
              See Event Details
            </a> */}
          </div>
        </section>
      </main>
    </div>
  );
}

import React from "react";
import "./PopularEvent2.css";

export default function PopularEvent2() {
  const image =
    "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80";

  return (
    <div className="event-page">
      

      {/* Event Section */}
      <main className="event-container">
        <section className="event-row">
          <div className="event-image-wrap">
            <img className="event-image" src={image} alt="Loachella, NYC" />
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

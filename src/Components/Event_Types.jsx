import React, { useState } from "react";
import "./Event_Types.css";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";

function Events() {
  const events = [
    {
      img: event1,
      title: "Musc Event",
    },
    {
      img: event2,
      title: "Singing Event",
    },
    {
      img: "https://media.istockphoto.com/id/936750120/photo/corporate-business-meeting.jpg?s=170667a&w=0&k=20&c=SXr_ObJ-DjHhNu2mWLjB-SXVst1pclk92pPlrsF8asg=",
      title: "Corporate Meetup",
    },
    {
      img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
      title: "Fashion Show",
    },
    {
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=800&q=80",
      title: "Art Exhibition",
    },
    {
      img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      title: "Food Festival",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < events.length - 4) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="events-section">
      <h2 className="section-title">Event Types</h2>

      <div className="slider-wrapper">
        <button className="nav-btn prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="events-slider">
          {events.slice(index, index + 4).map((event, i) => (
            <div className="event-card" key={i}>
              <img src={event.img} alt={event.title} />
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default Events;

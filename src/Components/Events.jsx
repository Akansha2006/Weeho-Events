import React, { useState } from "react";
import "./Events.css";

function Events() {
  const events = [
    {
      img: "https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?cs=srgb&dl=people-lights-festival-1120162.jpg&fm=jpg",
      title: "Music Concert",
    },
    {
      img: "https://img.freepik.com/premium-photo/dynamic-dance-performance-stage-vibrant-colors_934877-3559.jpg?w=996",
      title: "Dancing Event",
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
      <h2 className="section-title">Our Popular Events</h2>

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

import React, { useState } from "react";
import "./Event_Types.css";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";

function Events() {
  const events = [
    {
      img: "https://png.pngtree.com/background/20230611/original/pngtree-girl-singing-a-song-to-the-crowd-in-a-club-picture-image_3150321.jpg",
      title: "Singing",
    },
    {
      img: "https://img.freepik.com/premium-photo/dance-icons_1003030-9969.jpg?w=2000",
      title: "Dancing",
    },
    {
      img: "https://st3.depositphotos.com/2021995/13272/i/950/depositphotos_132722090-stock-photo-poetry-colorful-watercolor-and-ink.jpg",
      title: "Poetry",
    },
    {
      img: "https://media.istockphoto.com/id/1326936948/photo/storytelling-concept-film-slate-old-book-and-eyeglasses-in-library-room.jpg?s=612x612&w=0&k=20&c=Q0B5cgQiibU3tcqIKT_Ua-sWoB1gHLAnffJ_uzi9Yi8=",
      title: "Storytelling",
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

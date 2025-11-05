import React, { useState } from "react";
import "./Performers.css";

function Performers() {
  const performers = [
    {
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      name: "Ariana Blake",
      role: "Singer & Songwriter",
    },
    {
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      name: "Liam Carter",
      role: "Professional Dancer",
    },
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      name: "Sofia Lee",
      role: "Violin Artist",
    },
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=fashion-person-woman-415829.jpg&fm=jpg",
      name: "Ethan White",
      role: "Magician",
    },
    {
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      name: "Olivia Brown",
      role: "Stand-up Comedian",
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
      name: "Noah James",
      role: "DJ Performer",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < performers.length - 4) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="performers-section">
      <h2 className="performers-title">Our Star Performers</h2>

      <div className="performer-slider-wrapper">
        <button className="nav-btn prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="performers-slider">
          {performers.slice(index, index + 4).map((performer, i) => (
            <div className="performer-card" key={i}>
              <div className="performer-img">
                <img src={performer.img} alt={performer.name} />
              </div>
              <div className="performer-info">
                <h3>{performer.name}</h3>
                <p>{performer.role}</p>
              </div>
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

export default Performers;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Performers.css";
import performer1 from "../assets/performer1.jpg";
import performer2 from "../assets/performer2.jpg";

function Performers() {
  const performers = [
  {
    img: performer1,
    name: "Tanisha Bansal", // ❌ pehle space hata do
    role: "Storyteller",
  },
    {
      img: performer2,
      name: "Anurag Suter",
      role: "singer",
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
  const navigate = useNavigate();

  const nextSlide = () => {
    if (index < performers.length - 4) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const openPerformer = (name) => {
    const formattedName = name.replace(/\s+/g, "-");
    navigate(`/performer/${formattedName}`);
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
            <div
              className="performer-card"
              key={i}
              onClick={() => openPerformer(performer.name)}
            >
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

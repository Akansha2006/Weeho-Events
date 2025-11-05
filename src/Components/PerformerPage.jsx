import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PerformerPage.css";

const performerData = [
  {
    name: "Ariana Blake",
    role: "Singer & Songwriter",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    desc: "Ariana Blake is a soulful singer and songwriter who lights up every stage she performs on.",
  },
  {
    name: "Liam Carter",
    role: "Professional Dancer",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    desc: "Liam Carter’s electrifying dance moves create unforgettable moments in every event.",
  },
  {
    name: "Sofia Lee",
    role: "Violin Artist",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    desc: "Sofia Lee is known for her emotional violin performances and graceful stage presence.",
  },
  {
    name: "Ethan White",
    role: "Magician",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=fashion-person-woman-415829.jpg&fm=jpg",
    desc: "Ethan White brings wonder and laughter to every show with his unique magic style.",
  },
  {
    name: "Olivia Brown",
    role: "Stand-up Comedian",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    desc: "Olivia Brown’s sharp humor and charm make her performances truly memorable.",
  },
  {
    name: "Noah James",
    role: "DJ Performer",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    desc: "Noah James keeps the crowd alive with beats that make every night unforgettable.",
  },
];

export default function PerformerPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const performer = performerData.find(
    (p) => p.name.replace(/\s+/g, "-") === name
  );

  if (!performer)
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Performer not found</h2>;

  return (
    <div className="performer-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="performer-content">
        <img src={performer.img} alt={performer.name} />
        <div className="performer-text">
          <h2>{performer.name}</h2>
          <h4>{performer.role}</h4>
          <p>{performer.desc}</p>
        </div>
      </div>
    </div>
  );
}

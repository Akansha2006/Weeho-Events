import React, { useState } from "react";
import "./PopularCustomers.css";
import performer1 from "../../assets/performer1.jpg";
import performer2 from "../../assets/performer2.jpg";



const TESTIMONIALS = [
  {
    name: "Tanisha Bansal",
    role: " Storyteller",
    quote:
      "It was a delightful experience sharing my story at the platform of WeeHo. The audience’s warmth and WeeHo’s amazing platform made storytelling feel truly magical. Grateful to be part of such an inspiring space that celebrates voices and visions alike!",
    image: performer1,
  },
  {
    name: "Anurag Suter",
    role: "Singer",
    quote:
      "As a musician, I always believed that you truly connect with music only when it’s felt live. But performing for WeeHo on Zoom changed that for me — it showed how music can transcend boundaries. The energy and warmth from everyone made the session so lively and fun.",
    image: performer2,
  },
  {
    name: "Marcus Lee",
    role: "Product Manager, StagePro",
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    image:
      "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
  },
];

export default function PopularCustomers() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const item = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="pc-section">
      <h1 className="pc-title">Our Awesome Performers</h1>

      <div className="pc-slider">
        <button
          className="pc-nav pc-nav-left"
          aria-label="Previous testimonial"
          onClick={prev}
        >
          <span className="pc-arrow">←</span>
        </button>

        <div className="pc-card">
          <div className="pc-card-left">
            <div className="pc-photo-wrap">
              <img className="pc-photo" src={item.image} alt={item.name} />
            </div>
          </div>

          <div className="pc-card-right">
            <div className="pc-quote-mark pc-quote-left">“</div>

            <div className="pc-quote">
              {item.quote}
            </div>

            <div className="pc-quote-mark pc-quote-right">”</div>

            <div className="pc-author">
              <div className="pc-name">{item.name}</div>
              <div className="pc-role">{item.role}</div>
            </div>
          </div>
        </div>

        <button
          className="pc-nav pc-nav-right"
          aria-label="Next testimonial"
          onClick={next}
        >
          <span className="pc-arrow">→</span>
        </button>
      </div>

      <div className="pc-dots" aria-hidden>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`pc-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
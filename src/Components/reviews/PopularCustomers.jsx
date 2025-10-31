import React, { useState } from "react";
import "./PopularCustomers.css";

/**
 * PopularCustomers.jsx
 *
 * Single component + CSS for a testimonial slider that matches the provided image.
 * - Place this file at src/PopularCustomers.jsx
 * - Place the CSS in src/PopularCustomers.css (provided below)
 *
 * Usage:
 *   import PopularCustomers from "./PopularCustomers";
 *   <PopularCustomers />
 *
 * This component is self-contained and uses simple CSS only (no external slider libs).
 */

const TESTIMONIALS = [
  {
    name: "Adam Cuppy",
    role: "Founder, EventsNYC",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya Shah",
    role: "Marketing Lead, CityShows",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image:
      "https://images.unsplash.com/photo-1545996124-1d3b9b833d46?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marcus Lee",
    role: "Product Manager, StagePro",
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80",
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
      <h1 className="pc-title">Our Awesome Customers</h1>

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
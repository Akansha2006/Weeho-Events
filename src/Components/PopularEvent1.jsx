import React from "react";
import "./PopularEvent1.css";
import vission from "../assets/vission img.jpg";

export default function PopularEvent1() {
  

  return (
    <div className="per-page">
      
      

      {/* Event Section */}
      <main className="per-container">
        <section className="per-row image-right">
          <div className="per-details">
            {/* <div className="per-badge">Free</div> */}
            <h2 className="per-event-title">Our Vision</h2>
            <p className="per-desc">
             To create an inclusive and supportive platform where creativity truly thrives, talent from every corner is recognized and celebrated, and artistic expression is freely encouraged without any limits — empowering individuals to share their passion, connect with others, and inspire the world through their art.
            </p>
            {/* <a className="per-link" href="#">
              See Event Details
            </a> */}
          </div>

          <div className="per-image-wrap">
            <img className="per-image" src={vission} alt="Electric Dreams" />
          </div>
        </section>
      </main>
    </div>
  );
}

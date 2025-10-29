import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="stats-main-card">
      <div className="stats-inner">
        <div className="stat-card">
          <h2 className="stat-number">2282+</h2>
          <p className="stat-label">Clients</p>
        </div>

        <div className="stat-card">
          <h2 className="stat-number">3891+</h2>
          <p className="stat-label">Projects</p>
        </div>

        <div className="stat-card">
          <h2 className="stat-number">1000+</h2>
          <p className="stat-label">Awards</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

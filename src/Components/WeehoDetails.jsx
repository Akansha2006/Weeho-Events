import React from "react";
import { useNavigate } from "react-router-dom";
import PopularEvent1 from "./PopularEvent1";
import PopularEvent2 from "./PopularEvent2";
import ObjectivesSection from "./ObjectivesSection";
import Footer from "./Footer";
import "./WeehoDetails.css";
import Header from "./Header"

export default function WeehoDetails() {
  const navigate = useNavigate();

  return (
    <div className="weeho-page">
      <Header/>
      

      <ObjectivesSection />
      <PopularEvent1 />
      <PopularEvent2 />
      <Footer />
    </div>
  );
}

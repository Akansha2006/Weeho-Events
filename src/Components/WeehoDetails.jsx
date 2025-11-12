import React from "react";
import PopularEvent1 from "./PopularEvent1";
import PopularEvent2 from "./PopularEvent2";
import ObjectivesSection from "./ObjectivesSection";



import Footer from "./Footer";
import "./WeehoDetails.css";

export default function WeehoDetails() {
  return (
    <div className="weeho-page">
      <ObjectivesSection />
      <PopularEvent1 />
      <PopularEvent2 />
       
      
      <Footer />
    </div>
  );
}

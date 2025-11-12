import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Add this
import Header from "./Components/Header";
import OurTeam from "./pages/OurTeam";

import "./App.css";

import Stats from "./Components/Stats";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import PopularEvent from "./Components/PopularEvent";
// import PopularEvent1 from "./Components/PopularEvent1";
// import PopularEvent2 from "./Components/PopularEvent2";
import WeehoDetails from "./Components/WeehoDetails";
import PopularCustomers from "./Components/reviews/PopularCustomers";
import OrganizeEvent from "./Components/reviews/OrganizeEvent";
import PopularBlogPosts from "./Components/reviews/PopularBlogPosts";
import Performers from "./Components/Performers";
import PerformerPage from "./Components/PerformerPage"; // ✅ Add this
import BlogDetails from "./Components/reviews/BlogDetails";


function App() {
  return (
    <Router>
      
      <Routes>
        {/* ✅ Main homepage route */}
        <Route
          path="/"
          element={
            <>
            <Header />
             
              <PopularEvent />
              {/* <PopularEvent1 /> */}
              {/* <PopularEvent2 /> */}
              <Events />
              <Performers />
              <PopularBlogPosts />
              <PopularCustomers />
              {/* <OrganizeEvent /> */}
              {/* <Stats /> */}
              {/* <Events /> */}
              <Footer />
            </>
          }
        />

        {/* ✅ Performer profile route */}
        <Route path="/performer/:name" element={<PerformerPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/weeho-details" element={<WeehoDetails />} />
        <Route path="/our-team" element={<OurTeam />} />


      </Routes>
    </Router>
  );
}

export default App;

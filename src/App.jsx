import React from "react";
import Header from "./Components/Header";

import "./App.css";
import About from "./Components/About";
import Stats from "./Components/Stats";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import PopularEvent from "./Components/PopularEvent";
import PopularEvent1 from "./Components/PopularEvent1";
import PopularEvent2 from "./Components/PopularEvent2";
import PopularCustomers from "./Components/reviews/PopularCustomers";
import OrganizeEvent from "./Components/reviews/OrganizeEvent";
import PopularBlogPosts from "./Components/reviews/PopularBlogPosts";
function App() {
  return (
    <div className="app">
      <Header />
      {/* <About /> */}
      <PopularEvent />
      <PopularEvent1 />
      <PopularEvent2 />
      <PopularBlogPosts />
      <PopularCustomers />
      <OrganizeEvent />
      {/* <Stats /> */}
      {/* <Events /> */}
      <Footer />
      
    
      
    </div>
    );
}

export default App;

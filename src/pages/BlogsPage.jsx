import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PopularBlogPosts from "../Components/reviews/PopularBlogPosts";
import "./BlogsPage.css";

export default function BlogsPage() {
  return (
    <div className="blogs-page">
      <Navbar />
      <PopularBlogPosts />
      <Footer />
    </div>
  );
}

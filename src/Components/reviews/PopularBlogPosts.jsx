import React from "react";
import "./PopularBlogPosts.css";
import { useNavigate } from "react-router-dom";

export default function PopularBlogPosts() {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      category: "Event Tips",
      title: "Finding Amazing Events Near You - Fast, Cheap & Free",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
         content: `
  Music isn’t just sound — it’s emotion. On November 19, 2024, Weeho hosted an unforgettable musical evening featuring the rising talent, Anushka Sharma — a B.Tech student and passionate singer from Delhi.

  Her soulful performances of “Kaun Tujhe,” “Hasi,” and “Raabta” mesmerized the audience. She even surprised everyone with an original composition, showcasing her creativity and passion. From classical roots to modern melodies, Anushka proved music truly unites all hearts.

  The night wasn’t just a performance; it was a celebration of talent, dreams, and the magic of music. Weeho continues to be the stage where creativity lives and shines.`
    },
    {
      id: 2,
      category: "Reviews",
      title: "The Top Rated Musical Concerts Worldwide in 2019",
      image:
        "https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      category: "Discover",
      title: "This female band is making buzz all over the world",
      image:
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="blog-section">
      <h2 className="blog-title">Popular Blog Posts</h2>
      <p className="blog-subtitle">
        Some amazing blog posts written by even more amazing people.
      </p>

      <div className="blog-cards">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <p className="blog-category">{blog.category}</p>
            <h3 className="blog-heading">{blog.title}</h3>
            <button
              className="blog-link"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              Read Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
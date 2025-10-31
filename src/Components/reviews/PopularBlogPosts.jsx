import React from "react";
import "./PopularBlogPosts.css";

export default function PopularBlogPosts() {
  const blogs = [
    {
      id: 1,
      category: "Event Tips",
      title: "Finding Amazing Events Near You - Fast, Cheap & Free",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
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
        Some amazing blog posts that are written by even more amazing people.
      </p>

      <div className="blog-cards">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <p className="blog-category">{blog.category}</p>
            <h3 className="blog-heading">{blog.title}</h3>
            <a href="#" className="blog-link">
              Read Post
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

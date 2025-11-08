import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PopularBlogPosts.css";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      category: "Event Tips",
      title: "A Night to Remember: Weeho's Magical Music Event",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      content: `
      Music isn’t just sound — it’s emotion. On November 19, 2024, Weeho hosted an unforgettable musical evening featuring the rising talent, Anushka Sharma — a B.Tech student and passionate singer from Delhi.

      Her soulful performances of “Kaun Tujhe,” “Hasi,” and “Raabta” mesmerized the audience. She even surprised everyone with an original composition, showcasing her creativity and passion. From classical roots to modern melodies, Anushka proved music truly unites all hearts.

      The night wasn’t just a performance; it was a celebration of talent, dreams, and the magic of music. Weeho continues to be the stage where creativity lives and shines.
      `,
    },
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Blog not found!</h2>;
  }

  return (
    <div className="blog-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <img src={blog.image} alt={blog.title} className="blog-detail-img" />
      <h2 className="blog-detail-title">{blog.title}</h2>
      <p className="blog-detail-content">{blog.content}</p>
    </div>
  );
}

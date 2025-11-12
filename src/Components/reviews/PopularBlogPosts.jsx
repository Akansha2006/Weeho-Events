import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularBlogPosts.css";

export default function PopularBlogPosts() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      category: "Event Tips",
      title: "A Night to Remember: Weeho's Magical Music Event",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
      content: `
Music isn’t just sound — it’s emotion. On November 19, 2024, Weeho hosted an unforgettable musical evening featuring the rising talent, Anushka Sharma — a B.Tech student and passionate singer from Delhi.

Her soulful performances of “Kaun Tujhe,” “Hasi,” and “Raabta” mesmerized the audience. She even surprised everyone with an original composition, showcasing her creativity and passion. From classical roots to modern melodies, Anushka proved music truly unites all hearts.

The night wasn’t just a performance; it was a celebration of talent, dreams, and the magic of music. Weeho continues to be the stage where creativity lives and shines.
`,
    },
    {
      id: 2,
      category: "Reviews",
      title: "Harmony & Melody: “Weeho” Online Poetry Event",
      image:
        "https://images.unsplash.com/photo-1543365067-fa127bcb2303?auto=format&fit=crop&w=500&q=80",
      content: `
On September 28, 2024, Weeho hosted a soulful online poetry event featuring Ms. Tanisha Srivastava — a 4th-year BA LLB (Hons) student specializing in Energy Law and an advocate for social causes.

With her soothing voice and heartfelt verses, she captivated everyone with the power of words. The event beautifully blended poetry and conversation, exploring emotions like love, spirituality, and self-expression.

It was not just an event — it was a celebration of expression, awareness, and poetic harmony, truly reflecting Weeho’s spirit of creativity and connection.
`,
    },
    {
      id: 3,
      category: "Discover",
      title: "This female band is making buzz all over the world",
      image:
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=500&q=80",
      content: `
A group of talented women is taking the global music scene by storm! Their unique sound, blending rock and Indian classical music, has won millions of fans around the world.
`,
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
          <div
            key={blog.id}
            className="blog-card"
            onClick={() => navigate(`/blog/${blog.id}`, { state: blog })} // ✅ open new page
          >
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <p className="blog-category">{blog.category}</p>
            <h3 className="blog-heading">{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

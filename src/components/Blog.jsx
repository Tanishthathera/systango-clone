// src/components/Blog.jsx
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Blog Post One",
    excerpt: "This is a short excerpt from blog post one.",
  },
  {
    id: 2,
    title: "Blog Post Two",
    excerpt: "This is a short excerpt from blog post two.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h2>Latest Articles</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <img src="/images/tt.jpg" alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

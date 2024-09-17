import React, { useContext, useState } from "react";
import { BlogContext } from "../Context/BlogContext";
import { useNavigate } from "react-router-dom";
import "../Styles/BlogList.css";

const BlogList = () => {
  const navigate = useNavigate();
  const { blogs, loading, error } = useContext(BlogContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!Array.isArray(blogs)) return <p>No blogs available</p>;

  const truncateTitle = (content, maxSpaces) => {
    let charCount = 0;
    for (let i = 0; i < content.length; i++) {
      if (content[i] === ":") {
        break;
      } else charCount++;
    }

    // Return truncated title
    return content.slice(0, charCount);
  };

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="hero-section">
      <h1>Blog Posts</h1>
      <div className="div-contents">
        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="blog-item"
            onClick={() => handleClick(blog._id)}
          >
            <img src={blog.imageUrl} alt={`${blog.title} Logo`} />
            <p> {truncateTitle(blog.title)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

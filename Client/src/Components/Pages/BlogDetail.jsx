import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import "../Styles/BlogDetail.css";
import "../Styles/BlogList.css";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const { blogs } = useContext(BlogContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log("this is inside useEffect - blogdetail");
    const foundBlog = blogs.find((blog) => blog._id === id);
    setBlog(foundBlog);
  }, [id, blogs]);

  if (!blog) return <p>Blog not found</p>;
  const formattedDate = blog.updatedAt.slice(
    0,
    blog.updatedAt.indexOf("T")
  );
  return (
    <div className="detail-content">
      <h1>{blog.title}</h1>
      <p className="content-paragraph">{blog.content}</p>

      <div className="additional-info-div">
        <p>Author: {blog.author}</p>
        <p>Last Updated: {formattedDate}</p>
      </div>
    </div>
  );
};

export default BlogDetail;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const { blogs } = useContext(BlogContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log("this is inside useEffect - blogdetail")
    const foundBlog = blogs.find((blog) => blog._id === id);
    setBlog(foundBlog);
  }, [id, blogs]);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Author: {blog.author}</p>
      <p>Last Updated: {blog.updatedAt}</p>
    </div>
  );
};

export default BlogDetail;

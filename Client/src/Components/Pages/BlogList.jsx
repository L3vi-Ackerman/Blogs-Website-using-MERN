import { React, useEffect, useState } from "react";
import axios from "axios";
import "../Styles/BlogList.css";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/data");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in BlogList.jsx: ", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>My Blogs</h1>
      <div className="div-contents">
        {blogs.map((blog, index) => {
          const formattedDate = blog.updatedAt.slice(
            0,
            blog.updatedAt.indexOf("T")
          );
          return (
            <div className="blog" key={blog._id}>
              <h2>{index+1}. {blog.title}</h2>
              <p className="content-paragraph">{blog.content}</p>
              <div className="additional-info-div">
                <p className="paragraph">Last Updated: {formattedDate}</p>
                <p>Author: {blog.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;

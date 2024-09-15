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

  const truncateAfterSpaces = (content, maxSpaces) => {
    let spaceCount = 0;
    let charCount = 0;

    for (let i = 0; i < content.length; i++) {
      if (content[i] === " ") {
        spaceCount++;
      }
      charCount++;
      if (spaceCount === maxSpaces) {
        break;
      }
    }

    // Return truncated content
    return (
      content.slice(0, charCount) + (spaceCount === maxSpaces ? "..." : "")
    );
  };

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };
  // return (
  //   <div className="hero-content-list">
  //     <h1>My Blogs</h1>
  //     <div className="div-contents">
  //       {blogs.map((blog, index) => {
  //         const formattedDate = blog.updatedAt.slice(
  //           0,
  //           blog.updatedAt.indexOf("T")
  //         );

  //         const truncatedContent = truncateAfterSpaces(blog.content, 20);
  //         return (
  //           <div
  //             className="blog"
  //             key={blog._id}
  //             onClick={() => handleClick(blog._id)}
  //           >
  //             <h2>
  //               {index + 1}. {blog.title}
  //             </h2>
  //             <p className="content-paragraph">{truncatedContent}</p>
  //             <div className="additional-info-div">
  //               <p className="paragraph">Last Updated: {formattedDate}</p>
  //               <p>Author: {blog.author}</p>
  //               {/* <div className="redirect-btn">
  //               <FontAwesomeIcon icon={faArrowRight} />
  //               </div> */}
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  return (
    <div className="div-contents">
      <h1>Blog Posts</h1>
      {blogs.map((blog, index) => (
        <div key={blog._id} className="blog-name">
          <h2>{index+1}. {blog.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import "../Styles/BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const { blogs } = useContext(BlogContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
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
      <div>
           {blog.topics.map((topic, index) => (
            <div key={index} className="detail-hero-content">
              <h3>{topic}</h3>
              {Array.isArray(blog.paragraphs[index])?(
                <ul>
                  {blog.paragraphs[index].map((item,idx)=>(
                    <li key = {idx}>{item}</li>
                  ))}
                  </ul>
              ):(
                <p>{blog.paragraphs[index]}</p>
              )}
            </div>
          ))}
        </div>
      <div className="additional-info-div">
        <p>Author: {blog.author}</p>
        <p>Last Updated: {formattedDate}</p>
      </div>
    </div>
  );
};

export default BlogDetail;


// return (
//   <div>
//     <h1>Blog Posts</h1>
//     {blogs.map((blog) => (
//       <div key={blog._id}>
//         <h2>{blog.title}</h2>
//         <div>
//           {blog.topics.map((topic, index) => (
//             <div key={index}>
//               <h3>{topic}</h3>
//               {Array.isArray(blog.paragraphs[index])?(
//                 <ul>
//                   {blog.paragraphs[index].map((item,idx)=>(
//                     <li key = {idx}>{item}</li>
//                   ))}
//                   </ul>
//               ):(
//                 <p>{blog.paragraphs[index]}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
// );
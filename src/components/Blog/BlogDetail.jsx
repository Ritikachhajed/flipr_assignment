import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
import "./BlogDetail.css";

const BlogDetail = ({ blogs, lowerRecentBlogs, upperRecentBlogs }) => {
  const { id } = useParams();
  const blogDetail = blogs.find((val) => val.id === parseInt(id));

  const recentBlogs = [
    ...lowerRecentBlogs, // Upper Recent Blogs
    ...upperRecentBlogs, // Lower Recent Blogs
  ];
  return (
    <div className="blog-detail-container">
      {/* Left part for recent items */}
      <div className="recent-blogs">
        <h2>Recent Blogs</h2>
        {recentBlogs?.map((blog) => (
          <div key={blog.id} className="recent-blog-card">
            <img
              src={blog.image}
              alt={blog.title}
              className="recent-blog-image"
            />
            <h4>{blog.title}</h4>
            <p>{blog.date}</p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>

      {/* Right part for blog details */}
      <div className="blog-detail">
        <h1>{blogDetail?.title}</h1>
        <p>Category: {blogDetail?.category}</p>
        <p>Date: {blogDetail?.date}</p>
        <img
          src={blogDetail?.image}
          alt={blogDetail?.title}
          className="blog-detail-image"
        />
        <p>{blogDetail?.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogPagination from "./BlogPagination";
import "./BlogList.css";

const BlogList = ({ blogs, lowerRecentBlogs, upperRecentBlogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  // Check if blogs exist and proceed, else use empty arrays
  const blogsToUse = blogs.length > 0 ? blogs : [];
  const recentBlogsToUse = blogs.length > 0 ? shuffleBlogs([...blogs]) : [];
  const upperRecentBlogsToUse =
    blogs.length > 0 ? recentBlogsToUse.slice(0, 2) : [];
  const lowerRecentBlogsToUse =
    blogs.length > 0 ? recentBlogsToUse.slice(2, 5) : [];

  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = blogsToUse.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  const totalPages = Math.ceil(blogsToUse.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Recent Blog Posts</h1>
      <div className="recent-blogs-upper blog-grid">
        {upperRecentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p>
              {blog.date} | {blog.category}
            </p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
      <div className="recent-blogs-lower blog-grid">
        {lowerRecentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p>
              {blog.date} | {blog.category}
            </p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>

      <h1>All Blog Posts</h1>
      <div className="blog-grid">
        {paginatedBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p>
              {blog.date} | {blog.category}
            </p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

// Shuffle function for randomizing the blog order
const shuffleBlogs = (blogs) => blogs.sort(() => Math.random() - 0.5);

export default BlogList;

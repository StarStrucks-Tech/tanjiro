import React, { useState, useEffect } from "react";
import "../components/Blogs.css";
import blogsData from "../blogs.json";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  return (
    <section className="blog-section">
      <div className="header-container">
        <h1>BLOGS</h1>
      </div>
      <div className="blogs-container">
        {blogs.length > 0 && <FeaturedBlogPost blog={blogs[0]} />}
        {/*The first blog is the latest one and considered as featured one*/}
        <div className="small-blogs-grid">
          {blogs.slice(1).map((blog) => (
            <SmallBlogPost key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
/*
 * @component
 * @param {Object} props
 * @param {Object} props.blog - The blog post data object
 * @param {string} props.blog.title - The title of the blog post
 * @param {string} props.blog.description - A brief description of the blog post
 * @param {string} props.blog.image - The filename of the blog post's image
 * @param {string} props.blog.author - The name of the blog post's author
 * @param {string} props.blog.date - The publication date of the blog post
 */

const FeaturedBlogPost = ({ blog }) => {
  return (
    <div className="featured-blog-post">
      <div className="post-content">
        <span className="featured-tag">FEATURED</span>
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <div className="author-info">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
      <div className="post-image">
        <img src={require(`../assets/${blog.image}`)} alt={blog.title} />
      </div>
    </div>
  );
};

const SmallBlogPost = ({ blog }) => {
  return (
    <div className="small-blog-post">
      <img src={require(`../assets/${blog.image}`)} alt={blog.title} />
      <div className="post-content">
        <span className="category">{blog.category}</span>
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <div className="author-info">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

import React, { useState, useEffect } from "react";
import "../components/Blogs.css";
import blogsData from "../blogs.json";

/**
 * @interface Blog
 * @description Represents the structure of a blog post
 */

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  category?: string;
  featured?: boolean;
}

/**
 * @component BlogSection
 * @description Main component that renders the entire blog section
 * @returns {JSX.Element} The rendered BlogSection component
 */

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

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
        <div className="small-blogs-grid">
          {blogs.slice(1).map((blog) => (
            <SmallBlogPost key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * @interface BlogPostProps
 * @description Props for blog post components
 */

interface BlogPostProps {
  blog: Blog;
}

/**
 * @component FeaturedBlogPost
 * @description Renders a featured blog post
 * @param {BlogPostProps} props - The props for the component
 * @returns {JSX.Element} The rendered FeaturedBlogPost component
 */

const FeaturedBlogPost: React.FC<BlogPostProps> = ({ blog }) => {
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

/**
 * @component SmallBlogPost
 * @description Renders a small blog post
 * @param {BlogPostProps} props - The props for the component
 * @returns {JSX.Element} The rendered SmallBlogPost component
 */

const SmallBlogPost: React.FC<BlogPostProps> = ({ blog }) => {
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
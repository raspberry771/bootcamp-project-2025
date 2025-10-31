import React from 'react';
import blogs from '../blogData'; 
import BlogPreview from '../../components/blogPreview';
import { Blog } from '../blogData';

export default function BlogPage() {
  return (
    <section className="blog-page">
      <div className="blog-hero">
        <h1>My Blog</h1>
        <p>A collection of my thoughts, projects, and things I'm learning.</p>
      </div>

      <div className="blog-container">
        {}
        {blogs.map((blog: Blog) => (
          
         <BlogPreview
  key={blog.slug} // A unique key is needed for React
  {...blog} // This "spreads" all properties from the blog object
/>
        ))}
      </div>
    </section>
  );
}
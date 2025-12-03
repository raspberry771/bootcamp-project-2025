import React from 'react';
import BlogPreview from '../../components/blogPreview';
import connectDB from "../../database/db";
import Blog from "../../database/blogSchema";
async function getBlogs(){
  await connectDB() // 1. Connect to the database

  try {
      // 2. Query: Find all blogs and sort by date (newest first)
      const blogs = await Blog.find().sort({ date: -1 }).orFail()
      // 3. Return: Send the data back to the component
      return blogs
  } catch (err) {
      console.log("ERROR FETCHING BLOGS:", err); // <--- Add this line
      return null
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs(); // <--- Fetch the real data here

  return (
    <section className="blog-page">
      <div className="blog-hero">
        <h1>My Blog</h1>
        <p>A collection of my thoughts, projects, and things I'm learning.</p>
      </div>

      <div className="blog-container">
        {/* If blogs exist, map through them. If null, show nothing/error */}
        {blogs && blogs.map((blog: any) => (
          <BlogPreview
            key={blog.slug} 
            {...blog.toObject()} // Converts Mongoose document to plain object
          />
        ))}

        {/* Optional: Show a message if no blogs are found */}
        {!blogs && <p>No blogs found.</p>}
      </div>
    </section>
  );
}
import React from 'react';
import blogs from '../../blogData'; // Get your "spreadsheet"
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // To handle 404 errors

// This function tells Next.js what pages to pre-build
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

// This is the main component for the blog post page
// We mark it as 'async'
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  
  // 1. "await" the params (the IOU) to get the real object
  // This is the key fix
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // 2. Find the matching blog post in your "spreadsheet"
  const blog = blogs.find((post) => post.slug === slug);

  // 3. If no post is found, show a 404 error
  if (!blog) {
    console.log("COULDN'T FIND A MATCH FOR:", slug);
    console.log("AVAILABLE SLUGS:", blogs.map(p => p.slug));
    notFound();
  }

  // 4. If we find the blog, return the JSX for it
  return (
    <main className="blog-post-container">
      <h1>{blog.title}</h1>
      <p className="post-meta">{blog.date}</p>

      <Image
        src={blog.image}
        alt={blog.title}
        width={800} // Set a default width
        height={450} // Set a default height
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />

      <div className="post-content">
        {/* We map over the 'content' array and make a <p> for each item */}
        {blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Link href="/blog" className="back-to-blog">
        ← Back to Blog
      </Link>
    </main>
  );
}
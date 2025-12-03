import React from 'react'
import connectDB from "../../../database/db" 
import BlogModel, { IComment } from "../../../database/blogSchema" 
import Comment from "../../../components/comment" // Adjust this path if your folder structure is different

// 1. Define params as a Promise (Next.js 15+ standard)
type IParams = {
    params: Promise<{
        slug: string
    }>
}

// 2. The Fetch Function
async function getBlog(slug: string) {
    await connectDB() 
    try {
        // We use .lean() sometimes to make data plain JSON, but standard findOne works too
        const blog = await BlogModel.findOne({ slug }).orFail()
        return blog
    } catch (err) {
        return null
    }
}

// 3. The Main Page Component
export default async function Blog({ params }: IParams) {
    // Unpack the Promise to get the slug
    const { slug } = await params 
    
    // Fetch the data
    const blog = await getBlog(slug) 

    // Handle "Blog Not Found"
    if (!blog) {
        return (
            <div className="p-4">
                <h1>404 - Blog Not Found</h1>
                <p>Could not find a blog post with slug: {slug}</p>
            </div>
        )
    }

    // Render the Page
    return (
        <div className="blog-post" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {/* --- Blog Header --- */}
            <h1>{blog.title}</h1>
            <p className="date" style={{ color: '#666', marginBottom: '20px' }}>
                {new Date(blog.date).toLocaleDateString()}
            </p>
            
            {/* --- Blog Image --- */}
            <img 
                src={blog.image} 
                alt={blog.image_alt} 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} 
            />
            
            {/* --- Blog Content --- */}
            <div className="content" style={{ marginTop: '20px', lineHeight: '1.6' }}>
                {blog.content}
            </div>

            <hr style={{ margin: '40px 0' }} />

            {/* --- NEW: Comments Section (The Factory Line) --- */}
            <div className="comments-section">
                <h3>Comments</h3>
                
                {/* Check if comments exist first (blog.comments?), 
                    then Loop (.map) through them 
                */}
                {blog.comments && blog.comments.length > 0 ? (
                    blog.comments.map((comment: IComment, index: number) => (
                        <Comment key={index} comment={comment} />
                    ))
                ) : (
                    <p style={{ fontStyle: 'italic', color: 'gray' }}>No comments yet.</p>
                )}
            </div>
        </div>
    )
}
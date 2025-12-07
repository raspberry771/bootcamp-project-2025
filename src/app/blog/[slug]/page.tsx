import React from 'react'
import connectDB from "../../../database/db" 
import BlogModel, { IComment } from "../../../database/blogSchema" 
import Comment from "../../../components/comment" 
// 1. IMPORT THE NEW COMPONENT
import NewComment from "../../../components/new-comment"

type IParams = {
    params: Promise<{
        slug: string
    }>
}

async function getBlog(slug: string) {
    await connectDB() 
    try {
        const blog = await BlogModel.findOne({ slug }).orFail()
        return blog
    } catch (err) {
        return null
    }
}

export default async function Blog({ params }: IParams) {
    const { slug } = await params 
    const blog = await getBlog(slug) 

    if (!blog) {
        return (
            <div className="p-4">
                <h1>404 - Blog Not Found</h1>
                <p>Could not find a blog post with slug: {slug}</p>
            </div>
        )
    }

    return (
        <div className="blog-post" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{blog.title}</h1>
            <p className="date" style={{ color: '#666', marginBottom: '20px' }}>
                {new Date(blog.date).toLocaleDateString()}
            </p>
            
            <img 
                src={blog.image} 
                alt={blog.image_alt} 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} 
            />
            
            <div className="content" style={{ marginTop: '20px', lineHeight: '1.6' }}>
                {blog.content}
            </div>

            <hr style={{ margin: '40px 0' }} />

           <div className="add-comment-section">
                {/* PASS THE SLUG DOWN HERE */}
                <NewComment slug={slug} />
            </div>

            {/* --- Existing Comments Section --- */}
            <div className="comments-section" style={{ marginTop: '40px' }}>
                <h3>Comments</h3>
                
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
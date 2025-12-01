import React from 'react'
import connectDB from "../../../database/db" 
import BlogModel from "../../../database/blogSchema"

// FIX: Define params as a Promise
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
    // FIX: You MUST use 'await' here
    const { slug } = await params 
    
    const blog = await getBlog(slug) 

    if (!blog) {
        return (
            <div>
                <h1>404 - Blog Not Found</h1>
            </div>
        )
    }

    return (
        <div className="blog-post">
            <h1>{blog.title}</h1>
            <p className="date">{new Date(blog.date).toLocaleDateString()}</p>
            <img 
                src={blog.image} 
                alt={blog.image_alt} 
                style={{maxWidth: '100%'}} 
            />
            <div className="content">
                {blog.content}
            </div>
        </div>
    )
}
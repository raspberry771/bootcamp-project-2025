import { NextRequest, NextResponse } from 'next/server'
import connectDB from "../../../../database/db";
import Blog from "../../../../database/blogSchema";

// 1. UPDATE: params is now a Promise
type IParams = {
    params: Promise<{
        slug: string
    }>
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() 
    
    // 2. UPDATE: You must 'await' params before you can access 'slug'
    const { slug } = await params 

    try {
        const blog = await Blog.findOne({ slug }).orFail()
        return NextResponse.json(blog)
    } catch (err) {
        return NextResponse.json('Blog not found.', { status: 404 })
    }
}
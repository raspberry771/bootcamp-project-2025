import { NextRequest, NextResponse } from 'next/server'
import connectDB from "../../../../database/db";
import Blog from "../../../../database/blogSchema";

type IParams = {
    params: {
        slug: string
    }
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // 1. Connect to the database
    const { slug } = params // 2. Grab the "slug" from the URL

    try {
        // 3. Query: Find ONE blog where the slug matches
        const blog = await Blog.findOne({ slug }).orFail()
        // 4. Return: Send that blog back as JSON
        return NextResponse.json(blog)
    } catch (err) {
        return NextResponse.json('Blog not found.', { status: 404 })
    }
}
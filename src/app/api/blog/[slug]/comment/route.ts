import { NextRequest, NextResponse } from 'next/server'
import connectDB from "../../../../../database/db"
import BlogModel, { IComment } from "../../../../../database/blogSchema"

type IParams = {
    params: Promise<{
        slug: string
    }>
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB()
    
    // FIX: Add 'await' here to open the envelope
    const { slug } = await params 

    try {
        const body = await req.json()
        const { user, comment } = body

        if (!user || !comment) {
            return NextResponse.json("Missing required fields", { status: 400 })
        }

        const newComment: IComment = {
            user,
            comment,
            time: new Date()
        }

        await BlogModel.updateOne(
            { slug },
            { $push: { comments: newComment } }
        ).orFail()

        return NextResponse.json("Comment added successfully")
    } catch (err) {
        return NextResponse.json("Internal Server Error", { status: 500 })
    }
}
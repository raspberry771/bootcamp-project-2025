import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

export type Blog = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // text content for individual blog page
    image: string; // url for string in public
    image_alt: string; // alt for image 
    comments: IComment[]; // array for comments
};

// mongoose schema 
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    content: { type: String, required: true },
    comments: [{
        user: { type: String, required: true },
        comment: { type: String, required: true },
        time: { type: Date, required: false, default: new Date() }
    }]
})

// The 'Blog' at the end forces it to look for the collection named "Blog" (Capital B)
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema, 'Blog');

export default Blog;    
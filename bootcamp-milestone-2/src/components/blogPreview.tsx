import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '../app/blogData'; // We get the 'Blog' blueprint
import style from './blogPreview.module.css'; // We'll add styles in the next step

// The component receives *all* the blog props
export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogCard}>
      {/* The blog card image */}
      <Image 
        src={props.image} 
        alt={props.title} 
        width={400} 
        height={200}
        style={{ objectFit: 'cover' }} // Makes the image cover the area
      />
      
      {/* The blog card content */}
      <div className={style.blogCardContent}>
        <h2>{props.title}</h2>
        <p className={style.blogDate}>{props.date}</p>
        <p className={style.blogExcerpt}>{props.description}</p>
        
        {/* This links to the full blog post page */}
        <Link href={`/blog/${props.slug}`} className={style.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
}
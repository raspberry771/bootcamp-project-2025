import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '../app/blogData'; 
import style from './blogPreview.module.css';

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogCard}>
      <Image 
        src={props.image} 
        alt={props.title} 
        width={400} 
        height={200}
        style={{ objectFit: 'cover' }} 
        unoptimized // <--- ADDED THIS to fix the SVG error
      />
      
      <div className={style.blogCardContent}>
        <h2>{props.title}</h2>
        <p className={style.blogDate}>{new Date(props.date).toLocaleDateString()}</p>
        <p className={style.blogExcerpt}>{props.description}</p>
        
        <Link href={`/blog/${props.slug}`} className={style.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
}
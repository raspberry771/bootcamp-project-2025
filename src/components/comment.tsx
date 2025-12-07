import React from 'react';
import { IComment } from '../database/blogSchema'; // Import the type we made earlier!

{/* 1. Define the props (The Input) */}
type CommentProps = {
    comment: IComment;
}

{/* 2. Helper function to make dates look pretty */}
function parseCommentTime(time: Date) {
    return new Date(time).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

{/* 3. The Component (The Blue Box) */}
function Comment({ comment }: CommentProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{comment.user}</h4>
            <p style={{ margin: '0 0 5px 0' }}>{comment.comment}</p>
            <span style={{ fontSize: '0.8em', color: 'gray' }}>
                {parseCommentTime(comment.time)}
            </span>
        </div>
    );  
}

export default Comment;
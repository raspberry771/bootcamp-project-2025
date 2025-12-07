'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // Used to refresh the page

// 1. Define the Props (The Input)
// The parent (Page) needs to pass the "slug" so we know which blog we are on.
type Props = {
    slug: string;
}

export default function NewComment({ slug }: Props) {
    const [user, setUser] = useState("");
    const [comment, setComment] = useState("");
    const router = useRouter();

    const handleSubmit = async () => {
        // 2. Validate
        if (!user || !comment) {
            alert("Please fill out both fields");
            return;
        }

        try {
            // 3. The Phone Call (Fetch)
            // We send a POST request to our new API route
            const res = await fetch(`/api/blog/${slug}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // 4. The Cargo (Body)
                body: JSON.stringify({ user, comment }),
            });

            // 5. Handle the Result
            if (res.ok) {
                // Success! Clear the inputs
                setUser("");
                setComment("");
                // Refresh the page so the new comment appears immediately
                router.refresh();
            } else {
                console.log("Failed to post comment");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="comment-form-container" style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Leave a Comment</h3>
            
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                <input 
                    type="text" 
                    value={user} 
                    onChange={(e) => setUser(e.target.value)} 
                    style={{ width: '100%', padding: '8px' }}
                    placeholder="Your name"
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Comment:</label>
                <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    style={{ width: '100%', padding: '8px', minHeight: '80px' }}
                    placeholder="Write your thoughts..."
                />
            </div>

            <button 
                onClick={handleSubmit} 
                style={{ backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
            >
                Submit Comment
            </button>
        </div>
    )
}
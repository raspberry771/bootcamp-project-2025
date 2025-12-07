'use client'

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop the page from reloading
    setStatus('Sending...');

    // ----------------------------------------------------
    // YOU WILL FILL THESE IN LATER FROM THE EMAILJS WEBSITE
    const serviceID = 'service_g1k5xip';
    const templateID = 'template_t4texp8';
    const publicKey = 'P5xmLxMDAMTaW2G3B';
    // ----------------------------------------------------

    // The object must match the variables in your EmailJS Template
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message Sent!');
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('Failed to send. Try again.');
      });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Name Input */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Email Input */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Message Input */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', minHeight: '100px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Send Message
        </button>

        <p>{status}</p>
      </form>
    </div>
  );
}
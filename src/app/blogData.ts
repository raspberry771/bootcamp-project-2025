import React from 'react';

// 1. Update the "blueprint" to include a 'content' field
export interface Blog {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
  content: string[]; // This is new! It's an array of strings.
}

// 2. Update your "spreadsheet" with the new data
const blogs: Blog[] = [
  {
    title: "What I'm working on currently (10/16/2025)",
    description: "Expanding on my client project for aqingseafood.com...",
    image: "/googleseo.png",
    date: "October 16, 2025",
    slug: "google-seo", // This slug matches the "Read More" link
    content: [ // We add the text from your HTML file here
      "Expanding on my client project for aqingseafood.com I am currently working on Google Search Engine Optimization so that more customers who search local taiwanese seafood restaurant can find my website."
    ]
  },
  {
    title: "Ultramananananan",
    description: "CSA ultraman day, went to pismo beach, played games...",
    image: "/ultraman.jfif",
    date: "October 11, 2025",
    slug: "ultraman-day", // 👈 This line MUST be "ultraman-day"
    content: [ 
      "CSA ultraman day, went to pismo beach, played games, and went to an afterparty.",
      "This was a great event that brought everyone together for some fun and friendly competition. The weather at Pismo Beach was perfect, and it was a memorable day."
    ]
  }
  // Add more blog objects here
];

export default blogs;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blogs = [
    {
        title: "What I'm working on currently (10/16/2025)",
        date: "2025-10-16",
        description: "Expanding on my client project for aqingseafood.com I am currently working on Google Search Engine Optimization so that more customers who search local taiwanese seafood restaurant can find my website.",
        image: "./image/googleseo.png",
        imageAlt: "Portfolio screenshot / Aqing project",
        slug: "10-16update"
    },
    {
        title: "Ultramananananan",
        date: "2025-10-11",
        description: "CSA ultraman day",
        image: "./image/badgeGen.png",
        imageAlt: "TypeScript/badge generator",
        slug: "ultraman"
    }
];
const container = document.getElementById("blog-container");
blogs.forEach((blog) => {
    const card = document.createElement("article");
    card.className = "blog-card";
    const img = document.createElement("img");
    img.src = blog.image;
    img.alt = blog.imageAlt;
    const wrap = document.createElement("div");
    wrap.className = "blog-card-content";
    const h2 = document.createElement("h2");
    h2.textContent = blog.title;
    const date = document.createElement("p");
    date.className = "blog-date";
    date.textContent = new Date(blog.date).toLocaleDateString(undefined, {
        year: "numeric", month: "long", day: "numeric"
    });
    const excerpt = document.createElement("p");
    excerpt.className = "blog-excerpt";
    excerpt.textContent = blog.description;
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`; // create these files if you want detail pages
    link.className = "read-more";
    link.textContent = "Read more →";
    wrap.append(h2, date, excerpt, link);
    card.append(img, wrap);
    container?.appendChild(card);
});
//# sourceMappingURL=blog.js.map
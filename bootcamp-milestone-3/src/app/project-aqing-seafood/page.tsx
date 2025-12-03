import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link

export default function AqingSeafoodPage() {
  return (
    <main className="project-page">
      <section className="project-hero">
        <h1>Aqing Seafood - A Website for a Local Taiwanese Restaurant</h1>
        <p className="subtitle">
          A clean, modern, and responsive (RWD) website designed to attract
          customers and provide key business information.
        </p>
        <div className="project-links">
          <a
            href="https://aqingseafood.com/"
            target="_blank"
            className="btn"
          >
            <i className="fas fa-external-link-alt"></i> Visit Site
          </a>
        </div>
      </section>

      <div className="project-section">
        <h2>My Role & The Solution</h2>
        <p>
          I was responsible for the full project lifecycle, from initial design
          mockups to front-end development and deployment. I developed a
          responsive website that is easy for customers to navigate and took
          product photos for the restaurant. Key features include a product
          gallery, an integrated Google Map for directions, and clear contact
          information, which helped the business increase its local visibility. I
          also handle Google SEO to make the website ranked higher for people
          searching for local hidden gems.
        </p>
      </div>

      <div className="project-section">
        <h2>Project Gallery</h2>
        {/* Make sure your image path starts with a '/' to point to the 'public' folder */}
        <Image
          src="/image/aqingweb.png"
          alt="Homepage of Aqing Seafood"
          className="project-image"
          width={900} // You need to add width/height
          height={600}
        />
        <p className="caption">
          The homepage, featuring key products and contact info.
        </p>
        <Image
          src="/image/aqingweb2.png"
          alt="Product gallery of Aqing Seafood"
          className="project-image"
          width={900}
          height={600}
        />
        <p className="caption">The product gallery page.</p>
      </div>

      <div className="project-section">
        <h2>Technical Stack</h2>
        <ul className="tech-stack">
          <li>
            <strong>Technologies:</strong> HTML, CSS, JavaScript
          </li>
          <li>
            <strong>Design:</strong> Responsive Web Design, Mobile-First Approach
          </li>
        </ul>
      </div>
    </main>
  );
}
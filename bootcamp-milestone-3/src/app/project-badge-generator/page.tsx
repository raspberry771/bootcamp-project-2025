import React from 'react';

export default function BadgeGeneratorPage() {
  return (
    <main className="project-page">
      <section className="project-hero">
        <h1>Karson Badge Generator</h1>
        <p className="subtitle">
          A simple, intuitive web app that allows developers to create
          custom-styled badges for events.
        </p>
        <div className="project-links">
          <a
            href="https://karson-badge-generator.netlify.app/"
            target="_blank"
            className="btn"
          >
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </section>

      <div className="project-section">
        <h2>The Challenge & The Solution</h2>
        <p>
          The main challenge was generating the badge graphic dynamically on the
          client-side without a backend. I solved this by using SVG templates
          that are manipulated with JavaScript, ensuring fast performance and
          providing an instant preview for the user as they type and drag
          elements across a canvas. I also had to make sure it reads the Excel
          sheets headers correctly and create elements from it. Then the user
          inputs background image and logo image into a draggable canvas for
S          custom adjustments.
        </p>
      </div>

      <div className="project-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-eye"></i> Real-time badge preview
          </div>
          <div className="feature-item">
            <i className="fas fa-palette"></i> Customizable colors and text
          </div>
          <div className="feature-item">
            <i className="fas fa-code"></i> Easy-to-copy Markdown
          </div>
          <div className="feature-item">
            <i className="fas fa-mobile-alt"></i> Fully responsive design
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2>Technical Stack</h2>
        <ul className="tech-stack">
          <li>
            <strong>Frontend:</strong> HTML5, CSS3, JavaScript
          </li>
          <li>
            <strong>Hosting:</strong> Netlify
          </li>
        </ul>
      </div>
    </main>
  );
}
import React from 'react';
import Image from 'next/image'; 

export default function CongressBotPage() {
  return (
    <main className="project-page">
      <section className="project-hero">
        <h1>Congress Trade Tracker and Notifier</h1>
        <p className="subtitle">
          A bot that identifies profitable trading opportunities through a
          three-step process:
        </p>

        <div className="steps-grid">
          <div className="step">
            <h3>Step 1: Scrape Data</h3>
            <p>
              Scrapes all senator's trades every day to gather raw data (eg.
              price, traded date, size, etc ).
            </p>
          </div>
          <div className="step">
            <h3>Step 2: Apply Filters</h3>
            <p>
              Applies filters to each trade and categorizes them in three tiers.
              Considering factors like reporting lag, number of politicians
              involved etc.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Notify Users</h3>
            <p>
              Sends a notification when a trade is identified with a high
              probability of being profitable, delivering actionable insights.
            </p>
          </div>
        </div>
      </section>

      <section className="project-content">
        <div className="project-section">
          <h2>The "Proof" - From Alert to Profit</h2>
          <p>
            One of the bot's alerts directly led to a significant return when
            Google's stock jumped 13% following a favorable court ruling. This
            section demonstrates the real-world value and effectiveness of the
            tool.
          </p>
          {/* Make sure your image path starts with a '/' to point to the 'public' folder */}
          <Image
            src="/image/stockTrade3.png"
            alt="Proof of bot's effectiveness"
            className="project-image"
            width={800} // Added width/height
            height={500}
          />
          <Image
            src="/image/stockTradewin.png"
            alt="Proof of bot's effectiveness"
            className="project-image"
            width={800}
            height={500}
          />
          <p className="caption">
            Google rose 13 percent after a month when they won a court case
            letting them keep Chrome
          </p>
        </div>

        <div className="project-section">
          <h2>The Problem It Solves</h2>
          <p>
            Retail investors are often at an information disadvantage. This bot
            levels the playing field by providing real-time access to valuable
            public data on congressional stock trades, delivered conveniently
            through Discord.
          </p>
        </div>

        <div className="project-section">
          <h2>Features & Functionality</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-bell"></i> Real-time trade notifications
            </div>
            <div className="feature-item">
              <i className="fas fa-search"></i> Look up a member's history
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-line"></i> Check trades for a specific
              stock
            </div>
            <div className="feature-item">
              <i className="fas fa-link"></i> Direct links to filings
            </div>
          </div>
        </div>

        <div className="project-section">
          <h2>Technical Stack</h2>
          <ul className="tech-stack">
            <li>
              <strong>Language:</strong> Node.js
            </li>
            <li>
              <strong>Library:</strong> Discord.js
            </li>
            <li>
              <strong>APIs:</strong> Public APIs for financial and congressional
              data
            </li>
            <li>
              <strong>Hosting:</strong> Heroku / AWS
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
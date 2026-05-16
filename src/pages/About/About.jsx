import React from 'react';
import './About.css';

export default function About() {
  return (
    <main className="about-page container">
      <section className="hero-about">
        <div className="hero-copy">
          <span>About Markitta</span>
          <h1>Beautiful shopping, designed for modern tastes.</h1>
          <p>
            At Markitta we bring curated products together in a premium layout with clear navigation and fast browsing. Our goal is a simple online shop that feels polished and trustworthy.
          </p>
        </div>
        <div className="hero-card">
          <h2>Our promise</h2>
          <p>
            Every detail supports a better product discovery experience — from the homepage to product pages and checkout.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <article className="about-card">
          <h2>Our mission</h2>
          <p>
            To create a shop interface that looks premium and feels easy to use, while keeping the product story front and center.
          </p>
        </article>
        <article className="about-card">
          <h2>What we offer</h2>
          <ul>
            <li>Clean design with consistent branding</li>
            <li>Fast category browsing and navigation</li>
            <li>Friendly support and product guidance</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

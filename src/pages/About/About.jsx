import React from 'react';
import './About.css';

export default function About() {
  return (
    <main className="about-page container">
      <h1>About Markitta</h1>
      <p>
        Markitta is an e-commerce demo showcasing curated products with a
        clean, modern UI. We focus on quality items and a smooth shopping
        experience. This page is styled to match the project's palette and
        layout.
      </p>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>Curated selection</li>
          <li>User-friendly experience</li>
          <li>Fast, reliable shipping</li>
        </ul>
      </section>
    </main>
  );
}

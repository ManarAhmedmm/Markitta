import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-page container">
      <h1>Contact Us</h1>
      <p>If you have questions, reach out using the form below.</p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="Your message" />
        </label>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </main>
  );
}

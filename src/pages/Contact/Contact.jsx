import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please complete all fields before sending.');
      return;
    }

    toast.success('Your message has been sent successfully!');
    setForm(initialForm);
    setSent(true);
  };

  return (
    <main className="contact-page container">
      <section className="contact-intro">
        <div className="contact-copy">
          <span>Contact Us</span>
          <h1>Send a message and we will reply as soon as possible.</h1>
          <p>
            Need help with an order or want to ask a question about products? Use the form below and our support team will get back to you quickly.
          </p>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <h3>Email</h3>
            <p>support@markitta.com</p>
          </div>
          <div className="info-card">
            <h3>Phone</h3>
            <p>+20 123 456 789</p>
          </div>
        </div>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input value={form.name} onChange={handleChange} type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input value={form.email} onChange={handleChange} type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea value={form.message} onChange={handleChange} name="message" rows="6" placeholder="Your message" />
        </label>
        <button type="submit" className="btn submit-btn">Send Message</button>
        {sent && <p className="submit-note">Thanks! Your message is on its way.</p>}
      </form>
    </main>
  );
}

import React from 'react';
import './Blog.css';

const samplePosts = [
  { id: 1, title: 'How to choose the right product', excerpt: 'A short guide to selecting the best items for your needs.' },
  { id: 2, title: 'Care tips for your purchases', excerpt: 'Keep your goods looking new with these simple tips.' },
];

export default function Blog() {
  return (
    <main className="blog-page container">
      <section className="blog-hero">
        <span>Latest stories</span>
        <h1>Inspiration for better shopping and product care.</h1>
        <p>Read quick articles made for Markitta customers, with simple tips and product ideas.</p>
      </section>

      <section className="posts">
        {samplePosts.map(post => (
          <article key={post.id} className="post">
            <div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <button type="button" className="btn read-more">Read More</button>
          </article>
        ))}
      </section>
    </main>
  );
}

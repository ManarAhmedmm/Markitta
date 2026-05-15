import React from 'react';
import './Blog.css';

const samplePosts = [
  { id: 1, title: 'How to choose the right product', excerpt: 'A short guide to selecting the best items for your needs.' },
  { id: 2, title: 'Care tips for your purchases', excerpt: 'Keep your goods looking new with these simple tips.' },
];

export default function Blog() {
  return (
    <main className="blog-page container">
      <h1>Blog</h1>
      <p>Latest articles and tips from Markitta.</p>

      <section className="posts">
        {samplePosts.map(post => (
          <article key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#" className="read-more">Read more</a>
          </article>
        ))}
      </section>
    </main>
  );
}

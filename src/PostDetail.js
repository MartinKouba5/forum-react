// src/PostDetail.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = ({ posts, addComment }) => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Příspěvek nebyl nalezen.</div>;
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(post.id, { text: comment, createdAt: new Date().toISOString() });
      setComment('');
    }
  };

  return (
    <div className="post-detail-container">
      <h1>{post.title}</h1>
      <h3>Autor: {post.author}</h3>
      <p>{post.content}</p>
      <small>Vytvořeno: {new Date(post.createdAt).toLocaleString()}</small>
      
      <div className="comment-section">
        <h2>Komentáře</h2>
        
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            placeholder="Napište komentář..."
            required
          ></textarea>
          <button type="submit">Přidat komentář</button>
        </form>
        
        <ul className="comment-list">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((c, index) => (
              <li key={index} className="comment-item">
                <p>{c.text}</p>
                <small>Vytvořeno: {new Date(c.createdAt).toLocaleString()}</small>
              </li>
            ))
          ) : (
            <li className="comment-item">Žádné komentáře.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PostDetail;

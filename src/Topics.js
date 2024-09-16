// src/Topics.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Topics.css';

const topics = [
  { id: 1, title: 'Škola' },
  { id: 2, title: 'Práce' },
  { id: 3, title: 'Domov' },
  { id: 4, title: 'Cestování' },
  { id: 5, title: 'Technologie' },
  { id: 6, title: 'Zdraví' },
  { id: 7, title: 'Sport' },
  { id: 8, title: 'Kultura' },
  { id: 9, title: 'Věda' },
  { id: 10, title: 'Umění' },
];

const Topics = ({ posts }) => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState('createdAtDesc');

  const handleCreateNewPost = () => {
    navigate('/create-new-post');
  };

  const sortPosts = (posts, option) => {
    switch (option) {
      case 'createdAtAsc':
        return [...posts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case 'createdAtDesc':
        return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'titleAsc':
        return [...posts].sort((a, b) => a.title.localeCompare(b.title));
      case 'titleDesc':
        return [...posts].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return posts;
    }
  };

  const sortedPosts = sortPosts(posts, sortOption);

  return (
    <div className="topics-container">
      <div className="sort-options">
        <label htmlFor="sort">Řadit podle:</label>
        <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="createdAtDesc">Nejnovější</option>
          <option value="createdAtAsc">Nejstarší</option>
          <option value="titleAsc">Abecedně (A-Z)</option>
          <option value="titleDesc">Abecedně (Z-A)</option>
        </select>
      </div>

      <ul className="post-list">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <li key={post.id} className="post-item">
              <h3 onClick={() => navigate(`/post/${post.id}`)}>{post.title}</h3>
              <p>{post.content}</p>
              <small>Autor: {post.author}</small>
              <br />
              <small>Kategorie: {topics.find(topic => topic.id === post.topicId)?.title}</small>
              <br />
              <small>Vytvořeno: {new Date(post.createdAt).toLocaleString()}</small>
            </li>
          ))
        ) : (
          <li className="no-posts">Zatím žádné příspěvky.</li>
        )}
      </ul>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-info" onClick={handleCreateNewPost}>
          Vytvořit nový příspěvek
        </button>
      </div>
    </div>
  );
};

export default Topics;

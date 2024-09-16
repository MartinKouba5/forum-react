// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Topics from './Topics';
import CreateNewPost from './CreateNewPost';
import PostDetail from './PostDetail';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const addPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const addComment = (postId, comment) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, comments: [...(post.comments || []), comment] } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Topics posts={posts} />} />
          <Route
            path="/create-new-post"
            element={<CreateNewPost addPost={addPost} />}
          />
          <Route
            path="/post/:id"
            element={<PostDetail posts={posts} addComment={addComment} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

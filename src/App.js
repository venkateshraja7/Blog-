// src/App.js
import React, { useState } from 'react';
import './App.css';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';

function App() {
  const [blogs, setBlogs] = useState([]);

  const handleBlogCreate = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div className="app">
      <h1>S_SQUARE'S BLOGS</h1>
      <CreateBlog onBlogCreate={handleBlogCreate} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
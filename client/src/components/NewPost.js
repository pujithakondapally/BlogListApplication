import React, { useState } from 'react';
import axios from 'axios';
import './NewPost.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePost = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
  
      await axios.post(`http://localhost:5000/posts`, { title, content }, config);
      setSuccess('Post created successfully');
      setError('');
    } catch (error) {
      setError('Failed to create post');
      setSuccess('');
    }
  };  

  return (
    <div className="new-post-container">
      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handlePost}>Post</button>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default NewPost;

import React, { useEffect, useState } from 'react';
import './PostList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="post-list-container">
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="post-list">
        {filteredPosts.length === 0 ? (
          <p>No Posts found!</p>
        ) : (
          filteredPosts.map((post) => (
            <div className="post-card" key={post._id}>
              <h2>{post.title}</h2>
              <p>Posted by: {post.author?.name ? post.author.name : 'Unknown Author'}</p>
              <p>{post.content.substring(0, 100)}...</p>
              <Link to={`/posts/${post._id}`}>Read more</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PostList;

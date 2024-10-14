import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private route to ensure only logged-in users can access post creation */}
        <Route path="/new-post" element={
          <PrivateRoute>
            <PostForm />
          </PrivateRoute>
        } />
        <Route path="/postList" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/blog/:blogId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

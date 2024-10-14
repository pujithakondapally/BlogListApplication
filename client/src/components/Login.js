import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, { email, password });
      
      localStorage.setItem('token', response.data.token);

      setSuccess('Logged in successfully');
      setError('');
      
      navigate('/new-post');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      setSuccess('');
    }
  };

  const handleGoogleLogin = () => {
    window.open(`http://localhost:5000/auth/google`, '_self');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default Login;
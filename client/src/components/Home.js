// HomePage.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the BlogList!</h1>
          <p>Discover the latest blogs, insights, and stories from various authors.</p>
          <button className="cta-button">Start Reading</button>
        </div>
      </header>

      <section className="featured-blogs">
        <h2>Featured Blogs</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <img src="https://img.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg?t=st=1726512444~exp=1726516044~hmac=bacdcfe0f6f297ec0941fc9f25c50c85d00755c29e63c4cea019d2329e649029&w=740" alt="Blog 1" />
            <h3>Exploring React Best Practices</h3>
            <p>A guide to writing cleaner and more efficient React code.</p>
            <button className="read-more">Read More</button>
          </div>

          <div className="blog-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_PjlxkIRg3a68kqwtSnxa8RjRwBv_LmnGg&s" alt="Blog 2" className='card-image'/>
            <h3>How to Integrate MongoDB with Express</h3>
            <p>Learn how to integrate MongoDB with your Node.js backend.</p>
            <button className="read-more">Read More</button>
          </div>

          <div className="blog-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOz9phHU1v0NEL0KKLmkZWzsKcQTt18CyPA&s" alt="Blog 3" className='card-image'/>
            <h3>The Future of AI in Retail</h3>
            <p>Discover how AI is shaping the future of customer experiences.</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 BlogList. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;

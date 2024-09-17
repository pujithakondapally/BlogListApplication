# BlogList

**BlogList** is a full-stack blogging platform built using the **MERN Stack** (MongoDB, Express, React, Node.js). It allows users to register, log in, create new blog posts, view all posts, and engage by adding comments to blog posts. The app is secured using **JWT-based authentication**.

## Features

- **User Registration**: New users can sign up by providing a unique email and password.
- **User Login**: Existing users can log in to access the platform features.
- **Create New Posts**: Logged-in users can create and publish new blog posts.
- **View All Posts**: Anyone, including non-registered users, can view all published posts.
- **Comment on Posts**: Registered users can comment on posts and view existing comments.
- **JWT Authentication**: Ensures secure user access with token-based authentication.

## Technologies Used

- **Frontend**: React (with React Router for dynamic routing)
- **Backend**: Express.js and Node.js
- **Database**: MongoDB 
- **Authentication**: JSON Web Token (JWT) for secure login and session management

## Endpoints

### Public Endpoints
- **`/register`**: User registration page.
- **`/login`**: User login page.
- **`/postList`**: View all posts.
- **`/posts/:id`**: View specific post details, including comments.
  
### Private Endpoints
- **`/new-post`**: Create a new blog post (requires login).


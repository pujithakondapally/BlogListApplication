# BlogList

A full-stack blogging platform built using the MERN (MongoDB, Express, React, Node.js) stack. BlogList allows users to register, create, view, and comment on blog posts.

## Features

- **User Registration and Login**: Secure user authentication with JSON Web Tokens (JWT).
- **Create New Blog Posts**: Authenticated users can write and post blogs.
- **View All Blog Posts**: Users can browse through a list of all available blog posts.
- **Commenting System**: Users can engage by adding comments on individual posts.

## Technology Stack

- **Frontend**: React, React Router for dynamic routing, CSS for styling.
- **Backend**: Node.js, Express, Mongoose for MongoDB integration.
- **Database**: MongoDB Atlas for scalable data storage.
- **Authentication**: JWT-based secure authentication system.

## API Endpoints

### Public Endpoints

- **`/register`**
  - **Description**: User registration page. Allows new users to create an account.

- **`/login`**
  - **Description**: User login page. Authenticates registered users.

- **`/postList`**
  - **Description**: View all blog posts. Shows a list of all posts available on the platform.

- **`/posts/:id`**
  - **Description**: View specific post details, including comments. Allows users to read a detailed view of a post and see any comments associated with it.


### Private Endpoints

- **`/new-post`**
  - **Description**: Create a new blog post. Allows logged-in users to author and publish new posts.


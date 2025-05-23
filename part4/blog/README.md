# Project: Blog List Backend

This project is a Node.js and Express backend application for managing a list of blogs. It provides a RESTful API for creating, reading, updating, and deleting blogs (CRUD operations), along with user registration and authentication using JWT. It's designed to be robust, with proper error handling and a suite of integration tests.

## Features

- **Blog Management**:
    - List all blogs with populated user information.
    - Create new blogs (requires authentication).
    - Update existing blogs (e.g., title, author, URL, likes; requires authentication).
    - Delete blogs (requires authentication and user must be the creator of the blog).
- **User Management**:
    - Register new users with unique usernames and hashed passwords.
    - List all users with their associated blogs.
- **Authentication**:
    - User login with username and password.
    - JWT (JSON Web Token) based authentication for protected endpoints. Tokens expire after one hour.
- **Database**:
    - Uses MongoDB with Mongoose for object-document mapping.
    - Separate schemas for `Blog` and `User` with relationships defined (a user can have multiple blogs, a blog belongs to one user).
- **Error Handling**:
    - Comprehensive custom error handling middleware for various error types (e.g., malformed IDs, validation errors, duplicate keys, JWT errors).
- **Testing**:
    - Integration tests for the API using Supertest and Node's built-in test runner.
    - Test environment setup, including a dedicated testing API endpoint for tasks like database reset.
    - Utility functions in `list_helper.js` for operations on blog lists, likely used in early testing exercises.

## Project Structure

- `app.js`: Configures the Express application, including middleware and routing.
- `index.js`: Entry point, starts the HTTP server.
- `controllers/`: Contains route handlers for different API resources:
    - `blogs.js`: Handles blog-related operations.
    - `users.js`: Handles user registration and listing.
    - `login.js`: Handles user login and token generation.
    - `testing.js` (for test environment): Provides endpoints for test setup/teardown.
- `models/`: Defines Mongoose schemas and models:
    - `blog.js`: Schema for blog posts.
    - `user.js`: Schema for users, including password hashing.
- `utils/`: Utility modules:
    - `config.js`: Manages environment variables (MongoDB URI, port, JWT secret).
    - `logger.js`: Simple logging utility.
    - `middleware.js`: Custom middleware for request logging, unknown endpoints, error handling, and user extraction from JWT.
    - `list_helper.js`: Contains various helper functions for processing lists of blogs.
- `tests/`: Contains API tests and test helpers.
- `.env`: (Not in repo, but implied by `dotenv` usage) For storing environment variables like MongoDB URI and JWT secret.

## API Endpoints

- **Auth**:
    - `POST /api/login`: Login a user, returns JWT.
- **Users**:
    - `GET /api/users`: List all users.
    - `POST /api/users`: Register a new user.
- **Blogs**:
    - `GET /api/blogs`: List all blogs.
    - `POST /api/blogs`: Create a new blog (requires token).
    - `PUT /api/blogs/:id`: Update a blog (requires token).
    - `DELETE /api/blogs/:id`: Delete a blog (requires token, user must own blog).
- **Testing** (only in `test` environment):
    - `POST /api/testing/reset`: Resets the database.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM library for MongoDB.
- **JWT (jsonwebtoken)**: For implementing token-based authentication.
- **bcrypt**: For hashing user passwords.
- **dotenv**: For managing environment variables.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **express-async-errors**: To simplify error handling in async route handlers.
- **Testing**:
    - **Node.js test runner** (`node --test`): For executing tests.
    - **Supertest**: For HTTP API testing.
- **ESLint**: For code linting.

## What was learned

- **Building a RESTful API with Express**: Defining routes, request handlers, and managing request/response cycles.
- **Database Interaction with Mongoose**: Defining schemas, models, and performing CRUD operations. Establishing relationships between models (User and Blog).
- **User Authentication with JWT**: Implementing user registration, login, and protecting routes using JWTs. Hashing passwords securely.
- **Middleware in Express**: Creating and using custom middleware for logging, error handling, and authentication (token extraction).
- **Structuring an Express Application**: Organizing code into controllers, models, utils, etc., for better maintainability.
- **Environment Variables**: Managing configuration for different environments (development, test, production).
- **Automated Testing**: Writing integration tests for an API, including setup and teardown, and testing various scenarios (success, failure, authorization).
- **Error Handling Strategies**: Implementing robust error handling for different types of errors.
- **Async/Await**: Effectively using async/await for cleaner asynchronous code.

## Navigation

- Back to [Part 4 Overview](../README.md)
- Next project: [Bloglist Frontend (Part 5)](../../part5/bloglist-frontend/README.md) (assuming this is the corresponding frontend)
- Previous project: None in this part (or link to Part 3 Overview).

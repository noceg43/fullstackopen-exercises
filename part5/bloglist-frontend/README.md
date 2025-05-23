# Project: Blog List Frontend

This project is a React-based frontend for the Blog List application. It interacts with the backend API developed in Part 4 to allow users to view, create, like, and delete blog posts. A major focus of this part is on testing the React application, including unit tests for components, integration tests for user interactions, and end-to-end tests.

## Features

- **User Authentication**:
    - Login form for users to authenticate.
    - User session (token) is stored in `localStorage`.
    - Logout functionality.
- **Blog Post Operations**:
    - View a list of all blog posts. Blogs are initially sorted by likes.
    - Expand/collapse blog entries to view details (URL, likes, creator).
    - Logged-in users can "like" blog posts.
    - Logged-in users can create new blog posts using a togglable form.
    - Logged-in users can delete blog posts they created (with confirmation).
- **Notifications**:
    - Displays feedback messages to the user for various actions (e.g., login success/failure, blog creation, errors).
- **Component Structure**:
    - `App.jsx`: Main application component.
    - `Blog.jsx`: Displays individual blog posts and handles interactions like liking, viewing details, and triggering deletion.
    - `BlogForm.jsx`: Form for creating new blog entries.
    - `Togglable.jsx`: Generic component to control the visibility of its children (used for the `BlogForm`).
- **Testing**:
    - **Unit/Component Tests**: Using Vitest and React Testing Library to test individual components and their logic (e.g., `Blog` component rendering, form submissions).
    - **End-to-End (E2E) Tests**: Using Playwright to test user workflows across the application (e.g., logging in, creating a blog, liking a blog).

## Project Structure

- `src/App.jsx`: Main application component, handles state management for user, blogs, and notifications.
- `src/components/`: Contains React components:
    - `Blog.jsx`: Renders a single blog post.
    - `BlogForm.jsx`: Form for creating new blogs.
    - `Togglable.jsx`: Component for hiding/showing content.
- `src/services/`: Modules for backend communication:
    - `blogs.js`: Handles CRUD operations for blogs via API calls.
    - `login.js`: Handles user login API calls.
- `tests/`: (Directory not explicitly listed but implied by Playwright config) Contains Playwright E2E test files.
- `playwright.config.js`: Configuration file for Playwright E2E tests.
- `vite.config.js` & `vitest.config.js` (implied by `package.json`): Configurations for Vite and Vitest.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
  - React Hooks (`useState`, `useEffect`).
- **Vite**: Frontend build tool and development server.
- **Axios**: For making HTTP requests to the backend API.
- **PropTypes**: For runtime type checking of props in React components.
- **Testing Stack**:
    - **Vitest**: Test runner for unit and integration tests.
    - **React Testing Library**: Utilities for testing React components.
    - **@testing-library/user-event**: Simulates user interactions.
    - **@testing-library/jest-dom**: Custom Jest matchers for DOM elements.
    - **Playwright**: Framework for end-to-end testing.
    - **JSDOM**: For running tests in a simulated DOM environment without a browser (used by Vitest).
- **ESLint**: For code linting.

## What was learned

- **Frontend Authentication**: Implementing login, logout, and managing user sessions (tokens) in a React application.
- **Interacting with a REST API**: Performing CRUD operations from the frontend, handling authenticated requests.
- **Component Testing**: Writing unit tests for React components to verify their rendering and behavior in isolation using Vitest and React Testing Library.
- **User Interaction Testing**: Simulating user events (clicks, form input) to test component interactions.
- **End-to-End Testing**: Writing E2E tests with Playwright to verify complete application workflows from the user's perspective.
- **Test Configuration**: Setting up and configuring testing frameworks (Vitest, Playwright).
- **Prop Validation**: Using `PropTypes` to ensure components receive props of the correct type.
- **Code Quality**: Using ESLint for maintaining code quality and consistency.
- **Advanced State Management**: Handling more complex state interactions involving user authentication, lists of data, and notifications.
- **Modular Design**: Structuring the application with reusable components and service modules.

## Navigation

- Back to [Part 5 Overview](../README.md)
- Next project: [Query Anecdotes (Part 6)](../../part6/query-anecdotes/README.md) (assuming this is the next logical project)
- Previous project: [Blog List Backend (Part 4)](../../part4/blog/README.md)

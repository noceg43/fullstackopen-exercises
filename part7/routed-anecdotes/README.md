# Project: Routed Anecdotes

This project enhances the anecdotes application by introducing client-side routing using React Router. It allows users to navigate between different views: a list of anecdotes, details of a single anecdote, a form to create new anecdotes, and an about page. The project also serves as a foundation for understanding custom hooks by demonstrating local state management in forms.

## Features

- **Client-Side Routing**:
    - Uses `react-router-dom` for SPA navigation.
    - Main views include:
        - Home page (`/`): Lists all anecdotes.
        - Anecdote detail page (`/anecdotes/:id`): Shows details of a specific anecdote.
        - Create new page (`/create`): Provides a form to add new anecdotes.
        - About page (`/about`): Displays information about the application.
    - Navigation is facilitated by a `Menu` component using `Link`.
    - Programmatic navigation is used via `useNavigate` after creating an anecdote.
    - URL parameters are read using `useMatch` to display specific anecdotes.
- **Anecdote Management (Client-Side)**:
    - Anecdotes are stored in the `App` component's state (`useState`).
    - Users can add new anecdotes through the "create new" form.
    - Voting for anecdotes (functionality `vote(id)` is present in `App.js` but not directly wired to any UI element in the provided `App.jsx` code for this view).
- **Form Handling**:
    - The `CreateNew` component manages its own state for content, author, and info fields. This demonstrates the pattern from which a `useField` custom hook could be abstracted.
- **Notifications**:
    - A simple notification system displays messages (e.g., after creating an anecdote) for a few seconds.

## Project Structure

- `src/App.jsx`:
    - Main application component.
    - Sets up React Router routes (`<Routes>`, `<Route>`).
    - Manages the global state for anecdotes and notifications.
    - Contains logic for adding new anecdotes.
    - Defines sub-components like `Menu`, `AnecdoteList`, `Anecdote`, `About`, `Footer`, and `CreateNew`.

## Technologies Used

- **React**: JavaScript library for building the user interface.
  - React Hooks (`useState`, `useMatch`, `useNavigate`).
- **React Router DOM (`react-router-dom`)**: For client-side routing in a React application.
- **Vite**: Frontend build tool and development server.
- **PropTypes**: For prop validation (though not extensively used in the provided `App.jsx`).
- **ESLint**: For code linting.

## What was learned

- **React Router Fundamentals**:
    - Setting up routes using `<Routes>` and `<Route>`.
    - Creating navigation links with `<Link>`.
    - Programmatic navigation with `useNavigate`.
    - Reading URL parameters with `useMatch` (or `useParams` in other common patterns).
- **Structuring a Multi-Page SPA**: Organizing components into different views and navigating between them.
- **Component Composition**: Building the UI from smaller, reusable components.
- **Form State Management**: Handling form input values and submission within a React component.
- **Foundation for Custom Hooks**: Understanding how to encapsulate stateful logic within a component (like in `CreateNew`), which can then be extracted into a reusable custom hook (e.g., a `useField` hook for managing form inputs, often the next step in the course).
- **Client-Side State Management**: Managing application data (anecdotes, notifications) using React's built-in `useState` hook for this client-rendered version.

## Navigation

- Back to [Part 7 Overview](../README.md)
- Next project: (End of planned core exercises, could link to overall course overview or a potential Part 8 if it existed) - Tentatively, [Course Overview](../../README.md)
- Previous project: [Unicafe Redux (Part 6)](../../part6/unicafe-redux/README.md)

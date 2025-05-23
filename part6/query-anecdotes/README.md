# Project: Anecdotes with React Query

This project refactors an earlier anecdotes application to use React Query for managing server state (fetching, creating, and updating anecdotes). It also implements a notification system using React Context and a reducer. The backend is mocked using `json-server`.

## Features

- **Display Anecdotes**: Fetches and displays a list of anecdotes from a server.
- **Sort Anecdotes**: Anecdotes are automatically sorted by the number of votes in descending order.
- **Vote for Anecdotes**: Users can vote for an anecdote. Votes are persisted to the server, and the UI updates optimistically.
- **Create New Anecdotes**: Users can add new anecdotes through a form.
- **Server State Management with React Query**:
    - `useQuery` hook to fetch anecdote data, handling loading and error states.
    - `useMutation` hook to create new anecdotes and update existing ones (voting).
    - `QueryClient` is used to manage query caches and perform optimistic updates.
    - Specific query options like `refetchOnWindowFocus: false` and `retry: false` are used.
- **Client-Side Notification System**:
    - Uses React Context (`NotificationContext`) and a reducer (`notificationReducer`) to manage notification messages.
    - Custom hook (`useShowNotification`) provides an easy way to trigger notifications.
    - Notifications are displayed for actions like voting or creating anecdotes.
- **Mock Backend**:
    - `json-server` is used to provide a RESTful API for anecdotes, using `db.json` as the data source.
    - The application interacts with endpoints at `http://localhost:3001/anecdotes`.

## Project Structure

- `src/App.jsx`: Main application component, orchestrates UI and uses React Query hooks.
- `src/components/`:
    - `AnecdoteForm.jsx`: Form for creating new anecdotes (uses `useMutation`).
    - `Notification.jsx`: Displays notification messages (consumes `NotificationContext`).
- `src/requests.js`: Contains functions for making API calls (GET, POST, PUT) to the anecdotes server using `axios`.
- `src/NotificationContext.jsx`: Defines the React Context and reducer for the notification system.
- `src/NotificationHooks.js`: (Assumed) Contains custom hooks related to the notification system, like `useShowNotification`.
- `db.json`: Data file for `json-server`.
- `server.js`: (Assumed) Script to run `json-server` for the anecdotes data.

## Technologies Used

- **React**: JavaScript library for building the user interface.
  - React Hooks (`useState`, `useEffect`, `useContext`, `useReducer`).
- **React Query (@tanstack/react-query)**: For managing server state (fetching, caching, updates, etc.).
- **Axios**: For making HTTP requests to the mock backend.
- **`json-server`**: To simulate a backend API.
- **Vite**: Frontend build tool and development server.
- **ESLint**: For code linting.

## What was learned

- **Fundamentals of React Query**:
    - Using `useQuery` for data fetching, including handling loading/error states and configuring caching behavior.
    - Using `useMutation` for data creation and updates.
    - Understanding the role of `QueryClient` for interacting with the cache and performing optimistic updates.
- **Server State vs. Client State**: Distinguishing between data that resides on the server (managed by React Query) and UI state that can be managed locally (e.g., notifications with Context/reducer).
- **React Context and Reducer**: Implementing a global notification system using `createContext`, `useContext`, and `useReducer`.
- **Custom Hooks**: Creating custom hooks (e.g., `useShowNotification`) to encapsulate and reuse stateful logic.
- **Optimistic UI Updates**: Updating the UI immediately after a mutation, before confirming server success, to improve perceived performance.
- **Interacting with a Mock API**: Using `json-server` to simulate a backend during development.
- **Error Handling**: Managing errors from API calls, both within React Query and for user notifications.

## Navigation

- Back to [Part 6 Overview](../README.md)
- Next project: [Redux Anecdotes](./redux-anecdotes/README.md)
- Previous project: [Bloglist Frontend (Part 5)](../../part5/bloglist-frontend/README.md)

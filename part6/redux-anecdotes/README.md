# Project: Anecdotes with Redux

This project implements an anecdote application using React and Redux Toolkit for state management. Users can view, create, and vote for anecdotes. The application also features a notification system and filtering capabilities, all managed through the Redux store. Data is persisted to a mock backend provided by `json-server`.

## Features

- **Display Anecdotes**: Fetches and lists anecdotes. Anecdotes are typically sorted by votes.
- **Create Anecdotes**: Users can add new anecdotes via a form.
- **Vote for Anecdotes**: Users can vote for their favorite anecdotes.
- **Filter Anecdotes**: Users can filter the displayed anecdotes based on a search term.
- **Notifications**: Displays messages to the user after actions like voting.
- **State Management with Redux Toolkit**:
    - Centralized store manages the state for anecdotes, notifications, and filters.
    - `createSlice` is used to define reducers and actions for each state slice.
    - Asynchronous operations (fetching, creating, updating data) are handled using Redux Thunks.
- **Mock Backend**:
    - `json-server` serves anecdote data from `db.json` at `http://localhost:3001/anecdotes`.

## Project Structure

- `src/App.jsx`: Main application component, dispatches initial data loading action.
- `src/components/`:
    - `AnecdoteList.jsx`: Displays the list of anecdotes, allows voting. Connects to Redux store to get anecdotes and filter state.
    - `AnecdoteForm.jsx`: Form for creating new anecdotes. Dispatches actions to add anecdotes.
    - `Notification.jsx`: Displays notification messages from the Redux store.
    - `Filter.jsx`: Input field to filter anecdotes. Dispatches actions to update filter state.
- `src/store.js`: Configures and exports the Redux store using `configureStore` from Redux Toolkit. Combines all reducers.
- `src/reducers/`: Contains Redux slice reducers:
    - `anecdoteReducer.js`: Manages anecdote data (fetching, adding, voting). Includes async thunks for API interactions.
    - `notificationReducer.js`: Manages notification messages and visibility. Includes an async thunk for timed notifications.
    - `filterReducer.js`: Manages the filter string state.
- `src/services/anecdotes.js`: Module for interacting with the `json-server` API using `axios` (GET, POST, PATCH).
- `db.json`: Data file for `json-server`.

## Technologies Used

- **React**: JavaScript library for building the UI.
  - `react-redux` for integrating React with Redux (`useDispatch`, `useSelector`).
- **Redux Toolkit (@reduxjs/toolkit)**: The recommended way to write Redux logic. Simplifies store setup, reducer creation, and immutable updates.
- **Redux Thunk**: Middleware for handling asynchronous logic in Redux (included by default in Redux Toolkit).
- **Axios**: For making HTTP requests to the mock backend.
- **`json-server`**: To simulate a backend API.
- **Vite**: Frontend build tool and development server.
- **ESLint**: For code linting.

## What was learned

- **Core Redux Concepts with Redux Toolkit**:
    - Setting up a Redux store with `configureStore`.
    - Defining state slices, reducers, and actions using `createSlice`.
    - Dispatching actions from components using `useDispatch`.
    - Subscribing to store state in components using `useSelector`.
- **Managing Asynchronous Operations**: Using Redux Thunks to handle API calls for fetching, creating, and updating data, and then dispatching actions based on the results.
- **Structuring Redux State**: Organizing state into logical slices (anecdotes, notifications, filters) for better maintainability.
- **Combining Reducers**: Using `configureStore` to combine multiple reducers into a single root reducer.
- **Middleware (Redux Thunk)**: Understanding how middleware allows for side effects and asynchronous logic within Redux.
- **Immutable Updates**: Redux Toolkit's `createSlice` uses Immer internally, allowing for "mutative" syntax in reducers while ensuring immutable updates.
- **Application Data Flow in Redux**: Tracing how user interactions dispatch actions, which are processed by reducers to update the state, leading to UI re-renders.

## Navigation

- Back to [Part 6 Overview](../README.md)
- Next project: [Unicafe Redux](./unicafe-redux/README.md)
- Previous project: [Query Anecdotes](./query-anecdotes/README.md)

# Project: Unicafe Revisited with Redux

This project refactors the Unicafe feedback application from Part 1 to use Redux for state management. It demonstrates the fundamental principles of Redux (store, actions, reducers) in a simple client-side application.

## Features

- **Feedback Collection**: Buttons for "good", "ok", and "bad" feedback.
- **Statistics Display**: Shows the count for each feedback type.
- **Reset Functionality**: A button to reset all statistics to zero.
- **State Management with Redux**:
    - A single Redux store manages the state of `good`, `ok`, and `bad` counts.
    - A reducer (`counterReducer`) handles actions to increment counts or reset them.
    - Actions are plain JavaScript objects with a `type` property (e.g., `{ type: 'GOOD' }`).
- **Direct Store Interaction**:
    - The `App` component directly dispatches actions to the store using `store.dispatch()`.
    - It reads the current state directly via `store.getState()`.
    - It manually subscribes to store updates using `store.subscribe(renderApp)` to trigger re-renders.
    - This implementation does **not** use the `react-redux` library.

## Project Structure

- `src/main.jsx`:
    - Creates the Redux store using `createStore` from the `redux` library.
    - Defines the main `App` component, which includes event handlers for dispatching actions and rendering state.
    - Subscribes to store updates to re-render the application.
- `src/reducer.js`:
    - Defines the `initialState` for the feedback counts.
    - Implements the `counterReducer` function, which updates the state based on dispatched actions (`GOOD`, `OK`, `BAD`, `ZERO`).
- `src/reducer.test.js`: (Assumed from `package.json` dependencies) Contains Jest tests for the `counterReducer`, likely using `deep-freeze` to ensure immutability.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Redux**: For client-side state management (using the core `redux` library).
- **Vite**: Frontend build tool and development server.
- **Jest**: (Assumed for testing) JavaScript testing framework, used for testing the reducer.
- **Deep Freeze**: Utility to ensure state immutability during tests.

## What was learned

- **Core Redux Principles**:
    - **Store**: Understanding the concept of a single source of truth for application state.
    - **Actions**: Defining plain JavaScript objects that describe an intention to change state.
    - **Reducers**: Writing pure functions that take the current state and an action, and return a new state.
    - **Dispatching**: Using `store.dispatch(action)` to trigger state changes.
    - **Subscribing**: Using `store.subscribe(listener)` to react to state changes.
- **Manual React-Redux Connection**: How React components can interact with a Redux store directly without `react-redux` (though this is not the typical approach in larger applications).
- **State Immutability**: The importance of reducers returning new state objects instead of mutating the existing state (tests with `deep-freeze` help enforce this).
- **Basic Reducer Testing**: Writing unit tests for Redux reducers to ensure they handle actions correctly and maintain state immutability.
- **Contrast with `useState`**: Understanding how Redux provides a more structured way to manage state compared to React's built-in `useState` hook, especially for state that might be shared across many components (though in this simple example, the benefits are less pronounced).

## Navigation

- Back to [Part 6 Overview](../README.md)
- Next project: [Routed Anecdotes (Part 7)](../../part7/routed-anecdotes/README.md)
- Previous project: [Redux Anecdotes](./redux-anecdotes/README.md)

# Exercise: Phonebook Frontend (for Node.js Backend)

This application is the React frontend for the Phonebook. It's designed to communicate with a dedicated Node.js and Express backend server that provides a REST API for managing phonebook entries (the backend itself appears to be missing from this repository but is a standard part of the Full Stack Open Part 3 curriculum).

This version of the frontend focuses on interacting with a live backend, handling asynchronous operations, and displaying potential errors from the backend.

## What was done

- **Connects to a Live Backend**:
    - The application uses a service module (`src/services/persons.js`) to make HTTP requests (likely using `axios`) to a backend API (typically at endpoints like `/api/persons`).
    - It fetches the initial list of persons from the backend on load (`useEffect` hook).
- **Add New Person**:
    - Users can submit a new name and number.
    - The data is sent to the backend via a `POST` request.
    - After successfully adding a person, the frontend re-fetches the entire list of persons to display the updated list.
- **Error Display**:
    - An `ErrorText` component is used to display error messages received from the backend (e.g., validation errors like "name too short" or "number invalid").
- **Filtering**:
    - Client-side filtering of displayed persons by name is available.
- **Missing Features (compared to `json-server` version or typical full backend integration):**
    - This specific version of `App.jsx` does not explicitly include functionality for *deleting* or *updating* entries, focusing primarily on fetching and adding. These would typically be added in later stages of Part 3.

## Technologies Used

- **React**: For building the dynamic user interface (using Hooks like `useState`, `useEffect`).
- **JavaScript (ES6+)**: For application logic.
- **`axios` (assumed)**: Likely used within `src/services/persons.js` for making HTTP requests to the backend.
- **Vite**: As the frontend build tool and development server.
- **HTML/JSX & CSS**: For structuring and styling the application.

## What was learned

- **Interacting with a Live Node.js Backend**: Making API calls (GET, POST) from a React application to a separate backend server.
- **Handling Backend Responses**: Processing data received from the backend and updating the frontend state.
- **Error Handling from Backend**: Capturing and displaying error messages sent by the backend (e.g., validation errors contained in `error.response.data.error`).
- **Structuring Frontend Services**: Using a service module (`persons.js`) to centralize API communication logic.
- **State Synchronization**: Re-fetching data after mutations (like adding a person) to ensure the frontend reflects the latest state from the server.
- **Development Workflow with Separate Frontend and Backend**: Understanding how to develop and run a React frontend that relies on an external backend API.

## Navigation

- Back to [Part 3 Overview](../README.md)
- Next Exercise: (Depends on whether a Part 3 backend project exists or if we move to Part 4) - Tentatively, [Part 4 Overview](../../part4/README.md)
- Previous exercise: [Phonebook Frontend (json-server)](../phonebook/README.md)

This README assumes the backend is the typical Part 3 Node.js/Express/MongoDB phonebook backend taught in Full Stack Open.

# Exercise: Phonebook Frontend with JSON Server

This exercise enhances the Part 2 Phonebook application by integrating it with a mock backend powered by `json-server`. The application allows users to manage a list of contacts, persisting changes to a `db.json` file via HTTP requests.

## What was done

- **CRUD Operations**: The application now performs full Create, Read, Update, and Delete (CRUD) operations for phonebook entries.
    - **Create (POST)**: New persons are added to the `db.json` via a `POST` request.
    - **Read (GET)**: The initial list of persons is fetched from `json-server` when the application loads using a `GET` request.
    - **Update (PUT)**: If a user tries to add a name that already exists, they are prompted to update the existing person's number. This triggers a `PUT` request.
    - **Delete (DELETE)**: Users can delete persons, which sends a `DELETE` request to `json-server`.
- **Interaction with `json-server`**:
    - The `package.json` includes a script `npm run server` to start `json-server` on port 3001, watching `db.json`.
    - All HTTP requests are made to the `json-server` endpoints (e.g., `/persons`).
- **Service Module**: API interactions are encapsulated in a dedicated service module (`src/services/persons.js`), which uses `axios` for HTTP requests.
- **Notifications**: A `Notification` component displays messages to the user upon successful operations (e.g., "Added Arto Hellas") or errors (e.g., "Information of Arto Hellas has already been deleted from the server"). Notifications disappear after a few seconds.
- **Error Handling**: Basic error handling is implemented, such as when trying to update a contact that no longer exists on the server.
- **User Experience**: Confirmation dialogs (`window.confirm`) are used for delete operations and for updating existing entries.

## Technologies Used

- **React**: For building the dynamic user interface (using Hooks like `useState`, `useEffect`).
- **JavaScript (ES6+)**: For application logic, including API interactions and data manipulation.
- **`json-server`**: To provide a RESTful mock API based on the `db.json` file.
- **`axios`**: For making HTTP requests from the React application to `json-server`.
- **Vite**: As the frontend build tool and development server.
- **HTML/JSX & CSS**: For structuring and styling the application.

## What was learned

- **Integrating React with a (Mock) Backend**: How to connect a React frontend to a REST API for data persistence.
- **Using `json-server`**: Setting up and using `json-server` to simulate a backend API for development and testing.
- **CRUD Operations from Frontend**: Implementing functions to perform GET, POST, PUT, and DELETE requests using `axios`.
- **Service Abstraction**: Encapsulating API call logic into a separate service module for cleaner code and better maintainability.
- **State Management with Asynchronous Data**: Handling state updates after asynchronous API calls (e.g., updating the list of persons after adding or deleting one).
- **User Feedback with Notifications**: Implementing a system to provide users with feedback about the outcome of their actions.
- **Error Handling for API Requests**: Managing potential errors from API calls (e.g., a resource not found during an update).
- **useEffect for Initial Data Load**: Using `useEffect` to fetch initial data when the component mounts.
- **Client-side vs. Server-side Data**: Understanding that the "source of truth" for data is now the (mock) server, and the client needs to stay in sync.

## Navigation

- Back to [Part 3 Overview](../README.md)
- Next exercise: [Phonebook Backend](../phonebook-frontend/README.md) (This link assumes `phonebook-frontend` is the actual backend, adjust if incorrect after inspecting it)
- Previous exercise: [MongoDB Command-Line](./mongodb/README.md)

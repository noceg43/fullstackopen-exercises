# Exercise: Anecdotes

This exercise involves building a React application to display random software development anecdotes. Users can view anecdotes one at a time, vote for their favorite, and see which anecdote has received the most votes.

## What was done

- A list of anecdotes is stored in the application.
- A button allows users to display the next random anecdote.
- A voting button allows users to vote for the currently displayed anecdote.
- The application displays the number of votes for the current anecdote.
- The application also displays the anecdote with the highest number of votes.

## Technologies Used

- **React**: For building the user interface with components.
  - React Hooks (`useState`) are used for managing the state of the selected anecdote and the votes.
- **JavaScript (ES6+)**: For the application logic.
- **Vite**: As the frontend build tool and development server.
- **HTML/CSS**: For structuring and basic styling (though not explicitly detailed in the `App.jsx`, it's part of any web app).

## What was learned

- **React Functional Components**: How to create and use functional components.
- **State Management**: Using the `useState` hook to manage component state (e.g., the currently selected anecdote, vote counts).
- **Event Handling**: Implementing functions to respond to user interactions like button clicks (for showing the next anecdote and for voting).
- **Conditional Rendering**: Displaying different content based on the application's state (e.g., showing the anecdote with the most votes).
- **Array Manipulation**: Working with arrays in JavaScript to store anecdotes, manage votes, and find the anecdote with the maximum votes.
- **Component Composition**: Building the UI by combining smaller, reusable components (e.g., `Button`, `Anecdote`).

## Navigation

- Back to [Part 1 Overview](../README.md)
- Next exercise: [Course Information](../courseinfo/README.md) (assuming this is the next logical exercise)
- Previous exercise: None in this part, or link to a general part overview.

(Note: Adjust "Next exercise" and "Previous exercise" if the order is different. For the first exercise, "Previous" could link back to the Part 1 Overview. For the last, "Next" could do the same or indicate it's the end of the part.)

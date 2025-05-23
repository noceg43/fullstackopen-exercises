# Exercise: Unicafe Feedback

This exercise involves building a React application for collecting customer feedback for a fictional cafe named "Unicafe". Users can submit their feedback (good, neutral, or bad), and the application displays statistics based on the collected data.

## What was done

- Three buttons ("good", "neutral", "bad") allow users to submit feedback.
- The application keeps track of the number of clicks for each feedback type.
- Statistics are displayed, including:
    - The count for each feedback type.
    - The total number of feedback entries.
    - The average score (good = 1, neutral = 0, bad = -1).
    - The percentage of positive feedback.
- If no feedback has been given, a message "No feedback given" is displayed instead of statistics.
- The UI is structured into reusable components (`Button`, `StatisticLine`, `Statistics`).

## Technologies Used

- **React**: For the user interface, using functional components and state management.
  - **`useState` Hook**: To manage the counts of good, neutral, and bad feedback.
- **JavaScript (ES6+)**: For application logic, including calculations for statistics.
- **Vite**: As the frontend build tool and development server.
- **HTML/JSX**: For structuring the components and displaying information.

## What was learned

- **State Management with Multiple Variables**: Using `useState` for several pieces of state within a single component.
- **Component Reusability**: Creating generic components like `Button` (for feedback submission) and `StatisticLine` (for displaying individual statistics) that can be used multiple times with different props.
- **Passing Callbacks as Props**: Event handlers defined in the parent component (`App`) are passed as props to child components (`Button`) to update the state.
- **Conditional Rendering**: Displaying different UI elements based on the state (e.g., showing "No feedback given" if all counts are zero, otherwise showing the statistics table).
- **Derived State/Computed Values**: Calculating statistics (total, average, positive percentage) based on the primary state variables (good, neutral, bad counts) during rendering.
- **Data Flow**: Understanding how data (feedback counts) and actions (clicking feedback buttons) flow through the component tree.
- **Basic UI Structuring**: Organizing the application into logical components for better readability and maintainability.

## Navigation

- Back to [Part 1 Overview](../README.md)
- Previous exercise: [Course Information](../courseinfo/README.md)
- Next exercise: None for this part. (Link to Part 2 or main overview if applicable)

This completes Part 1.

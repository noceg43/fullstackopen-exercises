# Exercise: Course Information (Part 2 - Refactored)

This exercise refactors and extends the "Course Information" application from Part 1. The primary focus is on rendering collections of data, component modularity, and using JavaScript's array methods more effectively. The application now displays information for multiple courses.

## What was done

- The application can now render multiple courses, not just one.
- The data structure in `App.jsx` is an array of `course` objects.
- A dedicated `Course` component (`src/components/Course.jsx`) was created to encapsulate the logic for displaying a single course. This component includes:
    - `Header`: Displays the course name.
    - `Content`: Maps through the course parts and renders a `Part` component for each.
    - `Part`: Displays the name and number of exercises for a single part.
    - `Total`: Calculates and displays the total number of exercises for the course using the `reduce` method.
- The main `App` component now simply maps over the `courses` array and renders a `Course` component for each course, passing the course data as a prop.
- Unique `key` props are used when rendering lists of `Course` components and `Part` components.

## Technologies Used

- **React**: For building the user interface with functional components.
- **JavaScript (ES6+)**: For data structures and application logic.
  - **`map()` method**: Used extensively for transforming arrays of data into arrays of React elements.
  - **`reduce()` method**: Used in the `Total` component to sum up the number of exercises.
- **Vite**: As the frontend build tool and development server.
- **HTML/JSX**: For structuring the components' output.

## What was learned

- **Rendering Collections with `map()`**: Mastering the use of the `map()` method to iterate over arrays and generate lists of React components. This is a fundamental pattern in React for displaying dynamic lists.
- **The Importance of `key` Props**: Understanding why unique `key` props are necessary when creating lists of elements in React, to help React identify which items have changed, are added, or are removed.
- **Component Modularity and Reusability**: Refactoring the application by creating a `Course` component that encapsulates all the rendering logic for a single course. This makes the `App` component cleaner and the `Course` component reusable if needed elsewhere.
- **Improved Data Handling**: Working with more complex data (an array of courses, each with an array of parts).
- **Functional Programming with Array Methods**: Effectively using JavaScript's `map` and `reduce` array methods for data transformation and aggregation, leading to more concise and readable code.
- **Project Structure**: Organizing components into subdirectories (e.g., `src/components/`) for better maintainability as applications grow.
- **Props for Component Configuration**: Passing complex objects (like a `course` object) as props to configure components.

## Navigation

- Back to [Part 2 Overview](../README.md)
- Previous exercise: [Countries](../countries/README.md)
- Next exercise: [Phonebook](../phonebook/README.md)

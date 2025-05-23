# Exercise: Course Information

This exercise is one of the first introductions to React. It focuses on breaking down a UI into components, passing data using props, and rendering dynamic content. The application displays information about a course, including its name, its parts, and the total number of exercises.

## What was done

- The main `App` component holds the course data (name and parts).
- `Header` component: Displays the course name.
- `Content` component: Renders the parts of the course. It further uses a `Part` component for each part.
- `Part` component: Displays the name and number of exercises for a single course part.
- `Total` component: Calculates and displays the total number of exercises.
- Data is passed down from `App` to child components using props.

## Technologies Used

- **React**: For building the user interface with functional components.
- **JavaScript (ES6+)**: For defining components and managing data (course information).
- **Vite**: As the frontend build tool and development server.
- **HTML/JSX**: For structuring the components' output.

## What was learned

- **React Components**: Understanding how to create simple, reusable functional components (`Header`, `Content`, `Part`, `Total`).
- **Props**: Learning how to pass data from a parent component to child components using `props`. This is fundamental for component communication and data flow in React.
- **Component Composition**: How to build more complex UIs by nesting components within each other. For example, `App` renders `Header`, `Content`, and `Total`, and `Content` renders multiple `Part` components.
- **Dynamic Rendering**: Displaying data that is stored in JavaScript objects and arrays within the React components.
- **Code Organization**: Structuring the application into logical pieces, making it easier to understand and maintain.
- **Basic Data Handling**: Iterating over an array of parts (implicitly in `Content` and explicitly in `Total`) to display information and calculate sums.

## Navigation

- Back to [Part 1 Overview](../README.md)
- Previous exercise: [Anecdotes](../anecdotes/README.md)
- Next exercise: [Unicafe](../unicafe/README.md)

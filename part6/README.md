# Part 6: State Management

This part of the course explores advanced state management techniques in React applications, moving beyond component-level state (`useState`) and prop drilling. It introduces powerful libraries designed to handle complex application-wide state.

Key topics and libraries covered include:

- **Redux**:
    - Core Redux principles: store, actions, reducers.
    - Using Redux with React (`react-redux`).
    - Asynchronous operations with Redux Thunk or Redux Saga.
    - Structuring Redux state and logic.
- **React Query**:
    - Server state management: fetching, caching, synchronizing, and updating server data.
    - Managing loading and error states for asynchronous data.
    - Optimistic updates and data invalidation.
- **Context API with Reducers**: While not a full-fledged library like Redux, it's often discussed as a lighter-weight alternative for certain state management scenarios.

The exercises in this part involve refactoring previous applications or building new ones using these state management libraries.

## Exercises

- [Query Anecdotes](./query-anecdotes/README.md) (using React Query)
- [Redux Anecdotes](./redux-anecdotes/README.md) (using Redux)
- [Unicafe Redux](./unicafe-redux/README.md) (refactoring Unicafe with Redux)

Navigate back to [Course Overview](../../README.md)

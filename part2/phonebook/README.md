# Exercise: Phonebook (Client-Side)

This exercise involves building a client-side phonebook application. Users can add new contacts (name and number), view their existing contacts, and filter the contacts by name. This version focuses on React fundamentals, form handling, and client-side data manipulation.

## What was done

- **Add New Person**: A form allows users to input a name and a phone number.
    - Basic validation: The save button is disabled if either field is empty.
    - Duplicate names are not allowed; an alert is shown if the user tries to add an existing name.
    - New persons are added to a list stored in the application's state.
- **Display Persons**: The list of persons (name and number) is displayed.
- **Filter Persons**: An input field allows users to filter the displayed list of persons by name in real-time. The filter is case-insensitive.
- **Component Structure**: The application is broken down into several components:
    - `App`: The main component that manages state and orchestrates other components.
    - `Filter`: Displays the search filter input.
    - `PersonForm`: Renders the form for adding new persons.
    - `Persons`: Displays the list of phonebook entries.
- Initial data is hardcoded within the `App` component.

## Technologies Used

- **React**: For building the user interface.
  - **`useState` Hook**: Extensively used to manage the list of persons, the values of input fields (new name, new number, filter text).
- **JavaScript (ES6+)**: For application logic, including adding persons, filtering, and handling duplicates.
- **Vite**: As the frontend build tool and development server.
- **HTML/JSX**: For structuring the application's views.

## What was learned

- **Controlled Components and Forms**: Managing form inputs (for adding persons and filtering) using React state.
- **State Management**: Handling and updating arrays in state (e.g., adding a new person to the `persons` array).
- **Event Handling**: Implementing `onChange` handlers for input fields and `onSubmit` for the form.
- **Data Validation and Error Handling**: Basic client-side validation, such as checking for duplicate names and disabling buttons.
- **Client-Side Filtering**: Implementing logic to filter a list of data based on user input.
- **Component Composition**: Breaking down the application into smaller, reusable components (`Filter`, `PersonForm`, `Persons`), each with a specific responsibility.
- **Passing Data and Callbacks via Props**: Communicating between parent (`App`) and child components by passing state values and event handling functions.
- **Generating List Items**: Using `map` to render the list of persons and understanding the need for `key` props.

## Navigation

- Back to [Part 2 Overview](../README.md)
- Previous exercise: [Course Information (Part 2)](../courseinfo/README.md)
- Next exercise: None for this part. (Likely continued in Part 3 with backend integration)

This completes Part 2.

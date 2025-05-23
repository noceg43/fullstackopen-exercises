# Exercise: Country Information Lookup

This application allows users to search for information about different countries. It fetches data from the REST Countries API and dynamically displays results based on the user's search query.

## What was done

- The application fetches a list of all countries from `https://studies.cs.helsinki.fi/restcountries/api/all` when it first loads.
- A search input field allows users to type a country name.
- As the user types, the list of countries is filtered:
    - If more than 10 countries match the query, a message "Too many matches, specify another filter" is shown.
    - If 2 to 10 countries match, their names are listed. (Users might be able to click on a name to see details, depending on `CountryLine`'s implementation).
    - If exactly one country matches, detailed information for that country is displayed, including:
        - Name
        - Capital city
        - Area
        - Languages spoken
        - A picture of its flag
- An external service module (`services/countries.js`) is used to manage API calls with Axios.

## Technologies Used

- **React**: For building the dynamic user interface.
  - **`useState` Hook**: To manage the list of all countries, the current search text, and potentially other UI states.
  - **`useEffect` Hook**: To fetch the initial list of countries when the component mounts.
- **JavaScript (ES6+)**: For application logic, including filtering countries and handling API responses.
- **Axios**: For making HTTP requests to the external Countries API.
- **Vite**: As the frontend build tool and development server.
- **HTML/JSX**: For structuring the components and displaying country data.
- **CSS**: For styling (assumed, as it's a visual application).

## What was learned

- **Fetching External Data**: Using `useEffect` to load data from a third-party API when the application starts.
- **Asynchronous Operations**: Working with Promises returned by Axios and handling them to update component state.
- **API Service Modules**: Encapsulating API call logic into a separate JavaScript module for better organization.
- **Controlled Components & Forms**: Managing the search input field's value using `useState` and an `onChange` handler.
- **Dynamic Filtering**: Filtering a list of data in real-time based on user input.
- **Conditional Rendering**: Displaying different UI elements or messages based on the state of the data (e.g., number of search results).
- **Displaying Collections**: Rendering lists of items (country names).
- **Component Structure**: Breaking down the UI into manageable components (`Country`, `CountryLine`, `CountriesList`).
- **Error Handling/User Feedback**: Providing feedback to the user when search results are too broad.

## Navigation

- Back to [Part 2 Overview](../README.md)
- Next exercise: [Course Information (Part 2)](../courseinfo/README.md)
- Previous exercise: None in this part (or link to Part 1 Overview).

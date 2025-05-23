# Exercise: MongoDB Command-Line Tool (`mongo.js`)

This directory contains a Node.js script (`mongo.js`) that serves as a command-line interface to interact with a phonebook database hosted on MongoDB Atlas. It uses Mongoose for object-document mapping.

## What was done

The `mongo.js` script has two main functionalities based on the command-line arguments provided:

1.  **List all phonebook entries**:
    - If executed with just the MongoDB password: `node mongo.js <password>`
    - It connects to the database, fetches all entries from the `persons` collection, and prints them to the console.
2.  **Add a new phonebook entry**:
    - If executed with the password, a name, and a number: `node mongo.js <password> <name> <number>`
    - It connects to the database and adds a new person with the given name and number to the `persons` collection. It then prints a confirmation message.

A Mongoose schema (`personSchema`) defines the structure for entries (name and number).
The script handles database connection and ensures it's closed after the operation.

The `package.json` includes `mongoose` as a dependency. While `express` and `cors` are also listed, they are not directly used by the `mongo.js` script itself but might be intended for a related server application. The `dist` folder suggests a frontend build might also be associated with this backend data, though not directly part of this specific script's operation.

## Technologies Used

- **Node.js**: As the runtime environment for the script.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to define schemas and interact with the database.
- **MongoDB Atlas**: The cloud-hosted MongoDB database service where the `phoneBook` database is stored.
- **JavaScript**: For writing the script logic.

## What was learned

- **Connecting to MongoDB with Mongoose**: How to establish a connection to a remote MongoDB database (specifically Atlas) from a Node.js application using Mongoose.
- **Defining Mongoose Schemas and Models**: How to define a schema that specifies the structure of documents in a collection and create a Mongoose model from that schema.
- **Performing Basic CRUD Operations**:
    - **Create**: Adding new documents to a collection using `model.save()`.
    - **Read**: Fetching and listing all documents from a collection using `model.find({})`.
- **Handling Command-Line Arguments**: Using `process.argv` in Node.js to accept input from the command line and alter the script's behavior.
- **Asynchronous Operations in Node.js**: Working with Mongoose's Promise-based API to handle asynchronous database operations.
- **Database Connection Management**: The importance of opening and closing database connections appropriately.
- **Environment Variables/Configuration**: Implicitly, the need to handle sensitive data like database passwords securely (though here it's passed as a command-line argument, in real apps, environment variables are preferred).

## Navigation

- Back to [Part 3 Overview](../README.md)
- Next exercise: [Phonebook Backend](../phonebook/README.md)
- Previous exercise: None in this part (or link to Part 2 Overview).

# Junior Frontend Developer Assignment

## Overview

This assignment involves creating a React application using TypeScript and Redux Toolkit. The application fetches user data from the JSONPlaceholder API and displays it in a table with advanced filtering capabilities.

## Features

1. **Fetch All Users**
   - Retrieve a list of all users from the endpoint `GET /users` using JSONPlaceholder.
   
2. **Display Users in a Table**
   - Implement a responsive table with columns: `Name`, `Username`, `Email`, and `Phone`.

3. **Implement Advanced Filtering**
   - Add search input fields for each column.
   - Filter table data dynamically based on user input in real-time.

4. **State Management**
   - Utilize Redux Toolkit to manage application state, including user data and filter states.

5. **Type Safety**
   - Apply TypeScript comprehensively across the application to ensure type safety and reduce runtime errors.

6. **Design and Styling**
   - Design the table and input fields to be user-friendly and visually appealing.
   - Aim for a clean and effective user interface.
  
## Components

### Table
- **Description**: Displays the user data in a table with filtering options.

### UserItem
- **Description**: Represents a single user row in the table.

### Loader
- **Description**: Shows a loading spinner while data is being fetched.

## Redux Setup

### Users Slice (`src/redux/usersSlice.ts`)
- **Description**: Manages user data and filter states.

### Thunks (`src/redux/thunks.ts`)
- **Description**: Handles asynchronous actions to fetch user data from the API.

### Store Configuration (`src/redux/store.ts`)
- **Description**: Sets up the Redux store and combines reducers.

## Styles

### Table.module.css
- **Description**: Contains styles for the table and its components.

### UserItem.module.css
- **Description**: Styles for individual user rows.

### Loader.module.css
- **Description**: Styles for the loading spinner.

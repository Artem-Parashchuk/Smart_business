

## Overview

This assignment involves creating a React application using TypeScript and Redux Toolkit. The application fetches user data from the JSONPlaceholder API and displays it in a table with advanced filtering capabilities.

## Step start project
1. Clone repository 
- `git clone https://github.com/Artem-Parashchuk/smart-business.git`
2. Install all dependencies
- `npm install`
3. Start project
- `npm run dev`
## Requirements:

1. **Fetch All Users**
   - Use the endpoint GET /users from JSONPlaceholder to retrieve the list of all
users. Documentation: JSONPlaceholder
   
2. **Display Users in a Table**
   - Implement a responsive table with columns: `Name`, `Username`, `Email`, and `Phone`.

3. **Implement Advanced Filtering**
   - Add search input fields for each column (name, username, email, phone).
   - Ensure that the table dynamically filters results based on user input in these
fields, with real-time updates.

4. **State Management**
   - Use Redux to manage the application state, including user data and filter
states. You can choose between Classic Redux or Redux Toolkit for this task.

5. **Type Safety**
   - Apply TypeScript comprehensively across the entire web application to ensure
proper typing and reduce potential runtime errors. This includes all aspects of
the application’s functionality.

6. **Design and Styling**
   - Design the table and search inputs to be user-friendly and visually appealing. The styling
is up to you, aiming for a clean and effective user interface.
  
## Components
### Header
- **Description**: Includes logo and box-shadow in the bottom.
### Table
- **Description**: Displays the user data in a table with filtering options.
### TableHead
- **Description**: Includes columns` names and user search inputs.
### UserItem
- **Description**: Represents a single user row in the table.
### Loader
- **Description**: Shows a loading spinner while data is being fetched.
### ModalWindow
- **Description**: Includes all information about user.
## Overview
### Picture when Fetch All Users
![img1](https://github.com/user-attachments/assets/ad28ddb1-4469-4166-881f-5be06c707cd2)
### Picture when not found user
![img-notFound](https://github.com/user-attachments/assets/392acfde-439f-492b-bbf6-59b2e289a848)
### Picture when open modal window
![img-modalWindow](https://github.com/user-attachments/assets/7fab131c-a04d-4361-8bf8-495e99a66b83)

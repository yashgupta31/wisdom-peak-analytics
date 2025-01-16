
*************NexUser****************
Users Component-

This component renders a list of users with filtering, sorting, searching, and pagination functionalities. It also supports responsive design and a theme-based appearance.

Features

1. Search Functionality

Users can search by name.

Search queries persist across page reloads.

2. Sorting Options

Sort by default, ascending, or descending order.

3. Pagination

Displays users in a paginated format.

Configurable number of users per page.

4. Responsive Design

Adjusts layout based on screen width.

5. Theme Support

Supports light and dark themes.

6. User Card Navigation

Clicking on a user card navigates to the respective user's details page.

7. Single User Details

Displays detailed information for a specific user.

File Structure

Users/
├── Users.js
├── Users.css
└── SingleUser.jsx

Props and State Management

Props

No external props are passed to this component.

State

currentPage: Current page number for pagination.

searchQuery: Search query for filtering users by name.

sortOrder: Sorting order (default, ascending, descending).

singleUser: Holds the details of the currently selected user.

Redux

theme: Managed via Redux to toggle between light and dark themes.

users: User data fetched from the Redux store.

Dependencies

React: Component structure and state management.

@mui/material: UI components like TextField, Select, Pagination, Table, Button, IconButton.

Redux: State management for theme and user data.

react-router-dom: For navigation and handling query parameters.

axios: For potential API calls (user fetching is currently Redux-managed).

react-icons: For additional icons.

Implementation Details

1. Query Parameters

Utilizes useSearchParams to manage page, search, and sort query parameters.

Updates query parameters on state change.

2. Responsive Layout

Uses @mui/material's useMediaQuery for responsive styling.

3. Pagination

Displays a Pagination component.

Updates the current page on change.

4. Sorting

Sorting options are managed via the sortOrder state.

Applies string comparison to sort user names.

5. Filtering

Filters users based on the searchQuery value.

6. Styling

Custom CSS and Material-UI for consistent design.

7. Single User Details

Displays user details in SingleUser.jsx using a card layout with the following features:

Back button for navigation.

Dynamic rendering of user information (e.g., name, email, phone, company name, website).

Action buttons for calling and sending emails.

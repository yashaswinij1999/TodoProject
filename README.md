# TodoApp

---

This is a simple Todo application built using React, and Material-UI. It allows users to add, delete, toggle, and edit todo items in a responsive and user-friendly interface.

## Index

- [TodoApp](#todoapp)
  - [Index](#index)
    - [Getting Started](#getting-started)
    - [Key Features](#key-features)
    - [Components](#components)
    - [Technologies Used](#technologies-used)

### Getting Started

Follow these steps to run the Todo app locally:

1. Clone the repository: (if you have Git installed) or download the repository as a ZIP file and extract it.

   ```
   git clone https://github.com/yashaswinij1999/todo-project.git
   ```

2. Navigate to the project directory:
   ```
   cd todo-project
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and start the server to view the app.

### Key Features

- **Add Todos:** Users can add new tasks to their list by typing into an input field and hitting "Enter".
- **Delete Todos:** Each task can be deleted individually by clicking on a delete button associated with that task.
- **Toggle Completion:** Tasks can be marked as completed or undone by clicking on a checkbox or specific UI element.
- **EditTodo** - Each tasks can be edit individually by clicking on the edit button associated with that task.
- **Local Storage Integration:** The app uses local storage to persist the todo list data, ensuring that tasks are saved even when the page is refreshed.

### Components

The TodoApp consists of several components:

- **TodoForm:** Allows users to add new tasks to the list.
- **TodoList:** Displays the list of tasks and provides options to delete or toggle completion of each task.
- **TodoItem:** Represents an individual task in the list, showing task details and providing interaction options.
- **EditForm:** Allows the users to edit the task in the list.

### Technologies Used

- **Vite:** Frontend build tool for blazing fast development.
- **React:** The core framework used to build the application, providing a component-based architecture and state management.
- **Material-UI:** React components for faster and easier web development.
- **Local Storage:** Utilized to store todo list data locally in the browser.
- **CSS:** Basic CSS styles are applied to enhance the UI and provide a pleasant user experience.

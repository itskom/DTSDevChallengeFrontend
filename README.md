# Caseworker Task Manager — Frontend

## A responsive frontend application for managing caseworker tasks, built with Vite and React. This application allows users to create, view, update, delete, filter, and sort tasks efficiently.

View the live application at (https://dts-dev-challenge-frontend.vercel.app)

## Features

- **CRUD Operations:** Create, view, update, and delete tasks.
- **Task Sorting:** Sort tasks based on their due date.
- **Task Filtering:** Filter tasks by status (Pending / In Progress / Completed).
- **Pagination:** Load tasks incrementally using a "Load More" button.
- **User Feedback:** Display notifications after task actions (create, update, delete).
- **Responsive Design:** Adapts to various screen sizes using Bootstrap 5.
- **UI States:** Includes loading spinners during data fetching and empty state messages when no tasks are found.
- **Error Handling:** Handles and displays API communication errors.

---

## Tech Stack

- **Framework/Library:** React (with Vite for build tooling)
- **Styling:** Bootstrap 5
- **API Communication:** Native Fetch API
- **Deployment:** Vercel

---

## To get started on your system

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended - includes npm)
- [Git](https://git-scm.com/)
- A running instance of the corresponding [Backend API](https://dtsdevchallengebackend.onrender.com) (expected at `http://localhost:3000` by default).

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/itskom/DTSDevChallengeFrontend.git
    cd DTSDevChallengeFrontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

2.  **Access the application:**
    Open your web browser and navigate to `http://localhost:5173` (or the port specified in the console output).

---

## Roadmap / Future Improvements

- **Authentication:** Implement user login for caseworkers and potentially administrators.
- **Accessibility (a11y):** Focus on improving accessibility with proper ARIA labels, roles, and improved keyboard navigation.
- **Testing:** Add unit and integration tests (e.g., using Vitest, React Testing Library).
- **CI/CD:** Set up a Continuous Integration / Continuous Deployment pipeline for automated testing and deployment.
- **Real-time Updates:** Consider using WebSockets or SSE for real-time task updates across clients.

---

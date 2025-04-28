import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Notification from "./components/Notification";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [notification, setNotification] = useState("");

  const triggerRefresh = () => {
    setRefresh((prev) => !prev);
  };

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">Task Manager</span>
        </div>
      </nav>

      <div className="container">
        {notification && <Notification message={notification} />}

        <TaskForm
          onTaskCreated={() => {
            showNotification("Task created successfully!");
            triggerRefresh();
          }}
        />

        <hr />

        <TaskList
          refresh={refresh}
          onTaskAction={(msg) => {
            showNotification(msg);
            triggerRefresh();
          }}
        />
      </div>
    </div>
  );
}

export default App;

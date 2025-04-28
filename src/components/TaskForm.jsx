import { useState } from "react";
import { createTask } from "../services/api";

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDateTime, setDueDateTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDateTime, status: "pending" };
    await createTask(newTask);
    onTaskCreated();
    setTitle("");
    setDescription("");
    setDueDateTime("");
  };

  return (
    <div className="card card-body mb-4">
      <h4>Create New Task</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Description (Optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="datetime-local"
            className="form-control"
            value={dueDateTime}
            onChange={(e) => setDueDateTime(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import { fetchTasks, deleteTask, updateTaskStatus } from "../services/api";

const PAGE_SIZE = 5; // This is the number of tasks to fetch each time

export default function TaskList({ refresh, onTaskAction }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadTasks(true);
  }, [refresh]);

  const loadTasks = async (reset = false) => {
    setLoading(true);
    try {
      const newOffset = reset ? 0 : offset;
      const fetchedTasks = await fetchTasks(PAGE_SIZE, newOffset);

      if (reset) {
        setTasks(fetchedTasks);
      } else {
        setTasks((prev) => [...prev, ...fetchedTasks]);
      }

      setHasMore(fetchedTasks.length === PAGE_SIZE); // If this is fewer than PAGE_SIZE, no more
      setOffset(newOffset + PAGE_SIZE);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    await deleteTask(id);
    onTaskAction("Task deleted successfully!");
  };

  const handleStatusChange = async (id, newStatus) => {
    await updateTaskStatus(id, newStatus);
    onTaskAction("Task updated successfully!");
  };

  const filteredTasks = tasks.filter(
    (task) => filterStatus === "all" || task.status === filterStatus
  );

  return (
    <div>
      {/* Loading for HCI purposes */}
      {loading && offset === 0 && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Filter options */}
      <div className="mb-3">
        <select
          className="form-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* If empty */}
      {filteredTasks.length === 0 && !loading && (
        <div className="text-center mt-4">
          <p>No tasks to show. Try creating a new task!</p>
        </div>
      )}

      {/* Tasks Grid */}
      <div className="row">
        {filteredTasks.map((task) => {
          const overdue = new Date(task.dueDateTime) < new Date();
          return (
            <div className="col-md-4 mb-3" key={task.id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">
                    {task.description || "No description"}
                  </p>
                  <p className={`card-text ${overdue ? "text-danger" : ""}`}>
                    Due: {new Date(task.dueDateTime).toLocaleString()}
                  </p>
                  <p className="card-text">
                    Status: <strong>{task.status}</strong>
                  </p>

                  <div className="mt-auto">
                    <select
                      className="form-select mb-2"
                      value={task.status}
                      onChange={(e) =>
                        handleStatusChange(task.id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="in progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button for load more */}
      {hasMore && !loading && (
        <div className="text-center my-3">
          <button
            className="btn btn-outline-primary"
            onClick={() => loadTasks(false)}
          >
            Load More Tasks
          </button>
        </div>
      )}
    </div>
  );
}

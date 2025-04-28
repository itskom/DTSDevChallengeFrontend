const API_URL = "https://dtsdevchallengebackend.onrender.com";

export async function fetchTasks(limit = null, offset = 0) {
  try {
    let url = `${API_URL}/tasks`;
    if (limit !== null) {
      url += `?limit=${limit}&offset=${offset}`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
  } catch (error) {
    console.error("Fetch Tasks Error:", error);
    throw error;
  }
}

export async function createTask(task) {
  try {
    const res = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error("Failed to create task");
    return await res.json();
  } catch (error) {
    console.error("Create Task Error:", error);
    throw error;
  }
}

export async function updateTaskStatus(id, status) {
  try {
    const res = await fetch(`${API_URL}/tasks/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error("Failed to update task status");
    return await res.json();
  } catch (error) {
    console.error("Update Task Error:", error);
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete task");
  } catch (error) {
    console.error("Delete Task Error:", error);
    throw error;
  }
}

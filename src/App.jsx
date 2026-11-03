import { useState } from "react";
import DashboardSummary from "./components/DashboardSummary.jsx";
import TaskForm from "./components/TaskForm.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";

// Task shape: { id, title, description, priority, status }
const starterTasks = [
  { id: crypto.randomUUID(), title: "Plan the week", description: "Pick three goals for Monday.", priority: "High", status: "Pending" },
  { id: crypto.randomUUID(), title: "Reply to emails", description: "", priority: "Low", status: "Completed" },
];

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [filter, setFilter] = useState("All");

  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const pending = total - completed;

  const visibleTasks = filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  function addTask({ title, description, priority }) {
    const task = { id: crypto.randomUUID(), title, description, priority, status: "Pending" };
    setTasks((prev) => [task, ...prev]);
  }

  function toggleStatus(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === "Pending" ? "Completed" : "Pending" } : t
      )
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Today's tasks</h1>
        <DashboardSummary total={total} pending={pending} completed={completed} />
      </header>

      <main className="layout">
        <section className="panel" aria-labelledby="add-heading">
          <h2 id="add-heading">Add a task</h2>
          <TaskForm onAddTask={addTask} />
        </section>

        <section className="panel" aria-labelledby="list-heading">
          <div className="list-head">
            <h2 id="list-heading">Your tasks</h2>
            <FilterBar active={filter} onChange={setFilter} />
          </div>
          <TaskList
            tasks={visibleTasks}
            filter={filter}
            onToggle={toggleStatus}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}

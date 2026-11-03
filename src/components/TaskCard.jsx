export default function TaskCard({ task, onToggle, onDelete }) {
  const isDone = task.status === "Completed";

  return (
    <li className={`task ${isDone ? "task-done" : ""} priority-${task.priority.toLowerCase()}`}>
      <div className="task-body">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <div className="meta">
          <span className="badge badge-priority">{task.priority} priority</span>
          <span className={`badge ${isDone ? "badge-done" : "badge-pending"}`}>{task.status}</span>
        </div>
      </div>
      <div className="actions">
        <button type="button" className="btn" onClick={() => onToggle(task.id)}>
          {isDone ? "Mark as pending" : "Mark as completed"}
        </button>
        <button type="button" className="btn btn-danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

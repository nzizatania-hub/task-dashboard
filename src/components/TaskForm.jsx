import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError("Enter a task title.");
      return;
    }
    onAddTask({ title: trimmed, description: description.trim(), priority });
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setError("");
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>
        Task title
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "title-error" : undefined}
          placeholder="e.g. Book dentist appointment"
        />
      </label>
      {error && (
        <p id="title-error" className="error" role="alert">
          {error}
        </p>
      )}

      <label>
        Description <span className="optional">(optional)</span>
        <textarea rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <label>
        Priority
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>

      <button type="submit" className="btn btn-primary">Add task</button>
    </form>
  );
}

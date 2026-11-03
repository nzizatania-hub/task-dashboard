const FILTERS = ["All", "Pending", "Completed"];

export default function FilterBar({ active, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filter tasks">
      {FILTERS.map((name) => (
        <button
          key={name}
          type="button"
          className={`chip ${active === name ? "chip-active" : ""}`}
          aria-pressed={active === name}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

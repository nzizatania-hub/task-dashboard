export default function DashboardSummary({ total, pending, completed }) {
  const stats = [
    { label: "Total Tasks", value: total, tone: "total" },
    { label: "Pending Tasks", value: pending, tone: "pending" },
    { label: "Completed Tasks", value: completed, tone: "done" },
  ];

  return (
    <dl className="summary">
      {stats.map((s) => (
        <div key={s.label} className={`stat stat-${s.tone}`}>
          <dd>{s.value}</dd>
          <dt>{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

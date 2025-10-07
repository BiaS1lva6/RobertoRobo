export default function StatsCard({ value, label, bgColor = "#FCD34D" }) {
    return (
      <div className="stats-card" style={{ backgroundColor: bgColor }}>
        <h2 className="fw-bold mb-2" style={{ color: "var(--text-dark)", fontSize: "2rem" }}>
          {value}
        </h2>
        <p className="mb-0" style={{ color: "var(--text-dark)", fontSize: "0.9rem" }}>
          {label}
        </p>
      </div>
    )
  }
  
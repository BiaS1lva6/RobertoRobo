export default function IconButton({ icon, label, onClick, bgColor = "#fbbf24" }) {
  return (
    <div className="text-center">
      <button onClick={onClick} className="icon-button mb-2" style={{ backgroundColor: bgColor }}>
        <i className={`bi ${icon}`}></i>
      </button>
      <p className="text-white fw-bold" style={{ fontSize: "1.1rem" }}>
        {label}
      </p>
    </div>
  )
}

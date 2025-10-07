import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"

export default function AdminDashboard() {
  const router = useRouter()
  const { logout, user } = useAuth()

  return (
    <div className="purple-gradient">
      <div className="text-center">
        <div className="title-bubble">
          <h1>Painel {user?.tipo === "admin" ? "Administrativo" : "do Tutor"}</h1>
        </div>

        <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "3rem" }}>Bem-vindo, {user?.nome}!</p>

        <div className="d-flex justify-content-center gap-4">
          <button className="icon-button" onClick={() => router.push("/admin/children")}>
            <i className="bi bi-people-fill"></i>
            <span>Crianças</span>
          </button>

          <button className="icon-button" onClick={() => router.push("/admin/reports")}>
            <i className="bi bi-bar-chart-fill"></i>
            <span>Relatórios</span>
          </button>

          <button className="icon-button" onClick={() => router.push("/admin/data")}>
            <i className="bi bi-currency-dollar"></i>
            <span>Dados</span>
          </button>
        </div>

        <button
          onClick={logout}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "white",
            border: "none",
            borderRadius: "10px",
            padding: "0.5rem 1rem",
            color: "var(--text-purple)",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Sair
        </button>
      </div>
    </div>
  )
}

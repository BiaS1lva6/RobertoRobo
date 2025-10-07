import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

export default function UserDashboard() {
  const router = useNavigate()
  const { logout, user } = useAuth()

  return (
    <div className="purple-gradient">
      <div className="text-center">
        <div className="title-bubble">
          <h1>Roberto Robô</h1>
        </div>

        <div className="d-flex justify-content-center gap-4 mt-5">
          <button className="icon-button" onClick={() => router.push("/games")}>
            <i className="bi bi-play-circle-fill"></i>
            <span>Minigames</span>
          </button>

          <button className="icon-button" onClick={() => router.push("/user/performance")}>
            <i className="bi bi-controller"></i>
            <span>Desempenho</span>
          </button>

          <button className="icon-button" onClick={() => router.push("/user/profile")}>
            <i className="bi bi-person-circle"></i>
            <span>Perfil</span>
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

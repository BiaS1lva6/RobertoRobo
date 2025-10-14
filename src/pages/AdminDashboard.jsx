import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react"; // Adicionei o useEffect e useState
import Footer from "../components/Footer";

export default function AdminDashboard() {
  const router = useNavigate();
  const { logout, user } = useAuth();
  const [tutorName, setTutorName] = useState("");

  // Atualiza o nome do tutor com base no usuário logado
  useEffect(() => {
    if (user && user.tipo === "tutor") {
      setTutorName(user.name || "Tutor");
    } else if (user && user.tipo === "admin") {
      setTutorName("Administrador");
    }
  }, [user]);

  return (
    <div className="purple-gradient">
      <div className="text-center">
        <div className="title-bubble">
          <h1>Painel {user?.tipo === "admin" ? "Administrativo" : "do Tutor"}</h1>
        </div>

        <p style={{ color: "var(--text-purple)", fontSize: "1.2rem", marginBottom: "3rem" }}>
          Bem-vindo, {tutorName}!
        </p>

        <div className="d-flex justify-content-center gap-4">
          <button className="icon-button" onClick={() => router("/admin/children")}>
            <i className="bi bi-people-fill"></i>
            <span>Crianças</span>
          </button>

          <button className="icon-button" onClick={() => router("/admin/reports")}>
            <i className="bi bi-bar-chart-fill"></i>
            <span>Relatórios</span>
          </button>

          <button className="icon-button" onClick={() => router("/admin/data")}>
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
      <Footer />
    </div>
  );
}
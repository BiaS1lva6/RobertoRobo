import { useState } from "react";
import { useNavigate } from "react-router";

export default function AdminReports() {
  const router = useNavigate()

  const [games] = useState([
    { id: 1, name: "Jogo de Formas", date: "01/10/2025", score: 85, time: "3:45" },
    { id: 2, name: "Jogo de Sequência", date: "30/09/2025", score: 92, time: "4:20" },
    { id: 3, name: "Jogo de Formas", date: "29/09/2025", score: 78, time: "5:15" },
    { id: 4, name: "Jogo de Formas", date: "28/09/2025", score: 88, time: "3:30" },
  ])

  return (
    <div className="purple-gradient" style={{ minHeight: "100vh", padding: "2rem" }}>
      <div className="d-flex justify-content-end mb-3">
      <button
  onClick={() => router(-1)}
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
  Voltar
</button>
      </div>

      <div
        className="custom-table"
        style={{
          borderRadius: "30px",
          padding: "2.5rem",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="fw-bold mb-1" style={{ color: "#000", fontSize: "2rem" }}>
          Relatórios dos Usuários
        </h2>
        <p style={{ color: "#666", fontSize: "1rem", marginBottom: "1.5rem" }}>Estatísticas por Jogo</p>

        <div className="d-flex gap-3 mb-4 flex-wrap">
          <div
            style={{
              background: "#7C3AED",
              borderRadius: "15px",
              padding: "1rem 2rem",
              color: "white",
              textAlign: "center",
              minWidth: "140px",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>12</div>
            <div style={{ fontSize: "0.9rem" }}>Jogos Únicos</div>
          </div>
          <div
            style={{
              background: "#7C3AED",
              borderRadius: "15px",
              padding: "1rem 2rem",
              color: "white",
              textAlign: "center",
              minWidth: "140px",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>78%</div>
            <div style={{ fontSize: "0.9rem" }}>Taxa Média</div>
          </div>
          <div
            style={{
              background: "#7C3AED",
              borderRadius: "15px",
              padding: "1rem 2rem",
              color: "white",
              textAlign: "center",
              minWidth: "140px",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>12</div>
            <div style={{ fontSize: "0.9rem" }}>Tempo Médio</div>
          </div>
          <div
            style={{
              background: "#7C3AED",
              borderRadius: "15px",
              padding: "1rem 2rem",
              color: "white",
              textAlign: "center",
              minWidth: "140px",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>88%</div>
            <div style={{ fontSize: "0.9rem" }}>Conclusão</div>
          </div>
        </div>

        <div className="mb-3 d-flex justify-content-between align-items-center">
          <h4 className="fw-bold mb-0" style={{ color: "#000" }}>
            Últimas Partidas
          </h4>
          <a href="#" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: "600" }}>
            Filtrar
          </a>
        </div>

        <div style={{ background: "white", borderRadius: "15px", overflow: "hidden" }}>
          <table className="table table-hover mb-0">
            <thead style={{ background: "#7C3AED", color: "white" }}>
              <tr>
                <th style={{ padding: "1rem", border: "none" }}>Jogo</th>
                <th style={{ padding: "1rem", border: "none" }}>Data</th>
                <th style={{ padding: "1rem", border: "none" }}>Pontuação</th>
                <th style={{ padding: "1rem", border: "none" }}>Tempo</th>
                <th style={{ padding: "1rem", border: "none" }}></th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td style={{ padding: "1rem", fontWeight: "600" }}>{game.name}</td>
                  <td style={{ padding: "1rem" }}>{game.date}</td>
                  <td style={{ padding: "1rem", fontWeight: "600", color: "#7C3AED" }}>{game.score}</td>
                  <td style={{ padding: "1rem" }}>{game.time}</td>
                  <td style={{ padding: "1rem" }}>
                    <button
                      className="btn btn-sm"
                      style={{
                        background: "#7C3AED",
                        color: "white",
                        borderRadius: "8px",
                        padding: "0.4rem 1.2rem",
                        border: "none",
                      }}
                      onClick={() => alert(`Visualizar detalhes de ${game.name}`)}
                    >
                      Visualizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-4" style={{ fontSize: "0.85rem", color: "#666" }}>
          © Feito por Beatriz e Luiza - Curso de Desenvolvimento de Sistemas
        </div>
      </div>
    </div>
  )
}

import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/Footer";

export default function Performance() {
  const router = useNavigate();
  const { user } = useAuth();

  const [performance] = useState({
    name: user?.nome || "João Silva",
    gamesCompleted: 2,
    successRate: 78,
    achievements: 10,
    recentGames: [
      { name: "Jogo de Formas", date: "06/10/2025", score: 95, time: "5m" },
      { name: "Jogo de Sequência", date: "05/10/2025", score: 87, time: "8m2" },
      { name: "Jogo de Pintar", date: "04/10/2025", score: 92, time: "6m1" },
      { name: "Jogo de Gato", date: "03/10/2025", score: 78, time: "4m" },
    ],
  });

  return (
    <div
      className="purple-gradient"
      style={{ minHeight: "100vh", padding: "2rem" }}
    >
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

      <div className="container" style={{ maxWidth: "800px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)",
            borderRadius: "30px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          {/* Header com avatar */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              👤
            </div>
            <h2
              style={{ color: "#1F2937", fontWeight: "700", margin: 0 }}
            >
              Desempenho de {performance.name}
            </h2>
          </div>

          {/* Caixas de estatísticas */}
          <div className="d-flex gap-3 mb-4">
            <div
              style={{
                background: "#7C3AED",
                borderRadius: "15px",
                padding: "1rem 1.5rem",
                flex: 1,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                {performance.gamesCompleted}
              </div>
              <div style={{ fontSize: "0.85rem", color: "white" }}>
                Jogos Finalizados
              </div>
            </div>
            <div
              style={{
                background: "#7C3AED",
                borderRadius: "15px",
                padding: "1rem 1.5rem",
                flex: 1,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                {performance.successRate}%
              </div>
              <div style={{ fontSize: "0.85rem", color: "white" }}>
                Taxa de Acerto
              </div>
            </div>
            <div
              style={{
                background: "#7C3AED",
                borderRadius: "15px",
                padding: "1rem 1.5rem",
                flex: 1,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                {performance.achievements}
              </div>
              <div style={{ fontSize: "0.85rem", color: "white" }}>
                Conquistas
              </div>
            </div>
          </div>

          {/* Tabela de jogos recentes */}
          <div>
            <h4
              style={{
                color: "#1F2937",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Últimas Partidas:
            </h4>
            <div
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <table
                style={{ width: "100%", borderCollapse: "collapse" }}
              >
                <thead>
                  <tr style={{ background: "#7C3AED" }}>
                    <th
                      style={{
                        padding: "0.75rem",
                        color: "white",
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      Jogo
                    </th>
                    <th
                      style={{
                        padding: "0.75rem",
                        color: "white",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Data
                    </th>
                    <th
                      style={{
                        padding: "0.75rem",
                        color: "white",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Pontuação
                    </th>
                    <th
                      style={{
                        padding: "0.75rem",
                        color: "white",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Tempo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {performance.recentGames.map((game, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom:
                          idx < performance.recentGames.length - 1
                            ? "1px solid #E5E7EB"
                            : "none",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.75rem",
                          color: "#7C3AED",
                          fontWeight: "600",
                        }}
                      >
                        {game.name}
                      </td>
                      <td
                        style={{
                          padding: "0.75rem",
                          textAlign: "center",
                          color: "#1F2937",
                        }}
                      >
                        {game.date}
                      </td>
                      <td
                        style={{
                          padding: "0.75rem",
                          textAlign: "center",
                          color: "#1F2937",
                        }}
                      >
                        {game.score}
                      </td>
                      <td
                        style={{
                          padding: "0.75rem",
                          textAlign: "center",
                          color: "#7C3AED",
                          fontWeight: "600",
                        }}
                      >
                        {game.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
            <Footer/>
      
    </div>
  );
}

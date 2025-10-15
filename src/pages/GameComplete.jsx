import { useNavigate } from "react-router";
import characterImg from "../assets/character.png"; // ajuste o caminho se necessário
import Footer from "../components/Footer";

export default function GameComplete() {
  const navigate = useNavigate();

  return (
    <div className="purple-gradient" style={{ minHeight: "100vh", width: "100%" }}>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: "calc(100vh - 80px)", zIndex: 2 }}
      >
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ width: "100%", maxWidth: 1100 }}
        >
          {/* Mascote à esquerda, bem maior */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginRight: "0.5rem",
            }}
          >
            <img
              src={characterImg}
              alt="Personagem"
              className="mascot"
              style={{
                width: "410px",
                maxWidth: "38vw",
                minWidth: "220px",
                marginBottom: "0",
                userSelect: "none",
              }}
            />
          </div>
          {/* Card amarelo centralizado */}
          <div className="yellow-card" style={{ minWidth: 370, maxWidth: 520 }}>
            <h1
              style={{
                fontFamily: "'Luckiest Guy', cursive, sans-serif",
                fontWeight: 900,
                fontSize: "2.2rem",
                color: "var(--text-purple)",
                marginBottom: "1.2rem",
                textShadow: "2px 2px 4px #fff8",
                lineHeight: 1.1,
              }}
            >
              Parabéns! Você conseguiu<br />
              passar de todas as fases!
            </h1>
            <div
              style={{
                background: "rgba(255,255,255,0.6)",
                borderRadius: "22px",
                padding: "12px 24px",
                marginBottom: "1.3rem",
                fontWeight: "bold",
                fontSize: "1.1rem",
                color: "var(--text-purple)",
                textAlign: "left",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                maxWidth: "340px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div>Pontuação de nível:</div>
              <div>Pontuação total:</div>
            </div>
            <div
              className="d-flex flex-row justify-content-center"
              style={{ gap: "2rem", marginBottom: "1.1rem" }}
            >
              <button
                className="btn btn-purple d-flex align-items-center justify-content-center"
                onClick={() => navigate("/games")}
                style={{
                  backgroundColor: "#7c3aed", // Fundo roxo
                  color: "#fff",
                  minWidth: "170px",
                  gap: "0.7rem",
                  fontWeight: "700",
                  fontSize: "1.08rem",
                }}
              >
                <i className="bi bi-controller" style={{ fontSize: "1.7rem" }}></i>
                Jogar Novamente
              </button>
              <button
                className="btn btn-purple d-flex align-items-center justify-content-center"
                onClick={() => navigate("/dashboard")}
                style={{
                  backgroundColor: "#7c3aed", // Fundo roxo
                  color: "#fff",
                  minWidth: "170px",
                  gap: "0.7rem",
                  fontWeight: "700",
                  fontSize: "1.08rem",
                }}
              >
                <i className="bi bi-list" style={{ fontSize: "1.7rem" }}></i>
                Voltar ao Início
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
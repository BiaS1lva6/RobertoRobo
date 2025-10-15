import { useNavigate } from "react-router";
import Footer from "../components/Footer";

export default function GamesMenu() {
  const navigate = useNavigate(); // Certifique-se de usar o hook corretamente

  return (
    <div className="purple-gradient" style={{ minHeight: "100vh", padding: "2rem", position: "relative" }}>
      <button
        onClick={() => navigate(-1)}
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

      <div className="container text-center">
        <div
          style={{
            display: "inline-block",
            background: "white",
            borderRadius: "50px",
            padding: "1rem 3rem",
            marginBottom: "3rem",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Menu de Jogos
          </h1>
        </div>

        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {/* Jogo de Sequência */}
          <div
            style={{
              background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)",
              borderRadius: "25px",
              padding: "2rem",
              width: "300px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "5rem" }}>🔺</div>
            </div>
            <h3 style={{ color: "#1F2937", fontWeight: "700", fontSize: "1.5rem", marginBottom: "1rem" }}>
              Jogo de Sequência
            </h3>
            <p style={{ color: "#1F2937", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: "1.5" }}>
              Identifique os padrões e complete a sequência correta de formas coloridas
            </p>
            <button
              onClick={() => navigate("/sequence-game")}
              style={{
                background: "#7C3AED",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "0.75rem 2rem",
                fontWeight: "700",
                fontSize: "1.1rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              JOGAR
            </button>
          </div>

          {/* Jogo das Formas */}
          <div
            style={{
              background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)",
              borderRadius: "25px",
              padding: "2rem",
              width: "300px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "5rem" }}>🔷</div>
            </div>
            <h3 style={{ color: "#1F2937", fontWeight: "700", fontSize: "1.5rem", marginBottom: "1rem" }}>
              Jogo da Memoria
            </h3>
            <p style={{ color: "#1F2937", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: "1.5" }}>
            Teste sua memória e encontre todos os pares de formas iguais no menor tempo possível.
            </p>
            <button
              onClick={() => navigate("/shapes-game")}
              style={{
                background: "#7C3AED",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "0.75rem 2rem",
                fontWeight: "700",
                fontSize: "1.1rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              JOGAR
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

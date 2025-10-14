import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GameComplete() {
  const navigate = useNavigate(); // Substituí o uso de router.push por navigate

  return (
    <div
      className="purple-gradient d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <Header title="Parabéns!" showBackButton={false} />

      <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div
            className="d-inline-block p-5 rounded-4 mb-4"
            style={{ backgroundColor: "#FCD34D" }}
          >
            <div style={{ fontSize: "6rem" }} className="mb-3">
              🎉
            </div>
            <h1
              className="fw-bold mb-3"
              style={{ color: "var(--text-dark)" }}
            >
              Parabéns!
            </h1>
            <h4 style={{ color: "var(--text-dark)" }}>
              Você conseguiu passar de todas as fases!
            </h4>
          </div>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-yellow btn-lg px-4"
              onClick={() => navigate("/games")} // Corrigi para navigate
            >
              Jogar Novamente
            </button>
            <button
              className="btn btn-purple btn-lg px-4"
              onClick={() => navigate("/user/dashboard")} // Corrigi para navigate
            >
              Voltar ao Início
            </button>
          </div>

          <div className="mt-5">
            <div
              className="d-inline-block p-4 rounded-4"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h5 className="text-white mb-3">Suas Conquistas:</h5>
              <div className="d-flex gap-3 justify-content-center">
                <div style={{ fontSize: "2rem" }}>🏆</div>
                <div style={{ fontSize: "2rem" }}>⭐</div>
                <div style={{ fontSize: "2rem" }}>🎯</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
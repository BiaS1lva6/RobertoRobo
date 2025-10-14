import { useNavigate } from "react-router";
import Header from "../components/Header";

export default function GameComplete() {
  const navigate = useNavigate(); // Substituí "router" por "navigate"

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
            <h1 className="fw-bold mb-3">Jogo Completo!</h1>
            <p className="mb-0">Você concluiu o jogo com sucesso.</p>
          </div>

          <div className="mt-4">
            <button
              className="btn btn-yellow btn-lg px-4"
              onClick={() => navigate("/games")} // Substituí "router.push" por "navigate"
            >
              Jogar Novamente
            </button>
            <button
              className="btn btn-purple btn-lg px-4"
              onClick={() => navigate("/user/dashboard")} // Substituí "router.push" por "navigate"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
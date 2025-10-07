import { useNavigate } from "react-router";
import YellowCard from "../components/YellowCard";
import QRCodeDisplay from "../components/QRCodeDisplay";
import Footer from "../components/Footer";

export default function LoginQRCode() {
  const router = useNavigate();

  const handleScanComplete = () => {
    // Simula o escaneamento do QR Code
    setTimeout(() => {
      alert("QR Code escaneado com sucesso!");
      router.push("/user/dashboard");
    }, 1000);
  };

  return (
    <div className="purple-gradient d-flex justify-content-center align-items-center">
      <YellowCard>
        <div className="text-center mb-4">
          <div className="mb-3">
            <i
              className="bi bi-robot"
              style={{ fontSize: "4rem", color: "var(--text-dark)" }}
            ></i>
          </div>
          <h3 className="fw-bold" style={{ color: "var(--text-dark)" }}>
            Roberto Robo
          </h3>
          <p
            style={{
              color: "var(--text-dark)",
              fontSize: "0.9rem",
              marginTop: "1rem",
            }}
          >
            Escaneie o QR Code para fazer login
          </p>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <QRCodeDisplay size={220} />
        </div>

        <button
          onClick={handleScanComplete}
          className="btn btn-yellow w-100 mb-3"
        >
          Simular Escaneamento
        </button>

        <div className="text-center">
          <button
            onClick={() => router.push("/login")}
            className="btn btn-link"
            style={{
              color: "var(--text-dark)",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Voltar para login tradicional
          </button>
        </div>
      </YellowCard>
      <Footer/>
    </div>
  );
}

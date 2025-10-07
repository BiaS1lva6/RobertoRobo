import { useNavigate } from "react-router";
import YellowCard from "../components/YellowCard";
import QRCodeDisplay from "../components/QRCodeDisplay";
import Footer from "../components/Footer";

export default function Register() {
  const navigate = useNavigate(); // Certifique-se de usar o hook corretamente

  const handleGenerateQRCode = () => {
    alert("QR Code gerado com sucesso! Use este código para fazer login.");
    navigate("/login-qrcode"); // Certifique-se de que a rota está correta
  };

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="purple-gradient d-flex justify-content-center align-items-center">
      <YellowCard>
        <div className="text-center mb-4">
          <div className="mb-3">
            <span style={{ fontSize: "3rem" }}>🤖</span>
          </div>
          <h3 className="fw-bold" style={{ color: "var(--text-dark)" }}>
            Roberto Robo
          </h3>
        </div>

        <QRCodeDisplay />

        <div className="d-flex justify-content-between mt-4">
          <button
            onClick={handleBack}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-purple)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Voltar
          </button>

          <button
            onClick={handleGenerateQRCode}
            style={{
              background: "var(--text-purple)",
              border: "none",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Gerar QR Code
          </button>
        </div>
      </YellowCard>
            <Footer/>
      
    </div>
  );
}
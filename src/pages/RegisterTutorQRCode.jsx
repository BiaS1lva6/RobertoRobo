import { useNavigate } from "react-router";
import YellowCard from "../components/YellowCard"
import QRCodeDisplay from "../components/QRCodeDisplay"
import Footer from "../components/Footer";

export default function RegisterTutorQRCode() {
  const navigate = useNavigate(); 

  const handleGenerateQRCode = () => {
    alert("QR Code do tutor gerado com sucesso!")
    navigate("/admin/dashboard")
  }

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
          <p style={{ color: "var(--text-dark)", fontSize: "0.9rem", marginTop: "1rem" }}>
            Cadastro de Tutor com QR Code
          </p>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <QRCodeDisplay size={220} />
        </div>

        <p className="text-center mb-3" style={{ color: "var(--text-dark)", fontSize: "0.85rem" }}>
          QR Code para acesso rápido do tutor
        </p>

        <button onClick={handleGenerateQRCode} className="btn btn-yellow w-100 mb-3">
          Gerar QR Code do Tutor
        </button>

        <div className="text-center">
          <button
            onClick={() => navigate("/register-tutor")}
            className="btn btn-link"
            style={{ color: "var(--text-dark)", textDecoration: "none" }}
          >
            Voltar para cadastro tradicional
          </button>
        </div>
      </YellowCard>
      <Footer/>
    </div>
  )
}

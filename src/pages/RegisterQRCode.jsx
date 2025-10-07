import { useNavigate } from "react-router";
import YellowCard from "../components/YellowCard"
import QRCodeDisplay from "../components/QRCodeDisplay"
import Footer from "../components/Footer";

export default function RegisterQRCode() {
  const router = useNavigate()

  const handleGenerateQRCode = () => {
    alert("QR Code gerado com sucesso! Use este código para fazer login.")
    router.push("/login-qrcode")
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
          <p style={{ color: "var(--text-dark)", fontSize: "0.9rem", marginTop: "1rem" }}>Cadastro com QR Code</p>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <QRCodeDisplay size={220} />
        </div>

        <p className="text-center mb-3" style={{ color: "var(--text-dark)", fontSize: "0.85rem" }}>
          Salve este QR Code para fazer login rapidamente
        </p>

        <button onClick={handleGenerateQRCode} className="btn btn-yellow w-100 mb-3">
          Gerar Meu QR Code
        </button>

        <div className="text-center">
          <button
            onClick={() => router.push("/register")}
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

import { useState } from "react"
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

export default function RegisterTutor() {
  const router = useNavigate()
  const [showQRCode, setShowQRCode] = useState(false)

  const handleContinue = () => {
    router.push("/login")
  }

  if (showQRCode) {
    return (
      <div className="purple-gradient">
        <div className="yellow-card">
          <div className="logo-container">
            <i className="bi bi-robot"></i>
          </div>
          <h2 style={{ fontWeight: "700", color: "var(--text-purple)", marginBottom: "1.5rem" }}>Roberto Robô</h2>

          <div className="qr-container">
            <i className="bi bi-qr-code" style={{ fontSize: "12rem", color: "var(--text-dark)" }}></i>
          </div>

          <p style={{ color: "var(--text-purple)", fontWeight: "600", marginTop: "1rem", fontSize: "1.1rem" }}>
            Escaneie este QR Code para cadastrar o tutor
          </p>

          <button onClick={handleContinue} className="btn-purple" style={{ marginTop: "2rem" }}>
            Continuar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="purple-gradient">
      <div className="yellow-card">
        <div className="logo-container">
          <i className="bi bi-robot"></i>
        </div>
        <h2 style={{ fontWeight: "700", color: "var(--text-purple)", marginBottom: "1.5rem" }}>Roberto Robô</h2>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <i className="bi bi-check-circle-fill" style={{ fontSize: "4rem", color: "#10b981" }}></i>
          <h3 style={{ color: "var(--text-purple)", fontWeight: "700", marginTop: "1rem" }}>
            O usuário foi cadastrado com sucesso!
          </h3>
          <p style={{ color: "var(--text-dark)", marginTop: "1rem" }}>Agora cadastre o tutor para continuar</p>
        </div>

        <button onClick={() => setShowQRCode(true)} className="btn-purple">
          Cadastrar Tutor
        </button>
      </div>
      <Footer/>
    </div>
  )
}

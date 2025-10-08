import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

export default function Login() {
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [useQRCode, setUseQRCode] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await login(formData.email, formData.senha)
    } catch (err) {
      setError(err.message)
      console.error("[v0] Erro no login:", err)
    }
  }

  if (useQRCode) {
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

          <p style={{ color: "var(--text-purple)", fontWeight: "600", marginTop: "1rem" }}>Escanear QR Code</p>

          <button
            onClick={() => setUseQRCode(false)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-purple)",
              textDecoration: "underline",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Voltar para login normal
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

        {error && (
          <div
            style={{
              background: "#f8d7da",
              color: "#721c24",
              padding: "0.75rem",
              borderRadius: "8px",
              marginBottom: "1rem",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label style={{ fontWeight: "600", color: "var(--text-purple)", display: "block", marginBottom: "0.5rem" }}>
              Email
            </label>
            <input
              type="email"
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
            <label style={{ fontWeight: "600", color: "var(--text-purple)", display: "block", marginBottom: "0.5rem" }}>
              Senha
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                value={formData.senha}
                onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                required
              />
              <i
                className={`bi bi-eye${showPassword ? "-slash" : ""}`}
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "var(--text-purple)",
                }}
              ></i>
            </div>
          </div>

          <button type="submit" className="btn-purple w-100">
            Entrar
          </button>
        </form>

        <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-purple)" }}>
          <p style={{ marginBottom: "0.5rem", fontWeight: "600" }}>Contas de teste:</p>
          <p style={{ margin: "0.25rem 0" }}>Admin: admin@roberto.com / admin123</p>
          <p style={{ margin: "0.25rem 0" }}>Tutor: tutor@roberto.com / tutor123</p>
          <p style={{ margin: "0.25rem 0" }}>Usuário: joao@roberto.com / joao123</p>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={() => setUseQRCode(true)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-purple)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Entrar com QR Code
          </button>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <p style={{ color: "var(--text-purple)", fontSize: "0.9rem" }}>
            Não tem uma conta?{" "}
            <a
              href="/register"
              style={{
                color: "var(--text-purple)",
                fontWeight: "600",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Cadastre-se aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

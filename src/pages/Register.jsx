import { useState } from "react"
import { useNavigate } from "react-router";

export default function Register() {
  const router = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!")
      return
    }

    // After successful registration, go to tutor registration
    router.push("/register-tutor")
  }

  return (
    <div className="purple-gradient">
      <div className="yellow-card">
        <div className="logo-container">
          <i className="bi bi-robot"></i>
        </div>
        <h2 style={{ fontWeight: "700", color: "var(--text-purple)", marginBottom: "1.5rem" }}>Roberto Robô</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label style={{ fontWeight: "600", color: "var(--text-purple)", display: "block", marginBottom: "0.5rem" }}>
              User
            </label>
            <input
              type="text"
              className="form-input"
              value={formData.user}
              onChange={(e) => setFormData({ ...formData, user: e.target.value })}
              required
            />
          </div>

          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label style={{ fontWeight: "600", color: "var(--text-purple)", display: "block", marginBottom: "0.5rem" }}>
              Email
            </label>
            <input
              type="email"
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
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

          <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
            <label style={{ fontWeight: "600", color: "var(--text-purple)", display: "block", marginBottom: "0.5rem" }}>
              Confirmar Senha
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-input"
                value={formData.confirmarSenha}
                onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                required
              />
              <i
                className={`bi bi-eye${showConfirmPassword ? "-slash" : ""}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
            Cadastrar
          </button>
        </form>

        <div style={{ marginTop: "1.5rem" }}>
          <p style={{ color: "var(--text-purple)", fontSize: "0.9rem" }}>
            Já tem uma conta?{" "}
            <a
              href="/login"
              style={{
                color: "var(--text-purple)",
                fontWeight: "600",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Faça login aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

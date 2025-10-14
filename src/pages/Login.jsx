import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import VirtualKeyboard from "../components/VirtualKeyboard";

export default function Login() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [useQRCode, setUseQRCode] = useState(false);
  const [error, setError] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(formData.email, formData.senha);
    } catch (err) {
      setError(err.message);
      console.error("[v0] Erro no login:", err);
    }
  };

  const handleNextField = (currentField) => {
    // Define a ordem dos campos
    const fields = ["email", "senha"];
    const currentIndex = fields.indexOf(currentField);
    const nextField = fields[currentIndex + 1];

    if (nextField) {
      setActiveField(nextField); // Move para o próximo campo
    } else {
      setKeyboardVisible(false); // Fecha o teclado se não houver próximo campo
      handleSubmit(); // Envia as informações
    }
  };

  const handleInputFocus = (field) => {
    setActiveField(field); // Define o campo ativo
    setKeyboardVisible(true); // Mostra o teclado virtual
  };

  if (useQRCode) {
    return (
      <div className="purple-gradient">
        <div className="yellow-card">
          <div className="logo-container">
            <i className="bi bi-robot"></i>
          </div>
          <h2
            style={{
              fontWeight: "700",
              color: "var(--text-purple)",
              marginBottom: "1.5rem",
            }}
          >
            Roberto Robô
          </h2>

          <div className="qr-container">
            <i
              className="bi bi-qr-code"
              style={{ fontSize: "12rem", color: "var(--text-dark)" }}
            ></i>
          </div>

          <p
            style={{
              color: "var(--text-purple)",
              fontWeight: "600",
              marginTop: "1rem",
            }}
          >
            Escanear QR Code
          </p>

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
    );
  }

  return (
    <div className="purple-gradient">
      <div className="yellow-card">
        <div className="logo-container">
          <i className="bi bi-robot"></i>
        </div>
        <h2
          style={{
            fontWeight: "700",
            color: "var(--text-purple)",
            marginBottom: "1.5rem",
          }}
        >
          Roberto Robô
        </h2>

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
            <label
              style={{
                fontWeight: "600",
                color: "var(--text-purple)",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Email
            </label>
            <input
  type="email"
  className="form-input"
  value={formData.email}
  onFocus={() => handleInputFocus("email")} // Mostra o teclado ao focar
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  required
  autoComplete="username" // Corrigido para usar camelCase
  placeholder="seu@email.com"
/>
          </div>

          <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
            <label
              style={{
                fontWeight: "600",
                color: "var(--text-purple)",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Senha
            </label>
            <div style={{ position: "relative" }}>
            <input
  type={showPassword ? "text" : "password"}
  className="form-input"
  value={formData.senha}
  onFocus={() => handleInputFocus("senha")} // Mostra o teclado ao focar
  onChange={(e) =>
    setFormData({ ...formData, senha: e.target.value })
  }
  required
  autoComplete="current-password" // Corrigido para usar camelCase
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
      <VirtualKeyboard
        visible={keyboardVisible}
        activeField={activeField}
        formData={formData}
        setFormData={setFormData}
        onClose={() => setKeyboardVisible(false)} // Fecha o teclado
        onNextField={handleNextField} // Move para o próximo campo
        onSubmit={handleSubmit} // Envia as informações
      />
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import VirtualKeyboard from "../components/VirtualKeyboard";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (!formData.user || !formData.email || !formData.senha || !formData.confirmarSenha) {
      alert("Por favor, preencha todos os campos antes de continuar.");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
      return;
    }

    try {
      // Registrar usuário no localStorage usando o método do AuthContext
      register({
        user: formData.user,
        email: formData.email,
        senha: formData.senha,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/register-tutor");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert(error.message || "Ocorreu um erro ao tentar registrar o usuário.");
    }
  };

  const handleInputFocus = (field) => {
    setActiveField(field);
    setKeyboardVisible(true);
  };

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
          Cadastro
        </h2>

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
              Usuário
            </label>
            <input
              type="text"
              className="form-input"
              value={formData.user}
              onFocus={() => handleInputFocus("user")}
              onChange={(e) => setFormData({ ...formData, user: e.target.value })}
              required
              placeholder="Digite seu usuário"
            />
          </div>

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
              onFocus={() => handleInputFocus("email")}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Digite seu email"
            />
          </div>

          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
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
            <input
              type="password"
              className="form-input"
              value={formData.senha}
              onFocus={() => handleInputFocus("senha")}
              onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
              required
              placeholder="Digite sua senha"
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
              Confirmar Senha
            </label>
            <input
              type="password"
              className="form-input"
              value={formData.confirmarSenha}
              onFocus={() => handleInputFocus("confirmarSenha")}
              onChange={(e) =>
                setFormData({ ...formData, confirmarSenha: e.target.value })
              }
              required
              placeholder="Confirme sua senha"
            />
          </div>

          <button type="submit" className="btn btn-purple w-100">
            Cadastrar
          </button>
        </form>

        <VirtualKeyboard
          visible={keyboardVisible}
          activeField={activeField}
          formData={formData}
          setFormData={setFormData}
          onClose={() => setKeyboardVisible(false)}
          onNextField={(currentField) => {
            const fields = ["user", "email", "senha", "confirmarSenha"];
            const currentIndex = fields.indexOf(currentField);
            const nextField = fields[currentIndex + 1];

            if (nextField) {
              setActiveField(nextField);
            } else {
              setKeyboardVisible(false);
              handleSubmit();
            }
          }}
        />
      </div>
    </div>
  );
}

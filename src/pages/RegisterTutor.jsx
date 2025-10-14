import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function RegisterTutor() {
  const navigate = useNavigate();
  const { registerTutor } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    senha: "",
    responsavelPor: "", // Campo para o usuário responsável
  });

  const handleContinue = () => {
    // Validação dos campos obrigatórios
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.senha.trim() ||
      !formData.responsavelPor.trim()
    ) {
      alert("Por favor, preencha todos os campos antes de continuar.");
      return;
    }

    try {
      // Registrar tutor no localStorage usando o método do AuthContext
      registerTutor({
        name: formData.name,
        email: formData.email,
        senha: formData.senha,
        responsavelPor: formData.responsavelPor,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/register-tutor-qrcode");
    } catch (error) {
      console.error("Erro ao registrar tutor no AuthContext:", error);

      // Fallback: Salvar diretamente no localStorage
      const tutors = JSON.parse(localStorage.getItem("registeredTutors")) || [];
      if (tutors.some((t) => t.email === formData.email)) {
        alert("Este email já está registrado como tutor.");
        return;
      }
      tutors.push({
        name: formData.name,
        email: formData.email,
        senha: formData.senha,
        responsavelPor: formData.responsavelPor,
      });
      localStorage.setItem("registeredTutors", JSON.stringify(tutors));
      console.log(tutors);

      alert("Cadastro realizado com sucesso!");
      navigate("/register-tutor-qrcode");
    }
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
          Cadastro do Tutor
        </h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label
              style={{
                fontWeight: "600",
                color: "var(--text-purple)",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Nome
            </label>
            <input
              type="text"
              className="form-input"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              placeholder="Digite seu nome"
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
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, senha: e.target.value })
              }
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
              Usuário Responsável
            </label>
            <input
              type="text"
              className="form-input"
              value={formData.responsavelPor}
              onChange={(e) =>
                setFormData({ ...formData, responsavelPor: e.target.value })
              }
              required
              placeholder="Digite o nome do usuário responsável"
            />
          </div>

          <button
            type="button"
            className="btn btn-purple w-100"
            onClick={handleContinue}
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

export default function RegisterTutor() {
  const navigate = useNavigate(); // Hook para redirecionamento
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

    // Redireciona para a próxima página
    navigate("/register-tutor-qrcode");
  };

  return (
    <div className="purple-gradient">
      <div className="yellow-card">
        <h2 className="text-center" style={{ color: "var(--text-purple)" }}>
          Cadastro do Tutor
        </h2>
        <p className="text-center" style={{ color: "var(--text-dark)" }}>
          Preencha as informações abaixo para continuar.
        </p>
        <form>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label style={{ color: "var(--text-purple)", fontWeight: "600" }}>
              Nome
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: "1rem" , textAlign: "left"}}>
            <label style={{ color: "var(--text-purple)", fontWeight: "600" }}>
              Email
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: "1rem", textAlign: "left"}}>
            <label style={{ fontWeight: "600", color: "var(--text-purple)", display: "block", marginBottom: "0.5rem" }}>
              Senha
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="Digite sua senha"
              value={formData.senha}
              onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label style={{ color: "var(--text-purple)", fontWeight: "600" }}>
              Usuário Responsável
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Digite o nome do usuário responsável"
              value={formData.responsavelPor}
              onChange={(e) =>
                setFormData({ ...formData, responsavelPor: e.target.value })
              }
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
      <Footer />
    </div>
  );
}
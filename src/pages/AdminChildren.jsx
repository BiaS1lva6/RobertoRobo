import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

export default function AdminChildren() {
  const navigate = useNavigate();
  const [children] = useState([
    { id: 1, name: "João Silva", age: 7, email: "joao@robo.com", jogos: 45, lastAccess: "Hoje, 14:30" },
    { id: 2, name: "Maria Santos", age: 8, email: "maria@robo.com", jogos: 62, lastAccess: "Ontem, 16:15" },
    { id: 3, name: "Pedro Costa", age: 6, email: "pedro@robo.com", jogos: 38, lastAccess: "Hoje, 10:20" },
    { id: 4, name: "Ana Oliveira", age: 7, email: "ana@robo.com", jogos: 51, lastAccess: "Hoje, 15:45" },
    { id: 5, name: "Lucas Ferreira", age: 9, email: "lucas@robo.com", jogos: 73, lastAccess: "Ontem, 11:30" },
  ]);

  return (
    <div className="purple-gradient p-4" style={{ minHeight: "100vh", overflowY: "auto" }}>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-light position-absolute"
        style={{
          top: "20px",
          right: "20px",
        }}
      >
        Voltar
      </button>

      <div
  className="card bg-warning text-dark mx-auto"
  style={{
    maxWidth: "1400px", // Aumenta a largura máxima
    padding: "2rem", // Aumenta o espaçamento interno
    minHeight: "650px", // Define uma altura mínima
  }}
>
        <h1 className="text-center fw-bold mb-4">Crianças Cadastradas</h1>

        <div className="row text-center mb-4">
          <div className="col">
            <div className="bg-light p-3 rounded">
              <h4 className="fw-bold">5</h4>
              <p>Total de Crianças</p>
            </div>
          </div>
          <div className="col">
            <div className="bg-light p-3 rounded">
              <h4 className="fw-bold">269</h4>
              <p>Jogos Realizados</p>
            </div>
          </div>
          <div className="col">
            <div className="bg-light p-3 rounded">
              <h4 className="fw-bold">54</h4>
              <p>Média por Criança</p>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Email</th>
                <th>Jogos</th>
                <th>Último Acesso</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {children.map((child) => (
                <tr key={child.id}>
                  <td>{child.name}</td>
                  <td>{child.age} anos</td>
                  <td>
                    <a href={`mailto:${child.email}`}>{child.email}</a>
                  </td>
                  <td>{child.jogos}</td>
                  <td>{child.lastAccess}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => alert("Editar criança")}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => alert("Excluir criança")}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
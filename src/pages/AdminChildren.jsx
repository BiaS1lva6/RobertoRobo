import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";


export default function AdminChildren() {
  const router = useNavigate()

  const [children, setChildren] = useState([
    { id: 1, name: "João Silva", age: 7, email: "joao@robo.com", games: 48, lastAccess: "Hoje, 10:30" },
    { id: 2, name: "Maria Santos", age: 8, email: "maria@robo.com", games: 65, lastAccess: "Ontem, 14:25" },
    { id: 3, name: "Ana Oliveira", age: 7, email: "ana@robo.com", games: 31, lastAccess: "Hoje, 16:15" },
    { id: 4, name: "Lucas Ferreira", age: 9, email: "lucas@robo.com", games: 73, lastAccess: "Ontem, 11:48" },
  ])

  const totalChildren = children.length
  const totalGames = children.reduce((acc, child) => acc + child.games, 0)
  const avgGames = Math.round(totalGames / children.length)

  const handleDelete = (id) => {
    if (confirm("Tem certeza que deseja excluir esta criança?")) {
      setChildren(children.filter((child) => child.id !== id));
    }
  };

  return (
    <div className="purple-gradient" style={{ minHeight: "100vh", padding: "2rem" }}>
      <div className="d-flex justify-content-end mb-3">
      <button
  onClick={() => router(-1)}
  style={{
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "white",
    border: "none",
    borderRadius: "10px",
    padding: "0.5rem 1rem",
    color: "var(--text-purple)",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  Voltar
</button>
      </div>

      <div
      className="custom-table"
        style={{
          borderRadius: "30px",
          padding: "2.5rem",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="fw-bold mb-4" style={{ color: "#000", fontSize: "2rem" }}>
          Crianças Cadastradas
        </h2>

        <div className="d-flex gap-3 mb-4 flex-wrap">
          <div
            style={{
              background: "#7C3AED",
              borderRadius: "15px",
              padding: "1rem 2rem",
              color: "white",
              textAlign: "center",
              minWidth: "150px",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{totalChildren}</div>
            <div style={{ fontSize: "0.9rem" }}>Total de Crianças</div>
          </div>
          <div
            style={{
              background: "#7C3AED",
              borderRadius: "15px",
              padding: "1rem 2rem",
              color: "white",
              textAlign: "center",
              minWidth: "150px",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{totalGames}</div>
            <div style={{ fontSize: "0.9rem" }}>Jogos Realizados</div>
          </div>
          <div
            style={{
              background: "#7C3AED",
              borderRadius: "15px",
              padding: "1rem 2rem",
              color: "white",
              textAlign: "center",
              minWidth: "150px",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{avgGames}</div>
            <div style={{ fontSize: "0.9rem" }}>Média por Criança</div>
          </div>
        </div>

        <div className="mb-3 d-flex justify-content-between align-items-center">
          <h4 className="fw-bold mb-0" style={{ color: "#000" }}>
            Crianças Cadastradas
          </h4>
          <a href="#" style={{ color: "#7C3AED", textDecoration: "none", fontWeight: "600" }}>
            Filtrar
          </a>
        </div>

        <div style={{ background: "white", borderRadius: "15px", overflow: "hidden" }}>
          <table className="table table-hover mb-0">
            <thead style={{ background: "#7C3AED", color: "white" }}>
              <tr >
                <th style={{ padding: "1rem", border: "none" }}>Nome</th>
                <th style={{ padding: "1rem", border: "none" }}>Idade</th>
                <th style={{ padding: "1rem", border: "none" }}>Email</th>
                <th style={{ padding: "1rem", border: "none" }}>Jogos</th>
                <th style={{ padding: "1rem", border: "none" }}>Último Acesso</th>
                <th style={{ padding: "1rem", border: "none" }}></th>
              </tr>
            </thead>
            <tbody>
              {children.map((child) => (
                <tr key={child.id}>
                  <td style={{ padding: "1rem", fontWeight: "600" }}>{child.name}</td>
                  <td style={{ padding: "1rem" }}>{child.age} anos</td>
                  <td style={{ padding: "1rem" }}>{child.email}</td>
                  <td style={{ padding: "1rem", fontWeight: "600", color: "#7C3AED" }}>{child.games}</td>
                  <td style={{ padding: "1rem" }}>{child.lastAccess}</td>
                  <td style={{ padding: "1rem" }}>
                    <button
                      className="btn btn-sm me-2"
                      style={{
                        background: "#7C3AED",
                        color: "white",
                        borderRadius: "8px",
                        padding: "0.4rem 1rem",
                        border: "none",
                      }}
                      onClick={() => alert(`Editar ${child.name}`)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-sm"
                      style={{
                        background: "#7C3AED",
                        color: "white",
                        borderRadius: "8px",
                        padding: "0.4rem 1rem",
                        border: "none",
                      }}
                      onClick={() => handleDelete(child.id)}
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
      <Footer/>
    </div>
  )
}

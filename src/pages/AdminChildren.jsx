import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import Footer from "../components/Footer";

export default function AdminChildren() {
  const router = useNavigate();

  const [children] = useState([
    { id: 1, name: "João Silva", age: 6, level: 1, progress: 45 },
    { id: 2, name: "Maria Santos", age: 7, level: 2, progress: 78 },
    { id: 3, name: "Pedro Costa", age: 5, level: 1, progress: 32 },
    { id: 4, name: "Ana Oliveira", age: 8, level: 2, progress: 89 },
  ]);

  const totalChildren = children.length;
  const avgProgress = Math.round(
    children.reduce((acc, child) => acc + child.progress, 0) / children.length
  );

  return (
    <div
      className="purple-gradient scrollable"
      style={{ minHeight: "100vh", paddingBottom: "2rem" }}
    >
      <Header title="Crianças Cadastradas" showBackButton={true} />

      <div className="container py-4">
        <div className="d-flex gap-3 mb-4 flex-wrap justify-content-center">
          <StatsCard value={totalChildren} label="Total" />
          <StatsCard value="563" label="Sessões" />
          <StatsCard value="54" label="Atividades" />
          <StatsCard value={`${avgProgress}%`} label="Progresso Médio" />
        </div>

        <div className="custom-table p-4">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Nível</th>
                  <th>Progresso</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {children.map((child) => (
                  <tr key={child.id}>
                    <td className="fw-bold">{child.name}</td>
                    <td>{child.age} anos</td>
                    <td>
                      <span className="badge bg-primary">
                        Nível {child.level}
                      </span>
                    </td>
                    <td>
                      <div className="progress" style={{ height: "20px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${child.progress}%`,
                            backgroundColor: "#8B3FD9",
                          }}
                          aria-valuenow={child.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          {child.progress}%
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-purple"
                        onClick={() =>
                          router.push(`/user/performance?childId=${child.id}`)
                        }
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-yellow"
              onClick={() => alert("Adicionar nova criança")}
            >
              + Adicionar Criança
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

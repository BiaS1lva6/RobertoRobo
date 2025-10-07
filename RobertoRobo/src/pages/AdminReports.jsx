import { useState } from "react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";

export default function AdminReports() {
  const [reports] = useState([
    { id: 1, title: "Relatório Semanal", date: "01/10/2025", type: "Semanal" },
    { id: 2, title: "Relatório Mensal", date: "01/09/2025", type: "Mensal" },
    { id: 3, title: "Relatório de Progresso", date: "15/09/2025", type: "Progresso" },
  ]);

  return (
    <div
      className="purple-gradient scrollable"
      style={{ minHeight: "100vh", paddingBottom: "2rem" }}
    >
      <Header title="Relatórios" showBackButton={true} />

      <div className="container py-4">
        <div className="d-flex gap-3 mb-4 flex-wrap justify-content-center">
          <StatsCard value="12" label="Relatórios" />
          <StatsCard value="78%" label="Taxa de Sucesso" />
          <StatsCard value="15" label="Atividades" />
          <StatsCard value="88%" label="Satisfação" />
        </div>

        <div className="custom-table p-4">
          <h4 className="mb-4 fw-bold">Relatórios Disponíveis</h4>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Data</th>
                  <th>Tipo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td className="fw-bold">{report.title}</td>
                    <td>{report.date}</td>
                    <td>
                      <span className="badge bg-info">{report.type}</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-purple me-2"
                        onClick={() => alert("Visualizar relatório")}
                      >
                        Visualizar
                      </button>
                      <button
                        className="btn btn-sm btn-yellow"
                        onClick={() => alert("Baixar relatório")}
                      >
                        Baixar
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
              onClick={() => alert("Gerar novo relatório")}
            >
              + Gerar Novo Relatório
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

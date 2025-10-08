import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

export default function AdminData() {
  const router = useNavigate();
  const [activeTab, setActiveTab] = useState("jogos");

  const [medicalRecords, setMedicalRecords] = useState([
    { date: "15/03/2024", type: "Consulta", description: "Avaliação inicial de comportamento" },
    { date: "22/03/2024", type: "Terapia", description: "Sessão de terapia ocupacional" },
    { date: "01/04/2024", type: "Medicamento", description: "Consultar com médico responsável" },
  ]);

  const [notes, setNotes] = useState([
    { date: "10/03/2024", content: "Criança demonstrou boa interação durante as atividades" },
    { date: "20/03/2024", content: "Progresso notável nas atividades de sequência" },
  ]);

  const [newRecord, setNewRecord] = useState({ date: "", type: "Consulta", description: "" });
  const [newNote, setNewNote] = useState("");
  const [showRecordForm, setShowRecordForm] = useState(false);

  const graphData = [
    { label: "Jan", value: 45 },
    { label: "Fev", value: 78 },
    { label: "Mar", value: 120 },
    { label: "Abr", value: 95 },
    { label: "Mai", value: 150 },
    { label: "Jun", value: 180 },
  ];
  const maxValue = Math.max(...graphData.map((d) => d.value));

  const handleAddRecord = () => {
    if (newRecord.date && newRecord.description) {
      setMedicalRecords([...medicalRecords, newRecord]);
      setNewRecord({ date: "", type: "Consulta", description: "" });
      setShowRecordForm(false);
    }
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      const today = new Date().toLocaleDateString("pt-BR");
      setNotes([...notes, { date: today, content: newNote }]);
      setNewNote("");
    }
  };

  return (
    <div className="purple-gradient scrollable" style={{ minHeight: "100vh", paddingBottom: "2rem" }}>
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

      <div className="container py-3">
        <div className="custom-table p-4">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "var(--purple-button)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="bi bi-person-fill" style={{ fontSize: "2rem", color: "white" }}></i>
            </div>
            <div>
              <h5 className="mb-0 fw-bold" style={{ color: "var(--text-dark)" }}>
                Administrador
              </h5>
              <small style={{ color: "var(--text-dark)" }}>admin@robertorobo.com</small>
            </div>
          </div>

          <div className="d-flex gap-3 mb-4 flex-wrap justify-content-center">
            <div className="stats-badge">
              <div style={{ fontSize: "2rem", fontWeight: "700" }}>24</div>
              <div style={{ fontSize: "0.8rem" }}>Total de Crianças</div>
            </div>
            <div className="stats-badge">
              <div style={{ fontSize: "2rem", fontWeight: "700" }}>85%</div>
              <div style={{ fontSize: "0.8rem" }}>Taxa de Conclusão</div>
            </div>
            <div className="stats-badge">
              <div style={{ fontSize: "2rem", fontWeight: "700" }}>340</div>
              <div style={{ fontSize: "0.8rem" }}>Jogos Realizados</div>
            </div>
            <div className="stats-badge">
              <div style={{ fontSize: "2rem", fontWeight: "700" }}>12</div>
              <div style={{ fontSize: "0.8rem" }}>Novos Usuários</div>
            </div>
          </div>

          <div className="d-flex gap-2 mb-4 justify-content-center">
            <button
              className={`btn ${activeTab === "jogos" ? "btn-purple" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab("jogos")}
              style={{ borderRadius: "20px", padding: "0.5rem 1.5rem" }}
            >
              Jogos
            </button>
            <button
              className={`btn ${activeTab === "historico" ? "btn-purple" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab("historico")}
              style={{ borderRadius: "20px", padding: "0.5rem 1.5rem" }}
            >
              Histórico Médico
            </button>
            <button
              className={`btn ${activeTab === "anotacoes" ? "btn-purple" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab("anotacoes")}
              style={{ borderRadius: "20px", padding: "0.5rem 1.5rem" }}
            >
              Anotações
            </button>
          </div>

          <div className="row g-4">
            {activeTab === "jogos" && (
              <>
                <div className="col-md-6">
                  <div className="p-3 bg-white rounded" style={{ borderRadius: "15px" }}>
                    <h6 className="fw-bold mb-3" style={{ color: "var(--text-dark)" }}>
                      Gráfico de Atividades
                    </h6>
                    <div
                      style={{
                        height: "250px",
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "0.5rem",
                        padding: "1rem 0",
                      }}
                    >
                      {graphData.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            flex: 1,
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                          }}
                        >
                          <div
                            style={{
                              height: `${(item.value / maxValue) * 180}px`,
                              background: "linear-gradient(180deg, var(--purple-button) 0%, #6b46c1 100%)",
                              borderRadius: "8px 8px 0 0",
                              marginBottom: "0.5rem",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scaleY(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scaleY(1)";
                            }}
                          ></div>
                          <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--text-dark)" }}>
                            {item.value}
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-dark)", marginTop: "0.25rem" }}>
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="d-flex gap-2 mt-3">
                      <button className="btn btn-outline-secondary btn-sm" style={{ borderRadius: "15px", flex: 1 }}>
                        Adicionar
                      </button>
                      <button className="btn btn-purple btn-sm" style={{ borderRadius: "15px", flex: 1 }}>
                        Upload de Documentos
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-white rounded" style={{ borderRadius: "15px", height: "100%" }}>
                    <h6 className="fw-bold mb-3" style={{ color: "var(--text-dark)" }}>
                      Histórico Médico
                    </h6>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-dark)", lineHeight: "1.8" }}>
                      {medicalRecords.slice(0, 3).map((record, index) => (
                        <div key={index} className="mb-2">
                          <strong>{record.type}:</strong> {record.date} - {record.description}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "historico" && (
              <div className="col-12">
                <div className="p-4 bg-white rounded" style={{ borderRadius: "15px" }}>
                  <h6 className="fw-bold mb-3" style={{ color: "var(--text-dark)" }}>
                    Histórico Médico Completo
                  </h6>
                  {medicalRecords.map((record, index) => (
                    <div key={index} className="mb-3 p-3" style={{ background: "#f9fafb", borderRadius: "10px" }}>
                      <strong style={{ color: "var(--purple-button)" }}>{record.type}:</strong> {record.date}
                      <br />
                      <span style={{ color: "var(--text-dark)" }}>{record.description}</span>
                    </div>
                  ))}

                  {!showRecordForm ? (
                    <button
                      className="btn btn-purple mt-3"
                      style={{ borderRadius: "20px" }}
                      onClick={() => setShowRecordForm(true)}
                    >
                      Adicionar Registro
                    </button>
                  ) : (
                    <div className="mt-4 p-3" style={{ background: "#f9fafb", borderRadius: "15px" }}>
                      <h6 className="fw-bold mb-3">Novo Registro</h6>
                      <div className="mb-3">
                        <label className="form-label">Data</label>
                        <input
                          type="date"
                          className="form-control"
                          value={newRecord.date}
                          onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Tipo</label>
                        <select
                          className="form-select"
                          value={newRecord.type}
                          onChange={(e) => setNewRecord({ ...newRecord, type: e.target.value })}
                          style={{ borderRadius: "10px" }}
                        >
                          <option value="Consulta">Consulta</option>
                          <option value="Terapia">Terapia</option>
                          <option value="Medicamento">Medicamento</option>
                          <option value="Exame">Exame</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Descrição</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          value={newRecord.description}
                          onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
                          style={{ borderRadius: "10px" }}
                          placeholder="Descreva o registro médico..."
                        ></textarea>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-purple" style={{ borderRadius: "20px" }} onClick={handleAddRecord}>
                          Salvar
                        </button>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ borderRadius: "20px" }}
                          onClick={() => setShowRecordForm(false)}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "anotacoes" && (
              <div className="col-12">
                <div className="p-4 bg-white rounded" style={{ borderRadius: "15px" }}>
                  <h6 className="fw-bold mb-3" style={{ color: "var(--text-dark)" }}>
                    Anotações
                  </h6>

                  <div className="mb-4">
                    {notes.map((note, index) => (
                      <div key={index} className="mb-3 p-3" style={{ background: "#f9fafb", borderRadius: "10px" }}>
                        <small style={{ color: "var(--purple-button)", fontWeight: "600" }}>{note.date}</small>
                        <p className="mb-0 mt-2" style={{ color: "var(--text-dark)" }}>
                          {note.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="form-label fw-bold">Nova Anotação</label>
                    <textarea
                      className="form-control mb-3"
                      rows="4"
                      placeholder="Adicione suas anotações aqui..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      style={{ borderRadius: "15px", border: "2px solid #e5e7eb" }}
                    ></textarea>
                    <button className="btn btn-purple" style={{ borderRadius: "20px" }} onClick={handleAddNote}>
                      Salvar Anotação
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

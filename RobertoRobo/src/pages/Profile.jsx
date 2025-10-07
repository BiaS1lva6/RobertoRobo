import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"

export default function Profile() {
  const router = useRouter()
  const { user } = useAuth()

  const [profile] = useState({
    name: user?.nome || "João Silva",
    age: 7,
    medicalHistory: [
      {
        type: "Consulta",
        date: "02/10/2025",
        description: "Avaliação inicial com o neurologista",
      },
      {
        type: "Terapia",
        date: "05/10/2025",
        description: "Sessão de terapia ocupacional",
      },
      {
        type: "Medicamento",
        date: "01/10/2025",
        description: "Prescrição de vitamina D",
      },
    ],
  })

  return (
    <div className="purple-gradient" style={{ minHeight: "100vh", padding: "2rem" }}>
      <button
        onClick={() => router.push("/user/dashboard")}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "white",
          border: "none",
          borderRadius: "10px",
          padding: "0.5rem 1.5rem",
          color: "#7C3AED",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Voltar
      </button>

      <div className="container" style={{ maxWidth: "800px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)",
            borderRadius: "30px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          {/* Avatar e nome */}
          <div className="text-center mb-4">
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "white",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                marginBottom: "1rem",
              }}
            >
              👤
            </div>
            <h2 style={{ color: "#1F2937", fontWeight: "700", margin: 0 }}>{profile.name}</h2>
            <p style={{ color: "#1F2937", fontSize: "1.1rem", margin: "0.5rem 0 0 0" }}>
              {profile.age} anos
            </p>
          </div>

          {/* Histórico médico */}
          <div>
            <h4 style={{ color: "#1F2937", fontWeight: "700", marginBottom: "1rem" }}>
              Histórico Médico:
            </h4>

            {profile.medicalHistory.map((record, idx) => (
              <div
                key={idx}
                style={{
                  background: "white",
                  borderRadius: "15px",
                  padding: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                <h5 style={{ color: "#7C3AED", fontWeight: "700", marginBottom: "0.5rem" }}>
                  {record.type}
                </h5>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", margin: 0 }}>
                  {record.date} - {record.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

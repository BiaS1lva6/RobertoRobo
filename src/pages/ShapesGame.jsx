import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";

const questions = [
  {
    question: "Qual dessas formas é uma estrela?",
    options: [
      { shape: "▲", color: "#10B981", isCorrect: false },
      { shape: "■", color: "#8B3FD9", isCorrect: false },
      { shape: "★", color: "#F59E0B", isCorrect: true },
      { shape: "●", color: "#EC4899", isCorrect: false },
    ],
  },
];

export default function ShapesGame() {
  const router = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index: number) => {
    if (showResult) return; // impede cliques duplos
    setSelectedOption(index);
    setShowResult(true);

    if (questions[0].options[index].isCorrect) {
      setTimeout(() => {
        router.push("/games/complete");
      }, 1500);
    } else {
      // reseta após 1.5s se errar
      setTimeout(() => {
        setShowResult(false);
        setSelectedOption(null);
      }, 1500);
    }
  };

  return (
    <div className="purple-gradient min-vh-100 d-flex flex-column">
      <Header title="Jogo de Formas" showBackButton={true} />

      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center py-4">
        <div
          className="text-center p-4 rounded-4 shadow-sm mb-5"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        >
          <h3 className="fw-bold mb-2" style={{ color: "var(--text-dark)" }}>
            {questions[0].question}
          </h3>
          <p className="mb-0 text-muted">Toque na forma correta abaixo</p>
        </div>

        <div className="d-flex gap-4 justify-content-center flex-wrap">
          {questions[0].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              className={`shape-button ${
                selectedOption === idx ? "selected" : ""
              }`}
              style={{
                backgroundColor: option.color,
                fontSize: "3.5rem",
                color: "white",
                border:
                  selectedOption === idx
                    ? "4px solid white"
                    : "3px solid transparent",
                transition: "transform 0.2s, border 0.2s",
                transform:
                  selectedOption === idx ? "scale(1.1)" : "scale(1.0)",
                borderRadius: "16px",
                width: "90px",
                height: "90px",
              }}
              disabled={showResult}
            >
              {option.shape}
            </button>
          ))}
        </div>

        {showResult && (
          <div className="text-center mt-5">
            {selectedOption !== null &&
            questions[0].options[selectedOption].isCorrect ? (
              <h2 className="fw-bold text-success">✨ Correto! Muito bem!</h2>
            ) : (
              <h2 className="fw-bold text-danger">❌ Tente novamente!</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const shapes = [
  { id: "triangle", name: "Triângulo", color: "#10B981", symbol: "▲" },
  { id: "square", name: "Quadrado", color: "#3B82F6", symbol: "■" },
  { id: "circle", name: "Círculo", color: "#E11D48", symbol: "●" },
  { id: "star", name: "Estrela", color: "#FACC15", symbol: "★" },
];

export default function SequenceGame() {
  const [sequence] = useState([0, 0, 1, 0]);
  const [userSequence, setUserSequence] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);

  const handleShapeClick = (shapeIndex) => {
    if (gameComplete) return;

    const newSequence = [...userSequence, shapeIndex];
    setUserSequence(newSequence);

    if (newSequence.length === sequence.length) {
      const isCorrect = newSequence.every((val, idx) => val === sequence[idx]);
      if (isCorrect) {
        setGameComplete(true);
      } else {
        alert("❌ Tente novamente!");
        setUserSequence([]);
      }
    }
  };

  return (
    <div className="purple-gradient d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="yellow-card">
        <div className="logo-container mb-3">
          <i className="bi bi-shapes"></i>
        </div>

        <div className="title-bubble mb-4">
          <h1>Jogo das Formas</h1>
        </div>

        <h5 className="fw-bold text-purple mb-3">
          Complete a sequência abaixo:
        </h5>

        <div className="d-flex justify-content-center gap-3 mb-4">
          {sequence.map((shapeIdx, idx) => (
            <div
              key={idx}
              className="shape-slot"
              style={{ backgroundColor: shapes[shapeIdx].color }}
            >
              {shapes[shapeIdx].symbol}
            </div>
          ))}
          <div className="shape-slot question">?</div>
        </div>

        <div className="choices d-flex justify-content-center flex-wrap gap-3 mb-3">
          {shapes.map((shape, idx) => (
            <button
              key={shape.id}
              onClick={() => handleShapeClick(idx)}
              className="shape-button"
              style={{ backgroundColor: shape.color }}
            >
              {shape.symbol}
            </button>
          ))}
        </div>

        {gameComplete ? (
          <div className="mt-3">
            <button className="btn-yellow" onClick={() => setUserSequence([])}>
              🎉 Parabéns! Jogar novamente
            </button>
          </div>
        ) : (
          <div className="mt-3">
            <button className="btn-purple" disabled>
              Escolha a próxima forma
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

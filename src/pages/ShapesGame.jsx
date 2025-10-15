import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router";

// 6 pares de ícones (12 quadrados)
const PAIRS = [
  { icon: "bi-alarm", color: "#22D3EE" }, { icon: "bi-alarm", color: "#22D3EE" },
  { icon: "bi-battery-full", color: "#3B82F6" }, { icon: "bi-battery-full", color: "#3B82F6" },
  { icon: "bi-heart-fill", color: "#F43F5E" }, { icon: "bi-heart-fill", color: "#F43F5E" },
  { icon: "bi-star-fill", color: "#FCD34D" }, { icon: "bi-star-fill", color: "#FCD34D" },
  { icon: "bi-lightning-charge-fill", color: "#A855F7" }, { icon: "bi-lightning-charge-fill", color: "#A855F7" },
  { icon: "bi-emoji-smile-fill", color: "#10B981" }, { icon: "bi-emoji-smile-fill", color: "#10B981" }
];

const TOTAL_PHASES = 5;

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ShapesGame() {
  const router = useNavigate();
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState(1);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [message, setMessage] = useState("");
  const [victory, setVictory] = useState(false);

  // Timer
  useEffect(() => {
    if (started && !victory) {
      const id = setInterval(() => setTimer(t => t + 1), 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
    return () => {};
  }, [started, victory]);

  // Embaralha cartas ao começar
  useEffect(() => {
    if (started) {
      setCards(shuffle(PAIRS));
      setFlipped([]);
      setMatched([]);
      setMoves(0);
      setTimer(0);
      setMessage("");
      setVictory(false);
    }
  }, [started, phase]);

  // Lógica do clique
  function handleCardClick(idx) {
    if (!started || victory) return;
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(idx)) return;

    const newFlipped = [...flipped, idx];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [i1, i2] = newFlipped;
      if (cards[i1].icon === cards[i2].icon) {
        setTimeout(() => {
          setMatched([...matched, i1, i2]);
          setScore(score + 50);
          setFlipped([]);
          if (matched.length + 2 === cards.length) {
            if (phase < TOTAL_PHASES) {
              setMessage("Fase completa! Próxima fase...");
              setTimeout(() => {
                setPhase(phase + 1);
              }, 1200);
            } else {
              // Finalizou todas as fases: navega para GameComplete
              router("/games-complete");
            }
          }
        }, 900);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setScore(score > 0 ? score - 10 : 0);
        }, 900);
      }
    }
  }

  function startGame() {
    setStarted(true);
    setPhase(1);
    setScore(0);
    setTimer(0);
    setMessage("");
    setVictory(false);
  }

  function restartGame() {
    setStarted(false);
    setPhase(1);
    setScore(0);
    setTimer(0);
    setMessage("");
    setVictory(false);
    setFlipped([]);
    setMatched([]);
    setCards([]);
  }

  function formatTime(sec) {
    const min = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${min}:${s}`;
  }

  // Renderiza 3 linhas x 4 colunas com efeito flip
  function renderGrid() {
    const grid = [];
    for (let row = 0; row < 3; row++) {
      const cols = [];
      for (let col = 0; col < 4; col++) {
        const idx = row * 4 + col;
        if (!cards[idx]) continue;
        const isFlipped = flipped.includes(idx) || matched.includes(idx);

        cols.push(
          <div
            key={idx}
            className="memory-card"
            onClick={() => handleCardClick(idx)}
            style={{
              cursor: started && !victory ? "pointer" : "not-allowed",
            }}
          >
            <div className={`memory-card-inner${isFlipped ? " flipped" : ""}`}>
              {/* Frente (cor + ícone) */}
              <div
                className="memory-card-front d-flex align-items-center justify-content-center"
                style={{
                  background: cards[idx].color,
                }}
              >
                <i className={`bi ${cards[idx].icon}`} style={{
                  fontSize: "2.5rem",
                  color: "#fff",
                  textShadow: "0 2px 12px #0002"
                }}></i>
              </div>
              {/* Verso (branco, sem borda) */}
              <div
                className="memory-card-back"
                style={{
                  background: "#fff",
                }}
              ></div>
            </div>
          </div>
        );
      }
      grid.push(
        <div className="shapes-row" key={row} style={{
          display: "flex",
          gap: "24px",
          marginBottom: "8px",
          justifyContent: "center"
        }}>
          {cols}
        </div>
      );
    }
    return grid;
  }

  return (
    <div className="purple-gradient d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ position: "relative"}}>
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
          zIndex: 2,
        }}
      >
        Voltar
      </button>
      <div className="yellow-card" style={{ maxWidth: '600px', width: '100%', padding: 0 }}>
        {/* Header fixo */}
        <Header />
        <div className="p-4">
          <div className="title-bubble mb-4">
            <h1>Jogo das Formas</h1>
          </div>
          <div style={{
            background: "linear-gradient(90deg, var(--purple-end) 70%, var(--yellow-card) 100%)",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "16px 16px 0 0",
            padding: "12px 18px",
            fontSize: "1.08rem",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}>
            <span>Tempo: {formatTime(timer)}</span>
            <span>Pontuação: {score}</span>
            <span>Fase: {phase}/{TOTAL_PHASES}</span>
          </div>
          <p style={{ color: "var(--text-purple)", fontWeight: 600 }}>Encontre todos os pares de formas!</p>
          <div style={{ margin: "24px 0" }}>
            {cards.length === 12 && renderGrid()}
          </div>
          <div style={{ minHeight: "40px", color: "var(--purple-end)", fontWeight: "bold", fontSize: "1.1rem" }}>{message}</div>
          {!started ? (
            <button className="btn-purple" onClick={startGame}>Iniciar</button>
          ) : (
            victory && (
              <button className="btn-purple" onClick={restartGame}>Jogar Novamente</button>
            )
          )}
        </div>
      </div>
      <Footer />
      {/* Certifique-se de importar o CSS do Bootstrap Icons no seu index.html ou App.jsx:
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
      */}
    </div>
  );
}
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

// Formas disponíveis usando Bootstrap Icons
const shapes = [
  { id: "triangle", name: "Triângulo", color: "#10B981", icon: "triangle" },
  { id: "square", name: "Quadrado", color: "#3B82F6", icon: "square" },
  { id: "circle", name: "Círculo", color: "#E11D48", icon: "circle" },
  { id: "star", name: "Estrela", color: "#FACC15", icon: "star" },
];

// Gerar sequência aleatória
function generateRandomSequence(length = 4) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * shapes.length)
  );
}

// Formatar timer
function formatTimer(totalSeconds) {
  const min = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const sec = String(totalSeconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

const MAX_ROUNDS = 5; // Defina quantas rodadas até mostrar GameComplete

export default function SequenceGame() {
  const navigate = useNavigate();
  const [sequence, setSequence] = useState(generateRandomSequence());
  const [userSequence, setUserSequence] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem("seqGameBestScore")) || 0
  );
  const [timer, setTimer] = useState(0);
  const [showSequence, setShowSequence] = useState(false);
  const [gameMessage, setGameMessage] = useState("Clique em Iniciar para começar!");
  const intervalRef = useRef(null);
  const [round, setRound] = useState(1);

  // Timer
  useEffect(() => {
    if (gameStarted && !gameComplete) {
      intervalRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [gameStarted, gameComplete]);

  // Salvar melhor pontuação
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem("seqGameBestScore", score);
    }
  }, [score, bestScore]);

  // Quando terminar, espera 2s e começa nova rodada OU navega para GameComplete
  useEffect(() => {
    if (gameComplete) {
      if (round >= MAX_ROUNDS) {
        setTimeout(() => {
          navigate("/games-complete");
        }, 2000);
      } else {
        const timeout = setTimeout(() => {
          nextRound();
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [gameComplete, round, navigate]);

  // Mostra a sequência para memorizar
  function showSequenceToUser() {
    setShowSequence(true);
    setGameMessage("Memorize a sequência!");
    setUserSequence([]);
    setTimeout(() => {
      setShowSequence(false);
      setGameMessage("Clique nas formas na ordem correta!");
    }, 2000 + sequence.length * 400); // tempo total proporcional ao tamanho
  }

  function handleShapeClick(shapeIndex) {
    if (!gameStarted || gameComplete || showSequence) return;

    const nextSequence = [...userSequence, shapeIndex];
    setUserSequence(nextSequence);

    // Checa se o clique está correto
    if (sequence[nextSequence.length - 1] !== shapeIndex) {
      setGameMessage("❌ Tente novamente! Veja a sequência novamente.");
      setUserSequence([]);
      setTimeout(() => {
        showSequenceToUser();
      }, 1200);
      return;
    }

    if (nextSequence.length === sequence.length) {
      setGameComplete(true);
      setGameMessage("🎉 Parabéns! Próxima sequência...");
      setScore(prev => prev + sequence.length * 10);
      clearInterval(intervalRef.current);
      return;
    } else {
      setGameMessage("Continue!");
    }
  }

  function startGame() {
    setSequence(generateRandomSequence());
    setUserSequence([]);
    setGameStarted(true);
    setGameComplete(false);
    setGameMessage("Memorize a sequência!");
    setScore(0);
    setTimer(0);
    setRound(1);
    clearInterval(intervalRef.current);
    showSequenceToUser();
  }

  function nextRound() {
    setSequence(generateRandomSequence());
    setUserSequence([]);
    setGameComplete(false);
    setGameMessage("Memorize a sequência!");
    setTimer(0);
    setRound(r => r + 1);
    intervalRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    showSequenceToUser();
  }

  // HEADER fixo com pontuação e tempo usando Bootstrap Icons
  const Header = () => (
    <div style={{
      width: '100%',
      background: 'linear-gradient(90deg, #7c3aed 60%, #fde68a 100%)',
      padding: '14px 0 12px 0',
      borderRadius: '18px 18px 0 0',
      boxShadow: '0 2px 8px #0002',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#fff',
      marginBottom: '0px'
    }}>
      <span>
        <i className="bi bi-clock-history"></i> Tempo:{" "}
        <span style={{ fontFamily: "monospace" }}>{formatTimer(timer)}</span>
      </span>
      <span>
        <i className="bi bi-trophy-fill"></i> Pontuação:{" "}
        <span style={{ color: "#10B981" }}>{score}</span>
      </span>
      <span>
        <i className="bi bi-award-fill"></i> Melhor:{" "}
        <span style={{ color: "#FACC15" }}>{bestScore}</span>
      </span>
      <span>
        <i className="bi bi-list-ol"></i> Fase:{" "}
        <span>{round}/{MAX_ROUNDS}</span>
      </span>
    </div>
  );

  return (
    <div className="purple-gradient d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="yellow-card" style={{maxWidth:'600px', width:'100%', padding:0}}>
        {/* Header fixo */}
        <Header />
        <div className="p-4">
          <div className="title-bubble mb-4">
            <h1>Jogo das Formas</h1>
          </div>
          <h5 className="fw-bold text-purple mb-3">
            {showSequence ? "Memorize a sequência:" : "Clique nas formas na mesma ordem:"}
          </h5>
          {/* Sequência a ser seguida (slots) só aparecem durante showSequence */}
          {showSequence && (
            <div className="d-flex justify-content-center gap-3 mb-4">
              {sequence.map((shapeIdx, idx) => (
                <div
                  key={idx}
                  className="shape-slot"
                  style={{
                    backgroundColor: shapes[shapeIdx].color,
                    border: "4px solid " + shapes[shapeIdx].color,
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "18px",
                    fontSize: "2.5rem",
                    boxShadow: "0 2px 8px #0002",
                    color: "#fff"
                  }}
                >
                  {/* Bootstrap Icon */}
                  <i className={`bi bi-${shapes[shapeIdx].icon}`}></i>
                </div>
              ))}
            </div>
          )}
          {/* Botões de escolha -- cada botão mostra o ícone Bootstrap */}
          <div className="choices d-flex justify-content-center flex-wrap gap-3 mb-3">
  {shapes.map((shape, idx) => (
    <button
      key={shape.id}
      onClick={() => handleShapeClick(idx)}
      className="shape-button"
      style={{
        backgroundColor: "#fff",
        border: `6px solid ${shape.color}`,
        borderRadius: "20px",
        padding: "20px",
        width: "100px",
        height: "100px",
        boxShadow: "0 4px 16px #0002",
        fontSize: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      disabled={!gameStarted || gameComplete || showSequence}
    >
      <i className={`bi bi-${shape.icon}`}></i>
    </button>
  ))}
</div>
          {/* Mensagem do jogo */}
          <div className="game-msg mb-3 text-center fw-bold" style={{fontSize:'1.2rem', color:'#7c3aed', textShadow:'1px 1px 2px #fff'}}>
            {gameMessage}
          </div>
          {/* Botão de iniciar só no começo */}
          {!gameStarted && (
            <div className="d-flex justify-content-center mt-3">
              <button className="btn-purple" style={{fontWeight:'bold', fontSize:'1.2rem', borderRadius:'16px', padding:'10px 24px'}} onClick={startGame}>
                Iniciar
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import RegisterTutor from "./pages/RegisterTutor";
import UserDashboard from "./pages/UserDashboard";
import GamesMenu from "./pages/GamesMenu";
import Performance from "./pages/Performance";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Redireciona o caminho raiz para a página de login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Páginas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterTutor />} />

          {/* Páginas privadas */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/games" element={<GamesMenu />} />
          <Route path="/user/performance" element={<Performance />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterTutor from "./pages/RegisterTutor";
import RegisterTutorQRCode from "./pages/RegisterTutorQRCode";
import UserDashboard from "./pages/UserDashboard";
import GamesMenu from "./pages/GamesMenu";
import Performance from "./pages/Performance";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminChildren from "./pages/AdminChildren";
import AdminReports from "./pages/AdminReports";
import AdminData from "./pages/AdminData";
import SequenceGame from "./pages/SequenceGame"; 
import ShapesGame from "./pages/ShapesGame";
import GameComplete from "./pages/GameComplete"; 

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Redireciona o caminho raiz para a página de login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Páginas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-tutor" element={<RegisterTutor />} />
          <Route path="/register-tutor-qrcode" element={<RegisterTutorQRCode />} />

          {/* Páginas privadas */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/games" element={<GamesMenu />} />
          <Route path="/user/performance" element={<Performance />} />
          <Route path="/user/profile" element={<Profile />} />

          {/* Jogos */}
          <Route path="/sequence-game" element={<SequenceGame />} /> 
          <Route path="/shapes-game" element={<ShapesGame />} />
          <Route path="/games/complete" element={<GameComplete />} /> 
          
          {/* Páginas administrativas */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/children" element={<AdminChildren />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/data" element={<AdminData />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
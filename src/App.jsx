import { BrowserRouter as Router, Routes, Route } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import UserDashboard from "./pages/UserDashboard";
import Games from "./pages/Games";
import Performance from "./pages/Performance";
import Login from "./pages/Login";
import RegisterTutor from "./pages/RegisterTutor";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Páginas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterTutor />} />

          {/* Páginas privadas */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/user/performance" element={<Performance />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
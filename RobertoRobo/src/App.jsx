import { BrowserRouter as Router, Routes, Route } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import GamesPage from "./pages/GamesPage";
import PerformancePage from "./pages/Performance";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Páginas públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Páginas privadas */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/user/performance" element={<PerformancePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
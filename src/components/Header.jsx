import { useNavigate } from "react-router";

export default function Header({ title, showBackButton = false, showLogoutButton = false }) {
  const router = useNavigate();

  const handleBack = () => {
    router(-1); // Navega para a página anterior
  };

  const handleLogout = () => {
    router("/login");
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-3" style={{ color: "white" }}>
      {showBackButton ? (
        <button onClick={handleBack} className="btn btn-link text-white text-decoration-none">
          ← Voltar
        </button>
      ) : (
        <div></div>
      )}
      <h2 className="m-0">{title}</h2>
      {showLogoutButton ? (
        <button onClick={handleLogout} className="btn btn-link text-white text-decoration-none">
          Sair
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
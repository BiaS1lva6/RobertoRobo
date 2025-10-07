import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

// Criação do contexto de autenticação
export const AuthContext = createContext();

// Provedor do contexto de autenticação
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário autenticado
  const navigate = useNavigate();

  const login = async (email, senha) => {
    try {
      // Simulação de autenticação
      if (email === "admin@roberto.com" && senha === "admin123") {
        setUser({ email });
        navigate("/dashboard"); // Redireciona para o dashboard após login bem-sucedido
      } else {
        throw new Error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      throw error; // Repassa o erro para ser tratado no componente
    }
  };

  const logout = () => {
    setUser(null); // Remove o usuário autenticado
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para consumir o contexto de autenticação
export function useAuth() {
  return useContext(AuthContext);
}
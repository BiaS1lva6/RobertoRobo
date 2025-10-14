import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // LOGIN
  const login = async (email, senha) => {
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const tutors = JSON.parse(localStorage.getItem("registeredTutors")) || [];

    const foundUser = users.find((u) => u.email === email && u.senha === senha);
    const foundTutor = tutors.find(
      (t) => t.email === email && t.senha === senha
    );

    if (foundUser) {
      setUser({ ...foundUser, tipo: "usuario" });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...foundUser, tipo: "usuario" })
      );
      navigate("/dashboard");
    } else if (foundTutor) {
      setUser({ ...foundTutor, tipo: "tutor" });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...foundTutor, tipo: "tutor" })
      );
      navigate("/admin/dashboard");
    } else {
      throw new Error("Email ou senha incorretos");
    }
  };

  // REGISTRAR USUÁRIO
  const register = (novoUsuario) => {
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    if (users.some((u) => u.email === novoUsuario.email))
      throw new Error("Este email já está registrado.");
    users.push({
      user: novoUsuario.user, // Certifique-se de salvar o campo "user"
      email: novoUsuario.email,
      senha: novoUsuario.senha,
    });
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  };

  // REGISTRAR TUTOR
  const registerTutor = (novoTutor) => {
    const tutors = JSON.parse(localStorage.getItem("registeredTutors")) || [];
    if (tutors.some((t) => t.email === novoTutor.email))
      throw new Error("Este email já está registrado como tutor.");
    tutors.push(novoTutor);
    localStorage.setItem("registeredTutors", JSON.stringify(tutors));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, registerTutor, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

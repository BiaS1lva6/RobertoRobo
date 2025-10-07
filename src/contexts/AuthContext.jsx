import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router";

const AuthContext = createContext()

const MOCK_USERS = {
  // Admin
  "admin@roberto.com": {
    email: "admin@roberto.com",
    senha: "admin123",
    tipo: "admin",
    nome: "Administrador",
  },
  // Tutor
  "tutor@roberto.com": {
    email: "tutor@roberto.com",
    senha: "tutor123",
    tipo: "tutor",
    nome: "Maria Silva",
    criancas: ["João Pedro"],
  },
  // Usuário (criança)
  "joao@roberto.com": {
    email: "joao@roberto.com",
    senha: "joao123",
    tipo: "usuario",
    nome: "João Pedro",
    idade: 8,
    tutor: "Maria Silva",
  },
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem("roberto_user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("[v0] Erro ao carregar usuário:", error)
        localStorage.removeItem("roberto_user")
      }
    }
    setLoading(false)
  }, [])

  const login = (email, senha) => {
    console.log("[v0] Tentando login:", email)
    const userData = MOCK_USERS[email.toLowerCase()]

    if (!userData) {
      throw new Error("Usuário não encontrado")
    }

    if (userData.senha !== senha) {
      throw new Error("Senha incorreta")
    }

    const userToSave = { ...userData }
    delete userToSave.senha // Não salvar senha
    setUser(userToSave)
    localStorage.setItem("roberto_user", JSON.stringify(userToSave))

    console.log("[v0] Login bem-sucedido:", userToSave.tipo)

    if (userData.tipo === "admin" || userData.tipo === "tutor") {
      router.push("/admin/dashboard")
    } else {
      router.push("/user/dashboard")
    }

    return userToSave
  }

  const register = (userData) => {
    console.log("[v0] Registrando novo usuário:", userData.email)
    // Em produção, isso seria uma chamada à API
    const newUser = {
      email: userData.email,
      tipo: "usuario",
      nome: userData.nome,
      idade: userData.idade,
    }

    setUser(newUser)
    localStorage.setItem("roberto_user", JSON.stringify(newUser))
    return newUser
  }

  const logout = () => {
    console.log("[v0] Fazendo logout")
    setUser(null)
    localStorage.removeItem("roberto_user")
    router.push("/login")
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.tipo === "admin" || user?.tipo === "tutor",
    isUser: user?.tipo === "usuario",
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider")
  }
  return context
}

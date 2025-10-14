import { useState, useEffect, useRef } from "react";
import EyeOverlay from "./EyeOverlay";

export default function InactivityEyes({ timeout = 5000 }) {
  const [inactive, setInactive] = useState(false); // Estado para rastrear inatividade
  const timeoutIdRef = useRef(null); // Armazena o timeoutId sem causar re-renderizações

  useEffect(() => {
    const handleActivity = () => {
      if (inactive) {
        console.log("Usuário voltou a estar ativo"); // Mensagem no console
        setInactive(false); // Altera para ativo somente se estava inativo
      }
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current); // Limpa o timeout anterior
      timeoutIdRef.current = setTimeout(() => {
        setInactive(true); // Define como inativo após o tempo especificado
        console.log("Usuário inativo"); // Mensagem no console
      }, timeout); // Define o tempo de inatividade
    };

    // Adiciona os eventos de atividade
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    // Remove os eventos de atividade ao desmontar o componente
    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [inactive, timeout]); // O efeito depende de `inactive` e `timeout`

  return inactive ? <EyeOverlay /> : null;
}

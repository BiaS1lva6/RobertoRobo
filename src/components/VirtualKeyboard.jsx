import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function VirtualKeyboard({
  visible,
  activeField,
  formData,
  setFormData,
  onClose,
  onNextField, // Callback para mover para o próximo campo
}) {
  if (!visible) return null;

  const handleKeyPress = (button) => {
    if (!activeField) return;

    let value = formData[activeField] || "";

    switch (button) {
      case "{close}":
        if (onClose) onClose();
        return;
      case "{backspace}":
        value = value.slice(0, -1);
        break;
      case "{space}":
        value += " ";
        break;
      case "{clear}":
        value = ""; // Limpa o campo de entrada
        break;
      case "{submit}":
        if (onNextField) onNextField(activeField); // Move para o próximo campo
        return;
      default:
        value += button;
        break;
    }

    setFormData({ ...formData, [activeField]: value });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Keyboard
        onKeyPress={handleKeyPress}
        layout={{
          default: [
            "1 2 3 4 5 6 7 8 9 0 {backspace}",
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "z x c v b n m , . ? !",
            "@ # $ % & * ( ) - _ + =",
            "{space} {clear} {submit} {close}",
          ],
        }}
        display={{
          "{space}": "Espaço",
          "{clear}": "Limpar",
          "{submit}": "Enviar",
          "{close}": "Fechar",
          "{backspace}": "←",
        }}
        theme="hg-theme-default hg-layout-default"
      />
    </div>
  );
}
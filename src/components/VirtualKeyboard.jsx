import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function VirtualKeyboard({ onChange, onKeyPress }) {
  const [input, setInput] = useState("");

  const handleChange = (input) => {
    setInput(input);
    if (onChange) onChange(input);
  };

  const handleKeyPress = (button) => {
    if (onKeyPress) onKeyPress(button);
  };

  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 1000 }}>
      <Keyboard
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        layout={{
            default: [
              "1 2 3 4 5 6 7 8 9 0",
              "q w e r t y u i o p",
              "a s d f g h j k l",
              "z x c v b n m , . ? !",
              "@ # $ % & * ( ) - _ + =",
              "{space}"
            ],
          }}
          display={{
            "{space}": "Espaço",
          }}
        />
    </div>
  );
}
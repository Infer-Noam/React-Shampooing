import "./App.css";
import { useState } from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker"

function App() {
  const [color, setColor] = useState<string | null>(null);
  return (
    <ColorPicker color={color} setColor={setColor}></ColorPicker>
  );
}

export default App;

import "./App.css";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import MyTimePicker from "./components/MyTimePicker/MyTimePicker.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
          <MyTimePicker ></MyTimePicker>
      </ThemeProvider>
    </>
  );
}

export default App;

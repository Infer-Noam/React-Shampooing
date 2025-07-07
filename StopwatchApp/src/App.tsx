import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./App.css";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import delay from "delay";
import TimerDisplay from "./components/TimerDisplay.tsx";
import Styles from "./App.style.ts";

export const maxSeconds = 5999;

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const tick = async () => {
      while (isPlaying && !cancelled) {
        setSeconds((s) => {
          const seconds = s == 0 ? s : s - 1;
          s == 0 ? setIsPlaying(false) : {};
          return seconds;
        });
        await delay(1000);
      }
    };

    tick();

    return () => {
      cancelled = true;
    };
  }, [isPlaying]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={Styles.appContainer}>
          <TimerDisplay seconds={seconds}></TimerDisplay>
          <TextField
            variant="outlined"
            label="Enter seconds"
            value={isPlaying ? 0 : seconds}
            type="number"
            disabled={isPlaying}
            onChange={(e) => {
              const s = Number(e.target.value);
              !(s < 0 || s > maxSeconds) && setSeconds(Number(e.target.value));
            }}
            sx={{
              mb: 3,
            }}
          />
          <Button onClick={() => setIsPlaying((i) => !i)}>
            {isPlaying ? "Stop" : "Play"}
          </Button>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

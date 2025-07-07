import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { maxSeconds } from "../App";
import Styles from "./TimerDisplay.style"

type Props = {
  seconds: number;
};
function TimerDisplay({ seconds }: Props) {
  function formatSeconds(): String {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  return (
    <Box sx={Styles.container}>
      <CircularProgress
        variant="determinate"
        value={(seconds / maxSeconds) * 100}
        size={120}
      ></CircularProgress>
      <Box
        sx={Styles.textContainer}
      >
        <Typography variant="h4">{formatSeconds()}</Typography>
      </Box>
    </Box>
  );
}

export default TimerDisplay;

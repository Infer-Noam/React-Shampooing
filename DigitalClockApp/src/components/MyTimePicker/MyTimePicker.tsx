import { useState, useEffect } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import Styles from "./MyTimePicker";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import delay from "delay";

function MyTimePicker() {
  const [time, setTime] = useState<Dayjs | null>(dayjs());
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = `Time is: ${time}`;
    (async () => {
      setIsSnackbarOpen((i) => !i);
      await delay(2500);
      setIsSnackbarOpen((i) => !i);
    })();
  }, [time]);

  return (
    <Box sx={Styles.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"de"}>
        <TimePicker
          sx={{}}
          value={time}
          onChange={(t) => {
            setTime(t);
          }}
        ></TimePicker>
      </LocalizationProvider>

      <Snackbar
        message={"Time changed!"}
        open={isSnackbarOpen}
        onClose={() => {}}
      ></Snackbar>
    </Box>
  );
}

export default MyTimePicker;

import type { SxProps } from "@mui/material";

const dialogContent: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const textField: SxProps = { mb: 2, mt: 1 };

const button: SxProps = { borderRadius: "10 px", width: "50%" };

export default { dialogContent, button, textField };

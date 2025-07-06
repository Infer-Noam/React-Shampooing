import type { SxProps } from "@mui/material";

const appContainer: SxProps = {
  position: "relative",
  display: "flex",
  height: "100dvh",
  width: "100dvw",
};

const gridContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
};

const fab = {
  position: "absolute",
  bottom: 16,
  right: 16,
  zIndex: 1,
};

export default { appContainer, gridContainer, fab };

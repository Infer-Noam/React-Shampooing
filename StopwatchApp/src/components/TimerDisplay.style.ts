import type { SxProps } from "@mui/material/styles";

const container: SxProps = {
  position: "relative",
  display: "inline-flex",
  mb: 5.5,
};

const textContainer: SxProps = {
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default { container, textContainer };

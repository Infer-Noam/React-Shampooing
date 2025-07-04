import type { SxProps } from "@mui/material";

const ColorPickerDisplay: SxProps = {
  backgroundColor: "white",
  width: "250px",
  height: "250px",
  marginTop: "15px",
  marginBottom: "10px",
  borderRadius: "20px",
  border: "2px solid gray",
  position: "relative",
};

const Column: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Text: SxProps = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
};

const Headline: SxProps = {
  marginTop: "25px",
};

export default {
  ColorPickerDisplay,
  Column,
  Text,
  Headline,
};

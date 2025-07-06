import Styles from "./ColorPicker.style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  color: string | null;
  setColor: (color: string) => void;
};

const invertHexColor = (hex: string): string => {
  const cleanHex = hex.replace("#", "");

  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map((c) => c + c)
          .join("")
      : cleanHex;

  const r = 255 - parseInt(fullHex.substring(0, 2), 16);
  const g = 255 - parseInt(fullHex.substring(2, 4), 16);
  const b = 255 - parseInt(fullHex.substring(4, 6), 16);

  const toHex = (n: number) => n.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export default function ColorPicker({ color, setColor }: Props) {
  return (
    <Box sx={Styles.Column}>
      <Typography sx= {Styles.Headline} variant="h5">Color picker</Typography>

      <Box
        sx={{
          ...Styles.ColorPickerDisplay,
          ...(color && { backgroundColor: color }),
        }}
      >
        <Box
          sx={{
            ...Styles.Text,
            ...(color && { color: invertHexColor(color) }),
          }}
        >
          {color && `Selected color: ${color}`}
        </Box>
      </Box>
      <label htmlFor="colorInput">
        <Typography variant="body1">Choose a color:</Typography>
      </label>

      <input
        type="color"
        value={color ?? "#FFFFFF"}
        onChange={(newColor) => setColor(newColor.target.value)}
        id="colorPicker"
      ></input>
    </Box>
  );
}

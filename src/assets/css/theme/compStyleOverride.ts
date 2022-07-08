import { ThemeOptions } from "@mui/material";

export default function componentStyleOverrides(theme: ThemeOptions) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "4px",
          backgroundColor: "red",
          color: "white",
          border: "1px solid black",
        },
      },
    },
  };
}

import { createTheme, ThemeOptions } from "@mui/material/styles";

// assets
// import colors from "assets/scss/_themes-vars.module.scss";

// project imports
import componentStyleOverrides from "./compStyleOverride";

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",

  /**
   * Grays
   */
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",

  /**
   * Solid Color
   */
  white: "#fff",
  black: "#000",
};

export const theme = () => {
  //   const color = colors;

  const themeOption = {
    direction: "ltr",
  };

  console.log("shenlong: ");

  const themeOptions: ThemeOptions = {
    palette: {
      primary: {
        main: "darkblue",
      },
      secondary: {
        main: Colors.secondary,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableFocusRipple: true,
          disableElevation: true,
        },
      },
    },
  };

  const themes = createTheme(themeOptions);
  //   themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;

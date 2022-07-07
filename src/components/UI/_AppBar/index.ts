import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../../../assets/css/theme";
import "@fontsource/montez";

interface MyListProps {
  type?: string;
}

export const _AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const _AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4rem",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

export const _MyList = styled(List)(({ type }: MyListProps) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "content",
  alignItems: "center",
}));

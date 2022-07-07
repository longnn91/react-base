import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <div>{matches ? <AppbarMobile /> : <AppbarDesktop />}</div>;
}

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { _AppbarContainer, _AppbarHeader, _MyList } from "../UI/_AppBar";
import SearchIcon from "@mui/icons-material/Search";
import AppbarAction from "./appbarAction";

export default function AppbarDesktop() {
  return (
    <_AppbarContainer>
      <_AppbarHeader>My Bags</_AppbarHeader>
      <_MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Product" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </_MyList>
      <AppbarAction />
    </_AppbarContainer>
  );
}

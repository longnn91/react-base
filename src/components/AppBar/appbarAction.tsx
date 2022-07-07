import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { _MyList } from "../UI/_AppBar";

export default function AppbarAction() {
  return (
    <_MyList type="row">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
    </_MyList>
  );
}

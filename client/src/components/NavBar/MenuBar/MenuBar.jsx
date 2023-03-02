import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link } from "react-router-dom";
import { getDogAll, getDogApi, getDogDb } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const MenuTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    minWidth: "80px",
    border: "1px solid rgb(255, 255, 255)",
    position: "Relative",
    top: "-15px",
  },
}));

const ButtonMenu = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100%",
  color: "white",
  ":hover": {
    color: "white",
    border: "2px solid white",
    backgroundColor: theme.palette.action.hover,
  },
}));

const MenuBar = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonMenu variant="outlined" disableElevation>
          INICIO
        </ButtonMenu>
      </Link>

      <MenuTooltip
        color="primary"
        title={
          <Box>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <List component="nav" aria-label="Categoria">
                <ListItemButton onClick={() => dispatch(getDogAll())}>
                  <ListItemText primary="Todos" sx={{ color: "white" }} />
                </ListItemButton>
                <Divider />
                <ListItemButton onClick={() => dispatch(getDogApi())}>
                  <ListItemText primary="Instalados" sx={{ color: "white" }} />
                </ListItemButton>
                <Divider />
                <ListItemButton onClick={() => dispatch(getDogDb())}>
                  <ListItemText primary="Creados" sx={{ color: "white" }} />
                </ListItemButton>
              </List>
            </Link>
          </Box>
        }
      >
        <ButtonMenu variant="outlined" disableElevation>
          CATEGORY
        </ButtonMenu>
      </MenuTooltip>

      <MenuTooltip
        title={
          <Box>
            <List component="nav" aria-label="Menu de opciones">
              <Link
                to="/home/dog/create"
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Crear" />
                </ListItemButton>
              </Link>
              <Divider />
              <Link
                to="/home/dog/edit"
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <BorderColorIcon />
                  </ListItemIcon>
                  <ListItemText primary="Editar" />
                </ListItemButton>
              </Link>
            </List>
          </Box>
        }
      >
        <ButtonMenu variant="outlined" disableElevation>
          MENU
        </ButtonMenu>
      </MenuTooltip>

      <Link to="/home/admin/contact" style={{ textDecoration: "none" }}>
        <ButtonMenu variant="outlined" disableElevation>
          CONTACTO
        </ButtonMenu>
      </Link>
    </Box>
  );
};

export default MenuBar;

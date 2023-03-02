import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link } from "react-router-dom";
import { getDogAll, getDogApi, getDogDb } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

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
  const [open_categoria, set_open_categoria] = useState(false);
  const [open_menu, set_open_menu] = useState(false);

  const handleClick_categoria = () => {
    set_open_categoria((prev) => !prev);
  };

  const handleClickAway_categoria = () => {
    set_open_categoria(false);
  };


  const handleClick_menu = () => {
    set_open_menu((prev) => !prev);
  };

  const handleClickAway_menu = () => {
    set_open_menu(false);
  };

  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonMenu variant="outlined" disableElevation>
          INICIO
        </ButtonMenu>
      </Link>

      <ClickAwayListener onClickAway={handleClickAway_categoria}>
        <Box sx={{ position: "relative" }}>
          <ButtonMenu variant="outlined" onClick={handleClick_categoria} disableElevation>
            CATEGORIA
          </ButtonMenu>

          {open_categoria ? (
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 63,
                // right: 0,
                // left: 0,
                zIndex: 999,
                border: "1px solid white",
                p: 1,
                bgcolor: "primary.main",
              }}
            >
              <Link to="/home" style={{ textDecoration: "none" }}>
                <List component="nav" aria-label="Categoria">
                  <ListItemButton onClick={() => dispatch(getDogAll())}>
                    <ListItemText primary="Todos" sx={{ color: "white" }} />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton onClick={() => dispatch(getDogApi())}>
                    <ListItemText
                      primary="Instalados"
                      sx={{ color: "white" }}
                    />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton onClick={() => dispatch(getDogDb())}>
                    <ListItemText primary="Creados" sx={{ color: "white" }} />
                  </ListItemButton>
                </List>
              </Link>
            </Paper>
          ) : null}
        </Box>
      </ClickAwayListener>

      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway_menu}
      >
        <Box sx={{ position: "relative" }}>
          <ButtonMenu variant="outlined" onClick={handleClick_menu} disableElevation>
            MENU
          </ButtonMenu>

          {open_menu ? (
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 63,
                // right: 0,
                // left: 0,
                zIndex: 999,
                border: "1px solid white",
                p: 1,
                bgcolor: "primary.main",
              }}
            >
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
            </Paper>
          ) : null}
        </Box>
      </ClickAwayListener>

      <Link to="/home/admin/contact" style={{ textDecoration: "none" }}>
        <ButtonMenu variant="outlined" disableElevation>
          CONTACTO
        </ButtonMenu>
      </Link>
    </Box>
  );
};

export default MenuBar;

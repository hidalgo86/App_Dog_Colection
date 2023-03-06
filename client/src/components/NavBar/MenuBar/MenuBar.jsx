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
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useHistory } from "react-router-dom";
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
    border: "1px solid white",
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

  let history = useHistory();

  let ruta = (path) => {
    history.push(path);
  };

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
        <ButtonMenu onClick={()=>ruta("/")} variant="outlined" disableElevation>
          INICIO
        </ButtonMenu>

      <ClickAwayListener onClickAway={handleClickAway_categoria}>
        <Box sx={{ position: "relative" }}>
          <ButtonMenu
            variant="outlined"
            onClick={handleClick_categoria}
            disableElevation
          >
            CATEGORIA
          </ButtonMenu>

          {open_categoria ? (
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 63,
                zIndex: 999,
                border: "1px solid white",
                p: 1,
                bgcolor: "primary.main",
              }}
            >
              <List component="nav" aria-label="Categoria">
                <ListItemButton
                  onClick={() => {
                    dispatch(getDogAll());
                    ruta("/home");
                  }}
                >
                  <ListItemText primary="Todos" sx={{ color: "white" }} />
                </ListItemButton>
                <Divider />
                <ListItemButton
                  onClick={() => {
                    dispatch(getDogApi());
                    ruta("/home");
                  }}
                >
                  <ListItemText primary="Instalados" sx={{ color: "white" }} />
                </ListItemButton>
                <Divider />
                <ListItemButton
                  onClick={() => {
                    dispatch(getDogDb());
                    ruta("/home");
                  }}
                >
                  <ListItemText primary="Creados" sx={{ color: "white" }} />
                </ListItemButton>
              </List>
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
          <ButtonMenu
            variant="outlined"
            onClick={handleClick_menu}
            disableElevation
          >
            MENU
          </ButtonMenu>

          {open_menu ? (
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 63,
                zIndex: 999,
                border: "1px solid white",
                p: 1,
                bgcolor: "primary.main",
                color:"white"
              }}
            >
              <List component="nav" aria-label="Menu de opciones">
                  <ListItemButton onClick={()=>ruta("/home/dog/create")}>
                    <ListItemIcon>
                      <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Crear" />
                  </ListItemButton>
                <Divider />
                  <ListItemButton onClick={()=>ruta("/home/dog/edit")}>
                    <ListItemIcon>
                      <BorderColorIcon />
                    </ListItemIcon>
                    <ListItemText primary="Editar" />
                  </ListItemButton>
              </List>
            </Paper>
          ) : null}
        </Box>
      </ClickAwayListener>

        <ButtonMenu onClick={()=>ruta("/home/admin/contact")} variant="outlined" disableElevation>
          CONTACTO
        </ButtonMenu>
    </Box>
  );
};

export default MenuBar;

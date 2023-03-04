import {
  Box,
  ClickAwayListener,
  Divider,
  Fab,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const User = () => {
  const cerrar = () => {
    localStorage.removeItem("token");
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  let history = useHistory();

  const ruta = (path) => {
    history.push(path);
  };

  return (
    <Box>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: "relative" }}>
          <Fab
            onClick={handleClick}
            size="small"
            aria-label="user"
            sx={{
              backgroundColor: "white",
              color: "primary.main",
              "&:hover": { backgroundColor: "primary.main", color: "white" },
            }}
          >
            <AccountCircleIcon sx={{ fontSize: "30px" }} />
          </Fab>

          {open ? (
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 52,
                right: -10,
                // left: 0,
                zIndex: 999,
                border: "1px solid white",
                p: 1,
                bgcolor: "primary.main",
              }}
            >
              <List component="nav" aria-label="Menu-user">
                <ListItemButton
                  onClick={() => {
                    ruta("/home/user/login");
                  }}
                >
                  <ListItemText primary="Inicio" sx={{ color: "white" }} />
                </ListItemButton>
                <Divider />
                <ListItemButton
                  onClick={() => {
                    ruta("/home/user/create");
                  }}
                >
                  <ListItemText primary="Registrar" sx={{ color: "white" }} />
                </ListItemButton>
                <Divider />
                <ListItemButton onClick={cerrar}>
                  <ListItemText primary="Cerrar" sx={{ color: "white" }} />
                </ListItemButton>
              </List>
            </Paper>
          ) : null}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default User;

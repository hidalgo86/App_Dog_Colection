import {
  Box,
  ClickAwayListener,
  Divider,
  Fab,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const User = () => {
  let history = useHistory();
  const desktop = useMediaQuery("(min-width:600px)");

  const cerrar = () => {
    localStorage.removeItem("token");
    setOpen(false);
    history.push("/");
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

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
                right: desktop ? -10 : -46,
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
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>

                  <ListItemText primary="Inicio" sx={{ color: "white" }} />
                </ListItemButton>
                <Divider />
                <ListItemButton
                  onClick={() => {
                    ruta("/home/user/create");
                  }}
                >
                  <ListItemIcon>
                    <GroupAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Registrar" sx={{ color: "white" }} />
                </ListItemButton>
                <Divider />
                <ListItemButton onClick={cerrar}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
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

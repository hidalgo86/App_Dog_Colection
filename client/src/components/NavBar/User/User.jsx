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
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { authorizationUser, getDogAll } from "../../../redux/actions";

const User = () => {
  const dispatch = useDispatch();

  const cerrar = () => {
    dispatch(authorizationUser());
    dispatch(getDogAll());
    localStorage.removeItem("token");
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Box>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: "relative" }}>
          <Fab
            onClick={handleClick}
            size="medium"
            aria-label="user"
            sx={{
              backgroundColor: "white",
              color: "primary.main",
              "&:hover": { backgroundColor: "primary.main", color: "white" },
            }}
          >
            <AccountCircleIcon sx={{ fontSize: "50px" }} />
          </Fab>

          {open ? (
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 56,
                right: -10,
                // left: 0,
                zIndex: 999,
                border: "1px solid white",
                p: 1,
                bgcolor: "primary.main",
              }}
            >
              <List component="nav" aria-label="Menu-user">
                <Link to="/home/user/login" style={{ textDecoration: "none" }}>
                  <ListItemButton>
                    <ListItemText primary="Inicio" sx={{ color: "white" }} />
                  </ListItemButton>
                </Link>
                <Divider />
                <Link to="/home/user/create" style={{ textDecoration: "none" }}>
                  <ListItemButton>
                    <ListItemText primary="Registrar" sx={{ color: "white" }} />
                  </ListItemButton>
                </Link>
                <Divider />
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <ListItemButton onClick={cerrar}>
                    <ListItemText primary="Cerrar" sx={{ color: "white" }} />
                  </ListItemButton>
                </Link>
              </List>
            </Paper>
          ) : null}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default User;

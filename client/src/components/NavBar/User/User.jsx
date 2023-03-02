import {
  Box,
  Divider,
  Fab,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { authorizationUser, getDogAll } from "../../../redux/actions";

const User = () => {
  const dispatch = useDispatch();

  const UserTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary.main,
      minWidth: "80px",
      border: "1px solid rgb(255, 255, 255)",
      position: "Relative",
      top: "-7px",
      right: "-1px",
    },
  }));

  const cerrar = () => {
    dispatch(authorizationUser());
    dispatch(getDogAll());
    localStorage.removeItem("token")
  };

  return (
    <Box>
      <UserTooltip
        title={
          <Box>
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
          </Box>
        }
      >
        <Fab
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
      </UserTooltip>
    </Box>
  );
};

export default User;

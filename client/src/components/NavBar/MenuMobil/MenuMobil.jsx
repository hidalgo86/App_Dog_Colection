import {
  ClickAwayListener,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import { getDogDb } from "../../../redux/actions";

const MenuMobil = () => {
  const cerrar = () => {
    localStorage.removeItem("token");
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

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
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        backgroundColor: "inherit",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: "relative" }}>
          <IconButton onClick={handleClick}>
            <MenuIcon sx={{ color:"white", fontSize: "30px" }} />
          </IconButton>

          {open ? (
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 55,
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
                    ruta("/home");
                    getDogDb()
                  }}
                >
                  <ListItemText primary="Filtar" sx={{ color: "white" }} />
                </ListItemButton>

                <Divider />

                <ListItemButton
                  onClick={() => {
                    ruta("/home/dog/create");
                  }}
                >
                  <ListItemText primary="Crear" sx={{ color: "white" }} />
                </ListItemButton>

                  <Divider />

                <ListItemButton
                  onClick={() => {
                    ruta("/home/dog/edit");
                  }}
                >
                  <ListItemText primary="Editar" sx={{ color: "white" }} />
                </ListItemButton>

                <Divider />

                <ListItemButton onClick={cerrar}>
                  <ListItemText primary="Categoria" sx={{ color: "white" }} />
                </ListItemButton>
              </List>
            </Paper>
          ) : null}
        </Box>
      </ClickAwayListener>
    </Paper>

    // <div className={styles.container}>
    //   <button className={styles.buttonFilter}>
    //     <FcFilledFilter style={{ color: "white", fontSize: "25px" }} />
    //   </button>
    //   <button className={styles.buttonMenu}>
    //     <GiHamburgerMenu style={{ color: "orange", fontSize: "25px" }} />
    //   </button>
    //   {/* <div className={styles.filter}><Filter/></div> */}
    //   <div className={styles.menu}>
    //     <Menu />
    //   </div>
    // </div>
  );
};

export default MenuMobil;

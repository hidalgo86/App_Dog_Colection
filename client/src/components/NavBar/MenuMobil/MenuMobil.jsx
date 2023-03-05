import {
  ClickAwayListener,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import { getDogDb } from "../../../redux/actions";
import TuneIcon from "@mui/icons-material/Tune";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CategoryIcon from "@mui/icons-material/Category";
import Page from "../../Page/Page";
import Filter from "../../Filter/Filter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Category from "../../Landing/Category/Category"

const filter = <div>hola</div>

const MenuMobil = () => {
  const [modal, setModal] = useState({});

  const handleClick = (path) => {
    setModal((modal) => {
      return { ...modal, [path]: !modal[path] };
    });
  };

  const handleClickAway = () => {
    setModal(false);
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
          <IconButton onClick={() => handleClick("menu")}>
            <MoreVertIcon sx={{ color: "white", fontSize: "30px" }} />
          </IconButton>

          {modal.menu ? (
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
                onClick={() => handleClick("filter")}
                    // ruta("/home");
                    // getDogDb();
                  // }}
                >
                  <ListItemIcon>
                    <TuneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Filtar" sx={{ color: "white" }} />
                </ListItemButton>

              {modal.filter ? <Filter/> : null}





             
                <Divider />

                <ListItemButton
                  onClick={() => {
                    ruta("/home/dog/create");
                  }}
                >
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Crear" sx={{ color: "white" }} />
                </ListItemButton>

                <Divider />

                <ListItemButton
                  onClick={() => {
                    ruta("/home/dog/edit");
                  }}
                >
                  <ListItemIcon>
                    <BorderColorIcon />
                  </ListItemIcon>
                  <ListItemText primary="Editar" sx={{ color: "white" }} />
                </ListItemButton>

                <Divider />
                <ListItemButton
                  onClick={() => handleClick("category")}
                >
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Categoria" sx={{ color: "white" }} />
                </ListItemButton>
                {modal.category ? <Category/> : null}

              </List>
            </Paper>
          ) : null}
        </Box>
      </ClickAwayListener>









    </Paper>
  );
};




export default MenuMobil;

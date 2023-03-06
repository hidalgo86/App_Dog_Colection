import {
  ClickAwayListener,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import TuneIcon from "@mui/icons-material/Tune";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CategoryIcon from "@mui/icons-material/Category";
import Filter from "../../Filter/Filter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Category from "../../Landing/Category/Category";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'primary.main',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const MenuMobil = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(menu => !menu);
  };
  const handleClickAway = () => {
    setMenu(false);
  };


  const [open, setOpen] = useState(
    {filter: false, category: false}
  );
    
  const handleOpen = (modal) => {
     setOpen({...open, [modal]: true  })
  }
    
  const handleClose = () => {
    setOpen({filter: false, category: false})
  }





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

          {menu ? (
            <Paper
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 55,
                right: -10,
                zIndex: 999,
                border: "1px solid white",
                p: 1,
                bgcolor: "primary.main",
              }}
            >
  <List component="nav" aria-label="Menu-user">
                <ListItemButton
                  onClick={()=>handleOpen("filter")}
                >
                  <ListItemIcon>
                    <TuneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Filtar" sx={{ color: "white" }} />
                </ListItemButton>

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
                <ListItemButton onClick={()=>handleOpen("category")}>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Categoria" sx={{ color: "white" }} />
                </ListItemButton>
             
    </List>

              
            </Paper>
          ) : null}
        </Box>
      </ClickAwayListener>

      <Modal
        open={open.filter}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: "#ff9800",
            position: "absolute",
            top: "64px",
            right: "0",
            padding:"20px 0"
          }}
        >
          <Filter modal={handleClose} />
        </Box>
      </Modal>
      <Modal
        open={open.category}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            borderRadius:"1px solid white",
            border:"20px",
            backgroundColor: "white",
            position: "absolute",
            top: "64px",
            right: "5px",
            padding:"2px"
          }}
        >
          <Category modal={handleClose} />
        </Box>
      </Modal>
    </Paper>
  );
};

export default MenuMobil;

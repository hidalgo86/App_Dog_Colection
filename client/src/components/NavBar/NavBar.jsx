import logo from "../../img/dog.png";
import MenuBar from "./MenuBar/MenuBar";
import SearchBar from "./SearchBar/SearchBar";
import User from "./User/User";
import { Avatar, Paper } from "@mui/material";
import { Box } from "@mui/system";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useHistory } from "react-router-dom";
import MenuMobil from "./MenuMobil/MenuMobil";

const NavBar = () => {
  const desktop = useMediaQuery("(min-width:600px)");

  let history = useHistory();

  let ruta = () => {
    history.push("/")
  }


  return (
    <Paper
      sx={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
      }}
    >
        <Avatar
        onClick={ruta}
          alt="Remy Sharp"
          src={logo}
          sx={{ height: "64px", width: "64px", padding: "0 10px" }}
        />

      {desktop ? (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
          <MenuBar />
        </Box>
      ) : null}
      <Box
        sx={{
          height: "100%",
          flex:1
        }}
      >
        <SearchBar />
      </Box>
      <Box
        sx={{
          height: "100%",
          padding: desktop ? "0 10px": "0 0 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <User />
      </Box>

      {!desktop ? (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MenuMobil />
        </Box>
      ) : null}
    </Paper> 
  );
};

export default NavBar;

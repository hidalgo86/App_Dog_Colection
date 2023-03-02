import logo from "../../img/dog.png";
import MenuBar from "./MenuBar/MenuBar";
import SearchBar from "./SearchBar/SearchBar";
import User from "./User/User";
import { Avatar, Paper } from "@mui/material";
import { Box } from "@mui/system";

import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const desktop = useMediaQuery("(min-width:600px)");

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
          marginLeft: "auto",
        }}
      >
        <SearchBar />
      </Box>
      <Box
        sx={{
          height: "100%",
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <User />
      </Box>
    </Paper>
  );
};

export default NavBar;

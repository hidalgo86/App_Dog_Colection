import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogName } from "../../../redux/actions/index";
import { Fab, Paper, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";

const SearchBar = () => {
  const desktop = useMediaQuery("(min-width:600px)");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const inputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handlerChange = () => {
    dispatch(getDogName(name));
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
        backgroundColor: "inherit",
      }}
    >
      <InputBase
        size="small"
        onChange={inputChange}
        sx={{
          // flex: 0.6,
          width:"90px",
          backgroundColor: "white",
          borderRadius: "20px",
          paddingLeft: "10px",
          position: "relative",
          left: "20px",
          transition: "0.5s",
          "&:hover": {
            width: desktop ? "140px" : "120px",
          },
          "&:focus": {
            width: desktop ? "140px" : "120px",
          },
        }}
        placeholder="Search"
      />

      <Fab
        size="small"
        aria-label="searchButton"
        onClick={handlerChange}
        sx={{
          backgroundColor: "primary.main",
          color: "common.white",
          "&:hover": { backgroundColor: "white", color: "primary.main" },
        }}
      >
        <SearchIcon />
      </Fab>
    </Paper>
  );
};

export default SearchBar;

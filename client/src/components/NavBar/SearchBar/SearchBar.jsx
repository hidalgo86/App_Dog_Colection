import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogName } from "../../../redux/actions/index";
import { Fab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";

const SearchBar = () => {
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
    <Box
      sx={{
        width: "200px",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <InputBase
        onChange={inputChange}
        sx={{
          flex: 0.6,
          backgroundColor: "white",
          borderRadius: "20px",
          paddingLeft: "10px",
          position: "relative",
          left: "20px",
          "& :hover": {
            transition: "0.5s",
            width: "140px",
          },
          "& :focus": {
            width: "140px",
          },
        }}
        placeholder="Search"
      />

      <Fab
        size="medium"
        aria-label="searchButton"
        onClick={handlerChange}
        sx={{
          backgroundColor: "primary.main",
          color: "common.white",
          "&:hover": { backgroundColor: "white", color: "primary.main" },
        }}
      >
        <SearchIcon sx={{}} />
      </Fab>
    </Box>
  );
};

export default SearchBar;

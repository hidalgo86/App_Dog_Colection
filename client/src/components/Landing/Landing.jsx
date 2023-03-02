import Category from "./Category/Category";
import { useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDogAll, removeDog } from "../../redux/actions";
import Page from "../Page/Page";
import Carrusel from "./Carrusel/Carrusel";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogAll());
    return () => {
      dispatch(removeDog());
    }
  }, [dispatch]);

  const dogs = useSelector((state) => state.dogs);

  return (
    <Page
      contenido={
        <Box sx={{ width: "100%" }}>
          {dogs.length ? <Carrusel dogs={dogs} /> : null}

          <Divider />
          <h1 style={{ textAlign: "center" }}>CATEGORIA</h1>
          <Box sx={{ display: "flex", height: "250px" }}>
            {" "}
            <Category />
          </Box>
        </Box>
      }
    />
  );
};

export default Landing;

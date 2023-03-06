import Category from "./Category/Category";
import { useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDogAll } from "../../redux/actions";
import Page from "../Page/Page";
import Carrusel from "./Carrusel/Carrusel";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogAll());
  }, []);

  let dogs = useSelector((state) => state.dogs);

  return (
    <Page
      contenido={
        <Box sx={{ height: "100%", flex: 1 }}>
          <Paper elevation={0}>
            {dogs.length ? <Carrusel dogs={dogs} /> : null}
          </Paper>
          <Divider sx={{ margin: "10px 0" }} />
          <Typography
            sx={{ textAlign: "center", margin: "10px 0" }}
            variant="h4"
          >
            CATEGORIA
          </Typography>
          <Paper elevation={0} sx={{ display: "flex", margin: "10px 0" }}>
            <Category />
          </Paper>
        </Box>
      }
    />
  );
};

export default Landing;

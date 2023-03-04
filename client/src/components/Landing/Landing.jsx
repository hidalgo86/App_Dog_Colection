import Category from "./Category/Category";
import { useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDogAll, getTemperament, removeDog } from "../../redux/actions";
import Page from "../Page/Page";
import Carrusel from "./Carrusel/Carrusel";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogAll());
    dispatch(getTemperament())
    return () => {
      dispatch(removeDog());
    }
  }, [dispatch]);

  const dogs = useSelector((state) => state.dogs);

  return (
    <Page
      contenido={
        <Box sx={{ height:"100%", flex:1 }}>

          {dogs.length ? 
          <Paper elevation={0}>
            <Carrusel dogs={dogs} /> 
          </Paper>
          : null}

          <Divider sx={{margin:"10px 0"}}/>

          <Typography
              sx={{ textAlign: "center", margin:"10px 0"}}
              variant="h4"
            >
              CATEGORIA
            </Typography>
         
          <Paper elevation={0} sx={{ display: "flex", margin:"10px 0" }}>
            <Category />
          </Paper>

        </Box>
      }
    />
  );
};

export default Landing;

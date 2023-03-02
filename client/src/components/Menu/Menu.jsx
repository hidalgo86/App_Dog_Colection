import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Category from "./Category/Category";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Box, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDogAll } from "../../redux/actions";

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogAll());
  }, [dispatch]);

  const dogs = useSelector((state) => state.dogs);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        border: "5px solid orange",
      }}
    >
      <Box>
        <NavBar />
      </Box>

      <Container sx={{ flex: 1 }}>
        {dogs.length ? (
          <Carousel sx={{ marginTop: "10px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {dogs.slice(0, 3).map((dog, i) => (
                <Dog key={i} dog={dog} />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {dogs.slice(3, 6).map((dog, i) => (
                <Dog key={i} dog={dog} />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {dogs.slice(6, 9).map((dog, i) => (
                <Dog key={i} dog={dog} />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {dogs.slice(9, 12).map((dog, i) => (
                <Dog key={i} dog={dog} />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {dogs.slice(12, 15).map((dog, i) => (
                <Dog key={i} dog={dog} />
              ))}
            </Box>
          </Carousel>
        ) : null}
        <Divider />
        <Divider />
        <h1 style={{ textAlign: "center" }}>CATEGORIA</h1>
        <Category />
      </Container>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

function Dog({ dog }) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <img
        src={dog.image}
        alt={dog.name}
        style={{ width: "300px", height: "300px" }}
      />

      <Button className="CheckButton"></Button>
    </Paper>
  );
}

export default Menu;

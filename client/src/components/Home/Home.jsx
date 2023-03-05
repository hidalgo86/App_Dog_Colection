import Filter from "../Filter/Filter";
import Carts from "../Carts/Carts";
import { useDispatch, useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import Page from "../Page/Page";
import { useEffect } from "react";
import { removeDog } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const dogs = useSelector((state) => state.dogs);

  if (dogs.length) localStorage.setItem("contenido", JSON.stringify(dogs));
  let contenido = JSON.parse(localStorage.getItem("contenido"));

  // useEffect(() => {
  //   return () => {
  //     dispatch(removeDog());
  //     localStorage.removeItem("contenido");
  //   };
  // }, [dispatch]);

  const desktop = useMediaQuery("(min-width:600px)");

  return (
    <Page
      contenido={
        <Box sx={{ width: "100%", display: "flex" }}>
          {desktop ? (
            <Box
              sx={{
                paddingTop: "50px",
                background: "linear-gradient(orange 50%, white)",
              }}
            >
              <Filter />
            </Box>
          ) : null}
          <Box
            sx={{
              display: "flex",
              flex: 1,
            }}
          >
            <Carts dogs={contenido} />
          </Box>
        </Box>
      }
    />
  );
};

export default Home;

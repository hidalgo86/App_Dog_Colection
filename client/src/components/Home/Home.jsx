import { Box, ListItemText, useMediaQuery } from "@mui/material";
import Page from "../Page/Page";
import Carts from "../Carts/Carts.jsx";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getDogAll } from "../../redux/actions";

const Home = () => {
  const desktop = useMediaQuery("(min-width:600px)");
  let dispatch = useDispatch();
  useSelector((state) => {
    if (!state.dogs?.length) dispatch(getDogAll());
  });

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
            <Carts />
          </Box>
        </Box>
      }
    />
  );
};

export default Home;

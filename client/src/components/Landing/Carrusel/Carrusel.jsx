import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";

const Carrusel = ({ dogs }) => {
  let galeria = [];

  const item = (total, image) => {
    for (
      let i = 0, j = image, index = 0;
      i < total;
      i += image, j += image, index++
    ) {
      let arr = [];
      let corte = dogs.slice(i, j);
      arr = corte.map((dog, i) => <Dog dog={dog} key={i}></Dog>);
      galeria.push(arr);
    }
  };

  item(15, 3);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0",
        width: "100%",
      }}
    >
      {dogs.length ? (
        <Carousel sx={{ width: "100%" }} navButtonsAlwaysVisible="true">
          {galeria.map((value, index, arr) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {arr[index]}
            </Box>
          ))}
        </Carousel>
      ) : null}
    </Box>
  );
};

function Dog({ dog }) {
  return (
    <Paper
    elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={dog.image}
        alt={dog.name}
        style={{ width: "500px", height: "500px" }}
      />
      <Button sx={{ position: "absolute" }}></Button>
    </Paper>
  );
}

export default Carrusel;

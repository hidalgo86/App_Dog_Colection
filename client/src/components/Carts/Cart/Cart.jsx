import { Box } from "@mui/material";

const Item = ({ item }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        border: "2px solid orange",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // margin: "5px",
        // borderRadius:"50px"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "25px",
          display: "flex",
          justifyContent: "center",
          color: "white",
          fontWeight: "bolder",
          backgroundColor: "orange",
        }}
      >
        {item.name}
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(255, 166, 0, 0.534)",
          color: "white",
        }}
      >
        <Box>Temperamento: {item.temperament.join(", ")}</Box>
        <Box>Peso: {item.weight} kg</Box>
      </Box>
    </Box>
  );
};

export default Item;

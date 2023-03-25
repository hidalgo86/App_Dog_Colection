import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDogDetail } from "../../../redux/actions";

const Item = ({ item }) => {

  const dispatch = useDispatch()

  const history = useHistory()

  const detalle = () => {
    dispatch(getDogDetail(item));
    history.push(`/home/dog/detail/${item.id}`)
  }

  return (
    <Box
      onClick={detalle }

      sx={{
        width: "100%",
        height: "100%",
        border: "2px solid orange",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
       
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
          textAlign:"center",
          backgroundColor: "rgba(255, 166, 0, 0.534)",
          color: "white",
        }}
        
      >
        <Box><b>Peso:</b> {item.weight} kg</Box>
      </Box>
    </Box>
  );
};

export default Item;

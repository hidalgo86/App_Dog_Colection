import { useState } from "react";
import Paginated from "../Paginated/Paginated";
import { Box, Grid, Paper } from "@mui/material";
import dog from "../../img/Dog_durmiendo.jpg";
import styled from "@emotion/styled";
import Cart from "./Cart/Cart";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(2),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
  height:"300px",
// backgroundColor:"red",
display:"flex"
}));

const Carts = ({ dogs }) => {
  const [pag, setPag] = useState(1);

  let itemPag,
    itemTotal,
    pagTotal,
    selector = {},
    contenido = [];

  //Metodo para fraccionar la lista de dogs:
  const fraccion = (dogs) => {
    itemTotal = dogs.length;
    itemPag = 8;
    pagTotal = Math.ceil(itemTotal / itemPag);

    for (
      let pag = 1, i = 0, j = itemPag;
      i < itemTotal;
      i += itemPag, j += itemPag, pag++
    ) {
      selector[pag] = { inicio: i, fin: j };
    }
  };

  //Fraccionar la lista de dogs:
  if (dogs) {
    fraccion(dogs);
    contenido = dogs.slice(selector[pag]["inicio"], selector[pag]["fin"]);
  }

  //Metodo para cambiar el estado pag desde el componente paginated:
  const handlerChange = (event, page) => {
    setPag(page);
  };

  return dogs ? (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {/* <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {contenido.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Box> */}

      <Grid
        sx={{padding:" 0 20px"}}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {contenido.map((item) => (
          <Grid item xs={2} sm={4} md={3} key={item.id}>
            <Item>
              <Cart item={item} />
            </Item>
          </Grid>
        ))}
      </Grid>
      <Box>
        <Paginated pagTotal={pagTotal} handlerChange={handlerChange} />
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={9}
        sx={{ display: "flex", width: "50%", borderRadius: "20px" }}
      >
        <img
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          src={dog}
          alt="durmiendo"
        />
      </Paper>
    </Box>
  );
};

export default Carts;

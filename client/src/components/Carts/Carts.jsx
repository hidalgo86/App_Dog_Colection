import { useState } from "react";
import Item from "./Item/Item";
import Paginated from "../Paginated/Paginated";
import { Box } from "@mui/material";

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
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {contenido.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Box>
      <Box>
        <Paginated pagTotal={pagTotal} handlerChange={handlerChange} />
      </Box>
    </Box>
  ) : null;
};

export default Carts;

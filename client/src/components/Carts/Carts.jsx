import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogAll } from "../../redux/actions";
// import Item from "./Item/Item";
// import styles from "./Carts.module.scss";
import Paginated from "../Paginated/Paginated";

const Carts = () => {
  const dispatch = useDispatch();
  const [pag, setPag] = useState(4);
  useEffect(() => {
    dispatch(getDogAll());
  }, []);

  const dogs = useSelector((state) => state.dogs);

  let item = 4,
    itemTotal,
    pagTotal,
    selector = {};

  if (dogs.length) {
    itemTotal = dogs.length;
    pagTotal = Math.ceil(itemTotal / item);

    for (
      let pag = 1, i = 0, j = item;
      i < itemTotal;
      i += item, j += item, pag++
    ) {
      selector[pag] = [i, j];
    }

    const contenido = dogs.slice(selector[pag][0], selector[pag][1]);
    console.log(contenido);
  }

  const handlerChange = (value) => {
    if (value > 0 && value <= pagTotal) setPag(value);
  };

  return (
    <div>
      {dogs.length ? (
        <Paginated
          pag={pag}
          pagTotal={pagTotal}
          handlerChange={handlerChange}
        />
      ) : null}
    </div>
  );
};

export default Carts;

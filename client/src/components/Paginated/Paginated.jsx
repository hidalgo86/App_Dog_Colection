import { useState } from "react";
import styles from "./Paginated.module.scss";

const Paginated = ({ pag, pagTotal, handlerChange }) => {
  let numeracion = Array.from(
    { length: pagTotal },
    (value, index) => index + 1
  );

  return (
    <div className={styles.container}>

      {numeracion?.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
      <button onClick={()=>handlerChange(pag-1)}>prev</button>
      <button onClick={()=>handlerChange(pag+1)}>next</button>
    </div>
  );
};

export default Paginated;

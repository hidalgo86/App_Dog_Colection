import styles from "./Filter.module.scss"
import { FcFilledFilter } from "react-icons/fc";

const Filter = () => {
  return (
  <div className={styles.container}>
    <div className={styles.titulo}><FcFilledFilter style={{borderRadius:"50%", background:"white", fontSize:"25px"}}/>Filter:</div>
    <div className={styles.temperament}>Temperament</div>
    <div className={styles.name}>Name</div>
    <div className={styles.weight}>Weight</div>
  </div>
  );
};

export default Filter;

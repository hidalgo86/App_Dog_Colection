import styles from "./SearchBar.module.scss";
import { ImSearch } from "react-icons/im";

const SearchBar = () => {
  return (
    <div className={styles.container} >
       <input placeholder="Search"></input>
       <button><ImSearch className={styles.icon} style={{color:"orange", fontWeight:"bolder"}}/></button>
    </div>
  );
};

export default SearchBar;

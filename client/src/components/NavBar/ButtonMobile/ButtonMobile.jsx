import styles from "./ButtonMobile.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcFilledFilter } from "react-icons/fc";
import Filter from "../../Filter/Filter"
import Menu from "../Menu/Menu"

const ButtonMobile = () => {




  return (
    <div className={styles.container}>
      <button className={styles.buttonFilter}>
        <FcFilledFilter style={{ color: "white", fontSize: "25px" }} />
      </button>
      <button className={styles.buttonMenu}>
        <GiHamburgerMenu style={{ color: "orange", fontSize: "25px" }} />
      </button>
      <div className={styles.filter}><Filter/></div>
      <div className={styles.menu}><Menu/></div>
    </div>
  );
};

export default ButtonMobile;

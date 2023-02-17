import styles from "./NavBar.module.scss";
import logo from "../../img/dog.png";
import Menu from "./Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";
import User from "./User/User";
import ButtonMobile from "./ButtonMobile/ButtonMobile";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.menu}><Menu/></div>
      <div className={styles.searchBar}><SearchBar /></div>
      <div className={styles.user}><User /></div>
      <div className={styles.buttonMobile}><ButtonMobile/></div>
    </div>
  );
};

export default NavBar;

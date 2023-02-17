import NavBar from "../NavBar/NavBar";
import Filter from "../Filter/Filter";
import styles from "./Home.module.scss";
import Carts from "../Carts/Carts";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}><NavBar/></div>
      <div className={styles.filter}><Filter/></div>
      <div className={styles.contenido}><Carts/></div>
      <div className={styles.footer}>footer</div>
    </div>
  );
};

export default Home;

import styles from "./Menu.module.scss"

const Menu = () => {
  return (
    <div className={styles.container}>
      <button className={styles.home}>HOME</button>
      <button className={styles.create}>CREATE</button>
      <button className={styles.category}>CATEGORY</button>
      <button className={styles.user}>USER</button>
    </div>
  );
};

export default Menu;

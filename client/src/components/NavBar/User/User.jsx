import styles from "./User.module.scss";
import { FaUserPlus } from "react-icons/fa";

const User = () => {
  return (
    <div className={styles.container}>
      <button className={styles.user}>
        <FaUserPlus style={{ color: "white", fontSize: "25px" }} />
      </button>
    </div>
  );
};

export default User;

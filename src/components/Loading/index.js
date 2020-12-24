import styles from "./index.module.scss";
import logo from "../../assets/images/logo.png";

function Loading() {
  return (
    <div className={styles["loading-bg"]}>
      <img className={styles["loading-logo"]} src={logo} alt="logo" />
    </div>
  );
}

export default Loading;

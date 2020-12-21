import styles from "./index.module.scss";

function Loading() {
  return (
    <div className={styles['loading-bg']}>
      <img className={styles['loading-logo']} src="images/logo.png" alt="logo" />
    </div>
  );
}

export default Loading;

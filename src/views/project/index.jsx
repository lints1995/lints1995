import projectList from "../../const/project";
import styles from "./index.module.scss";

function Project() {
  return projectList.map((item) => {
    return (
      <div className={styles.items} key={item.id}>
        <h1 className={styles["item-title"]}>
          <i className={styles["item-symbol"]}>#</i>&nbsp;{item.name}
        </h1>
        <h2 className={styles["item-sub-title"]}>项目描述：</h2>
        <p className={styles["item-content"]}>{item.discription}</p>
        <h2 className={styles["item-sub-title"]}>职责：</h2>
        <div
          className={styles["item-content"]}
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
        <h2 className={styles["item-sub-title"]}>总结：</h2>
        <p className={styles["item-content"]}>{item.summary}</p>
      </div>
    );
  });
}
export default Project;

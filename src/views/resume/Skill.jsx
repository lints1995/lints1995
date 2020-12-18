import SkillList from "../../constant/Skill";
import styles from "./index.module.scss";

function Skill() {
  return (
    <ul className={styles["skill-items"]}>
      {SkillList.map((item) => {
        return (
          <li className={styles["skill-item"]}>
            <p className={styles["skill-text"]}>{item.name}</p>
            <div className={styles["skill-line-wrap"]}>
              <div
                style={{ width: `${item.score}%` }}
                className={styles["skill-line"]}
              ></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Skill;

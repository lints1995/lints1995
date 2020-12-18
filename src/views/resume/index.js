import Header from "../../components/Header";
import Project from "./Project";
// import Skill from "./Skill";
// import styles from "./index.module.scss";

function Resume() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* <h1 className={styles.title}>技能</h1>
        <Skill /> */}
        {/* <h1 className={styles.title}>项目经验</h1> */}
        <Project />
      </div>
    </div>
  );
}

export default Resume;

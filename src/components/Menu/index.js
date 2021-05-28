import { Link } from "react-router-dom";
import MENU_LIST from "../../const/menu";
import styles from "./index.module.scss";

let judgeCurrentActivePath = (props, path) => {
  // 获取当前路径
  let pathname = props.location.pathname;
  return pathname === path ? styles["item-active"] : null;
};
function Menu(args) {
  return (
    <ul className={styles.items}>
      {MENU_LIST.map((item) => {
        return (
          <li className={styles.item} key={item.id}>
            {item.path.includes("http") || item.path.includes("https") ? (
              <a
                className={[
                  styles.link,
                  judgeCurrentActivePath(args.props, item.path),
                ].join(" ")}
                href={item.path}
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </a>
            ) : (
              <Link
                className={[
                  styles.link,
                  judgeCurrentActivePath(args.props, item.path),
                ].join(" ")}
                to={item.path}
              >
                {item.name}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;

import React from "react";
import { Link, withRouter } from "react-router-dom";
import HEADER_MENU from "../../constant/headerMenu";
import styles from "./index.module.scss";

class Header extends React.Component {
  componentDidMount() {
    console.log(this.props.location.pathname);
  }
  judgeCurrentActivePath = (path) => {
    // 获取当前路径
    let pathname = this.props.location.pathname;
    return pathname === path ? styles["item-active"] : null;
  };
  render() {
    return (
      <header className={styles.header}>
        <ul className={styles.items}>
          {HEADER_MENU.map((item) => {
            return (
              <li className={styles.item} key={item.id}>
                {item.path.includes("http") || item.path.includes("https") ? (
                  <a
                    className={this.judgeCurrentActivePath(item.path)}
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
                      this.judgeCurrentActivePath(item.path),
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
      </header>
    );
  }
}

export default withRouter(Header);

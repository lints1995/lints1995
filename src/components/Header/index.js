import React from "react";
import { Link, withRouter } from "react-router-dom";
import HEADER_MENU from "../../constant/headerMenu";
import styles from "./index.module.scss";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <ul className={styles.items}>
          {HEADER_MENU.map((item) => {
            return (
              <li className={styles.item} key={item.id}>
                {item.path.includes("http") ? (
                  <a href={item.path} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                ) : (
                  <Link className={styles.link} to={item.path}>
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

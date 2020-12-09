import React from "react";
import { Link, withRouter } from "react-router-dom";
import HEADER_MENU from "../../constant/headerMenu";
import styles from "./index.scss";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <ul className="items">
          {HEADER_MENU.map((item) => {
            return (
              <li className="item" key={item.id}>
                {item.path.includes("http") ? (
                  <a href={item.path} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                ) : (
                  <Link className="link" to={item.path}>
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

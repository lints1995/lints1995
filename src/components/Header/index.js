import React from "react";
import { Link, withRouter } from "react-router-dom";
import HEADER_MENU from "../../constant/headerMenu";
<<<<<<< HEAD
import styles from "./index.module.scss";
=======
import "./index.scss";
>>>>>>> 238d58129556c1090571dfe23886459cb9baef78

class Header extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <header className={styles.header}>
        <ul className={styles.items}>
          {HEADER_MENU.map((item) => {
            return (
              <li className={styles.item} key={item.id}>
=======
      <header className="header">
        <ul className="header-items">
          {HEADER_MENU.map((item) => {
            return (
              <li className="header-item" key={item.id}>
>>>>>>> 238d58129556c1090571dfe23886459cb9baef78
                {item.path.includes("http") ? (
                  <a href={item.path} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                ) : (
<<<<<<< HEAD
                  <Link className={styles.link} to={item.path}>
=======
                  <Link className="header-link" to={item.path}>
>>>>>>> 238d58129556c1090571dfe23886459cb9baef78
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

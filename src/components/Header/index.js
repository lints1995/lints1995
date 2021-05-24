import React from "react";
import { Link, withRouter } from "react-router-dom";
import MENU from "../../const/menu";
import NOTE from "../../const/note";
import styles from "./index.module.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.judgeCurrentActivePath = this.judgeCurrentActivePath.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.state = {};
  }
  judgeCurrentActivePath = (path) => {
    // 获取当前路径
    let pathname = this.props.location.pathname;
    return pathname === path ? styles["item-active"] : null;
  };
  handleSearchInput(e) {
    let { value } = e.target;
    if (!value) return this.props.search(NOTE);
    let searchedArticle = [];
    for (let i = 0, len = NOTE.length; i < len; i++) {
      if (NOTE[i].name.includes(value)) {
        searchedArticle.push(NOTE[i]);
      }
    }
    this.props.search(searchedArticle);
  }
  render() {
    return (
      <header className={styles.header}>
        <ul className={styles.items}>
          {MENU.map((item) => {
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
        {this.props.location.pathname === "/" ? (
          <div className={styles["search-wrap"]}>
            <input
              className={styles["search-input"]}
              placeholder="输入文章名搜索..."
              onInput={this.handleSearchInput}
            />
          </div>
        ) : null}
      </header>
    );
  }
}

export default withRouter(Header);

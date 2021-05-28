import React from "react";
import { withRouter } from "react-router-dom";
import NOTE from "../../const/note";
import styles from "./index.module.scss";
import menuIcon from "../../assets/images/header-menu.png";
import Menu from "../Menu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.getWindowWidth = this.getWindowWidth.bind(this);
    this.state = {
      windowWidth: 0,
      minWindowSize: 1024,
    };
  }
  componentDidMount() {
    this.getWindowWidth();
    window.onresize = () => {
      this.getWindowWidth();
    };
  }
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
  handleShowMenu() {
    this.props.click();
  }
  getWindowWidth() {
    this.setState({
      windowWidth: document.body.offsetWidth,
    });
  }
  render() {
    return (
      <header className={styles.header}>
        <img
          className={styles["menu-icon"]}
          src={menuIcon}
          alt="menu"
          onClick={this.handleShowMenu}
        />

        {this.state.windowWidth > this.state.minWindowSize ? (
          <Menu props={this.props} />
        ) : null}
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

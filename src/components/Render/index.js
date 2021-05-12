import React from "react";
import { withRouter } from "react-router-dom";
import md from "markdown-it";
import hljs from "highlight.js";
import { getRequest } from "../../assets/common/request";
import "highlight.js/styles/atom-one-dark.css";
import resetMDStyles from "./resetMD.module.scss";
import styles from "./index.module.scss";
import menuIcon from "../../assets/images/menu.png";
import closeIcon from "../../assets/images/close.png";
import topIcon from "../../assets/images/top.png";

class MarkdownRender extends React.Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
    this.generateContentCatalog = this.generateContentCatalog.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.monitorWindowResize = this.monitorWindowResize.bind(this);
    this.handleBackTop = this.handleBackTop.bind(this);
    this.handleScrollIntoView = this.handleScrollIntoView.bind(this);
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
    this.state = {
      content: "",
      titleLists: [],
      currentSelectCatalog: "",
      isShow: false,
      isShowCatalog: false,
      windowWidth: 0,
      minWindowSize: 1024,
      scrollTop: 0,
    };
  }
  componentDidMount() {
    this.getWindowWidth();
    this.monitorWindowResize();
    this.getContent();
    window.addEventListener("scroll", this.handleWindowScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleWindowScroll, false);
  }
  getWindowWidth() {
    this.setState({
      windowWidth: document.body.offsetWidth,
    });
  }
  monitorWindowResize() {
    window.onresize = () => {
      this.getWindowWidth();
    };
  }
  generateContentCatalog() {
    // 生成菜单
    let content = document.getElementById("content").children;
    let titleLists = [];
    for (let index = 0; index < content.length; index++) {
      let element = content[index];
      let textContent = element.textContent;
      if (element.tagName.includes("H1") || element.tagName.includes("H2")) {
        let tagName = `${element.tagName}-${textContent}`;
        element.setAttribute("id", tagName);
        titleLists.push(tagName);
      }
    }
    this.setState({
      isShow: true,
      titleLists,
      currentSelectCatalog: titleLists.length > 0 ? titleLists[0] : "",
    });
  }
  async getContent() {
    let articleName = this.props.match.params.md;
    let res = await getRequest({
      url: `/md/${articleName}.md`,
    });
    let articleData = md({
      html: true,
      linkify: true,
      typographer: true,
      highlight: (str, lang) => {
        return lang && hljs.getLanguage(lang)
          ? `<pre class="hljs"><code>${
              hljs.highlight(lang, str).value
            }</code></pre>`
          : "<p>文章渲染失败</p>";
      },
    }).render(res);

    this.setState({
      content: articleData
        ? articleData.replace(
            "<p>[TOC]</p>",
            `<div class='title'>${articleName}</div>`
          )
        : `<div class='title'>${articleName}</div>`, // 删除markdown文件的目录标示
    });
    this.generateContentCatalog();
  }
  handleClick(text) {
    if (this.state.windowWidth <= this.state.minWindowSize) {
      this.setState({
        isShowCatalog: false,
      });
    }
    this.setState({
      currentSelectCatalog: text,
    });
    this.handleScrollIntoView(text);
  }
  handleShowMenu() {
    this.setState({
      isShowCatalog: !this.state.isShowCatalog,
    });
  }
  handleCloseMenu() {
    this.handleShowMenu();
  }
  handleScrollIntoView(id) {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
  handleBackTop() {
    this.handleScrollIntoView(this.state.titleLists[0]);
  }
  handleWindowScroll() {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({
      scrollTop,
    });
  }
  render() {
    return (
      <div className={styles["detail-container"]}>
        <img
          className={
            this.state.windowWidth > this.state.minWindowSize
              ? "need-hide"
              : "menu-icon"
          }
          src={menuIcon}
          alt="menu"
          onClick={this.handleShowMenu}
        />
        <div
          className={
            this.state.windowWidth <= this.state.minWindowSize &&
            !this.state.isShowCatalog
              ? "need-hide"
              : "catalog-box"
          }
        >
          <ul className="catalog-wrap">
            {this.state.titleLists.map((el, index) => {
              return (
                <li
                  className={el.includes("H1") ? "catalog" : "sub-catalog"}
                  key={index}
                  onClick={() => this.handleClick(el)}
                >
                  <i
                    className={
                      this.state.currentSelectCatalog === el
                        ? "catalog-active"
                        : "catalog-default"
                    }
                  ></i>
                  <p
                    className={
                      this.state.currentSelectCatalog === el
                        ? "catalog-text-active"
                        : "catalog-text-default"
                    }
                  >
                    {el.includes("H1-") || el.includes("H2-")
                      ? el.split("-")[1]
                      : "暂无"}
                  </p>
                </li>
              );
            })}
          </ul>
          <img
            className={
              this.state.windowWidth > this.state.minWindowSize
                ? "need-hide"
                : "close-icon"
            }
            onClick={this.handleCloseMenu}
            src={closeIcon}
            alt="close"
          />
        </div>

        <div
          className={resetMDStyles["content"]}
          id="content"
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        ></div>
        <img
          className={this.state.scrollTop > 2000 ? "back-top" : "need-hide"}
          onClick={this.handleBackTop}
          src={topIcon}
          alt="top"
        />
      </div>
    );
  }
}

export default withRouter(MarkdownRender);

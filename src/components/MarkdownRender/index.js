import React from "react";
import { withRouter } from "react-router-dom";
import "highlight.js/styles/atom-one-dark.css";
import md from "markdown-it";
import hljs from "highlight.js";
import { getRequest } from "../../assets/js/request";
import styles from "./index.module.scss";
// import closeIcon from "../../assets/images/close.png";

class MarkdownRender extends React.Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
    this.generateContentCatalog = this.generateContentCatalog.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      content: "",
      titleLists: [],
      currentSelectCatalog: "",
      isShow: false,
    };
  }
  componentDidMount() {
    this.getContent();
  }
  generateContentCatalog() {
    // 生成一级菜单
    let titleArr = document.getElementsByTagName("h1");
    let arr = [];
    for (let index = 0; index < titleArr.length; index++) {
      const element = titleArr[index];
      let textContent = element.textContent;
      arr.push(textContent);
      element.setAttribute("id", `${textContent}`);
    }
    this.setState({
      isShow: true,
      titleLists: arr,
      currentSelectCatalog: arr.length > 0 ? arr[0] : "",
    });
  }
  getContent() {
    getRequest({
      url: `/md/${this.props.match.params.md}.md`,
    }).then((res) => {
      let data = md({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return `<pre class="hljs"><code>${
                hljs.highlight(lang, str).value
              }</code></pre>`;
            } catch (__) {}
          }
          return "";
        },
      }).render(res);
      this.setState({
        content: data.replace("<p>[TOC]</p>", ""), // 删除markdown文件的目录标示
      });
      this.generateContentCatalog();
    });
  }
  handleClick(text) {
    this.setState({
      currentSelectCatalog: text,
    });
    let element = document.getElementById(text);
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
  render() {
    return (
      <div className={styles["detail-container"]}>
        <ul className="catalog-wrap">
          {this.state.titleLists.map((el, index) => {
            return (
              <li
                className="catalog"
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
                  {el}
                </p>
              </li>
            );
          })}
        </ul>
        <div
          className={styles["content"]}
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        ></div>
      </div>
    );
  }
}

export default withRouter(MarkdownRender);

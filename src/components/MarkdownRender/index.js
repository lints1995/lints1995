import { useState } from "react";
import { withRouter } from "react-router-dom";
import md from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { getRequest } from "../../assets/js/request";
import styles from "./index.module.scss";

function MarkdownRender(props) {
  const [content, setContent] = useState("");
  getRequest({
    url: "/md/高级程序设计笔记.md",
  }).then((res) => {
    setContent(
      md({
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
      }).render(res)
    );
  });
  return (
    <div
      className={styles["content"]}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}

export default withRouter(MarkdownRender);

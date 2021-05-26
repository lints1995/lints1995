import React from "react";
import styles from "./index.module.scss";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1, // 当前页码
      totalPage: [], // 总页面条数，用数组表示
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }
  handleChangePage(val) {
    let _page = Number(val);
    this.setState({
      currentPage: _page,
    });
    this.props.change(_page);
  }
  componentDidMount() {
    let totalPageCount = Math.ceil(
      this.props.total / this.props.perPage === 0
        ? 1
        : this.props.total / this.props.perPage
    );
    // 计算页码
    let arr = [];
    for (let i = 0; i < totalPageCount; i++) {
      arr.push(i);
    }
    this.setState({
      totalPage: arr,
    });
    this.handleChangePage(1);
  }
  render() {
    return (
      <ul className={styles.items}>
        {this.state.totalPage.map((item) => {
          return (
            <li
              onClick={(e) => {
                this.handleChangePage(e.target.innerText);
              }}
              className={[
                styles.item,
                this.state.currentPage === item + 1
                  ? styles["item-active"]
                  : styles["item-default"],
              ].join(" ")}
              key={item}
            >
              {item + 1}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Page;

import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import NOTE from "../../const/note";

const perPage = 2; // 每页条数

function Page(props) {
  const { change } = props;
  const [getPage, setPage] = useState(1);
  const [getTotalPage, setTotalPage] = useState([]);
  const [getCurrentPage, setCurrentPage] = useState(1);
  function handleChangePage(e) {
    setCurrentPage(Number(e.target.innerText));
    console.log(getCurrentPage);
    change(
      NOTE.slice((getCurrentPage - 1) * perPage, getCurrentPage * perPage)
    );
  }
  // 0 - 2;
  // 2 - 3;
  // 5 - 6;
  useEffect(() => {
    setPage(Math.ceil(NOTE.length / perPage === 0 ? 1 : NOTE.length / perPage));
    // 计算页码
    let arr = [];
    for (let i = 0; i < getPage; i++) {
      arr.push(i);
    }
    setTotalPage(arr);
  }, [getPage]);
  return (
    <ul className={styles.items}>
      {getTotalPage.map((item) => {
        return (
          <li
            onClick={handleChangePage}
            className={[
              styles.item,
              getCurrentPage === item + 1
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

export default Page;

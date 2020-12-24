import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import NOTE from "../../constant/note";
import styles from "./index.module.scss";

function Home() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsShow(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []); // 优化传递一个空数组让useEffect函数执行一次

  return (
    <div>
      <Header />
      {!isShow ? (
        <Loading />
      ) : (
        <div className="container">
          <ul>
            {NOTE.map((item) => {
              return (
                <li key={item.id} className={styles.item}>
                  <Link
                    to={`/detail/${item.name}`}
                    className={styles["item-text"]}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;

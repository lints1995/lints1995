import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import NOTE from "../../constant/note";
import timeLogo from "../../assets/images/icon_time.png";
import styles from "./index.module.scss";

function Home() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsShow(true);
    }, 500);
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
                  <Link to={`/detail/${item.name}`}>
                    <h1 className={styles["item-title"]}> {item.name}</h1>
                    <p className={styles["item-desc"]}>{item.description}</p>
                    <p className={styles["item-time-wrap"]}>
                      <img
                        className={styles["item-time-icon"]}
                        src={timeLogo}
                        alt="icon"
                      />
                      <span className={styles["item-time-text"]}>
                        {item.date}
                      </span>
                    </p>
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

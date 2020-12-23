import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

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
      {!isShow ? <Loading /> : <div className="container">hello</div>}
    </div>
  );
}

export default Home;

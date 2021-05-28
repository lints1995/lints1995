import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Index from "./index.jsx";
import Loading from "../../components/Loading";
import Menu from "../../components/Menu";

function Project(props) {
  const [isShow, setIsShow] = useState(false);
  const [getMenuBox, setMenuBox] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsShow(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  function handleShowMenu() {
    // 显示菜单
    setMenuBox(!getMenuBox);
  }
  return (
    <div>
      <Header click={handleShowMenu} />
      {!isShow ? (
        <div className="container-loading">
          <Loading />
        </div>
      ) : (
        <div className="container">
          <Index />
          {getMenuBox ? (
            <div className="menu-box" onClick={handleShowMenu}>
              <Menu props={props} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Project;

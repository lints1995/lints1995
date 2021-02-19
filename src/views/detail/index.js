import MarkdownRender from "../../components/Render";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";

function Detail() {
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
    <div className="detail-container">
      {!isShow ? <Loading /> : <MarkdownRender />}
    </div>
  );
}

export default Detail;

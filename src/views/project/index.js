import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Index from "./index.jsx";
import Loading from "../../components/Loading";

function Project() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsShow(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Header />
      {!isShow ? (
        <Loading />
      ) : (
        <div className="container">
          <Index />
        </div>
      )}
    </div>
  );
}

export default Project;

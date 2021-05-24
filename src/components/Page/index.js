import { useEffect, useState } from "react";
import NOTE from "../../const/note";

function Page() {
  const [getPage, setPage] = useState(1);
  const [getTotalPage, setTotalPage] = useState([]);
  useEffect(() => {
    let perPage = 2; // 每页条数
    setPage(Math.ceil(NOTE.length / perPage === 0 ? 1 : NOTE.length / perPage));
    let arr = [];
    for (let i = 0; i < getPage; i++) {
      arr.push(i);
    }
    setTotalPage(arr);
  }, [getPage]);
  return (
    <ul>
      {getTotalPage.map((item) => {
        return <li key={item}>{item + 1}</li>;
      })}
    </ul>
  );
}

export default Page;

import { Link } from "react-router-dom";
import "./index.scss";

const MENUS = [
  {
    id: 1,
    name: "首页",
    path: "/",
  },
  {
    id: 3,
    name: "项目",
    path: "/project",
  },
  {
    id: 2,
    name: "笔记",
    path: "http://note.youdao.com/s/AW2uaAEO",
  },
];

function Header() {
  return (
    <header className="header">
      <ul className="items">
        {MENUS.map((item) => {
          return (
            <li className="item" key={item.id}>
              {item.path.includes("http") ? (
                <a href={item.path} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              ) : (
                <Link className="link" to={item.path}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;

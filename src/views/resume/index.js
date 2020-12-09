import Header from "../../components/Header";
import PROJECT_LISTS from "../../constant/projectLists";
import "./index.scss";

function Items(item) {
  return (
    <div className="items" key={item.id}>
      <h1 className="item-title">{item.name}</h1>
      <h2 className="item-sub-title">项目描述：</h2>
      <p>{item.discription}</p>
      <h2 className="item-sub-title">职责：</h2>
      <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
      <h2 className="item-sub-title">总结：</h2>
      <p>{item.summary}</p>
    </div>
  );
}

function Project() {
  return (
    <div>
      <Header />
      <div className="container">
        {PROJECT_LISTS.map((item) => {
          return Items(item);
        })}
      </div>
    </div>
  );
}

export default Project;

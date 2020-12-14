import Header from "../../components/Header";
import PROJECT_LISTS from "../../constant/projectLists";
import Project from "./Project";

function Resume() {
  return (
    <div>
      <Header />
      <div className="container">
        {PROJECT_LISTS.map((item) => {
          return Project(item);
        })}
      </div>
    </div>
  );
}

export default Resume;

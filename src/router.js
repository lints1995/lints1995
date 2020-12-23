import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import Project from "./views/project";
import Detail from "./views/detail";

const routeParams = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/project",
    component: Project,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

export default (
  <Router>
    <Switch>
      {routeParams.map((item, index) => {
        return (
          <Route
            exact
            key={index}
            path={item.path}
            component={item.component}
          />
        );
      })}
    </Switch>
  </Router>
);

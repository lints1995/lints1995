import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import Project from "./views/project";

const routeParams = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/project",
    component: Project,
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

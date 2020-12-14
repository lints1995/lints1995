import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import Resume from "./views/resume";

const routeParams = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/resume",
    component: Resume,
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
